<?php

namespace App\Repository;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\Query\Expr\Join;
use App\Service\RepositoryService;
use App\Service\QueryBuilderService;
use App\Entity\Codification;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Visa;
use Symfony\Component\Stopwatch\Stopwatch;


/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]	findAll()
 * @method Version[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends RepositoryService
{
	
	private $router;
	
	private $visaRepository;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router, VisaRepository $visaRepository)
	{
		parent::__construct($registry, Version::class);
		$this->router = $router;
		$this->visaRepository = $visaRepository;
	}
	
	public function getVersionsCount($codifications, $fields, $series, $project, $request=null): int
	{
		
		$qb = $this->getCoreQB($codifications, $fields, $series, $project, $request);
		
		return $qb
			->select($qb->count('version.id'))
			->getQuery()
			->getSingleScalarResult()
		;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsAsArray($codifications, $fields, $series, $project, $request=null): array
	{
		
		$qb = $this->getCoreQB($codifications, $fields, $series, $project, $request);
		
		if ($request->query) {
			
			if ($request->query->get('sortAsc') || $request->query->get('sortDesc')) {
				$sortedField = $request->query->get('sortAsc') ?? $request->query->get('sortDesc');
				$order = ($request->query->get('sortAsc'))?'ASC':'DESC';
				
				switch ($sortedField) {
					case 'version_name':
						$qb->addOrderBy('version.name', $order);
						break;
						
					case 'document_name':
						$qb->addOrderBy('document.name', $order);
						break;
						
					case 'version_initial_scheduled_date':
						$qb->addOrderBy('version.initialScheduledDate', $order);
						break;
					case 'version_scheduled_date':
						$qb->addOrderBy('version.scheduledDate', $order);
						break;
						
					case 'version_delivery_date':
						$qb->addOrderBy('version.deliveryDate', $order);
						break;
						
					case 'version_writer':
						if ($qb->hasAlias('writer') === false) {
							$qb->leftJoin('version.writer', 'writer');
						}
						$qb->addOrderBy('writer.name', $order);
						break;
						
					case 'version_checker':
						if ($qb->hasAlias('checker') === false) {
							$qb->leftJoin('version.checker', 'checker');
						}
						$qb->addOrderBy('checker.name', $order);
						break;
						
					case 'version_approver':
						if ($qb->hasAlias('approver') === false) {
							$qb->leftJoin('approver.checker', 'approver');
						}
						$qb->addOrderBy('approver.name', $order);
						break;
						
					case 'serie_name':
						$qb->addOrderBy('serie.name', $order);
						break;
						
					case 'serie_company':
						if ($qb->hasAlias('company') === false) {
							$qb->leftJoin('serie.company', 'company');
						}
						$qb->addOrderBy('company.name', $order);
						break;
						
					case 'status_name':
						$qb->addNestedSelect(
							$this->newQB()
								->select('status2.name')
								->from(Status::class, 'status2')
								->where('status2.id = version.status'),
							'status_name'
						);
						$qb->addOrderBy('status_name', $order);
						break;
						
					case 'status_value':
						if ($qb->hasAlias('status') === false) {
							$qb->leftJoin('version.status', 'status');
						}
						$qb->addOrderBy('status.value', $order);
						break;
						
					case 'status_type':
						if ($qb->hasAlias('status') === false) {
							$qb->leftJoin('version.status', 'status');
						}
						$qb->addOrderBy('status.type', $order);
						break;
					
					case (preg_match('/metadata_(\d+)/', $sortedField, $result) === 1):
						
						$id = $result[1];
						
						foreach ($fields as $field) {
							
							if ($sortedField == $field['id']) {
								
								switch ($field['type']) {
									
									case Metadata::BOOLEAN:
									case Metadata::TEXT:
									case Metadata::DATE:
									case Metadata::LINK:
										if ($qb->hasAlias($field['id'] . '_') === false) {
											$qb->leftJoin($field['parent'] . '.metadataValues', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id));
										}
										$qb
											->groupBy('version.id')
											->addOrderBy("MAX({$field['id']}_.value)", $order)
										;
										break;
										
									case Metadata::LIST:
										
										if ($qb->hasAlias($field['id'] . '_') === false) {
											$qb
												->leftJoin($field['parent'] . '.metadataItems', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id))
											;
										}
										$qb
											->groupBy('version.id')
											->addOrderBy("MAX({$field['id']}_.value)", $order)
										;
										break;
										
								}
								break;
							}
						}
						break;
						
					case (preg_match('/visa_(\d+)/', $sortedField, $result) === 1):
						
						$id = $result[1];
						
						foreach ($fields as $field) {
							
							if ($sortedField == $field['id']) {
								if ($qb->hasAlias($field['id'] . '_') === false) {
									
									$subQb = $this->newQB('');
									$visas = $subQb
										->select('visa.id')
										->from(Visa::class, 'visa')
										->andWhere($subQb->eq('visa.project', $project))
										->andWhere($subQb->eq('visa.company', $id))
										->getQuery()
										->getArrayResult()
									;
									
									$qb
										->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in("review_{$id}.visa", $visas))
										->leftJoin("review_{$id}.visa", $field['id'] . '_')
									;
									
								}
								$qb->addOrderBy("{$field['id']}_.name", $order);
								break;
							}
							
						}
						
						break;
				}
			}
			
			//page
			$page = $request->query->get('page');
			
			if ($request->query->get('results_per_page') > 0) {
				$qb
					->setFirstResult(($page -1) * $request->query->get('results_per_page'))
					->setMaxResults($request->query->get('results_per_page'));
			}
			
			$display = array_keys($request->query->all('display') ?? []);
			
			if (array_search('document_reference', $display) !== false || preg_grep('/codification_(\d+)/', $display)) {
				
				foreach ($fields as $field) {
					
					if (preg_match('/codification_(\d+)/', $field['id'], $result) === 1) {
						
						$id = $result[1];
						
						switch ($field['type']) {
							
							case Codification::LIST:
								if ($qb->hasAlias($field['id'] . '_') === false) {
									$qb->innerJoin('document.codificationItems', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
								}
								$qb->addSelect("{$field['id']}_.value AS {$field['id']}");
								break;
								
							case Codification::REGEX:
								if ($qb->hasAlias($field['id']. '_') === false) {
									$qb->innerJoin('document.codificationValues', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
								}
								$qb->addSelect("{$field['id']}_.value AS {$field['id']}");
								break;
						}
						
					}
				}
				
			}
			
			foreach ($display as $name) {
				
				$result = null;
				
				switch ($name) {
					
					case 'version_name':
						$qb->addSelect('version.name AS version_name');
						break;
					
					case 'document_name':
						$qb->addSelect('document.name AS document_name');
						break;
						
					case 'version_initial_scheduled_date':
						$qb->addSelect('version.initialScheduledDate AS version_initial_scheduled_date');
						break;
					
					case 'version_scheduled_date':
						$qb->addSelect('version.scheduledDate AS version_scheduled_date');
						break;
					
					case 'version_delivery_date':
						$qb->addSelect('version.deliveryDate AS version_delivery_date');
						break;
						
					case 'version_is_required':
						$qb->addSelect('version.isRequired as version_is_required');
						break;
						
					case 'version_writer':
						if ($qb->hasAlias('writer') === false) {
							$qb->leftJoin('version.writer', 'writer');
						}
						$qb->addSelect('writer.name as version_writer');
						break;
						
					case 'version_checker':
						if ($qb->hasAlias('checker') === false) {
							$qb->leftJoin('version.checker', 'checker');
						}
						$qb->addSelect('checker.name as version_checker');
						break;
						
					case 'version_approver':
						if ($qb->hasAlias('approver') === false) {
							$qb->leftJoin('version.approver', 'approver');
						}
						$qb->addSelect('approver.name as version_approver');
						break;
					
					case 'serie_name':
						$qb->addSelect('serie.name AS serie_name');
						break;
					
					case 'serie_company':
						if ($qb->hasAlias('company') === false) {
							$qb->leftJoin('serie.company', 'company');
						}
						$qb->addSelect('company.name AS serie_company');
						break;
					
					case 'status_value':
						if ($qb->hasAlias('status') === false) {
							$qb->leftJoin('version.status', 'status');
						}
						$qb->addSelect('status.value AS status_value');
						break;
					
					case 'status_type':
						if ($qb->hasAlias('status') === false) {
							$qb->leftJoin('version.status', 'status');
						}
						$qb->addSelect('status.type AS status_type');
						break;
					
					case (preg_match('/metadata_(\d+)/', $name, $result) === 1):
						
						$id = $result[1];
						
						foreach ($fields as $field) {
							
							if ($name == $field['id']) {
								
								switch ($field['type']) {
									
									case Metadata::BOOLEAN:
									case Metadata::TEXT:
									case Metadata::DATE:
									case Metadata::LINK:
										if ($qb->hasAlias($field['id'] . '_') === false) {
											$qb->leftJoin($field['parent'] . '.metadataValues', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id));
										}
										$qb
											->groupBy('version.id')
											->addSelect("MAX({$field['id']}_.value) AS {$field['id']}")
										;
										break;
										
									case Metadata::LIST:
										
										if ($qb->hasAlias($field['id'] . '_') === false) {
											$qb
												->leftJoin($field['parent'] . '.metadataItems', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id))
											;
										}
										$qb
											->groupBy('version.id')
											->addSelect("MAX({$field['id']}_.value) AS {$field['id']}")
										;
										break;
										
								}
								break;
							}
						}
						break;
						
					case (preg_match('/visa_(\d+)/', $name, $result) === 1):
						
						$id = $result[1];
						
						foreach ($fields as $field) {
							
							if ($name == $field['id']) {
								if ($qb->hasAlias($field['id'] . '_') === false) {
									
									$subQb = $this->newQB('');
									$visas = $subQb
										->select('visa.id')
										->from(Visa::class, 'visa')
										->andWhere($subQb->eq('visa.project', $project))
										->andWhere($subQb->eq('visa.company', $id))
										->getQuery()
										->getArrayResult()
									;
									
									$qb
										->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in("review_{$id}.visa", $visas))
										->leftJoin("review_{$id}.visa", $field['id'] . '_')
									;
									
								}
								$qb->addSelect("{$field['id']}_.name AS {$field['id']}");
								break;
							}
							
						}
						break;
				}
			}
		}
		
		$results = $qb->getQuery()->getArrayResult();
		
		if (array_search('document_reference', $display) !== false) {
			
			foreach ($results as &$result) {
				
				$references = [];
				
				foreach ($codifications as $codification) {
					
					$id = $codification->getId();
					
					if ($codification->isFixed()) {
						
						$references[] = $codification->getValue();
						
					} elseif (array_key_exists("codification_{$id}", $result)) {
						
						if (empty($result["codification_{$id}"]) === false) {
							$references[] = $result["codification_{$id}"];
						}
						
					}
					
				}
				$result['document_reference'] = join($project->getSplitter(), $references);
			}
			
		}
		
		
		if (array_search('document_reference', $display) !== false || preg_grep('/codification_(\d+)/', $display)) {
			
			foreach ($results as &$result) {
				foreach ($fields as $field) {
					if (preg_match('/codification_\d+/', $field['id']) === 1) {
						if (array_search($field['id'], $display) === false) {
							unset ($result[$field['id']]);
						}
					}
				}
			}
			
		}
		
		foreach ($results as &$result) {
			$result['detailUrl'] = $this->router->generate('document_detail', [
				'version' => $result['version_id']
			]);
		}
		
		return $results;
		
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersions($request)
	{
		if ($versionIds = $request->query->get('id')) {
			if (is_array($versionIds)) {
				$qb = $this->newQB('v');
				return $qb->andWhere($qb->in('v.id', $versionIds))
					->getQuery()
					->getResult()
				;
			}
		}
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsByDocument(Document $document)
	{
		$qb = $this->newQB('v');
			
		return $qb
			->addSelect('CASE WHEN v.deliveryDate IS NULL THEN v.scheduledDate ELSE v.deliveryDate END AS HIDDEN date')
			->innerJoin('v.document', 'd')
			->andWhere($qb->eq('d.id', $document->getId()))
			->addOrderBy('date', 'DESC')
			->addOrderBy('v.name', 'DESC')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsByProject(Project $project)
	{
		$qb = $this->newQB('v');
		return $qb->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->andWhere($qb->eq('s.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	public function getProdAlerts(Project $project, User $user)
	{
		
		$subQb = $this->newQB('v1');
		$subQb->select('v1.id')
			->leftJoin(Version::class, 'v2', Join::WITH, 'v1.document = v2.document AND v1.scheduledDate <= v2.scheduledDate AND v1.name < v2.name')
			->innerJoin('v1.status', 's')
			->where($subQb->isNull('v2.scheduledDate'))
			->andWhere($subQb->eq('v1.isRequired', true))
			->andWhere($subQb->eq('v1.writer', $user))
			->andWhere($subQb->neq('s.type', Status::CANCEL))
			->addGroupBy('v1.document')
		;
		
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MIN(DATE_DIFF_WD(v.scheduledDate, CURRENT_DATE())) AS min')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
			->andWhere($qb->in('v.id', $subQb->getQuery()->getArrayResult()))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	public function getCheckAlerts(Project $project, User $user)
	{

		$subQb = $this->newQB('v1');
		$subQb->select('v1.id')
			->leftJoin(Version::class, 'v2', Join::WITH, 'v1.document = v2.document AND v1.deliveryDate <= v2.deliveryDate AND v1.name < v2.name')
			->innerJoin('v1.status', 's')
			->where($subQb->isNull('v2.deliveryDate'))
			->andWhere($subQb->eq('v1.isRequired', false))
			->andWhere($subQb->eq('v1.checker', $user))
			->andWhere($subQb->neq('s.type', Status::CANCEL))
			->addGroupBy('v1.document')
		;
		
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(d.id) AS count, MAX(DATE_DIFF_WD(CURRENT_DATE(), v.deliveryDate)) AS max')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->leftJoin('v.reviews', 'r', Join::WITH, $qb->in('r.visa', $this->visaRepository->getVisasByCompany($project, $user->getCompany())))
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
			->andWhere($qb->isNull('r.user'))
			->andWhere($qb->in('v.id', $subQb->getQuery()->getArrayResult()))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	private function getCoreQB($codifications, $fields, $series, $project, $request): QueryBuilderService
	{
		
		$qb = $this->newQB('version');
		
		$qb->select('version.id AS version_id, document.id AS document_id, serie.id as serie_id')
			->innerJoin('version.document', 'document')
			->innerJoin('document.serie', 'serie')
			->andWhere($qb->in('serie.id', $series))
		;
		
		if ($request->query->all('filter')) {
			
			foreach ($fields as $field) {
				
				if (array_key_exists($field['id'], $request->query->all('filter'))) {
					
					$value = $request->query->all('filter')[$field['id']];
					
					switch ($field['id']) {
						
						case 'document_name':
							$qb->andWhere($qb->like('document.name', $this->likeStatement($value)));
							break;
							
						case 'version_initial_scheduled_date':
							$value = implode(',', $value);
							$result = [];
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->gte('version.initialScheduledDate', new \DateTime($result[1])));
							}
							if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->lte('version.initialScheduledDate', new \DateTime($result[1])));
							}
							break;
							
						case 'version_scheduled_date':
							$value = implode(',', $value);
							$result = [];
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->gte('version.scheduledDate', new \DateTime($result[1])));
							}
							if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->lte('version.scheduledDate', new \DateTime($result[1])));
							}
							break;
							
						case 'version_delivery_date':
							$value = implode(',', $value);
							$result = [];
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->gte('version.deliveryDate', new \DateTime($result[1])));
							}
							if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
								$qb->andWhere($qb->lte('version.deliveryDate', new \DateTime($result[1])));
							}
							break;
							
						case 'version_is_required':
							$qb->andWhere($qb->eq('version.isRequired', ($value != "0")));
							break;
							
						case 'version_writer':
							$qb->andWhere($qb->in('version.writer', $value));
							break;
							
						case 'version_checker':
							$qb->andWhere($qb->in('version.checker', $value));
							break;
							
						case 'version_approver':
							$qb->andWhere($qb->in('version.approver', $value));
							break;
							
						case 'serie_name':
							$qb->andWhere($qb->in('serie.id', $value));
							break;
							
						case 'serie_company':
							$qb->andWhere($qb->in('serie.company', $value));
							break;
							
						case 'status_value':
							
							if ($qb->hasAlias('status') === false) {
								$qb->innerJoin('version.status', 'status');
							}
							$qb->andWhere($qb->in('status.id', $value));
							break;
							
						case 'status_type':
							if ($qb->hasAlias('status') === false) {
								$qb->innerJoin('version.status', 'status');
							}
							$qb->andWhere($qb->in('status.type', $value));
							break;
						
						case (preg_match('/codification_(\d+)/', $field['id'], $result) === 1):
							
							$id = $result[1];
							
							switch ($field['type']) {

								case Codification::LIST:
									if ($qb->hasAlias($field['id'] . '_') === false) {
										$qb->innerJoin('document.codificationItems', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
									}
									break;
									
								case Codification::REGEX:
									if ($qb->hasAlias($field['id']. '_') === false) {
										$qb->innerJoin('document.codificationValues', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
									}
									break;
							}
							
							switch ($field['type']) {
								
								case Codification::LIST:
									$qb->andWhere($qb->in($field['id'] . '_.id', $value));
									break;
									
								case Codification::REGEX:
									$qb->andWhere($qb->like($field['id'] . '_.value', $this->likeStatement($value)));
									break;
									
							}
							break;
							
						case (preg_match('/metadata_(\d+)/', $field['id'], $result) === 1):
							
							$id = $result[1];
							
							switch ($field['type']) {
								
								case Metadata::BOOLEAN:
								case Metadata::TEXT:
								case Metadata::DATE:
									if ($qb->hasAlias($field['id'] . '_') === false) {
										$qb->leftJoin($field['parent'] . '.metadataValues', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id));
									}
									break;
									
								case Metadata::LIST:
									if ($qb->hasAlias($field['id'] . '_') === false) {
										$qb->leftJoin($field['parent'] . '.metadataItems', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.metadata', $id));
									}
									break;
									
							}
							
							switch ($field['type']) {
								
								case Metadata::BOOLEAN:
									if ($value == '1') {
										$qb->andWhere($qb->eq($field['id'] . '_.value', 1));
									} else {
										$qb->andWhere($qb->orX(
												$qb->eq($field['id'] . '_.value', 0),
												$qb->isNull($field['id'] . '_.value')
											)
										);
									}
									break;
									
								case Metadata::TEXT:
									$qb->andWhere($qb->like($field['id'] . '_.value', $this->likeStatement($value)));
									break;
									
								case Metadata::DATE:
									
									foreach ($value as $v) {
										$r = [];
										if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $v, $r) === 1) {
											$qb->andWhere($qb->gte("STR_TO_DATE({$field['id']}_.value, '%d-%m-%Y')", \DateTime::createFromFormat('d-m-Y', $r[1])));
										} elseif (preg_match('/<(\d{2}-\d{2}-\d{4})/', $v, $r) === 1) {
											$qb->andWhere($qb->lte("STR_TO_DATE({$field['id']}_.value, '%d-%m-%Y')", \DateTime::createFromFormat('d-m-Y', $r[1])));
										}
									}
									
									break;
									
								case Metadata::LIST:
									$qb->andWhere($qb->in($field['id'] . '_.id', $value));
									
									break;
									
							}
							break;
							
						case (preg_match('/visa_(\d+)/', $field['id'], $result) === 1):
							
							$id = $result[1];
							
							if ($qb->hasAlias($field['id'] . '_') === false) {
								
								$subQb = $this->newQB('');
								$visas = $subQb
									->select('visa.id')
									->from(Visa::class, 'visa')
									->andWhere($subQb->eq('visa.project', $project))
									->andWhere($subQb->eq('visa.company', $id))
									->getQuery()
									->getArrayResult()
								;
								
								$qb
									->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in("review_{$id}.visa", $visas))
									->leftJoin("review_{$id}.visa", $field['id'] . '_')
								;
							}
							$qb->andWhere($qb->in($field['id'] . '_.id', $value));
							break;
					}
				}
			}
		}
		
		if ($request->query->all('display')) {
			
			if (array_key_exists('version_first_scheduled', $request->query->all('display'))) {
				$qb->leftJoin(Version::class, 'vfs', Join::WITH, 'version.document = vfs.document AND vfs.isRequired = true AND (version.scheduledDate > vfs.scheduledDate OR (version.scheduledDate = vfs.scheduledDate AND version.name < vfs.name))')
					->andWhere($qb->isNull('vfs.scheduledDate'))
				;
			}
			
			if (array_key_exists('version_last_scheduled', $request->query->all('display'))) {
				$qb->leftJoin(Version::class, 'vls', Join::WITH, 'version.document = vls.document AND vls.isRequired = true AND (version.scheduledDate < vls.scheduledDate OR (version.scheduledDate = vls.scheduledDate AND version.name < vls.name))')
				->andWhere($qb->isNull('vls.scheduledDate'))
				;
			}
			
			if (array_key_exists('version_last_delivered', $request->query->all('display'))) {
				$qb->leftJoin(Version::class, 'vld', Join::WITH, 'version.document = vld.document AND vld.isRequired = false AND (version.deliveryDate < vld.deliveryDate OR (version.deliveryDate = vld.deliveryDate AND version.name < vld.name))')
					->andWhere($qb->isNull('vld.deliveryDate'))
				;
			}
		}
		
		return $qb;
	}
	
	private function likeStatement(string $value): string
	{
		return str_replace('%%', '%', '%' . str_replace('*', '%', $value) . '%');
		
	}
	
}
