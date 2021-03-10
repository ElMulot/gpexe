<?php

namespace App\Service;

use App\Entity\Program;
use App\Entity\Document;
use App\Entity\Serie;
use App\Entity\Version;
use App\Entity\Progress;
use App\Repository\DocumentRepository;
use App\Repository\SerieRepository;
use App\Repository\StatusRepository;
use App\Repository\VersionRepository;
use App\Service\Excel\Exception;
use App\Service\Excel\Row;
use App\Service\Excel\Workbook;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Contracts\Translation\TranslatorInterface;

class ProgramService
{
	
	const IGNORE_COLOR 			= 'C8C8C8';
	const WARNING_COLOR 		= 'FFE591';
	const ERROR_COLOR 			= 'FF9191';
	const VALID_COLOR 			= 'CCFF91';
	const BORDER_COLOR			= 'FF0000';
	
	private $flashBag;
	
	private $entityManager;
	
	private $documentRepository;
	
	private $serieRepository;
	
	private $statusRespository;
	
	private $versionRepository;
	
	private $cacheService;
	
	private $documentService;
	
	private $fieldService;
	
	private $propertyService;
	
	private $security;
	
	private $filesystem;
	
	private $targetDirectory;
	
	private $comments;
	
	private $parsedCode;
	
	private $workbook;
	
	private $dateFormat;
	
	private $dateRegex;
	
	private $stopWatch;
	
	public function __construct(SessionInterface $session, TranslatorInterface $translator, EntityManagerInterface $entityManager, DocumentRepository $documentRepository, SerieRepository $serieRepository, StatusRepository $statusRespository, VersionRepository $versionRepository, CacheService $cacheService, DocumentService $documentService, FieldService $fieldService, PropertyService $propertyService, Security $security, string $targetDirectory)
	{
		$this->flashBag = $session->getFlashBag();
		$this->translator = $translator;
		$this->entityManager = $entityManager;
		$this->documentRepository = $documentRepository;
		$this->serieRepository = $serieRepository;
		$this->statusRespository = $statusRespository;
		$this->versionRepository = $versionRepository;
		$this->cacheService = $cacheService;
		$this->documentService = $documentService;
		$this->fieldService = $fieldService;
		$this->propertyService = $propertyService;
		$this->security = $security;
		$this->targetDirectory = $targetDirectory;
		$this->comments = [];
		$this->stopWatch = new Stopwatch();
	}
	
	public function preload(Program $program, Request $request, File $file = null): bool
	{
		$this->flashBag->add('info', 'Démarrage de l\'opération');
		$this->parsedCode = $program->getParsedCode();
		
		//setting up cache
		
		$options = $this->parsedCode['option'] ?? [];
		
		switch ($program->getType()) {
				
			case Program::IMPORT:
// 				$firstRow = $this->parsedCode['first_row'];
				
// 				if ($this->cacheService->get('program.ready_to_persist')) {
// 					$this->cacheService->set('program.current_row', $firstRow);
// 					$this->cacheService->set('program.state', 'new_batch');
// 					return true;
// 				}
				
				if ($file !== null) {
					
					//upload file
					try {
						$file = $file->move($this->targetDirectory, 'GPEXE Import.' . $file->getClientOriginalExtension());
					} catch (FileException $e) {
						$this->flashBag->add('danger', $e->getMessage());
						return false;
					}
					$this->cacheService->set('program.file_path', $file->getPathname());
				}
				
			case Program::EXPORT:
			case Program::TASK:
				foreach ($options as $key => $option) {
					$option = $request->request->get('launcher')[$key] ?? false;
					$this->cacheService->set('program.' . $key, $option);
				}
				$this->cacheService->set('program.state', 'load');
				return true;
				
			case Program::PROGRESS:
				$this->cacheService->set('program.state', 'load');
				return true;
				
			default:
				$this->flashBag->add('error', 'Erreur : programme invalide');
				return false;
		}
		
	}
	
