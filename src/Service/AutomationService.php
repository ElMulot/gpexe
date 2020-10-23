<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\ExpressionLanguage\SyntaxError;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Cache\Adapter\PhpArrayAdapter;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx as Writer;
use PhpOffice\PhpSpreadsheet\Writer\Exception as PhpSpreadsheetWriterException;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet;
use PhpOffice\PhpSpreadsheet\Cell\Cell;
use PhpOffice\PhpSpreadsheet\Shared\Date;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Writer\Exception\WriterException as SpoutWriterException;
use App\Entity\Automation;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Service\PhpSpreadsheetFilters\ChunkFilter;
use App\Service\PhpSpreadsheetFilters\MainColumnFilter;
use App\Repository\SerieRepository;
use App\Repository\DocumentRepository;
use App\Repository\VersionRepository;
use App\Repository\StatusRepository;
use Symfony\Component\BrowserKit\Response;
use App\Entity\MetadataItem;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use App\Service\Excel\Workbook;

class AutomationService
{
	
	const MAX_LINES_PROCESSED 	= 100;
	const IGNORE_COLOR 			= 'C8C8C8';
	const WARNING_COLOR 		= 'FFE591';
	const ERROR_COLOR 			= 'FF9191';
	const VALID_COLOR 			= 'CCFF91';
	const BORDER_COLOR			= 'FF0000';
	
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
	
	private $workbook;

	public function __construct(FlashBagInterface $flashBagInterface, EntityManagerInterface $entityManager, SerieRepository $serieRepository, DocumentRepository $documentRepository, VersionRepository $versionRepository, StatusRepository $statusRespository, CacheService $cacheService, DocumentService $documentService, FieldService $fieldService, Security $security, string $targetDirectory)
	{
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
		$this->workbook = new Workbook;
	}
	
