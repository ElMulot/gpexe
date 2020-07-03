<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\ExpressionLanguage\SyntaxError;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use App\Service\FieldService;
use Symfony\Component\Filesystem\Filesystem;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx as Writer;
use PhpOffice\PhpSpreadsheet\Writer\Exception as WriterException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use App\Entity\Automation;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Repository\VersionRepository;

class AutomationService
{
	
	const IGNORE_COLOR 		= 'C8C8C8';
	const WARNING_COLOR 	= 'FFE591';
	const ERROR_COLOR 		= 'FF9191';
	const VALID_COLOR 		= 'CCFF91';
	
	private $slugger;
	
	private $flashBagInterface;
	
	private $versionRespository;
		
	private $fieldService;
	
	private $security;
	
	private $expressionLanguage;
	
	private $filesystem;
		
	private $targetDirectory;
	
	private $parsedCode;
	
	private $sheet;
	
	private $comments;
	
	public function __construct(FlashBagInterface $flashBagInterface, SluggerInterface $slugger, VersionRepository $versionRespository, FieldService $fieldService, Security $security, string $targetDirectory)
	{
		$this->slugger = $slugger;
		$this->flashBagInterface = $flashBagInterface;
		$this->versionRespository = $versionRespository;
		$this->fieldService = $fieldService;
		$this->security = $security;
		$this->expressionLanguage = new ExpressionLanguage();
		$this->filesystem = new Filesystem();
		$this->targetDirectory = $targetDirectory;
		$this->comments = [];
	}
	
