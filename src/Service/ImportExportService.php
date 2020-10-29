<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\ExpressionLanguage\SyntaxError;
use Symfony\Component\Cache\Adapter\PhpArrayAdapter;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Automation;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Service\PhpSpreadsheetFilters\ChunkFilter;
use App\Service\PhpSpreadsheetFilters\MainColumnFilter;
use App\Service\Excel\Row;
use App\Service\Excel\Cell;
use App\Service\Excel\Exception;
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

class ImportExportService
{
	
	const MAX_LINES_PROCESSED 	= 20;
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
		$this->targetDirectory = $targetDirectory;
		$this->comments = [];
	}
	
	public function load(Automation $automation, Request $request, File $file = null): bool
	{
		
		$this->flashBagInterface->add('info', 'Démarrage de l\'opération');
		
		if ($this->cacheService->get('automation.ready_to_persist')) {
			return true;
		}
		
		$this->parsedCode = $automation->getParsedCode();
		
		//setting up cache
		$options = $this->parsedCode['option'] ?? [];
		foreach ($options as $key => $option) {
			if ($automation->isTypeExport()) {
				$option = $request->request->get('launcher_export')[$key] ?? false;
				$this->cacheService->set('automation.' . $key, $option);
			} elseif ($automation->isTypeImport()) {
				$option = $request->request->get('launcher_import')[$key] ?? false;
				$this->cacheService->set('automation.' . $key, $option);
			}
		}
		
		$firstRow = $this->parsedCode['first_row'];
		$this->cacheService->set('automation.current_row', $firstRow + 1);
		
		$mainColumn = $this->parsedCode['main_column'] ?? null;
		$commentColumn = $this->parsedCode['comment_column'] ?? null;
		$library = $this->cacheService->get('automation.library');
		$dateFormat = $this->cacheService->get('automation.date_format');
		
		if ($automation->isTypeExport()) {
			
			//create workbook
			try {
				$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			try {
				$this->workbook->new('GPEXE Export', $this->targetDirectory);
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			$sheet = $this->workbook->getSheet();
			
			//headers
			$fields = [];
			$row = $sheet->getRow($firstRow);
			
			foreach ($this->parsedCode['write'] as $write) {
				if (array_key_exists($write['title'], $fields)) {
					$row->getCell($write['to'])->setValue($fields[$write['title']]['title']);
				} elseif ($write['title'] != '') {
					$row->getCell($write['to'])->setValue($write['title']);
				} elseif (array_key_exists($write['value'], $fields)) {
					$row->getCell($write['to'])->setValue($fields[$write['value']]['title']);
				} else {
					$row->getCell($write['to'])->setValue($write['value']);
				}
			}
			$row->add();
			
			//save
			try {
				$this->workbook->save();
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			
			$this->cacheService->set('automation.file_name', $this->workbook->getFilename());
			return true;

		} elseif ($automation->isTypeImport()) {
			
			//upload file
			$file->move($this->targetDirectory, 'GPEXE Import.xlsx');
			
			//open workbook
			try {
				$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			try {
				$this->workbook->open($this->targetDirectory . 'GPEXE Import.xlsx');
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			$sheet = $this->workbook->getSheet();
			
			//orphans removal
			$this->documentService->removeOrphans();
			
			//setting up cache
			$currentRow = $firstRow;
			while ($row = $sheet->getRow($currentRow)) {
				if ($row->getCell($mainColumn)->isEmpty()) {
					break;
				}
				$currentRow++;
			}
			
			$this->cacheService->set('automation.count_row', max(1, $row->getAddress() - $firstRow - 1));
			
			//save
			try {
				$this->workbook->save();
			} catch (Exception $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return false;
			}
			
			$this->cacheService->set('automation.file_name', $this->workbook->getFilename());
			return true;
			
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
		
		$library = $this->parsedCode['option']['library'];
		$firstRow = $this->parsedCode['first_row'];
		$mainColumn = $this->parsedCode['main_column'] ?? null;
		$commentColumn = $this->parsedCode['comment_column'] ?? null;
		$dateFormat = $this->parsedCode['option']['date_format'] ?? null;
		
		//cache
		$fileName = $this->cacheService->get('automation.file_name');
		$currentRow = $this->cacheService->get('automation.current_row');
		$countProcessed = (int)$this->cacheService->get('automation.count_processed');
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('automation.' . $key);
		}
		$newBatch = false;
		
		//open workbook
		try {
			$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
		} catch (Exception $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		try {
			$this->workbook->open($this->targetDirectory . $fileName);
		} catch (Exception $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		
		foreach ($series as $serie) {
			foreach ($serie->getDocuments() as $document) {
				foreach ($document->getVersions() as $version) {
					$row = $sheet->getRow($currentRow);
					
// 					A faire : reprendre les versions là s'est arrêté le précédent batch
// 					if ($row->getAddress() - $currentRow + 1 >= self::MAX_LINES_PROCESSED) {
// 						$newBatch = true;
// 						break 3;
// 					}
					
					//exclude
					foreach ($this->parsedCode['exclude'] as $exclude) {
						if ($exclude && $this->compare($exclude, $version)) {
							$countProcessed++;
							continue 2;
						}
					}
					
					foreach ($this->parsedCode['write'] as $write) {
						if ($write['condition'] == '' || $this->compare($write['condition'], $version)) {
							$row->getCell($write['to'])->setValue($this->get($write['value'], $version));
						}
					}
					
					$row->add();
					$currentRow++;
					$countProcessed++;
					
				}
			}
		}
		
		//update cache
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			$this->flashBagInterface->add('success', 'Export réussi. ' . ($row->getAddress() - $firstRow - 1) . '/' .  $countProcessed . ' lignes exportées');
		} else {
			$this->flashBagInterface->add('success', ($row->getAddress() - $firstRow - 1) . '/' .  $countProcessed . ' lignes exportées');
			$this->cacheService->set('automation.count_processed', $countProcessed);
			$this->cacheService->set('automation.current_row', $row->getAddress() + 1);
		}
		
		try {
			$this->workbook->save();
		} catch (Exception $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		
		return true;
	}
	
	public function import(Automation $automation): bool
	{
		
		$project = $automation->getProject();
		$this->parsedCode = $automation->getParsedCode();
		
		$library = $this->parsedCode['option']['library'];
		$firstRow = $this->parsedCode['first_row'];
		$mainColumn = $this->parsedCode['main_column'] ?? null;
		$commentColumn = $this->parsedCode['comment_column'] ?? null;
		$dateFormat = $this->parsedCode['option']['date_format'] ?? null;
		$matches = null;
		
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		if ($defaultStatus === null) {
			$this->flashBagInterface->add('error', 'Pas de status par défaut.');
			return false;
		}
		
		
		//cache
		$fileName = $this->cacheService->get('automation.file_name');
		$currentRow = $this->cacheService->get('automation.current_row');
		$countRow = $this->cacheService->get('automation.count_row') ?? 1;
		$countProcessed = (int)$this->cacheService->get('automation.count_processed');
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('automation.' . $key);
		}
		$newBatch = false;
		
		//open workbook
		try {
			$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
		} catch (Exception $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		try {
			$this->workbook->open($this->targetDirectory . $fileName);
		} catch (Exception $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		
		while ($row = $sheet->getRow($currentRow)) {
			
			if ($row->getCell($mainColumn)->isEmpty()) {
				break;
			}
			
			if ($row->getAddress() - $currentRow + 1 >= self::MAX_LINES_PROCESSED) {
				$newBatch = true;
				break;
			}
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->compare($exclude, null, $row) && $exclude != '') {
					$row->setBackgroundColor(self::IGNORE_COLOR);
					$this->addComment('ignore', "Ligne exclue via l'instruction 'Exclude'.");
					$this->writeComments($row);
					$currentRow++;
					continue 2;
				}
			}
			
			$currentSerie = null;
			$currentDocument = null;
			$currentVersion = null;
			
			//get serie
			if ($this->parsedCode['get_serie']['condition'] == 'skip') {
				
				foreach ($series as $serie) {
					foreach ($serie->getDocuments() as $document) {
						if ($this->compare($this->parsedCode['get_document']['condition'], $document, $row)) {
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
					if ($this->compare($this->parsedCode['get_serie']['condition'], $serie, $row)) {
						$currentSerie = $serie;
						$this->addComment('valid', "Série trouvée.");
						break;
					}
				}
				
				if ($currentSerie === null) {
					$this->addComment('error', "Ligne exclue : série non trouvée.");
					$this->writeComments($row);
					$currentRow++;
					continue;
				}
			
				foreach ($currentSerie->getDocuments() as $document) {
					if ($this->compare($this->parsedCode['get_document']['condition'], $document, $row)) {
						$currentDocument = $document;
						$this->addComment('valid', "Document trouvé.");
						break;
					}
				}
			
				//check if the document is not in another serie
				if ($currentDocument === null && ($options['move_from_mdr'] || $options['move_from_sdr'])) {
					foreach ($series as $serie) {
						foreach ($serie->getDocuments() as $document) {
							if ($this->compare($this->parsedCode['get_document']['condition'], $document, $row)) { //cette ligne créé un Internal Server Error
								if ($document->getSerie()->belongToMDR()) {
									if ($options['move_from_mdr']) {
										$currentDocument = $document;
										$document->setSerie($currentSerie);
										$this->addComment('valid', "Document trouvé dans le MDR et rappatrié dans la série en cours.");
										break 2;
									} else {
										$this->addComment('error', "Document trouvé dans une autre série du MDR.");
										$this->writeComments($row);
										$currentRow++;
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
										$currentRow++;
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
						
						if ($matches[1] && $this->compare($matches[1], $currentDocument, $row) === false) {
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
						
						if ($matches[1] && $this->compare($matches[1], null, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$currentSerie->addDocument($currentDocument);
							$this->addComment('valid', "Création d'un nouveau document.");
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->get($matches[3], $currentDocument, $row))) {
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
				$currentRow++;
				continue;
				
			}
			
			if ($currentDocument === null) {
				$this->addComment('error', "Ligne exclue : création du document annulée.");
				$this->writeComments($row);
				$currentRow++;
				continue;
			} elseif ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->persist($currentDocument);
			}
			
			//get version
			if ($this->parsedCode['get_version']['condition']) {
				
				foreach ($currentDocument->getVersions() as $version) {
					if ($this->compare($this->parsedCode['get_version']['condition'], $version, $row)) {
						$currentVersion = $version;
						$this->addComment('valid', "Version trouvée.");
						break;
					}
				}
				
				if ($currentVersion !== null) {
					
					foreach ($this->parsedCode['get_version']['then'] as $then) {
						
						if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+.\w+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
							
							if ($matches[1] && $this->compare($matches[1], $currentVersion, $row) === false) {
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
							
							if ($matches[1] && $this->compare($matches[1], null, $row) === false) {
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
							
							if ($currentVersion->setPropertyValue($matches[2], $this->get($matches[3], $currentVersion, $row))) {
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
					$currentRow++;
					continue;
				}
				
				if ($currentVersion === null) {
					$this->addComment('error', "Ligne exclue : création de la version annulée.");
					if ($currentDocument->getVersions()->count() == 0) {
						$currentDocument = null;
						$this->addComment('error', "Ligne exclue : création du document annulée.");
					}
					$this->writeComments($row);
					$currentRow++;
					continue;
				} elseif ($this->cacheService->get('automation.ready_to_persist')) {
					$this->entityManager->persist($currentVersion);
				}
				
			}
			
			$this->writeComments($row);
			$countProcessed++;
			$currentRow++;
		}
		
		$this->cacheService->set('automation.new_batch', $newBatch);
		
		if ($newBatch === false) {
			if ($countRow > self::MAX_LINES_PROCESSED) {
				$this->flashBagInterface->add('info', '100% terminés.');
			}
			if ($this->cacheService->get('automation.ready_to_persist')) {
				$this->entityManager->flush();
				$this->flashBagInterface->add('info', 'Import terminé : ' . $countProcessed . '/' . ($currentRow - $firstRow + 1) . ' lignes ont été importées');
			} else {
				$this->flashBagInterface->add('info', 'Vérification terminée : ' . $countProcessed . '/' . ($currentRow - $firstRow + 1) . ' lignes peuvent être importées');
				try {
					$this->workbook->save();
				} catch (Exception $e) {
					$this->flashBagInterface->add('danger', $e->getMessage());
					return false;
				}
			}
		} else {
			$this->flashBagInterface->add('info', round(100 * ($currentRow - $firstRow) / $countRow) . '% terminés.');
			if ($this->cacheService->get('automation.ready_to_persist')) {
				$this->cacheService->set('automation.count_processed', $countProcessed);
				$this->cacheService->set('automation.current_row', $currentRow);
				$this->entityManager->flush();
			} else {
				$this->cacheService->set('automation.count_processed', $countProcessed);
				$this->cacheService->set('automation.current_row', $currentRow);
				try {
					$this->workbook->save();
				} catch (Exception $e) {
					$this->flashBagInterface->add('danger', $e->getMessage());
					return false;
				}
			}
		}
		
		return true;
	}
	
	private function prepare(string $expression, $entity, bool $isRegex=false, Row $row = null): string
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
			$dateFormat = $this->parsedCode['option']['date_format'];
			$date = \DateTime::createFromFormat($dateFormat, $expression);
			if ($date && $date->format($dateFormat) === $expression) {
				$expression = '"' . $date->format('d-m-Y') . '"';
			}
			
			//replace by Excel values
			if ($row !== null) {
				
				if ($isRegex) {
					
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						$cell = $row->getCell($matches[1]);
						if ($date = $this->getDateTime($cell)) {
							return preg_quote($date->format('d-m-Y'));
						} else {
							return preg_quote($cell->getValue());
						}
					}, $expression);
					
				} else {
					
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						$cell = $row->getCell($matches[1]);
						if ($date = $cell->getDateTime()) {
							return '"' . $date->format('d-m-Y') . '"';
						} else {
							return '"' . $cell->getValue() . '"';
						}
					}, $expression);
					
				}
			}
			
			//replace username
			$expression = preg_replace('/(\[username\])/', $this->security->getUser(), $expression);
			
// 			$this->flashBagInterface->add('info', 'avant evaluation : ' . $expression);
// 			dd($entity);
		}
		
		return $expression;
	}
	
	private function compare(string $expression, $entity, Row $row = null): bool
	{
		
		if ($expression == false) return false;
		
		$expression = $this->prepare($expression, $entity, false, $row);
			
		try {
			return $this->expressionLanguage->evaluate($expression);
		} catch (SyntaxError $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return false;
		}
		
	}
	
	private function get(string $expression, $entity, Row $row = null): string
	{
		
		if ($expression == false) return '';
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
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
	
	private function writeComments(Row $row)
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
					$row->setBackgroundColor(self::VALID_COLOR);
					break;
				case 'warning':
					$row->setBackgroundColor(self::WARNING_COLOR);
					break;
				case 'error':
					$row->setBackgroundColor(self::ERROR_COLOR);
					break;
				case 'ignore':
					$row->setBackgroundColor(self::IGNORE_COLOR);
					break;
				default:
					return;
			}
			
			$numberOfLines = 0;
			foreach ($this->comments as $comment) {
				
				$row->addComment($comment['text'] . "\r\n");
				
				if ($comment['col'] !== null) {
					$row->getCell($comment['col'])
						->addComment($comment['text'])
						->setBorder(self::BORDER_COLOR)
					;
				}
				
				$numberOfLines++;
			}
			
			$this->comments = [];
			$row->add();
		}
	}
}

?>