	public function load(Automation $automation, Request $request, File $file = null): bool
	{
		
		$this->flashBagInterface->add('info', 'Démarrage de l\'opération');
		
		$this->parsedCode = $automation->getParsedCode();
		
		if ($this->cacheService->get('automation.ready_to_persist')) {
			return true;
		}
		
		$firstRow = $this->parsedCode['first_row'];
		
		//setting up cache
		$this->cacheService->set('automation.current_row', $firstRow);
		
		$options = $this->parsedCode['option'] ?? [];
		foreach ($options as $key => $option) {
			if ($option == 'choose') {
				if ($automation->isTypeExport()) {
					$option = $request->request->get('launcher_export')[$key] ?? false;
				} elseif ($automation->isTypeImport()) {
					$option = $request->request->get('launcher_import')[$key] ?? false;
				}
			}
			$this->cacheService->set('automation.' . $key, $option);
		}
		
		if ($automation->isTypeExport()) {
			
			$this->workbook->new('GPEXE Export');
			$sheet = $this->workbook->getSheet();
			
			//headers
			$fields = [];
			foreach ($this->parsedCode['write'] as $write) {
				if (array_key_exists($write['title'], $fields)) {
					$sheet->setCellValue($write['to'] . $firstRow, $fields[$write['title']]['title']);
				} elseif ($write['title'] != '') {
					$sheet->setCellValue($write['to'] . $firstRow, $write['title']);
				} elseif (array_key_exists($write['value'], $fields)) {
					$sheet->setCellValue($write['to'] . $firstRow, $fields[$write['value']]['title']);
				} else {
					$sheet->setCellValue($write['to'] . $firstRow, $write['value']);
				}
			}
			
			//save
			$this->workbook->save();
			if ($this->workbook->getFilename() != false) {
				$this->cacheService->set('automation.file_name', $this->workbook->getFilename());
				return true;
			} else {
				$this->flashBagInterface->add('error', 'Erreur : écriture du fichier impossible');
				return false;
			}

		} elseif ($automation->isTypeImport()) {
			
			$this->workbook->open($file->getPathname());
			$sheet = $this->workbook->getSheet();
			
			$this->documentService->removeOrphans();
			
			//setting up cache
			$sheet->getRowInterator()->rewind();
			while ($sheet->getRowInterator()->valid()) {
				$sheet->getRowInterator()->next();
			}
			$this->cacheService->set('automation.count_row', max(1, $sheet->getRowInterator()->current()->getAddress() - $firstRow));
			
			
			//save
			$this->workbook->save();
			if ($this->workbook->getFilename() != false) {
				$this->cacheService->set('automation.file_name', $this->workbook->getFilename());
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
			$this->cacheService->delete('automation.count_row');
			$this->cacheService->delete('automation.count_processed');
			$this->cacheService->delete('automation.current_row');
			$this->cacheService->delete('automation.new_batch');
			$this->cacheService->delete('automation.ready_to_persist');
			$options = $this->parsedCode['option'] ?? [];
			foreach ($options as $key => $option) {
				$this->cacheService->delete('automation.' . $key);
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
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('automation.' . $key);
		}
		$newBatch = false;
				
		$this->workbook->open($this->targetDirectory . $fileName);
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		
		//content
		foreach ($series as $serie) {
			foreach ($serie->getDocuments() as $document) {
				foreach ($document->getVersions() as $version) {
			
					//exclude
					foreach ($this->parsedCode['exclude'] as $exclude) {
						if ($exclude && $this->evaluate($exclude, $version)) {
							$row++;
							continue 2;
						}
					}
					
					foreach ($this->parsedCode['write'] as $write) {
						if ($write['condition'] == '' || $this->evaluate($write['condition'], $version)) {
							$this->sheet->setCellValue($write['to'] . $row, $this->evaluate($write['value'], $version, true));
						}
					}
								
					if ($row - $this->cacheService->get('automation.current_row') > self::MAX_LINES_PROCESSED) {
						$newBatch = true;
						break;
					}
					
					$row++;
					$countProcessed++;
					
				}
			}
		}
		
		//update cache
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			$this->flashBagInterface->add('success', 'Export réussi. ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes exportées');
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
		$firstRow = $this->parsedCode['first_row'];
		$mainColumn = $this->parsedCode['main_column'];
		
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		if ($defaultStatus === null) {
			$this->flashBagInterface->add('error', 'Pas de status par défaut.');
			return false;
		}
		
		//cache
		$fileName = $this->cacheService->get('automation.file_name');
		$row = $this->cacheService->get('automation.current_row');
		$countRow = $this->cacheService->get('automation.count_row') ?? 1;
		$countProcessed = (int)$this->cacheService->get('automation.count_processed');
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('automation.' . $key);
		}
		$newBatch = false;
		
		$this->workbook->open($this->targetDirectory . $fileName);
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		
		while ($this->sheet->getCell($mainColumn . $row)->getValue()) {
			
			if ($row - $this->cacheService->get('automation.current_row') >= self::MAX_LINES_PROCESSED) {
				$newBatch = true;
				break;
			}
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, null, false, $row) && $exclude != '') {
					$this->sheet->getStyle($row . ':' . $row)->getFill()->getStartColor()->setARGB(self::IGNORE_COLOR);
					$this->addComment('ignore', "Ligne exclue via l'instruction 'Exclude'.");
					$this->writeComments($row);
					$row++;
					continue 2;
				}
			}
			
// 			unset($currentSerie, $currentDocument, $currentVersion);
			$currentSerie = null;
			$currentDocument = null;
			$currentVersion = null;
			