	public function export(Automation $automation):? string
	{
		$this->flashBagInterface->add('info', 'Starting export..');
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		$fields = $this->fieldService->getFields($project);
		
		$firstRow = $this->parsedCode['first_row'];
		
		$spreadsheet = new Spreadsheet();
		
		//set document properties
		$spreadsheet->getProperties()
			->setCreator('GPEXE')
			->setTitle('GPEXE Export')
		;
		
		$versions = $this->versionRespository->getVersionsByProject($project);
		$this->sheet = $spreadsheet->getActiveSheet();
		
		//headers
		foreach ($this->parsedCode['write'] as $write) {
			if (array_key_exists($write['title'], $fields)) {
				$this->sheet->setCellValue($write['to'] . $firstRow, $fields[$write['title']]['title']);
			} elseif ($write['title'] != '') {
				$this->sheet->setCellValue($write['to'] . $firstRow, $write['title']);
			} elseif (array_key_exists($write['value'], $fields)) {
				$this->sheet->setCellValue($write['to'] . $firstRow, $fields[$write['value']]['title']);
			} else {
				$this->sheet->setCellValue($write['to'] . $firstRow, $write['value']);
			}
		}
		
		//content
		$row = $firstRow + 1;
		foreach ($versions as $version) {
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, $version) && $exclude != '') continue 2;
			}
			
			foreach ($this->parsedCode['write'] as $write) {
				if ($this->evaluate($write['condition'], $version)) {
					$this->sheet->setCellValue($write['to'] . $row, $this->evaluate($write['value'], $version));
				}
			}
			$row++;
		}
		
		$this->flashBagInterface->add('success', 'Export successful. ' . ($row - $firstRow - 1) . ' lines written');
		
		//save
		return $this->save($spreadsheet);

	}
	
	public function import($file, Automation $automation, bool $checkOnly)
	{
		
		$this->flashBagInterface->add('info', 'Starting checking..');
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		$this->checkOnly = $checkOnly;
		$nbImported = 0;
		$fields = $this->fieldService->getFields($project);
		
		$firstRow = $this->parsedCode['first_row'];
		$firstColumn = $this->parsedCode['first_column'];
		
		$reader = IOFactory::createReaderForFile($file);
		$reader->setReadDataOnly(true);
		$spreadsheet = $reader->load($file);
		
		//set document properties
		$spreadsheet->getProperties()->setTitle('GPEXE Import');
		
		$this->sheet = $spreadsheet->getActiveSheet();
		
		$row = $firstRow;
		
		while ($this->sheet->getCell($firstColumn . $row)) {
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, null, $this->sheet, $row) && $exclude != '') {
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::IGNORED_COLOR);
					$this->addComment('ignore', "Ligne exclue via l'instruction 'Exclude'.");
					$this->writeComments($row);
					$row++;
					continue 2;
				}
			}
			
			$currentSerie = null;
			$currentDocument = null;
			$currentVersion = null;
			
			//get serie
			foreach ($project->getSeries()->getValues() as $serie) {
				if ($this->evaluate($this->parsedCode['get_serie']['condition'], $serie, $row)) {
					$currentSerie = $serie;
					$this->addComment('valid', "Série trouvée.");
					break;
				}
			}
			
			if ($currentSerie === null) {
				$this->addComment('error', "Ligne exclue : série non trouvée.");
				$this->writeComments($row);
				$row++;
				continue;
			}
			
			//get document
			foreach ($currentSerie->getDocuments()->getValues() as $document) {
				if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, $row)) {
					$currentDocument = $document;
					$this->addComment('valid', "Document trouvé.");
					break;
				}
			}
			
			if ($currentDocument !== null) {
				
				foreach ($this->parsedCode['get_document']['then'] as $name) {
					if ($write = $this->getWriteClauseByName($name)) {
						if ($this->evaluate($write['condition'], $currentDocument, $row)) {
							if ($currentDocument->setPropertyValue($write['to'], $this->evaluate($write['value'], $currentDocument, $row))) {
								$this->addComment('valid', "Clause '{$name}' validée.");
							} else {
								$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
							}
						} else {
							$this->addComment('warning', "Clause '{$name}' non validée.");
						}
					} else {
						$this->addComment('warning', "Clause '{$name}' non trouvée.");
					}
				}
				
			} else {
				
				foreach ($this->parsedCode['get_document']['then'] as $name) {
					if ($write = $this->getWriteClauseByName($name)) {
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$this->addComment('valid', "Création d'un nouveau document.");
						}
						
						if ($currentDocument->setPropertyValue($write['to'], $this->evaluate($write['value'], null, $row))) {
							$this->addComment('valid', "Clause '{$name}' validée.");
						} elseif ($write['to'] == 'document.name' || $write['to'] == 'document.reference') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
							$currentDocument = null;
							break;
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
						}
					} else {
						$this->addComment('warning', "Clause '{$name}' non trouvée.");
					}
				}
				
			}
			
			if ($currentDocument === null) {
				$this->addComment('error', "Ligne exclue : création du document annulée.");
				$this->writeComments($row);
				$row++;
				continue;
			}
			
			//get version
			foreach ($curentDocument->getVersions()->getValues() as $version) {
				if ($this->evaluate($this->parsedCode['get_version']['condition'], $version, $row)) {
					$currentVersion = $version;
					$this->addComment('valid', "Version trouvée.");
					break;
				}
			}
			
			if ($currentVersion !== null) {
				
				foreach ($this->parsedCode['get_version']['then'] as $name) {
					if ($write = $this->getWriteClauseByName($name)) {
						if ($this->evaluate($write['condition'], $currentVersion, $row)) {
							if ($currentVersion->setPropertyValue($write['to'], $this->evaluate($write['value'], $currentVersion, $row))) {
								$this->addComment('valid', "Clause '{$name}' validée.");
							} else {
								$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
							}
						} else {
							$this->addComment('warning', "Clause '{$name}' non validée.");
						}
					} else {
						$this->addComment('warning', "Clause '{$name}' non trouvée.");
					}
				}
				
			} else {
				
				foreach ($this->parsedCode['get_version']['then'] as $name) {
					if ($write = $this->getWriteClauseByName($name)) {
						
						if ($currentVersion === null) {
							$currentVersion = new Version();
							$currentVersion->setDocument($currentDocument);
							$this->addComment('valid', "Création d'une nouvelle version.");
						}
						
						if ($currentVersion->setPropertyValue($write['to'], $this->evaluate($write['value'], null, $row))) {
							$this->addComment('valid', "Clause '{$name}' validée.");
						} elseif ($write['to'] == 'version.name' || $write['to'] == 'version.date') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
							$currentVersion = null;
							break;
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$write['to']}' de la clause '{$name}'.");
						}
					} else {
						$this->addComment('warning', "Clause '{$name}' non trouvée.");
					}
				}
				
			}
			
			if ($currentVersion === null) {
				$this->addComment('error', "Ligne exclue : création de la version annulée.");
				if ($currentDocument->getVersions()->count() == 0) {
					$currentDocument = null;
					$this->addComment('error', "Ligne exclue : création du document annulée.");
				}
				$this->writeComments($row);
				$row++;
				continue;
			}
			
			$this->writeComments($row);
			$nbImported++;
			$row++;
		}
		
		if ($checkOnly) {
			$this->flashBagInterface->add('success', 'End of check. ' . $nbImported . '/' . ($row - $firstRow - 1) . ' lines can be imported.');
		
			//save
			return $this->save($spreadsheet);
		} else {
			$this->flashBagInterface->add('success', 'End of import. ' . $nbImported . '/' . ($row - $firstRow - 1) . ' lines imported.');
		}
	}
	
	private function evaluate(string $expression, $entity, int $row=0): bool
	{
		if ($expression == '') {
			return true;
		} else {
			
			//check if regex
			$expression = preg_replace_callback('/"*\/[^\/]*\/"*/', function($matches) {
					return '"' . preg_replace('/^"*([^"]*)"*$/', '$1', $matches[0]) . '"';
				},
				$expression
			);
			$expression = preg_replace('/(\\\\)/', '\\\\\\\\', $expression);
			
			//replace by property value
			if (($entity instanceof Serie || $entity instanceof Document || $entity instanceof Version) && $entity) { //field
				
				$expression = preg_replace_callback('/(\[\w+\.\w+\])/', function($matches) use ($object) {
					return '"' . $object->getPropertyValueToString($matches[1]) . '"';
				}, $expression);
				
			}
			
			//replace by Excel values
			if ($this->sheet !== null && $row > 0) { //row
				
				$expression = preg_replace_callback('/(\[[A-Z]{1,2}\])/', function($matches) use ($object, $row) {
					return '"' . $object->getCell($matches[1] . $row) . '"';
				}, $expression);
				
			}
			
			//replace username
			$expression = preg_replace('/(\[username\])/', $this->security->getUser(), $expression);
			
			//date
			if (strtotime($expression)) {
				$expression = \DateTime::createFromFormat($parsedCode['date_format'], $expression)->format('d-m-Y');
			}
			
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return true;
			}
		}
	}
	
	private function getWriteClauseByName(string $name): ?array
	{
		foreach ($this->parsedCode['write'] as $write) {
			if ($write['name'] == $name) {
				return $write;
			}
		}
	}
	
	
	private function addComment($type, $text)
	{
		if ($this->checkOnly) {
			$this->comments[] = [
				'type' => $type,
				'text' => $text,
			];
		}
	}
	
	private function writeComments($row)
	{		
		if ($this->checkOnly) {
			$type = null;
			foreach ($this->comments as $comment) {
				if ($comment['type'] == 'valid' && $type === null) {
					$type = 'valid';
				} elseif ($comment['type'] == 'warning' && ($type != 'error' || $type != 'ignore')) {
					$type = 'warning';
				} elseif ($comment['type'] == 'error' && $type != 'ignore') {
					$type = 'error';
				} else {
					$type = 'ignore';
				}
			}
					
			switch ($type) {
				case 'valid':
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::VALID_COLOR);
					break;
				case 'warning':
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::WARNING_COLOR);
					break;
				case 'error':
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::ERROR_COLOR);
					break;
				case 'ignore':
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::IGNORE_COLOR);
					break;
				default:
					return;
			}
			
			$this->sheet
				->getComment($this->parsedCode['firstColumn'] . $row)
				->setAuthor('GPExe')
			;
			
			foreach ($this->comments as $comment) {
				switch ($comment['type']) {
					case 'valid':
						$color = self::VALID_COLOR;
						break;
					case 'warning':
						$color = self::WARNING_COLOR;
						break;
					case 'error':
						$color = self::ERROR_COLOR;
						break;
					case 'ignore':
						$color = self::IGNORE_COLOR;
						break;
				}
				
				$this->sheet
					->getComment($this->parsedCode['firstColumn'] . $row)
					->getText()
					->createTextRun('\r\n' . $comment['text'])
					->getFont()->getColor()->setARGB($color)
				;
			}
			
			$this->comments = [];
		}
	}
	
	private function save(Spreadsheet $spreadsheet): string
	{
		
		$safeFilename = $this->slugger->slug($spreadsheet->getProperties()->getTitle()) . '.xlsx'; 
		
		if ($this->filesystem->exists($this->targetDirectory) == false) {
			try {
				$this->filesystem->mkdir($this->targetDirectory);
			} catch (IOExceptionInterface $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
			}
		}
		
		$writer = new Writer($spreadsheet);
		try {
			$writer->save($this->targetDirectory . '/'. $safeFilename);
		} catch (WriterException $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return '';
		}
		
		return $safeFilename;
	}
	
}

?>