<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\ExpressionLanguage\SyntaxError;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx as Writer;
use PhpOffice\PhpSpreadsheet\Writer\Exception as WriterException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Cell\Cell;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use App\Entity\Automation;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Repository\SerieRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use App\Repository\StatusRepository;

class AutomationService
{
	
	const MAX_LINES_PROCESSED 	= 100;
	const IGNORE_COLOR 			= 'C8C8C8';
	const WARNING_COLOR 		= 'FFE591';
	const ERROR_COLOR 			= 'FF9191';
	const VALID_COLOR 			= 'CCFF91';
	const BORDER_COLOR			= 'FF0000';
	
	private $slugger;
	
	private $flashBagInterface;
	
	private $entityManager;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRepository;
	
	private $statusRespository;
	
	private $documentService;
	
	private $cacheService;
	
	private $fieldService;
	
	private $security;
	
	private $expressionLanguage;
	
	private $filesystem;
	
	private $targetDirectory;
	
	private $comments;
	
	private $parsedCode;
	
	private $sheet;

	public function __construct(FlashBagInterface $flashBagInterface, SluggerInterface $slugger, EntityManagerInterface $entityManager, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, StatusRepository $statusRespository, CacheService $cacheService, DocumentService $documentService, FieldService $fieldService, Security $security, string $targetDirectory)
	{
		$this->slugger = $slugger;
		$this->flashBagInterface = $flashBagInterface;
		$this->entityManager = $entityManager;
		$this->serieRepository = $serieRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->statusRespository = $statusRespository;
		$this->cacheService = $cacheService;
		$this->documentService = $documentService;
		$this->fieldService = $fieldService;
		$this->security = $security;
		$this->expressionLanguage = new ExpressionLanguage();
		$this->filesystem = new Filesystem();
		$this->targetDirectory = $targetDirectory;
		$this->comments = [];
	}
	
	public function load(Automation $automation, Request $request, string $file = ''): bool
	{
		
		$this->flashBagInterface->add('info', 'Démarrage de l\'opération');
		
		$this->parsedCode = $automation->getParsedCode();
		$firstRow = $this->parsedCode['first_row'];
		
		//setting up cache
		$this->cacheService->set('automation.current_row', $firstRow);
		
		$options = $this->parsedCode['option'] ?? [];
		foreach ($options as $key => $option) {
			if ($option == 'choose') {
				$option = $request->request->get('launcher_import')[$key] ?? false;
			}
			$this->cacheService->set('automation.option.' . $key, $option);
		}
		
		if ($automation->isTypeExport()) {
			
			$spreadsheet = new Spreadsheet();
			$this->sheet = $spreadsheet->getActiveSheet();
			
			//set document properties
			$spreadsheet->getProperties()
				->setCreator('GPEXE')
				->setTitle('GPEXE Export')
			;
			
			//headers
			$fields = [];
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
			
			//save
			$fileName = $this->save($spreadsheet);
			if ($fileName != false) {
				$this->cacheService->set('automation.file_name', $fileName);
				return true;
			} else {
				$this->flashBagInterface->add('error', 'Erreur : écriture du fichier impossible');
				return false;
			}

		} elseif ($automation->isTypeImport()) {
			
			$reader = IOFactory::createReaderForFile($file);
			$spreadsheet = $reader->load($file);
			$this->sheet = $spreadsheet->getActiveSheet();
			
			$this->documentService->removeOrphans();
			
			//set document properties
			$spreadsheet->getProperties()
				->setCreator('GPEXE')
				->setTitle('GPEXE Import')
			;
			
			//save
			$fileName = $this->save($spreadsheet);
			if ($fileName != false) {
				$this->cacheService->set('automation.file_name', $fileName);
				return true;
			} else {
				$this->flashBagInterface->add('error', 'Erreur : ouverture du fichier impossible');
				return false;
			}
			
		} else {
			
			$this->flashBagInterface->add('error', 'Erreur : programme invalide');
			return false;
			
		}
	}
	