			//get serie
			if ($this->parsedCode['get_serie']['condition'] == 'skip') {
				
				foreach ($series as $serie) {
					foreach ($serie->getDocuments() as $document) {
						if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, false, $row)) {
							$currentDocument = $document;
							$currentSerie = $document->getSerie();
							$this->addComment('valid', "Document trouvé.");
							$this->addComment('valid', "Serie déduite : '{$currentSerie->getName()}'.");
							break 2;
						}
					}
				}
				
			} else {
				
				foreach ($series as $serie) {
					if ($this->evaluate($this->parsedCode['get_serie']['condition'], $serie, false, $row)) {
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
			
				foreach ($currentSerie->getDocuments() as $document) {
					if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, false, $row)) {
						$currentDocument = $document;
						$this->addComment('valid', "Document trouvé.");
						break;
					}
				}
			
				//check if the document is not in another serie
				if ($currentDocument === null && ($options['move_from_mdr'] || $options['move_from_sdr'])) {
					foreach ($series as $serie) {
						foreach ($serie->getDocuments() as $document) {
							if ($this->evaluate($this->parsedCode['get_document']['condition'], $document, false, $row)) { //cette ligne créé un Internal Server Error
								if ($document->getSerie()->belongToMDR()) {
									if ($options['move_from_mdr']) {
										$currentDocument = $document;
										$document->setSerie($currentSerie);
										$this->addComment('valid', "Document trouvé dans le MDR et rappatrié dans la série en cours.");
										break 2;
									} else {
										$this->addComment('error', "Document trouvé dans une autre série du MDR.");
										$this->writeComments($row);
										$row++;
										continue(3);
									}
								}
								if ($document->getSerie()->belongToSDR()) {
									if ($options['move_from_sdr']) {
										$currentDocument = $document;
										$document->setSerie($currentSerie);
										$this->addComment('valid', "Document trouvé dans le SDR et rappatrié dans la série en cours.");
										break 2;
									} else {
										$this->addComment('error', "Document trouvé dans une autre série du SDR.");
										$this->writeComments($row);
										$row++;
										continue(3);
									}
								}
							}
						}
					}
				}
			}
			
			if ($currentDocument !== null) {
				
				foreach ($this->parsedCode['get_document']['then'] as $then) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
						if ($matches[1] && $this->evaluate($matches[1], $currentDocument, false, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentDocument, true, $row))) {
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
						
						if ($matches[1] && $this->evaluate($matches[1], null, false, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$currentSerie->addDocument($currentDocument);
							$this->addComment('valid', "Création d'un nouveau document.");
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentDocument, true, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'document.name' || $matches[2] == 'document.reference') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentSerie->removeDocument($currentDocument);
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
			if ($this->parsedCode['get_version']['condition']) {
				
				foreach ($currentDocument->getVersions() as $version) {
					if ($this->evaluate($this->parsedCode['get_version']['condition'], $version, false, $row)) {
						$currentVersion = $version;
						$this->addComment('valid', "Version trouvée.");
						break;
					}
				}
				
				if ($currentVersion !== null) {
					
					foreach ($this->parsedCode['get_version']['then'] as $then) {
						
						if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
							
							if ($matches[1] && $this->evaluate($matches[1], $currentVersion, false, $row) === false) {
								$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
								continue;
							}
							
							if ($currentVersion->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentVersion, true, $row))) {
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
							
							if ($matches[1] && $this->evaluate($matches[1], null, false, $row) === false) {
								$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
								continue;
							}
							
							if ($currentVersion === null) {
								
								$currentVersion = new Version();
								
								if ($lastVersion = $currentDocument->getLastVersion()) {
									
									$currentVersion
										->setName($lastVersion->getName())
										->setIsRequired($lastVersion->getIsRequired())
										->setDate($lastVersion->getDate())
										->setStatus($lastVersion->getStatus())
										->setWriter($lastVersion->getWriter())
										->setChecker($lastVersion->getChecker())
										->setApprover($lastVersion->getApprover())
									;
									
									foreach ($lastVersion->getMetadataItems() as $metadataItem) {
										$currentVersion->setMetadataValue($metadataItem->getMetadata(), $metadataItem->getValue());
										
									}
									foreach ($lastVersion->getMetadataValues() as $metadataValue) {
										$currentVersion->setMetadataValue($metadataValue->getMetadata(), $metadataValue->getValue());
									}
									
								} else {
									
									$currentVersion->setStatus($defaultStatus);
									
								}
								
								$currentVersion->setDocument($currentDocument);
								$currentDocument->addVersion($currentVersion);
								$this->addComment('valid', "Création d'une nouvelle version.");
							}
							
							if ($currentVersion->setPropertyValue($matches[2], $this->evaluate($matches[3], $currentVersion, true, $row))) {
								$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
							} elseif ($matches[2] == 'version.name' || $matches[2] == 'version.date') {
								$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
								$currentDocument->removeVersion($currentVersion);
								$currentVersion = null;
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
				
			}
			
			$this->writeComments($row);
			$countProcessed++;
			
			$row++;
		}
		
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			if ($countRow > self::MAX_LINES_PROCESSED) {
				$this->flashBagInterface->add('info', '100% terminés.');
			}
			if ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->flush();
				$this->flashBagInterface->add('info', 'Import terminé : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes ont été importées');
				return true;
			} else {
				$this->flashBagInterface->add('info', 'Vérification terminée : ' . $countProcessed . '/' . ($row - $this->parsedCode['first_row']) . ' lignes peuvent être importées');
				return (bool)$this->save($spreadsheet);
			}
		} else {
			$this->flashBagInterface->add('info', round(100 * ($row - 1 - $firstRow) / $countRow) . '% terminés.');
			if ($this->cacheService->get('automation.ready_to_persist')) {
				$this->cacheService->set('automation.count_processed', $countProcessed);
				$this->cacheService->set('automation.current_row', $row);
				$this->entityManager->flush();
				return true;
			} else {
				$this->cacheService->set('automation.count_processed', $countProcessed);
				$this->cacheService->set('automation.current_row', $row);
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
							return preg_quote($this->sheet->getCell($matches[1] . $row)->getCalculatedValue());
						}
					}, $expression);
					
				} else {
					
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						if ($date = $this->getDateTime($this->sheet->getCell($matches[1] . $row))) {
							return '"' . $date->format('d-m-Y') . '"';
						} else {
							return '"' . $this->sheet->getCell($matches[1] . $row)->getCalculatedValue() . '"';
						}
					}, $expression);
					
				}
			}
			
			//replace username
			$expression = preg_replace('/(\[username\])/', $this->security->getUser(), $expression);
			