	public function load(Program $program): bool
	{
		
		$this->parsedCode = $program->getParsedCode();
		
		switch ($program->getType()) {
			
			case Program::EXPORT:
				$firstRow = $this->parsedCode['first_row'];
				$mainColumn = null;
				$commentsColumn = null;
				$library = $this->cacheService->get('program.library');
				$dateFormat = $this->cacheService->get('program.date_format');
				
				//create workbook
				try {
					$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentsColumn, $dateFormat);
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
				try {
					$this->workbook->new('GPEXE Export', $this->targetDirectory);
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
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
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
				
				$this->cacheService->set('program.current_row', $firstRow + 1);
				$this->cacheService->set('program.file_path', $this->workbook->getPath());
				$this->cacheService->set('program.state', 'new_batch');
				return true;
				
			case Program::IMPORT:
				
				$firstRow = $this->parsedCode['first_row'];
				$mainColumn = $this->parsedCode['main_column'];
				$commentsColumn = $this->parsedCode['comments_column'];
				$library = $this->cacheService->get('program.library');
				$dateFormat = $this->cacheService->get('program.date_format');
				
				$readyToPersist = $this->cacheService->get('program.ready_to_persist');
				
				//open workbook
				try {
					$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentsColumn, $dateFormat);
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
				
				try {
					$this->workbook->open($this->cacheService->get('program.file_path'), $readyToPersist);
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
				$sheet = $this->workbook->getSheet();
				
				//orphans removal
				$this->documentService->removeOrphans();
				$this->entityManager->flush();
				
				//save
				try {
					$this->workbook->save();
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
				
				$this->cacheService->set('program.current_row', $firstRow);
				$this->cacheService->set('program.file_path', $this->workbook->getPath());
				$this->cacheService->set('program.state', 'new_batch');
				return true;
		
			case Program::TASK:
				$this->cacheService->set('program.state', 'new_batch');
				return true;	
				
			case Program::PROGRESS:
			
				//sort rules by value descending order
				usort($this->parsedCode['rules'], function ($a, $b) {
					if ($a['value'] == $b['value']) {
						return 0;
					} else {
						return ($a['value'] > $b['value'])?-1:1;
					}
				});
				
				$this->cacheService->set('program.code', $this->parsedCode);
				$this->cacheService->set('program.state', 'new_batch');
				return true;
				
			default:
				$this->flashBag->add('error', 'Erreur : programme invalide');
				return false;
			
		}
	}
	
	public function execute(Program $program): bool
	{
		switch ($program->getType()) {
			case Program::EXPORT:
				return $this->export($program);
			case Program::IMPORT:
				return $this->import($program);
			case Program::TASK:
				return $this->task($program);
			case Program::PROGRESS:
				return $this->progress($program);
			default:
				return false;
		}
	}
	
	public function unload(Program $program): bool
	{
		
		$options = $this->parsedCode['option'] ?? [];
		foreach (array_keys($options) as $key) {
			$this->cacheService->delete('program.' . $key);
		}
		
		$this->cacheService->delete('program.code');
		$this->cacheService->delete('program.state');
		
		switch ($program->getType()) {
			
			case Program::IMPORT:
				$this->cacheService->delete('program.ready_to_persist');
				$this->cacheService->delete('program.documents_created');
				$this->cacheService->delete('program.versions_created');
			case Program::EXPORT:
				$this->cacheService->delete('program.library');
				$this->cacheService->delete('program.date_format');
				$this->cacheService->delete('program.current_row');
				$this->cacheService->delete('program.file_path');
				$this->cacheService->delete('program.count_processed');
				return true;
				
			case Program::TASK:
				return true;
				
			case Program::PROGRESS:
				return true;
				
			default:
				$this->flashBag->add('error', 'Erreur : programme invalide');
				return false;
		}
	}
	
	public function export(Program $program): bool
	{
// 		set_time_limit(500);
		$this->stopWatch->start('export');
		
		$project = $program->getProject();
		$this->parsedCode = $program->getParsedCode();
		
		$firstRow = $this->parsedCode['first_row'];
		$mainColumn = $this->parsedCode['main_column'] ?? null;
		$commentColumn = $this->parsedCode['comment_column'] ?? null;
		
		//cache
		$library = $this->cacheService->get('program.library');
		$dateFormat = $this->cacheService->get('program.date_format');
		$this->setDateFormat($dateFormat);
		$filePath = $this->cacheService->get('program.file_path');
		$currentRow = $this->cacheService->get('program.current_row');
		$countProcessed = (int)$this->cacheService->get('program.count_processed');
		
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('program.' . $key);
		}
		$newBatch = false;
		
		//open workbook
		try {
			$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
		} catch (Exception $e) {
			$this->flashBag->add('danger', $e->getMessage());
			return false;
		}
		try {
			$this->workbook->open($filePath);
		} catch (Exception $e) {
			$this->flashBag->add('danger', $e->getMessage());
			return false;
		}
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		
		foreach ($series as $serie) {
			foreach ($serie->getDocuments() as $document) {
				foreach ($document->getVersions() as $version) {
					$row = $sheet->getRow($currentRow);
					
					//exclude
					foreach ($this->parsedCode['exclude'] as $exclude) {
						if ($this->compare($exclude, $version)) {
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
		
		$event = $this->stopWatch->stop('export');
		
		//update cache
		if ($newBatch === false) {
			$this->cacheService->set('program.state', 'completed');
			$this->flashBag->add('success', 'Export réussi. ' . ($row->getAddress() - $firstRow - 1) . '/' .  $countProcessed . ' lignes exportées (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)');
		} else {
			$this->cacheService->set('program.state', 'new_batch');
			$this->flashBag->add('success', ($row->getAddress() - $firstRow - 1) . '/' .  $countProcessed . ' lignes exportées (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)');
			$this->cacheService->set('program.count_processed', $countProcessed);
			$this->cacheService->set('program.current_row', $row->getAddress() + 1);
		}
		
		try {
			$this->workbook->save();
		} catch (Exception $e) {
			$this->flashBag->add('danger', $e->getMessage());
			return false;
		}
		
		return true;
	}
	
	public function import(Program $program): bool
	{
		set_time_limit(500);
		$this->stopWatch->start('import');
		$project = $program->getProject();
		$this->parsedCode = $program->getParsedCode();
		
		$firstRow = $this->parsedCode['first_row'];
		$mainColumn = $this->parsedCode['main_column'] ?? null;
		$commentColumn = $this->parsedCode['comment_column'] ?? null;
		$library = $this->cacheService->get('program.library');
		$readyToPersist = $this->cacheService->get('program.ready_to_persist');
		$matches = null;
		
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		if ($defaultStatus === null) {
			$this->flashBag->add('error', 'Pas de status par défaut.');
			return false;
		}
		
		//cache
		$filePath = $this->cacheService->get('program.file_path');
		$dateFormat = $this->cacheService->get('program.date_format');
		$this->setDateFormat($dateFormat);
		$currentRow = $this->cacheService->get('program.current_row');
		$countProcessed = (int)$this->cacheService->get('program.count_processed');
		$documentsCreated = (int)$this->cacheService->get('program.documents_created');
		$versionsCreated = (int)$this->cacheService->get('program.versions_created');
		
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('program.' . $key);
		}
		$newBatch = false;
		
		//open workbook
		try {
			$this->workbook = new Workbook($library, $firstRow, $mainColumn, $commentColumn, $dateFormat);
		} catch (Exception $e) {
			$this->flashBag->add('danger', $e->getMessage());
			return false;
		}
		
		try {
			$this->workbook->open($filePath, $readyToPersist);
		} catch (Exception $e) {
			$this->flashBag->add('danger', $e->getMessage());
			return false;
		}
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
		//$series = [];
		
		while ($row = $sheet->getRow($currentRow)) {
			
			if ($row->getCell($this->workbook->getMainColumn())->isEmpty()) {
				break;
			}
			
			if ($row->getAddress() - $this->cacheService->get('program.current_row') >= $this->cacheService->get('program.rows_per_batch')) {
				$newBatch = true;
				break;
			}
			
			//exclude
			foreach ($this->parsedCode['exclude'] as $exclude) {
				if ($this->compare($exclude, null, $row)) {
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
				
				if ($currentDocument === null) {
					$this->addComment('error', "Ligne exclue : document non trouvé.");
					$this->writeComments($row);
					$currentRow++;
					continue;
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
				if ($currentDocument === null) {
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
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
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
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($matches[1] && $this->compare($matches[1], null, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentDocument === null) {
							$currentDocument = new Document();
							$currentDocument->setSerie($currentSerie);
							$currentSerie->addDocument($currentDocument);
							$this->addComment('valid', "Création d'un nouveau document.");
							$documentsCreated++;
						}
						
						if ($currentDocument->setPropertyValue($matches[2], $this->get($matches[3], $currentDocument, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'document.name' || $matches[2] == 'document.reference') {
							$this->addComment('error', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentSerie->removeDocument($currentDocument);
							$currentDocument = null;
							$this->addComment('error', "Ligne exclue : création du document annulée.");
							$documentsCreated--;
							
							$this->writeComments($row);
							$currentRow++;
							continue 2;
						} else {
							$col = $this->getCol($matches[3]);
							$this->addComment('error', "Erreur en écrivant le champ '{$matches[2]}'.", $col);
						}
						
					}
					
				}
				
			} else {
				
				$this->addComment('error', "Ligne exclue : document non trouvé.");
				$this->writeComments($row);
				$currentRow++;
				continue;
				
			}
			
			//get version
			foreach ($currentDocument->getVersions() as $version) {
				if ($this->compare($this->parsedCode['get_version']['condition'], $version, $row)) {
					$currentVersion = $version;
					$this->addComment('valid', "Version trouvée.");
					break;
				}
			}
			
			if ($currentVersion !== null) {
				
				foreach ($this->parsedCode['get_version']['then'] as $then) {
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
						
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
					
					if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
						
						if ($matches[1] && $this->compare($matches[1], null, $row) === false) {
							$this->addComment('valid', "Condition '{$matches[1]}' non validée.");
							continue;
						}
						
						if ($currentVersion === null) {
							
							$currentVersion = new Version();
							
							if ($lastVersion = $currentDocument->getLastVersion()) {
								
								$currentVersion
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
							$versionsCreated++;
						}
						
						if ($currentVersion->setPropertyValue($matches[2], $this->get($matches[3], $currentVersion, $row))) {
							$this->addComment('valid', "Champ '{$matches[2]}' mis à jour.");
						} elseif ($matches[2] == 'version.name' || $matches[2] == 'version.date') {
							$this->addComment('warning', "Erreur en écrivant le champ '{$matches[2]}'.");
							$currentDocument->removeVersion($currentVersion);
							$currentVersion = null;
							$this->addComment('error', "Ligne exclue : création de la version annulée.");
							
							if ($currentDocument->getVersions()->count() == 0) {
								$currentSerie->removeDocument($currentDocument);
								$currentDocument = null;
								$this->addComment('error', "Ligne exclue : création du document annulée.");
								$documentsCreated--;
							}
							
							$versionsCreated--;
							$this->writeComments($row);
							$currentRow++;
							continue 2;
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
			
			if ($readyToPersist) {
				if ($currentVersion !== null) {
					$this->entityManager->persist($currentVersion);
				} elseif ($currentDocument !== null) {
					$this->entityManager->persist($currentDocument);
				} elseif ($currentSerie !== null) {
					$this->entityManager->persist($currentSerie);
				}
			}
			
			$this->writeComments($row);
			$countProcessed++;
			$currentRow++;
		}
		
		$event = $this->stopWatch->stop('import');
		$this->flashBag->add('info', ($currentRow - $firstRow) . ' lignes analysées (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)');
		
		if ($newBatch === false) {
			
			$this->cacheService->set('program.state', 'completed');
			
			if ($readyToPersist) {
				$this->entityManager->flush();
				$this->flashBag->add('success', 'Import terminé : ' . $countProcessed . '/' . ($currentRow - $firstRow) . ' lignes ont été exploitées');
				$this->flashBag->add('success', $documentsCreated . ' documents ont été créés');
				$this->flashBag->add('success', $versionsCreated . ' révisions ont été créées');
			} else {
				$this->flashBag->add('success', 'Vérification terminée : ' . $countProcessed . '/' . ($currentRow - $firstRow) . ' lignes peuvent être importées');
				$this->flashBag->add('success', $documentsCreated . ' documents peuvent être créés');
				$this->flashBag->add('success', $versionsCreated . ' révisions peuvent être créées');
				try {
					$this->workbook->save();
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
			}
		} else {
			
			$this->cacheService->set('program.state', 'new_batch');
			$this->cacheService->set('program.count_processed', $countProcessed);
			$this->cacheService->set('program.current_row', $currentRow);
			
			if ($readyToPersist) {
				$this->entityManager->flush();
			} else {
				
				try {
					$this->workbook->save();
				} catch (Exception $e) {
					$this->flashBag->add('danger', $e->getMessage());
					return false;
				}
			}
		}
		
		return true;
	}
	
	public function task(Program $program): bool
	{
// 		set_time_limit(500);

		$this->stopWatch->start('export');
		
		$project = $program->getProject();
		$this->parsedCode = $program->getParsedCode();
		$readyToPersist = $this->cacheService->get('program.ready_to_persist');
		$matches = null;
		
		$options = [];
		foreach (array_keys($this->parsedCode['option'] ?? []) as $key) {
			$options[$key] = $this->cacheService->get('program.' . $key);
		}
		
		$this->setDateFormat('d-m-Y');
		$countProcessed = 0;
		$countUpdated = 0;
		$newBatch = false;
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
// 		$series = [];
		
		foreach ($series as $serie) {
			foreach ($serie->getDocuments() as $document) {
				foreach ($document->getVersions() as $version) {
					
					//exclude
					foreach ($this->parsedCode['exclude'] as $exclude) {
						if ($this->compare($exclude, $version)) {
							$countProcessed++;
							continue 2;
						}
					}
					
					$versionEdited = false;
					
					foreach ($this->parsedCode['update'] as $update) {
						
						if ($update['condition'] == '' || $this->compare($update['condition'], $version)) {
							
							foreach ($update['then'] as $then) {
								
								if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $then, $matches) === 1) {
									
									if ($matches[1] && $this->compare($matches[1], $version, $row) === false) {
										continue;
									}
									
									if ($version->setPropertyValue($matches[2], $this->get($matches[3], $version))) {
										$versionEdited = true;
									}
									
								}
								
							}
							
						} else {
							
							foreach ($update['else'] as $else) {
								
								if (preg_match('/(?:\(([^()]+)\)\?)*\[(\w+[.\w+]+)\]\s*\=\s*(.+)/', $else, $matches) === 1) {
									
									if ($matches[1] && $this->compare($matches[1], $version, $row) === false) {
										continue;
									}
									
									if ($version->setPropertyValue($matches[2], $this->get($matches[3], $version))) {
										$versionEdited = true;
									}
									
								}
								
							}
							
						}
						
					}
					
					$countProcessed++;
					if ($versionEdited === true) {
						$countUpdated++;
					}
				}
			}
		}
		
		$event = $this->stopWatch->stop('export');
		
		if ($newBatch === false) {
			
			$this->cacheService->set('program.state', 'completed');
			
			if ($readyToPersist) {
				$this->entityManager->flush();
				$this->flashBag->add('success', 'Tâche réussie. ' . $countUpdated . '/' .  $countProcessed . ' entrées modifiées (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)');
			} else {
				$this->flashBag->add('success', 'Vérification terminée. ' . $countUpdated . '/' .  $countProcessed . ' entrées seront modifiées (' . $event->getDuration()/1000 . ' s; ' . $event->getMemory()/1048576 . ' Mo)');
			}
			
		} else {
			
			$this->cacheService->set('program.state', 'new_batch');
			$this->cacheService->set('program.count_processed', $countProcessed);
			
		}
		
		return true;
	}
	
	public function progress(Program $program): array
	{
// 		set_time_limit(500);
		$project = $program->getProject();
		$progress = [];
		
		//cache
		$this->setDateFormat('d-m-Y');
		$this->parsedCode = $this->cacheService->get('program.code');
		
		//load datas
		$series = $this->serieRepository->getHydratedSeries($project);
// 		$series = [];
		foreach ($series as $serie) {
			
			$countProcessed = 0;
			
			$progress[$serie->getId()] = 0;
			
			foreach ($serie->getDocuments() as $document) {
				
				$countValidated = [];
				$hasVersionNotExcluded = false;
				$maxValue = 0;
				
				foreach ($document->getVersions() as $version) {
					
					foreach ($this->parsedCode['exclude'] as $exclude) {
						if ($this->compare($exclude, $version)) {
							continue 2;
						}
					}
					
					if ($hasVersionNotExcluded === false) {
						$countProcessed++;
						$hasVersionNotExcluded = true;
					}
					
					foreach ($this->parsedCode['rules'] as $key => $rule) {
						
						foreach ($rule['conditions'] as $condition) {
							if ($condition && $this->compare($condition, $version) === false) {
								continue 2;
							}
						}
						
						$countValidated[$key] = ($countValidated[$key] ?? 0) + 1;
						
						if ($countValidated[$key] >= $rule['count']) {
							$maxValue = max($maxValue, $rule['value']);
							break;
						}
					}
				}
				$progress[$serie->getId()] += $maxValue;
			}
			
			if ($countProcessed > 0) {
				$progress[$serie->getId()] /= $countProcessed;
			} else {
				$progress[$serie->getId()] = 0;
			}
		}
		
		return $progress;
	}
	
	public function automation(Program $program): bool
	{
		switch ($program->getType()) {
			
			case Program::PROGRESS:
				if ($this->load($program) === false) {
					return false;
				}
				
				$project = $program->getProject();
				$series = $this->serieRepository->getSeriesByProject($project);
				$values = $this->progress($program);
				foreach ($values as $serieId => $value) {
					foreach ($series as $serie) {
						if ($serie->getId() == $serieId) {
							$progress = new Progress();
							$progress->setValue($value);
							$progress->setSerie($serie);
							$progress->setProgram($program);
							$this->entityManager->persist($progress);
							break;
						}
					}
				}
				
				return true;
				
			default:
				return false;
				
		}
	}
	
	private function prepare(string $expression, $entity, bool $isRegex=false, Row $row = null): string
	{
		if ($expression) {
			
			if ($isRegex) {
				
				//convert any litteral date (syntax: "date" according to dateFormat)
				$expression = preg_replace_callback($this->dateRegex, function ($matches) {
					$date = \DateTime::createFromFormat($this->dateFormat, $matches[1]);
					if ($date && $date->format($this->dateFormat) === $matches[1]) {
						return preg_quote($date->format('d-m-Y'));
					}
				}, $expression);
				
				//replace by property value
				if (($entity instanceof Serie || $entity instanceof Document || $entity instanceof Version) && $entity) {
					$expression = preg_replace_callback('/\[(\w+[.\w+]+)\]/', function($matches) use ($entity) {
						return preg_quote($this->propertyService->toString($entity->getPropertyValue($matches[1])));
					}, $expression);
				}
				
				//replace by Excel values
				if ($row !== null) {
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						$cell = $row->getCell($matches[1]);
						if ($date = $cell->getDateTime()) {
							return preg_quote($date->format('d-m-Y'));
						} else {
							return preg_quote($cell->getValue());
						}
					}, $expression);
				}
				
			} else {
				
				//replacements
				$expression = str_replace('$', '', $expression);
				$expression = str_ireplace(' and ', ' && ', $expression);
				$expression = str_ireplace(' or ', ' || ', $expression);
				$expression = str_ireplace('[user.name]', '"' . $this->security->getUser() . '"', $expression);
				$expression = str_replace('[date.now]', '"' . (new \DateTime())->format('d-m-Y') . '"', $expression);
				
				//regex (syntax: "/regex/" or /regex/)
				$expression = preg_replace_callback('/\s+"*\/(\S*)\/"*/', function ($matches) use ($entity, $row) {
					return ' "/' . $this->prepare($matches[1], $entity, true, $row) . '/"';
				}, $expression);
				
				//convert any litteral date (syntax: "date" according to dateFormat)
				$expression = preg_replace_callback($this->dateRegex, function ($matches) {
					$date = \DateTime::createFromFormat($this->dateFormat, $matches[1]);
					if ($date && $date->format($this->dateFormat) === $matches[1]) {
						return '"' . $date->format('d-m-Y') . '"';
					}
				}, $expression);
				
				//replace by property value
				if (($entity instanceof Serie || $entity instanceof Document || $entity instanceof Version) && $entity) {
					$expression = preg_replace_callback('/\[(\w+[.\w+]+)\]/', function($matches) use ($entity) {
						return '"' . $this->propertyService->toString($entity->getPropertyValue($matches[1])) . '"';
					}, $expression);
				}
				
				//replace by Excel values
				if ($row !== null) {
					$expression = preg_replace_callback('/\[([A-Z]{1,2})\]/', function($matches) use ($row) {
						$cell = $row->getCell($matches[1]);
						if ($date = $cell->getDateTime()) {
							return '"' . $date->format('d-m-Y') . '"';
						} else {
							return '"' . $cell->getValue() . '"';
						}
					}, $expression);
				}
				
				//date add/sub
				$expression = preg_replace_callback('/"(\d{2}-\d{2}-\d{4})"\s*([+-])\s*(\d+)([ymd])*/i', function ($matches) {
					$date = new \DateTime($matches[1]);
					if ($dateInterval = new \DateInterval('P' . $matches[3] . strtoupper($matches[4]))) {
						switch ($matches[2]) {
							case "+":
								return '"' . $date->add($dateInterval)->format('d-m-Y') . '"';
							case "-":
								return '"' . $date->sub($dateInterval)->format('d-m-Y') . '"';
						}
					}
				}, $expression);
				
			}
			
// 			$this->flashBag->add('info', 'avant evaluation : ' . $expression);
// 			dd($entity);
		}
		
		return $expression;
	}
	
	private function compare(string $expression, $entity, Row $row = null): bool
	{
		
		if ($expression == false) return false;
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
		//dates comparison
		$expression = preg_replace('/"(\d{2}-\d{2}-\d{4})"/', '(new \DateTime("$1"))', $expression);
		
		//remplace true and false by "Yes" and "No"
		$expression = preg_replace('/(={2,3}\s*)true/', '$1"' . $this->translator->trans('Yes') . '"', $expression);
		$expression = preg_replace('/true(\s*={2,3})/', '"' . $this->translator->trans('Yes') . '"$1', $expression);
		$expression = preg_replace('/(={2,3}\s*)false/', '$1"' . $this->translator->trans('No') . '"', $expression);
		$expression = preg_replace('/false(\s*={2,3})/', '"' . $this->translator->trans('No') . '"$1', $expression);
		
		//regex
		$expression = preg_replace_callback('/"([^"]+)"\s+matches\s+\"(\/\S*\/)\"/', function ($matches) {
			$subExpr = $matches[1];
			$pattern = $matches[2];
			return 'preg_match("' . $pattern . '", "' . $subExpr . '")';
		}, $expression);
		
		return (bool)$this->evaluate($expression);
		
	}
	
	private function get(string $expression, $entity, Row $row = null): string
	{
		
		if ($expression == false) return '';
		
		$expression = $this->prepare($expression, $entity, false, $row);
		
		//dates output
		$expression = preg_replace_callback('/"(\d{2}-\d{2}-\d{4})"/', function($matches) {
			$date = new \DateTime($matches[1]);
			return '"' . $date->format($this->dateFormat) . '"';
		}, $expression);
		
		//regex
		$expression = preg_replace_callback('/"([^"]+)"\s+get\s+\"(\/\S*\/)\"/', function ($matches) {
			$subExpr = $matches[1];
			$pattern = $matches[2];
			if (preg_match($pattern, $subExpr, $matches) === 1) {
				if (count($matches) > 1) {
					return '"' . $matches[1] . '"';
				} else {
					return '"' . $matches[0] . '"';
				}
			} else {
				return '""';
			}
		}, $expression);
		
		return (string)$this->evaluate($expression);
	}
	
	private function evaluate($expression)
	{
		// 		try {
		// 			return $this->expressionLanguage->evaluate($expression);
		// 		} catch (SyntaxError $e) {
		// 			$this->flashBag->add('danger', $e->getMessage());
		// 			return false;
		// 		}
		
		try {
			return eval('return ' . $expression . ';');
		} catch (\ParseError $e) {
			$this->flashBag->add('danger', $e->getMessage() . " :\n" . $expression);
			return false;
		}
	}
	
	private function getCol($expression): ?string
	{
		$matches = [];
		if (preg_match('/\[([A-Z]{1,2})\]/', $expression, $matches) === 1) {
			return $matches[1];
		}
		return null;
	}
	
	private function addComment($type, $text, $col = null)
	{
		
		if ($this->cacheService->get('program.ready_to_persist') == false) {
			$this->comments[] = [
				'type' => $type,
				'text' => $text,
				'col' => $col,
			];
		}
	}
	
	private function writeComments(Row $row)
	{
		
		if ($this->cacheService->get('program.ready_to_persist') == false) {
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
		}
	}
	
	private function setDateFormat($dateFormat)
	{
		$this->dateFormat = $dateFormat;
		$this->dateRegex = preg_quote($dateFormat, '/');
		$this->dateRegex = str_replace(['N', 'w', 'L'], '\d', $this->dateRegex);
		$this->dateRegex = str_replace(['j', 'n', 'g', 'G'], '\d{1,2}', $this->dateRegex);
		$this->dateRegex = str_replace(['d', 'W', 'm', 't', 'y', 'h', 'H', 'i', 's'], '\d{2}', $this->dateRegex);
		$this->dateRegex = str_replace(['z', 'B', 'v'], '\d{1,3}', $this->dateRegex);
		$this->dateRegex = str_replace(['o', 'Y'], '\d{4}', $this->dateRegex);
		$this->dateRegex = str_replace(['u'], '\d{1,6}', $this->dateRegex);
		$this->dateRegex = str_replace(['S', 'a', 'A'], '\S{2}', $this->dateRegex);
		$this->dateRegex = str_replace(['D', 'M'], '\S{3}', $this->dateRegex);
		$this->dateRegex = str_replace(['l', 'F'], '\S+', $this->dateRegex);
		$this->dateRegex = '/"(' . $this->dateRegex . ')"/';
	}
	
}

?>