	public function unload(Automation $automation): bool
	{
		
		if ($automation->isTypeExport()) {
			
			$this->cacheService->delete('automation.file_name');
			$this->cacheService->delete('automation.count_processed');
			$this->cacheService->delete('automation.current_row');
			$this->cacheService->delete('automation.new_batch');
			return true;
			
		} elseif ($automation->isTypeImport()) {
			
			$this->cacheService->delete('automation.file_name');
			$this->cacheService->delete('automation.count_processed');
			$this->cacheService->delete('automation.current_row');
			$this->cacheService->delete('automation.new_batch');
			$this->cacheService->delete('automation.ready_to_persist');
			$options = $this->parsedCode['option'] ?? [];
			foreach ($options as $key => $option) {
				$this->cacheService->delete('automation.option.' . $key);
			}
			return true;
			
		} else {
			
			$this->flashBagInterface->add('error', 'Erreur : programme invalide');
			return false;
			
		}
		
	}
	
	public function export(Automation $automation): bool
	{
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		
		//cache
		$fileName = $this->cacheService->get('automation.file_name');
		$row = $this->cacheService->get('automation.current_row');
		$countProcessed = (int)$this->cacheService->get('automation.count_processed');
		$options = [];
		foreach (array_keys($this->parsedCode['option']) as $key) {
			$options[$key] = $this->cacheService->get('automation.option.' . $key);
		}
		$newBatch = false;
				
		$spreadsheet = $this->open($fileName);
		$this->sheet = $spreadsheet->getActiveSheet();
		
		$versions = $this->versionRepository->getVersionsByProject($project);
		
		//content
		foreach ($versions as $version) {
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, $version) && $exclude != '') {
					$row++;
					continue 2;
				}
			}
			
			foreach ($this->parsedCode['write'] as $write) {
				if ($this->evaluate($write['condition'], $version)) {
					$this->sheet->setCellValue($write['to'] . $row, $this->get($write['value'], $version));
				}
			}
						
			if ($row - $this->cacheService->get('automation.current_row') > self::MAX_LINES_PROCESSED) {
				$newBatch = true;
				break;
			}
			
			$row++;
			$countProcessed++;
		}
		
		//update cache
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			$this->flashBagInterface->add('success', 'Export réussi. ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row'] - 1) . ' lignes exportées');
		} else {
			$this->cacheService->set('automation.count_processed', $countProcessed);
			$this->cacheService->set('automation.current_row', $row + 1);
		}
		
		return (bool)$this->save($spreadsheet);
	}
	
	public function import(Automation $automation): bool
	{
		
		$matches = null;
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		$firstColumn = $this->parsedCode['first_column'];
		
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		if ($defaultStatus === null) {
			$this->flashBagInterface->add('error', 'Pas de status par défaut.');
			return false;
		}
		
		//cache
		$fileName = $this->cacheService->get('automation.file_name');
		$row = $this->cacheService->get('automation.current_row');
		$countProcessed = (int)$this->cacheService->get('automation.count_processed');
		$options = [];
		foreach (array_keys($this->parsedCode['option']) as $key) {
			$options[$key] = $this->cacheService->get('automation.option.' . $key);
		}
		$newBatch = false;
		
		$spreadsheet = $this->open($fileName);
		$this->sheet = $spreadsheet->getActiveSheet();
		
		while ($this->sheet->getCell($firstColumn . $row)->getValue()) {
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, null, $row) && $exclude != '') {
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::IGNORE_COLOR);
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
			
			//check if the document is not in another serie
			
			if ($currentDocument === null) {
				
				$documents = $this->documentRepository->getAllDocuments($project);
				foreach ($documents as $document) {
					if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, $row)) {
						if ($document->getSerie()->belongToMDR()) {
							if ($options['move_from_mdr']) {
								$currentDocument = $document;
								$document->setSerie($currentSerie);
								$this->addComment('valid', "Document trouvé dans le MDR et rappatrié dans la série en cours.");
								break;
							} else {
								$this->addComment('error', "Document trouvé dans une autre série du MDR.");
								$this->writeComments($row);
								$row++;
								continue(2);
							}
						}
						if ($document->getSerie()->belongToSDR()) {
							if ($options['move_from_sdr']) {
								$currentDocument = $document;
								$document->setSerie($currentSerie);
								$this->addComment('valid', "Document trouvé dans le SDR et rappatrié dans la série en cours.");
								break;
							} else {
								$this->addComment('error', "Document trouvé dans une autre série du SDR.");
								$this->writeComments($row);
								$row++;
								continue(2);
							}
						}
					}
				}
				
			}
			
			if ($currentDocument !== null) {
				
				foreach ($this->parsedCode['get_document']['then'] as $then) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], $currentDocument, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->get($matches[3], $currentDocument, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} else {
							$col = $this->getCol($matches[3]);
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.", $col);
						}
						
					}
					
				}
				
			} elseif ($options['update_only'] === false) {
				
				foreach ($this->parsedCode['get_document']['else'] as $else) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], null, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$this->addComment('valid', "Création d'un nouveau document.");
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->get($matches[3], $currentDocument, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'document.name' || $matches[2] == 'document.reference') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentDocument = null;
							break;
						} else {
							$col = $this->getCol($matches[3]);
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.", $col);
						}
						
					}
					
				}
				
			} else {
				
				$this->addComment('error', "Ligne exclue : document non trouvé.");
				$this->writeComments($row);
				$row++;
				continue;
				
			}
			
			if ($currentDocument === null) {
				$this->addComment('error', "Ligne exclue : création du document annulée.");
				$this->writeComments($row);
				$row++;
				continue;
			} elseif ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->persist($currentDocument);
			}
			
			//get version
			foreach ($currentDocument->getVersions()->getValues() as $version) {
				if ($this->evaluate($this->parsedCode['get_version']['condition'], $version, $row)) {
					$currentVersion = $version;
					$this->addComment('valid', "Version trouvée.");
					break;
				}
			}
			
			if ($currentVersion !== null) {
				
				foreach ($this->parsedCode['get_version']['then'] as $then) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], $currentVersion, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentVersion->setPropertyValue($matches[2], $this->get($matches[3], $currentVersion, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} else {
							$col = $this->getCol($matches[3]);
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.", $col);
						}
						
					}
					
				}
				
			} elseif ($options['update_only'] === false) {
				
				
				foreach ($this->parsedCode['get_version']['else'] as $else) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], null, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentVersion === null) {
							$currentVersion = new Version();
							$currentVersion->setDocument($currentDocument);
							$currentVersion->setStatus($defaultStatus);
							$this->addComment('valid', "Création d'une nouvelle version.");
						}
						
						if ($currentVersion->setPropertyValue($matches[2], $this->get($matches[3], $currentVersion, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'version.name' || $matches[2] == 'version.date') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentDocument = null;
							break;
						} else {
							$col = $this->getCol($matches[3]);
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.", $col);
						}
						
					}
					
				}
				
			} else {
				$this->addComment('warning', "Version non trouvée.");
				$this->writeComments($row);
				$row++;
				continue;
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
			} elseif ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->persist($currentVersion);
			}
			
			$this->writeComments($row);
			$countProcessed++;
			
			if ($row - $this->cacheService->get('automation.current_row') > self::MAX_LINES_PROCESSED) {
				$newBatch = true;
				break;
			}
			$row++;
		}
		
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			if ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->flush();
				$this->flashBagInterface->add('info', 'Import terminé : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes ont été importées');
				return true;
			} else {
				$this->flashBagInterface->add('info', 'Vérification terminée : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes peuvent être importées');
				return (bool)$this->save($spreadsheet);
			}
		} else {
			if ($this->cacheService->get('automation.ready_to_persist')) {
				return true;
			} else {
				$this->cacheService->set('automation.count_processed', $countProcessed);
				$this->cacheService->set('automation.current_row', $row + 1);
				return (bool)$this->save($spreadsheet);
			}
		}
	}
	
	private function prepare(string $expression, $entity, bool $isRegex=false, int $row=0): string
	{
		
		if ($expression) {
			
			//check if contains regex
			$expression = preg_replace_callback('/\"*\/(\S*)\/\"*/', function ($matches) use ($entity, $row) {
				return '"/' . $this->prepare($matches[1], $entity, true, $row) . '/"';
			}, $expression);
			
// 			$expression = preg_replace_callback('/\"*(\/\S*\/)\"*/', '"$1"', $expression);
// 			$expression = preg_replace('/(\\\\)/', '\\\\\\\\', $expression);
			
			//replace by property value
			if (($entity instanceof Serie || $entity instanceof Document || $entity instanceof Version) && $entity) { //field
				
				if ($isRegex) {
					
					$expression = preg_replace_callback('/\[(\w+\.\w+)\]/', function($matches) use ($entity) {
						return preg_quote($entity->getPropertyValueToString($matches[1]));
					}, $expression);
					
				} else {
				
					$expression = preg_replace_callback('/\[(\w+\.\w+)\]/', function($matches) use ($entity) {
						return '"' . $entity->getPropertyValueToString($matches[1]) . '"';
					}, $expression);
					
				}
			}
			
			//date
			$dateFormat = $this->parsedCode['date_format'];
			$date = \DateTime::createFromFormat($dateFormat, $expression);
			if ($date && $date->format($dateFormat) === $expression) {
				$expression = '"' . $date->format('d-m-Y') . '"';
			}
			
			//replace by Excel values
			if ($this->sheet !== null && $row > 0) { //row
				
				if ($isRegex) {
					
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						if ($date = $this->getDateTime($this->sheet->getCell($matches[1] . $row))) {
							return preg_quote($date->format('d-m-Y'));
						} else {
							return preg_quote($this->sheet->getCell($matches[1] . $row)->getValue());
						}
					}, $expression);
					
				} else {
					
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						if ($date = $this->getDateTime($this->sheet->getCell($matches[1] . $row))) {
							return '"' . $date->format('d-m-Y') . '"';
						} else {
							return '"' . $this->sheet->getCell($matches[1] . $row)->getValue() . '"';
						}
					}, $expression);
					
				}
			}
			
			//replace username
			$expression = preg_replace('/(\[username\])/', $this->security->getUser(), $expression);
			
