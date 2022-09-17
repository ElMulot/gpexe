<?php

namespace App\Service;

use App\Entity\Document;
use App\Entity\Enum\ProgramTypeEnum;
use App\Entity\Program;
use App\Entity\User;
use App\Entity\Version;
use App\Repository\DocumentRepository;
use App\Repository\SerieRepository;
use App\Repository\StatusRepository;
use App\Repository\VersionRepository;
use App\Service\Code\ProgramCache;
use App\Service\Excel\Row;
use App\Service\Excel\Workbook;
use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Stopwatch\Stopwatch;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

class ProgramService
{
	
	final const IGNORE_COLOR 			= 'C8C8C8';
	final const WARNING_COLOR 			= 'FFE591';
	final const ERROR_COLOR 			= 'FF9191';
	final const VALID_COLOR 			= 'CCFF91';
	final const BORDER_COLOR			= 'FF0000';
	
	private $comments = [];
	
	private $programCache;
	
	private $workbook;
	
	private $dateRegex;
	
	private $stopWatch;
	
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly EntityManagerInterface $entityManager,
								private readonly FlashBagInterface $flashBag,
								private readonly SerieRepository $serieRepository,
								private readonly DocumentRepository $documentRepository,
								private readonly VersionRepository $versionRepository,
								private readonly StatusRepository $statusRespository,
								private readonly DocumentService $documentService,
								private readonly FieldService $fieldService,
								private readonly PropertyService $propertyService,
								private readonly Security $security,
								private readonly string $targetPath)
	{
		$this->stopWatch = new Stopwatch();
		$this->programCache = new ProgramCache($this->fieldService);
	}
	
	public function getCache()
	{
		return $this->programCache;
	}
	
	public function preload(Program $program, ?Request $request = null, File $file = null)
	{
		
		switch ($program->getType()) {
			case ProgramTypeEnum::IMPORT:
			case ProgramTypeEnum::EXPORT:
			case ProgramTypeEnum::TASK:
				$this->flashBag->add('info', 'Démarrage de l\'opération');
				break;
		}
			
		//setting up cache
		if ($this->getUser() === null) {
			$userName = $program->getLastModifiedBy()->getName();
		} else {
			$userName = $this->getUser()->getName();
		}
		$this->programCache->setParameter('current_user', $userName);
		$this->programCache->setProgram($program);
		
		foreach ($program->getParsedCode('option') as $name => $value) {
			if ($request !== null && array_key_exists($name, $request->request->get('launcher')) === true) {
				$this->programCache->setOption($name, $request->request->get('launcher')[$name]);
			} elseif ($this->programCache->getOption($name) == true) {
				$this->programCache->setOption($name, '0');
			}
		}
		
		switch ($program->getType()) {
			
			case ProgramTypeEnum::IMPORT:
				if ($file === null) {
					throw new \Exception('Erreur : aucun fichier sélectionné');
				}
				//upload file
				try {
					//$file = $file->move($this->targetPath, 'GPEXE Import.' . $file->getClientOriginalExtension());
					$file = $file->move($this->targetPath, 'GPEXE Import.' . $file->guessExtension());
				} catch (FileException) {
					throw new \Exception('Erreur : impossible d\'écrire sur le serveur');
				}
				$this->programCache->setParameter('file_path', $file->getPathname());
				
			case ProgramTypeEnum::EXPORT:
			case ProgramTypeEnum::TASK:
			case ProgramTypeEnum::PROGRESS:
				$this->programCache->setStatus(ProgramCache::LOAD);
				break;
				
			default:
				throw new \Exception('Erreur : programme invalide');
		}
		
		
		
	}
	
	public function load(Program $program)
	{
		
		switch ($program->getType()) {
			
			case ProgramTypeEnum::EXPORT:
				$firstRow = $this->programCache->getParameter('first_row');
				$cache = $this->programCache->getCache();
				
				//create workbook
				$this->workbook = new Workbook($this->programCache);
				$this->workbook->new('GPEXE Export', $this->targetPath);
				$sheet = $this->workbook->getSheet();
				
				//headers
				$fields = [];
				$row = $sheet->getRow($firstRow);
				
				foreach ($cache['headers'] as $header) {
					if (array_key_exists($header->eval(), $fields) === true) {
						$title = $fields[$header->eval()]['title'];
						$width = $fields[$header->eval()]['default_width'];
					} elseif ($header->eval() != '') {
						$title = $header->eval();
						$width = 10;
					} else {
						$title = '';
						$width = 10;
					}
					try {
						$row->getCell($header->getVariable())
							->setWidth(1.5 * $width)
							->setValue($title);
						;
					} catch (\Error $e) {
						$this->flashBag->add('danger', $e->getMessage());
					}
				}
				$row->setFormatHeader();
				$row->add();
				
				//save
				$this->workbook->save();
				
				$this->programCache->setParameter('file_path', $this->workbook->getPath());
				$this->programCache->setStatus(ProgramCache::NEW_BATCH);
				break;
				
			case ProgramTypeEnum::IMPORT:
				
				//open workbook
				$this->workbook = new Workbook($this->programCache);
				$this->workbook->open($this->programCache->getParameter('file_path'), $this->programCache->getOption('ready_to_persist'));
				$sheet = $this->workbook->getSheet();
				
				//orphans removal
				$this->documentService->removeOrphans();
				$this->entityManager->flush();
				
				//save
				$this->workbook->save();
				
// 				$this->programCache->setParameter('file_path', $this->workbook->getPath());
				$this->programCache->setStatus(ProgramCache::NEW_BATCH);
				break;
		
			case ProgramTypeEnum::TASK:
				$this->programCache->setStatus(ProgramCache::NEW_BATCH);
				break;	
				
			case ProgramTypeEnum::PROGRESS:
				$this->programCache->setStatus(ProgramCache::NEW_BATCH);
				break;
				
			default:
				throw new \Exception('Erreur : programme invalide');
			
		}
	}
	
	public function execute(Program $program)
	{
		switch ($program->getType()) {
			case ProgramTypeEnum::EXPORT:
				$this->export($program);
				break;
			case ProgramTypeEnum::IMPORT:
				$this->import($program);
				break;
			case ProgramTypeEnum::TASK:
				$this->task($program);
				break;
			case ProgramTypeEnum::PROGRESS:
				$this->progress($program);
				break;
			default:
				throw new \Exception('Erreur : programme invalide');
		}
	}
	
	public function unload()
	{
		$this->programCache = null;
		ProgramCache::clear();
	}
	
	public function export(Program $program)
	{
		set_time_limit(500);
		$this->stopWatch->start('export');
		
		//cache
		$project = $program->getProject();
		$cache = $this->programCache->getCache();
		$firstRow = $this->programCache->getParameter('first_row');
		$countProcessed = (int)$this->programCache->getParameter('count_processed');
		$newBatch = false;
		
		//open workbook
		$this->workbook = new Workbook($this->programCache);
		$this->workbook->open($this->programCache->getParameter('file_path'));
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$documents = $this->documentRepository->getDocumentsByProject($project);
// 		$documents = [];
		
		$currentRow = $firstRow+1;
		
		foreach ($documents as $document) {
			foreach ($document->getVersions() as $version) {
				$row = $sheet->getRow($currentRow);
				
				//exclude
				foreach ($cache['exclude'] as $exclude) {
					if ($exclude->eval($version) == true) {
						$countProcessed++;
						continue 2;
					}
				}
				
				foreach ($cache['write'] as $write) {
					if ($write['condition']->eval($version) == true) {
						foreach ($write['then'] as $then) {
							try {
								$row->getCell($then->getVariable())->setValue($then->eval($version));
							} catch (\Error $e) {
								$this->addComment('warning', $e->getMessage(), $then->getCol());
							}
						}
					} else {
						foreach ($write['else'] as $else) {
							try {
								$row->getCell($else->getVariable())->setValue($else->eval($version));
							} catch (\Error $e) {
								$this->addComment('warning', $e->getMessage(), $else->getCol());
							}
						}
					}
				}
				
				$row->add();
				$currentRow++;
				$countProcessed++;
				
			}
		}
		
		$event = $this->stopWatch->stop('export');
		
		//update cache
		if ($newBatch === false) {
			$this->programCache->setStatus(ProgramCache::COMPLETED);
			$this->flashBag->add('success', sprintf('Export réussi. %d/%d lignes exportées (%d s; %d Mo)', $currentRow - $firstRow - 1, $countProcessed, $event->getDuration()/1000, $event->getMemory()/1_048_576));
		} else {
			$this->programCache->setStatus(ProgramCache::NEW_BATCH);
			$this->flashBag->add('success', sprintf('%d/%d lignes exportées (%d s; %d Mo)',$currentRow - $firstRow - 1, $countProcessed, $event->getDuration()/1000, $event->getMemory()/1_048_576));
			$this->programCache->setParameter('count_processed', $countProcessed);
			$this->programCache->setParameter('first_row', $currentRow + 1);
		}
		
		$this->workbook->save();
	}
	
	public function import(Program $program)
	{
		set_time_limit(500);
		$this->stopWatch->start('import');
		
		//cache
		$project = $program->getProject();
		$cache = $this->programCache->getCache();
		$firstRow = $this->programCache->getParameter('first_row');
		$countProcessed = (int)$this->programCache->getParameter('count_processed') ?? 0;
		$countUpdated = (int)$this->programCache->getParameter('count_updated') ?? 0;
		$documentsCreated = (int)$this->programCache->getParameter('documents_created');
		$versionsCreated = (int)$this->programCache->getParameter('versions_created');
		$newBatch = false;
		$defaultStatus = $this->statusRespository->getDefaultStatus($project);
		$defaultSerie = $this->serieRepository->getDefaultSerie($project);
		if ($defaultStatus === null) {
			throw new \Exception('Erreur : pas de status par défaut');
		}
		
		//open workbook
		$this->workbook = new Workbook($this->programCache);
		$this->workbook->open($this->programCache->getParameter('file_path'), $this->programCache->getOption('ready_to_persist'));
		$sheet = $this->workbook->getSheet();
		
		//load datas
		$documents = $this->documentRepository->getDocumentsByProject($project);
// 		$documents = [];
		
		$currentRow = $firstRow;
		
		while ($row = $sheet->getRow($currentRow)) {
			
			if ($row->getCell($this->programCache->getParameter('main_column'))->isEmpty()) {
				break;
			}
			
			if ($currentRow - $firstRow >= $this->programCache->getOption('rows_per_batch')) {
				$newBatch = true;
				break;
			}
			
			//exclude
			foreach ($cache['exclude'] as $exclude) {
				if ($exclude->eval(null, $row) === true) {
					$row->setBackgroundColor(self::IGNORE_COLOR);
					$this->addComment('ignore', 'Ligne exclue via l\'instruction "Exclude".');
					$this->writeComments($row);
					$countProcessed++;
					$currentRow++;
					continue 2;
				}
			}
			
			$currentSerie = $defaultSerie;
			$currentDocument = null;
			$currentVersion = null;
			
			foreach ($documents as $document) {
				if ($cache['get_document']['condition']->eval($document, $row) == true) {
					$currentDocument = $document;
					$currentSerie = $document->getSerie();
					$this->addComment('valid', 'Document trouvé.');
					break;
				}
			}
			
			if ($currentDocument !== null) {
				
				foreach ($cache['get_document']['then'] as $then) {
					
					try {
						$currentDocument->setPropertyValue($then->getVariable(), $then->eval($currentDocument, $row));
						$this->addComment('valid', sprintf('Champ "%s" mis à jour.', $then->getVariable()));
					} catch (\Error $e) {
						$this->addComment('warning', $e->getMessage(), $then->getCol());
					}
					
				}
				
			} elseif ($this->programCache->getOption('update_only') == false) {
				
				foreach ($cache['get_document']['else'] as $else) {
					
					if ($currentDocument === null) {
						$currentDocument = new Document();
						$currentDocument->setSerie($currentSerie);
						$currentSerie->addDocument($currentDocument);
						$this->addComment('valid', 'Création d\'un nouveau document.');
						$documentsCreated++;
					}
					
					try {
						$currentDocument->setPropertyValue($else->getVariable(), $else->eval($currentDocument, $row));
						$this->addComment('valid', sprintf('Champ "%s" mis à jour.', $else->getVariable()));
					} catch (\Error $e) {
						$this->addComment('warning', $e->getMessage(), $else->getCol());
					}
					
				}
				
			} else {
				$this->addComment('error', 'Ligne exclue : document non trouvé.');
				$this->writeComments($row);
				$countProcessed++;
				$currentRow++;
				continue;
				
			}
			
			if ($currentDocument->getName() == false || $currentDocument->getReference() == false) {
				$this->addComment('error', 'Les champs "document.name" et "document.reference" sont obligatoires.');
				$this->addComment('error', 'Ligne exclue : création du document annulée.');
				$currentSerie->removeDocument($currentDocument);
				$currentDocument = null;
				$documentsCreated--;
				$this->writeComments($row);
				$countProcessed++;
				$currentRow++;
				continue;
			}
			
			//get version
			foreach ($currentDocument->getVersions() as $version) {
				if ($cache['get_version']['condition']->eval($version, $row) == true) {
					$currentVersion = $version;
					$this->addComment('valid', 'Version trouvée.');
					break;
				}
			}
			
			if ($currentVersion !== null) {
				
				foreach ($cache['get_version']['then'] as $then) {
					
					try {
						$currentVersion->setPropertyValue($then->getVariable(), $then->eval($currentVersion, $row));
						$this->addComment('valid', sprintf('Champ "%s" mis à jour.', $then->getVariable()));
					} catch (\Error $e) {
						$this->addComment('warning', $e->getMessage(), $then->getCol());
					}
					
				}
				
			} elseif ($this->programCache->getOption('update_only') == false) {
				
				
				foreach ($cache['get_version']['else'] as $else) {
						
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
								try {
									$currentVersion->setMetadataValue($metadataItem->getMetadata(), $metadataItem->getValue());
								} catch (\Error $e) {
									$this->addComment('warning', $e->getMessage());
								}
							}
							foreach ($lastVersion->getMetadataValues() as $metadataValue) {
								try {
									$currentVersion->setMetadataValue($metadataValue->getMetadata(), $metadataValue->getValue());
								} catch (\Error $e) {
									$this->addComment('warning', $e->getMessage());
								}
							}
							
						} else {
							
							$currentVersion->setStatus($defaultStatus);
							
						}
						
						$currentVersion->setDocument($currentDocument);
						$currentDocument->addVersion($currentVersion);
						$this->addComment('valid', 'Création d\'une nouvelle version.');
						$versionsCreated++;
					}
					
					try {
						$currentVersion->setPropertyValue($else->getVariable(), $else->eval($currentVersion, $row));
						$this->addComment('valid', sprintf('Champ "%s" mis à jour.', $else->getVariable()));
					} catch (\Error $e) {
						$this->addComment('warning', $e->getMessage(), $else->getCol());
					}
					
				}
				
			} else {
				
				$this->addComment('warning', 'Version non trouvée.');
				$this->writeComments($row);
				$countProcessed++;
				$currentRow++;
				continue;
				
			}
			
			
			if ($currentVersion->getName() == false || $currentVersion->getDate() == false) {
				$this->addComment('error', 'Les champs "version.name" et "version.date" sont obligatoires.');
				$this->addComment('error', 'Ligne exclue : création de la version annulée.');
				$currentDocument->removeVersion($currentVersion);
				$currentVersion = null;
				
				if ($currentDocument->getVersions()->count() == 0) {
					$currentSerie->removeDocument($currentDocument);
					$currentDocument = null;
					$this->addComment('error', 'Ligne exclue : création du document annulée.');
					$documentsCreated--;
				}
				
				$versionsCreated--;
				$this->writeComments($row);
				$countProcessed++;
				$currentRow++;
				continue;
			}
			
			if ($this->programCache->getParameter('ready_to_persist') == true) {
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
			$countUpdated++;
			$currentRow++;
		}
		
		$event = $this->stopWatch->stop('import');
		$this->flashBag->add('info', sprintf('%d lignes analysées (%d s; %d Mo)', $currentRow - $firstRow, $event->getDuration()/1000, $event->getMemory()/1_048_576));
		
		if ($newBatch === false) {
			
			$this->programCache->setStatus(ProgramCache::COMPLETED);
			
			if ($this->programCache->getOption('ready_to_persist') == true) {
				$this->entityManager->flush();
				$this->flashBag->add('success', sprintf('Import terminé : %d/%d lignes ont été exploitées', $countUpdated, $countProcessed));
				$this->flashBag->add('success', sprintf('%d documents ont été créés', $documentsCreated));
				$this->flashBag->add('success', sprintf('%d révisions ont été créées', $versionsCreated));
			} else {
				$this->flashBag->add('success', sprintf('Vérification terminée : %d/%d lignes peuvent être importées', $countUpdated, $countProcessed));
				$this->flashBag->add('success', sprintf('%d documents peuvent être créés', $documentsCreated));
				$this->flashBag->add('success', sprintf('%d révisions peuvent être créées', $versionsCreated));
				
				$this->workbook->save();
			}
			
		} else {
			
			$this->programCache->setStatus(ProgramCache::NEW_BATCH);
			$this->programCache->setParameter('first_row', $currentRow);
			$this->programCache->setParameter('count_processed', $countProcessed);
			$this->programCache->setParameter('count_updated', $countUpdated);
			$this->programCache->setParameter('documents_created', $documentsCreated);
			$this->programCache->setParameter('versions_created', $versionsCreated);
			
			if ($this->programCache->getOption('ready_to_persist') == true) {
				$this->entityManager->flush();
			} else {
				$this->workbook->save();
			}
		}
	}
	
	public function task(Program $program)
	{
// 		set_time_limit(500);
		$this->stopWatch->start('task');
		
		$project = $program->getProject();
		$cache = $this->programCache->getCache();
		$countProcessed = 0;
		$countUpdated = 0;
		$newBatch = false;
		
		//load datas
		$documents = $this->documentRepository->getDocumentsByProject($project);
// 		$documents = [];
		
		foreach ($documents as $document) {
			foreach ($document->getVersions() as $version) {
				
				//exclude
				foreach ($cache['exclude'] as $exclude) {
					if ($exclude->eval($version) == true) {
						$countProcessed++;
						continue 2;
					}
				}
				
				$versionEdited = false;
				
				foreach ($cache['update'] as $update) {
					
					if ($update['condition']->eval($version) == true) {
						
						foreach ($update['then'] as $then) {
							try {
								$version->setPropertyValue($then->getVariable(), $then->eval($version));
								$versionEdited = true;
							} catch (\Error $e) {
								$this->flashBag->add('danger', $e->getMessage());
							}
						}
						
					} else {
						
						foreach ($update['else'] as $else) {
							try {
								$version->setPropertyValue($else->getVariable(), $else->eval($version));
								$versionEdited = true;
							} catch (\Error $e) {
								$this->flashBag->add('danger', $e->getMessage());
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
		
		$event = $this->stopWatch->stop('task');
		
		if ($newBatch === false) {
			
			$this->programCache->setStatus(ProgramCache::COMPLETED);
			
			if ($this->programCache->getOption('ready_to_persist') == true) {
				$this->entityManager->flush();
				$this->flashBag->add('success', sprintf('Tâche réussie. %d/%d entrées modifiées (%d s; %d Mo)', $countUpdated, $countProcessed, $event->getDuration()/1000, $event->getMemory()/1_048_576));
			} else {
				$this->flashBag->add('success', sprintf('Tâche réussie. %d/%d entrées seront modifiées (%d s; %d Mo)', $countUpdated, $countProcessed, $event->getDuration()/1000, $event->getMemory()/1_048_576));
			}
			
		} else {
			
			$this->programCache->setStatus(ProgramCache::NEW_BATCH);
			$this->programCache->setParameter('count_processed', $countProcessed);
			
		}
	}
	
	public function progress(Program $program, array $series = null): array
	{
// 		set_time_limit(500);
		
		//cache
		$project = $program->getProject();
		$cache = $this->programCache->getCache();
		$progress = [];
		
		//load datas
		if ($series !== null) {
			$documents = $this->documentRepository->getDocumentsBySeries($series);
		} else {
			$documents = $this->documentRepository->getDocumentsByProject($project);
		}
		
// 		$documents = [];
		
		$countProcessed = [];
		$progress = [];
		
		foreach ($documents as $document) {
			
			$serieId = $document->getSerie()->getId();
			
			if (array_key_exists($serieId, $countProcessed) === false) {
				$countProcessed[$serieId] = 0;
			}
			
			if (array_key_exists($serieId, $progress) === false) {
				$progress[$serieId] = 0;
			}
			
			$countValidated = [];
			$hasVersionNotExcluded = false;
			$maxValue = 0;
			
			foreach ($document->getVersions() as $version) {
				
				foreach ($cache['exclude'] as $exclude) {
					if ($exclude->eval($version) == true) {
						continue 2;
					}
				}
				
				if ($hasVersionNotExcluded === false) {
					$countProcessed[$serieId]++;
					$hasVersionNotExcluded = true;
				}
				
				foreach ($cache['rules'] as $key => $rule) {
					
					foreach ($rule['conditions'] as $condition) {
						if ($condition->eval($version) == false) {
							continue 2;
						}
					}
					
					$countValidated[$key] = ($countValidated[$key] ?? 0) + 1;
					if ($countValidated[$key] >= $rule['count']->getValue()) {
						$maxValue = max($maxValue, $rule['value']->getValue());
						break;
					}
				}
				
			}
			
			$progress[$serieId] += $maxValue;
		}
		
		
		array_walk($progress, function(&$item, $key) use ($countProcessed) {
			if ($countProcessed[$key] > 0) {
				$item /= $countProcessed[$key];
			} else {
				$item = 0;
			}
		});
		
		return $progress;
	}
	
	public function exportFromView(array $fields, array $versions, Request $request)
	{
		$this->programCache = new ProgramCache($this->fieldService);
		$this->programCache->setOption('library', 'phpspreadsheet');
		
		$this->workbook = new Workbook($this->programCache);
		$this->workbook->new('GPEXE Export', $this->targetPath);
		$sheet = $this->workbook->getSheet();
		
		//headers
		$row = $sheet->getRow(1);
		$order = $request->query->get('order');
		if ($order == true) {
			asort($order);
			foreach ($fields as $key => $field) {
				if (array_key_exists($field['id'], $order) === true) {
					unset ($fields[$key]);
					$tail = array_splice($fields, $order[$field['id']] - 1);
					$fields = $fields + [$key => $field];
					$fields = $fields + $tail;
				}
			}
		}
		
		$colIndex = 0;
		foreach ($fields as $field) {
			if (in_array($field['id'], array_keys($request->query->get('display'))) === true) {
				$colAddress = Coordinate::stringFromColumnIndex($colIndex + 1);
				$row->getCell($colAddress)
					->setWidth(1.5 * $request->query->get('display')[$field['id']])
					->setValue($field['title'])
				;
				$colIndex++;
			}
		}
		$row->setFormatHeader();
		$row->add();
		
		
		foreach ($versions as $key => $version) {
			$row = $sheet->getRow($key+2);
			$colIndex = 0;
			foreach ($fields as $field) {
				if (in_array($field['id'], array_keys($request->query->get('display'))) === true) {
					$colAddress = Coordinate::stringFromColumnIndex($colIndex + 1);
					$row->getCell($colAddress)->setValue($version[$field['id']]);
					$colIndex++;
				}
			}
			$row->add();
		}
		
		//save
		$this->workbook->save();
		
		$this->programCache->setParameter('file_path', $this->workbook->getPath());
	}
	
	private function addComment($type, $text, $col = null)
	{
		if ($this->programCache->getOption('ready_to_persist') == false) {
			$this->comments[] = [
				'type' => $type,
				'text' => $text,
				'col' => $col,
			];
		}
	}
	
	private function writeComments(Row $row)
	{
		
		if ($this->programCache->getOption('ready_to_persist') == false) {
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
			
			foreach ($this->comments as $comment) {
				
				$row->getCell($this->programCache->getParameter('comments_column'))->addComment($comment['text']);
				
				if ($comment['col'] !== null && $comment['col'] != $this->programCache->getParameter('comments_column')) {
					$row->getCell($comment['col'])
						->addComment($comment['text'])
						->setBorder(self::BORDER_COLOR)
					;
				}
				
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

	public function getUser(): User
	{
		return $this->security->getUser();
	}
	
}

?>