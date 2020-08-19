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
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use App\Entity\Automation;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Service\DocumentService;
use App\Service\FieldService;
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
	
	private $slugger;
	
	private $flashBagInterface;
	
	private $entityManager;
	
	private $serieRepository;
	
	private $documentRepository;
	
	private $versionRespository;
	
	private $statusRespository;
	
	private $documentService;
	
	private $fieldService;
	
	private $security;
	
	private $expressionLanguage;
	
	private $filesystem;
	
	private $cache;
	
	private $targetDirectory;
	
	private $comments;
	
	private $parsedCode;
	
	private $sheet;

	public function __construct(FlashBagInterface $flashBagInterface, SluggerInterface $slugger, EntityManagerInterface $entityManager, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, StatusRepository $statusRespository, DocumentService $documentService, FieldService $fieldService, Security $security, string $targetDirectory)
	{
		$this->slugger = $slugger;
		$this->flashBagInterface = $flashBagInterface;
		$this->entityManager = $entityManager;
		$this->serieRepository = $serieRepository;
		$this->documentRepository = $documentRepository;
		$this->versionRepository = $versionRepository;
		$this->statusRespository = $statusRespository;
		$this->documentService = $documentService;
		$this->fieldService = $fieldService;
		$this->security = $security;
		$this->expressionLanguage = new ExpressionLanguage();
		$this->filesystem = new Filesystem();
		$this->cache = new FilesystemAdapter;
		$this->targetDirectory = $targetDirectory;
		$this->comments = [];
	}
	
	public function load(Automation $automation, string $file, Request $request)
	{
		
		$this->flashBagInterface->add('info', 'Démarrage de l\'opération');
		
		$this->setCache($automation, $request);
		
		$this->parsedCode = $automation->getParsedCode();
		$firstRow = $this->parsedCode['first_row'];
		
		$reader = IOFactory::createReaderForFile($file);
		//$reader->setReadDataOnly(true);
		$spreadsheet = $reader->load($file);
		
		$this->sheet = $spreadsheet->getActiveSheet();
		
		if ($automation->isTypeExport()) {
			
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
			
			return $this->save($spreadsheet);

		} elseif ($automation->isTypeImport()) {
			
			$this->documentService->removeOrphans();
			
			//set document properties
			$spreadsheet->getProperties()
				->setCreator('GPEXE')
				->setTitle('GPEXE Import')
			;
			
			return $this->save($spreadsheet);
			
		} else {
			
			$this->flashBagInterface->add('error', 'Erreur : programme invalide');
			return false;
			
		}
	}
	
	public function export(Automation $automation, string $file):? string
	{
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		$fields = $this->fieldService->getFields($project);
		
		//cache
		$currentRowItem = $this->cache->getItem('automation.current_row');
		if ($currentRowItem->isHit()) {
			$row = $currentRowItem->get();
		} else {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		}
		
		$countProcessedItem = $this->cache->getItem('automation.count_processed');
		if ($countProcessedItem->isHit()) {
			$countProcessed = $countProcessedItem->get();
		} else {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		}
		
		$newBatchItem = $this->cache->getItem('automation.new_batch');
		if ($newBatchItem->isHit() === false) {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		}
		
		$reader = IOFactory::createReaderForFile($file);
		//$reader->setReadDataOnly(true);
		$spreadsheet = $reader->load($file);
		
		$this->sheet = $spreadsheet->getActiveSheet();
		
		$versions = $this->versionRespository->getVersionsByProject($project);
		
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
	
	public function import(Automation $automation, string $file, bool $checkOnly)
	{
		
		$matches = null;
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		$this->checkOnly = $checkOnly;
		$fields = $this->fieldService->getFields($project);
		$firstColumn = $this->parsedCode['first_column'];
				
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		if ($defaultStatus === null) {
			$this->flashBagInterface->add('error', 'Pas de status par défaut.');
			return false;
		}
		
		//cache
		$currentRowItem = $this->cache->getItem('automation.current_row');
		if ($currentRowItem->isHit()) {
			$row = $currentRowItem->get();
		} else {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		}
		
		$countProcessedItem = $this->cache->getItem('automation.count_processed');
		if ($countProcessedItem->isHit()) {
			$countProcessed = $countProcessedItem->get();
		} else {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		}
		
		$newBatchItem = $this->cache->getItem('automation.new_batch');
		if ($newBatchItem->isHit() === false) {
			$this->flashBagInterface->add('error', 'Erreur interne.');
			return false;
		} else {
			$newBatchItem->set(false);
		}
		
		$updateOnlyItem = $this->cache->getItem('option.update_only');
		if ($updateOnlyItem->isHit() === false) {
			$options['update_only'] = false;
		} else {
			$options['update_only'] = $updateOnlyItem->get();
		}
		
		$moveFromMdrItem = $this->cache->getItem('option.move_from_mdr');
		if ($moveFromMdrItem->isHit() === false) {
			$options['move_from_mdr'] = false;
		} else {
			$options['move_from_mdr'] = $moveFromMdrItem->get();
		}
		
		$moveFromSdrItem = $this->cache->getItem('option.move_from_sdr');
		if ($moveFromSdrItem->isHit() === false) {
			$options['move_from_sdr'] = false;
		} else {
			$options['move_from_sdr'] = $moveFromSdrItem->get();
		}
		
		$reader = IOFactory::createReaderForFile($file);
		//$reader->setReadDataOnly(true);
		$spreadsheet = $reader->load($file);
		
		$this->sheet = $spreadsheet->getActiveSheet();
		
		while ($this->sheet->getCell($firstColumn . $row)->getValue()) {
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, null, $row) && $exclude != '') {
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
			
			if ($currentDocument === null && ($options['move_from_mdr'] || $options['move_from_sdr'])) {
				
				$documents = $this->documentRepository->getAllDocuments($project);
				foreach ($documents as $document) {
					if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, $row)) {
						if ($document->getSerie()->belongToMDR() && $options['move_from_mdr']) {
							$currentDocument = $document;
							$document->setSerie($currentSerie);
							$this->addComment('valid', "Document trouvé dans le MDR et rappatrié dans la série en cours.");
							break;
						}
						if ($document->getSerie()->belongToSDR() && $options['move_from_ddr']) {
							$currentDocument = $document;
							$document->setSerie($currentSerie);
							$this->addComment('valid', "Document trouvé dans le SDR et rappatrié dans la série en cours.");
							break;
						}
					}
				}
			}
			
			if ($currentDocument !== null) {
				
				foreach ($this->parsedCode['get_document']['then'] as $then) {
					
					if (preg_match('/(\(.+\))?\s*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], $currentDocument, $row) === false) {
							$this->addComment('warning', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentDocument, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
						}
						
					}
					
				}
				
			} elseif ($options['update_only'] === false) {
				
				foreach ($this->parsedCode['get_document']['else'] as $else) {
					
					if (preg_match('/(\(.+\))?\s*\[(\w+.\w+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], null, $row) === false) {
							$this->addComment('warning', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$this->addComment('valid', "Création d'un nouveau document.");
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentDocument, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'document.name' || $matches[2] == 'document.reference') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentDocument = null;
							break;
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
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
			} elseif ($checkOnly === false) {
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
					
					if (preg_match('/(\(.+\))?\s*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
						if ($this->evaluate($matches[1], $currentVersion, $row) === false) {
							$this->addComment('warning', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentVersion->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentVersion, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
						}
						
					}
					
				}
				
			} elseif ($options['update_only'] === false) {
				
				
				foreach ($this->parsedCode['get_version']['else'] as $else) {
					
					if (preg_match('/(\(.+\))?\s*\[(\w+.\w+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($this->evaluate($matches[1], null, $row) === false) {
							$this->addComment('warning', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentVersion === null) {
							$currentVersion = new Version();
							$currentVersion->setDocument($currentDocument);
							$currentVersion->setStatus($defaultStatus);
							$this->addComment('valid', "Création d'une nouvelle version.");
						}
						
						if ($currentVersion->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentVersion, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'version.name' || $matches[2] == 'version.date') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentDocument = null;
							break;
						} else {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
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
			} elseif ($checkOnly === false) {
				$this->entityManager->persist($currentVersion);
			}
			
			$this->writeComments($row);
			$countProcessed++;
			
			if ($row - $currentRowItem->get() > self::MAX_LINES_PROCESSED) {
				$newBatchItem->set(true);
				break;
			}
			$row++;
		}
		
		$currentRowItem->set($row + 1);
		$countProcessedItem->set($countProcessed);
		
		$this->cache->save($currentRowItem);
		$this->cache->save($countProcessedItem);
		$this->cache->save($newBatchItem);
				
		if ($checkOnly) {
			
			if ($newBatchItem->get() === false) {
				$this->flashBagInterface->add('info', 'Vérification terminée : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes peuvent être importées');
			}
			
			return $this->save($spreadsheet);
		} else {
			$this->entityManager->flush();
			
			if ($newBatchItem->get() === false) {
				$this->flashBagInterface->add('info', 'Import terminé : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes ont été importées');
			}
			
			return true;
		}
		
	}
	
	public function setCache(Automation $automation, Request $request)
	{
		//automation
		$this->parsedCode = $automation->getParsedCode();
		$firstRow = $this->parsedCode['first_row'];
		
		$currentRowItem = $this->cache->getItem('automation.current_row');
		$currentRowItem->set($firstRow);
		$this->cache->save($currentRowItem);
		
		$countProcessedItem = $this->cache->getItem('automation.count_processed');
		$countProcessedItem->set(0);
		$this->cache->save($countProcessedItem);
		
		$newBatchItem = $this->cache->getItem('automation.new_batch');
		$newBatchItem->set(false);
		$this->cache->save($newBatchItem);
		
		//options
		$options = $this->parsedCode['option'] ?? [];
		foreach ($options as $key => $option) {
			if ($option == 'choose') {
				if ($request->request->has($key)) {
					$option = $request->request->get($key);
				} else {
					$option = false;
				}
			}
			$optionItem = $this->cache->getItem('option.' . $key);
			$optionItem->set($option);
			$this->cache->save($optionItem);
		}
	}
	
	private function evaluate(string $expression, $entity, int $row=0)
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
				
				$expression = preg_replace_callback('/\[(\w+\.\w+)\]/', function($matches) use ($entity) {
					return '"' . $entity->getPropertyValueToString($matches[1]) . '"';
				}, $expression);
				
			}
			
			//replace by Excel values
			
			if ($this->sheet !== null && $row > 0) { //row
				$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
					if (Date::isDateTime($this->sheet->getCell($matches[1] . $row))) {
						return '"' . Date::excelToDateTimeObject($this->sheet->getCell($matches[1] . $row)->getValue())->format('d-m-Y') . '"';
					} else {
						return '"' . $this->sheet->getCell($matches[1] . $row)->getValue() . '"';
					}
				}, $expression);
			}
			
			//replace username
			$expression = preg_replace('/(\[username\])/', $this->security->getUser(), $expression);
			
			//date
			if (strtotime($expression)) {
				$expression = \DateTime::createFromFormat($this->parsedCode['date_format'], $expression)->format('d-m-Y');
			}
//			dump('avant evaluation : ' . $expression);
			
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
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
			
			foreach ($this->comments as $comment) {
				/*
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
				*/
				$this->sheet
					->getComment($this->parsedCode['first_column'] . $row)
					->getText()
					->createTextRun($comment['text'] . "\r\n")
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