// 			dump('avant evaluation : ' . $expression);
			
		}
		
		return $expression;
	}
	
	private function getDateTime(Cell $cell): ?\DateTime
	{
		if (Date::isDateTime($cell)) {
			return Date::excelToDateTimeObject($cell->getValue());
		} else {
			$dateFormat = $this->parsedCode['date_format'];
			$date = \DateTime::createFromFormat($dateFormat, $cell->getValue());
			if ($date && $date->format($dateFormat) === $cell->getValue()) {
				return $date;
			}
		}
		return null;
	}
	
	private function evaluate(string $expression, $entity, int $row=0)
	{
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
		if ($expression) {
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
		}
	}
	
	private function get(string $expression, $entity, int $row=0): string
	{
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
		$matches = [];
		if (preg_match('/(.+)\s+matches\s+\"(\/\S*\/)\"/', $expression, $matches) === 1) {
			
			try {
				$subExpr = $this->expressionLanguage->evaluate($matches[1]);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return "";
			}
			
			$pattern = $matches[2];
			
			if (preg_match($pattern, $subExpr, $matches) === 1) {
				return $matches[1];
			} else {
				return "";
			}
			
		} else {
			
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return "";
			}
			
		}
	}
	
	private function getCol($expression): ?string
	{
		if (preg_match('/\[([A-Z]{1,2})\]/', $expression, $matches) === 1) {
			return $matches[1];
		}
	}
	
	private function addComment($type, $text, $col = null)
	{
		
		if ($this->cacheService->get('automation.ready_to_persist') == false) {
			$this->comments[] = [
				'type' => $type,
				'text' => $text,
				'col' => $col,
			];
		}
	}
	
	private function writeComments($row)
	{		
		if ($this->cacheService->get('automation.ready_to_persist') == false) {
			$type = null;
			foreach ($this->comments as $comment) {
				if ($type === null) {
					$type = $comment['type'];
				} elseif ($type == 'valid' && $comment['type'] == 'ignore') {
					$type = 'ignore';
				} elseif (($type == 'valid' || $type == 'ignore') && $comment['type'] == 'warning') {
					$type = 'warning';
				} elseif ($comment['type'] == 'error') {
					$type = 'error';
				}
			}
			
			switch ($type) {
				case 'valid':
					$this->sheet->getStyle('A' . $row . ':Z' . $row)
						->getFill()
						->setFillType(Fill::FILL_SOLID)
						->getStartColor()
						->setRGB(self::VALID_COLOR)
					;
					break;
				case 'warning':
					$this->sheet->getStyle('A' . $row . ':Z' . $row)
						->getFill()
						->setFillType(Fill::FILL_SOLID)
						->getStartColor()
						->setRGB(self::WARNING_COLOR)
					;
					break;
				case 'error':
					$this->sheet->getStyle('A' . $row . ':Z' . $row)
						->getFill()
						->setFillType(Fill::FILL_SOLID)
						->getStartColor()
						->setRGB(self::ERROR_COLOR)
					;
					break;
				case 'ignore':
					$this->sheet->getStyle('A' . $row . ':Z' . $row)
						->getFill()
						->setFillType(Fill::FILL_SOLID)
						->getStartColor()
						->setRGB(self::IGNORE_COLOR)
					;
					break;
				default:
					return;
			}
			
			$this->sheet
				->getComment($this->parsedCode['first_column'] . $row)
				->setAuthor('GPExe')
			;
			
			$numberOfLines = 0;
			foreach ($this->comments as $comment) {
				
				
				$this->sheet
					->getComment($this->parsedCode['first_column'] . $row)
					->getText()
					->createTextRun($comment['text'] . "\r\n")
				;
				
				if ($comment['col'] !== null) {
					$this->sheet
						->getComment($comment['col'] . $row)
						->setWidth("500px")
						->setHeight("20px")
						->getText()
						->createTextRun($comment['text'] . "\r\n")
					;
					
					$this->sheet
						->getStyle($comment['col'] . $row)
						->getBorders()
						->getAllBorders()
						->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN)
						->getColor()
						->setRGB(self::BORDER_COLOR)
					;
				}
				
				$numberOfLines++;
			}
			$this->sheet
				->getComment($this->parsedCode['first_column'] . $row)
				->setWidth("500px")
				->setHeight(20*$numberOfLines . "px")
			;
			
			$this->comments = [];
		}
	}
	
	private function open(string $fileName): Spreadsheet
	{
		$file = $this->targetDirectory . $fileName;
		$reader = IOFactory::createReaderForFile($file);
		return $reader->load($file);
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
			$writer->save($this->targetDirectory . $safeFilename);
		} catch (WriterException $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return '';
		}
		
		return $safeFilename;
	}
	
	/*
	private function darkens($hex) {
		
		$percent = -0.5;
		
		// validate hex string		
		$hex = preg_replace('/[^0-9a-f]/i', '', $hex);
		$new_hex = '#';
		
		if (strlen($hex) < 6) {
			$hex = $hex[0] + $hex[0] + $hex[1] + $hex[1] + $hex[2] + $hex[2];
		}
		
		// convert to decimal and change luminosity
		for ($i = 0; $i < 3; $i++) {
			$dec = hexdec(substr( $hex, $i*2, 2));
			$dec = min(max(0, $dec + $dec * $percent), 255);
			$new_hex .= str_pad(dechex($dec), 2, 0, STR_PAD_LEFT);
		}
		
		return $new_hex;
	}
	*/
	
}

?>