// 			$this->flashBagInterface->add('info', 'avant evaluation : ' . $expression);
			
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
	
	private function evaluate(string $expression, $entity, bool $get = false, int $row=0): bool
	{
		
		if ($expression == false) return false;
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
		if ($get === false) {
			
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			
		} else {
			
			$matches = [];
			if (preg_match('/(.+)\s+get\s+\"(\/\S*\/)\"/', $expression, $matches) === 1) {
				
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
				->getComment($this->parsedCode['main_column'] . $row)
				->setAuthor('GPExe')
			;
			
			$numberOfLines = 0;
			foreach ($this->comments as $comment) {
				
				
				$this->sheet
					->getComment($this->parsedCode['main_column'] . $row)
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
				->getComment($this->parsedCode['main_column'] . $row)
				->setWidth("500px")
				->setHeight(20*$numberOfLines . "px")
			;
			
			$this->comments = [];
		}
	}
	
	
	
	private function getCellValue(string $col, int $row)
	{
		
		if ($this->cacheService->get('automation.library') == 'phpspreadsheet') {
			return $this->sheet->getCell($col . $row)->getValue();
		} else {
			foreach ($this->sheet->getRowIterator() as $rowIndex => $row) {
				if ($rowIndex + 1 == $row) {
					return $row->getCellAtIndex($this->toNumber($col));
				}
			}
		}
		
	}
	
	private function setCellValue(string $col, int $row, $value)
	{
		
		if ($this->cacheService->get('automation.library') == 'phpspreadsheet') {
			return $this->sheet->setCellValue($col . $row, $value);
		} else {
			foreach ($this->sheet->getRowIterator() as $rowIndex => $row) {
				if ($rowIndex + 1 == $row) {
					return $row->setCellAtIndex(WriterEntityFactory::createCell($value), $this->toNumber($col));
				}
			}
		}
		
	}
	

	
}

?>