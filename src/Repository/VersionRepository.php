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
use App\Entity\Enum\CodificationTypeEnum;
use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\StatusTypeEnum;
use App\Entity\Serie;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Visa;
use App\Service\DateService;
use Symfony\Component\Stopwatch\Stopwatch;
use Spatie\Regex\Regex;
use Symfony\Component\HttpFoundation\Request;

/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]	findAll()
 * @method Version[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry, private readonly UrlGeneratorInterface $router, private readonly VisaRepository $visaRepository)
	{
		parent::__construct($registry, Version::class);
	}
	
	public function getVersionsCount($codifications, $fields, $project, $request=null): int
	{
		
		if ($request->query == false) {
			return 0;
		}

		$qb = $this->getCoreQB($codifications, $fields, $project, $request);
		
		//count cannot work if version_date alias is defined
		return is_countable($qb->getQuery()->getResult()) ? count($qb->getQuery()->getResult()) : 0;
	}
	
	/**
	 * Undocumented function
	 *
	 * @param Codifications[] $codifications
	 * @param array $fields
	 * @param Project $project
	 * @param Request|null $request
	 * @return array
	 */
	public function getVersionsAsArray(array $codifications, array $fields, Project $project, Request $request=null): array
	{
		if ($request == null || $request->query == false) {
			return [];
		}
		
		$qb = $this->getCoreQB($codifications, $fields, $project, $request);

		//highlight
		if ($request->query->has('highlight') && $qb->hasAlias('version_is_required') === false) {
			$qb->addSelect('version.required AS version_required');
		}
		
		if ($request->query->has('sortAsc') || $request->query->has('sortDesc')) {
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
					
				case 'version_date':
					if ($qb->hasAlias('version_date_') === false) {
						$qb->addSelect("IF(version.required = false, version.deliveryDate, version.scheduledDate) AS HIDDEN version_date_");
					}
					
					$qb->addOrderBy('version_date_', $order);
					break;
					
				case 'writer_name':
					if ($qb->hasAlias('writer') === false) {
						$qb->leftJoin('version.writer', 'writer');
					}
					$qb->addOrderBy('writer.name', $order);
					break;
					
				case 'checker_name':
					if ($qb->hasAlias('checker') === false) {
						$qb->leftJoin('version.checker', 'checker');
					}
					$qb->addOrderBy('checker.name', $order);
					break;
					
				case 'approver_name':
					if ($qb->hasAlias('approver') === false) {
						$qb->leftJoin('version.approver', 'approver');
					}
					$qb->addOrderBy('approver.name', $order);
					break;
					
				case 'serie_name':
					$qb->addOrderBy('serie.name', $order);
					break;
					
				case 'company_name':
					if ($qb->hasAlias('company') === false) {
						$qb->leftJoin('serie.company', 'company');
					}
					$qb->addOrderBy('company.name', $order);
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
				
				case (($result = Regex::match('/metadata_(\d+)/', $sortedField))->hasMatch()):
					
					$id = $result->group(1);
					
					foreach ($fields as $field) {
						
						if ($sortedField == $field['id']) {
							
							switch ($field['type']) {
								
								case MetadataTypeEnum::BOOL:
								case MetadataTypeEnum::TEXT:
								case MetadataTypeEnum::REGEX:
								case MetadataTypeEnum::LINK:
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($field['id'] . '_.value')
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id'] . '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataElements', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									$qb->addOrderBy($field['id'], $order);
									break;
									
								case MetadataTypeEnum::DATE:
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($this->strToDate($field['id'] . '_.value'))
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id'] . '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataElements', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									$qb->addOrderBy($field['id'], $order);
									break;
									
								case MetadataTypeEnum::LIST:
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($field['id'] . '_items.value')
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id'] . '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataChoices', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									$qb->addOrderBy($field['id'], $order);
									break;
									
							}
							break;
						}
					}
					break;
					
				case (($result = Regex::match('/visa_(\d+)/', $sortedField))->hasMatch()):
					
					$id = $result->group(1);
					
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
									->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in('review_' . $id . '.visa', $visas))
									->leftJoin('review_' . $id . '.visa', $field['id'] . '_')
								;
								
							}
							$qb->addOrderBy($field['id'] . '_.name', $order);
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
				
				if (($result = Regex::match('/codification_(\d+)/', $field['id']))->hasMatch()) {
					
					$id = $result->group(1);
					
					switch ($field['type']) {
						
						case CodificationTypeEnum::LIST:
							if ($qb->hasAlias($field['id'] . '_') === false) {
								$qb->innerJoin('document.codificationChoices', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
							}
							$qb->addSelect(sprintf('%1$s_.value AS %1$s', $field['id']));
							break;
							
						case CodificationTypeEnum::TEXT:
						case CodificationTypeEnum::REGEX:
							if ($qb->hasAlias($field['id']. '_') === false) {
								$qb->innerJoin('document.codificationElements', $field['id'] . '_', Join::WITH, $qb->eq($field['id'] . '_.codification', $id));
							}
							$qb->addSelect(sprintf('%1$s_.value AS %1$s', $field['id']));
							break;
					}
					
				}
			}

		}
			
		foreach ($display as $name) {
			
			switch ($name) {
				
				case 'version_name':
					$qb->addSelect('version.name AS version_name');
					break;
				
				case 'document_name':
					$qb->addSelect('document.name AS document_name');
					break;
					
				case 'version_initial_scheduled_date':
					$qb->addSelect($this->dateFormat('version.initialScheduledDate') . ' AS version_initial_scheduled_date');
					break;
				
				case 'version_scheduled_date':
					$qb->addSelect($this->dateFormat('version.scheduledDate') . ' AS version_scheduled_date');
					break;
				
				case 'version_delivery_date':
					$qb->addSelect($this->dateFormat('version.deliveryDate') . ' AS version_delivery_date');
					break;
					
				case 'version_date':
					$qb->addSelect($this->dateFormat('IF(version.required = false, version.deliveryDate, version.scheduledDate)') . ' AS version_date');
					break;
					
				case 'version_is_required':
					if ($qb->hasAlias('version_is_required') === false) {
						$qb->addSelect('version.required AS version_is_required');
					}
					break;
					
				case 'writer_name':
					if ($qb->hasAlias('writer') === false) {
						$qb->leftJoin('version.writer', 'writer');
					}
					$qb->addSelect('writer.name AS writer_name');
					break;
					
				case 'checker_name':
					if ($qb->hasAlias('checker') === false) {
						$qb->leftJoin('version.checker', 'checker');
					}
					$qb->addSelect('checker.name AS checker_name');
					break;
					
				case 'approver_name':
					if ($qb->hasAlias('approver') === false) {
						$qb->leftJoin('version.approver', 'approver');
					}
					$qb->addSelect('approver.name AS approver_name');
					break;
				
				case 'serie_name':
					$qb->addSelect('serie.name AS serie_name');
					break;
				
				case 'company_name':
					if ($qb->hasAlias('company') === false) {
						$qb->leftJoin('serie.company', 'company');
					}
					$qb->addSelect('company.name AS company_name');
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
				
				case (($result = Regex::match('/metadata_(\d+)/', $name))->hasMatch()):
					
					$id = $result->group(1);
					
					foreach ($fields as $field) {
						
						if ($name == $field['id']) {
							
							switch ($field['type']) {
								
								case MetadataTypeEnum::BOOL:
								case MetadataTypeEnum::TEXT:
								case MetadataTypeEnum::REGEX:
								case MetadataTypeEnum::LINK:
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($field['id'] . '_.value')
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id'] . '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataElements', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									break;
									
								case MetadataTypeEnum::DATE:
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($this->strToDate($field['id'] . '_.value'))
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id'] . '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataElements', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									break;
									
								case MetadataTypeEnum::LIST:
									
									if ($qb->hasAlias($field['id']) === false) {
										$qb->addNestedSelect(
											$this->newQB()
												->select($field['id'] . '_.value')
												->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['id']. '_')
												->leftJoin($field['parent'] . '_' . $field['id'] . '_.metadataChoices', $field['id'] . '_')
												->andWhere($qb->eq($field['id'] . '_.metadata', $id))
												->andWhere($field['parent'] . '_' . $field['id'] . '_.id = ' . $field['parent'] . '.id'),
											$field['id']
										);
									}
									break;
									
							}
							break;
						}
					}
					break;
					
				case (($result = Regex::match('/visa_(\d+)/', $name))->hasMatch()):
					
					$id = $result->group(1);
					
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
									->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in('review_' . $id . '.visa', $visas))
									->leftJoin('review_' . $id . '.visa', $field['id'] . '_')
								;
								
							}
							$qb->addSelect(sprintf('%1$s_.name AS %1$s', $field['id']));
							break;
						}
						
					}
					break;
			}
		}
		
		$results = $qb->getQuery()->getArrayResult();
		
		if (array_search('document_reference', $display) !== false) {

			foreach ($results as &$result) {
				
				$references = [];
				
				foreach ($codifications as $codification) {
					if ($codification->isFixed() === true) {
						$references[] = $codification->getDefaultValue();
					} else {
						$id = $codification->getId();
						$references[] = $result['codification_' . $id] ?? '';
					}
					
				}
				$result['document_reference'] = join($project->getSplitter(), $references);
			}
			
		}
		
		
		if (array_search('document_reference', $display) !== false || preg_grep('/codification_(\d+)/', $display)) {
			
			foreach ($results as &$result) {
				foreach ($fields as $field) {
					if (Regex::match('/codification_\d+/', $field['id'])->hasMatch()) {
						if (array_search($field['id'], $display) === false) {
							unset ($result[$field['id']]);
						}
					}
				}
			}
			
		}
		
		array_walk($results, function(&$item) use ($request, $project) {
// 			if (array_key_exists('version_date', $item)) {
// 				$item['version_date'] = Regex::replace('/(\d{4})-(\d{2})-(\d{2})/', '${3}-${2}-${1}', $item['version_date'])->result();
// 			}
			
			if ($highlight = $request->query->get('highlight')) {
				
				if ($item['version_is_required'] && array_key_exists($highlight, $item)) {
					if ($item[$highlight] instanceof \DateTimeInterface) {
						$date = $item[$highlight];
					} else {
						$date = DateService::fromInternalPattern($item[$highlight]);
					}
					if ($date < new \DateTime('today')) {
						$item['highlight'] = 'FF919180';
					} elseif ($date->getWorkingDays() <= $project->getProdWarningLimit()) {
						$item['highlight'] = 'FFE59180';
					} elseif ($date->getWorkingDays() <= $project->getProdDangerLimit()) {
						$item['highlight'] = 'FFFF9180';
					} else {
						$item['highlight'] = 'CBFF9180';
					}
				}
				
			}
			$item['detailUrl'] = $this->router->generate('documentDetail', [
				'version' => $item['version_id']
			]);
		});
		
		return $results;
		
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsByIds(?array $ids = [])
	{
		$qb = $this->newQb('v');
		return $qb
			->andWhere($qb->in('v.id', $ids))
			->getQuery()
			->getResult()
		;
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
			->leftJoin(Version::class, 'v2', Join::WITH,
				'v1.document = v2.document AND v2.required = true AND (
					v1.scheduledDate > v2.scheduledDate OR (
						v1.scheduledDate = v2.scheduledDate AND v1.name > v2.name
					)
				)')
			->innerJoin('v1.status', 's')
			->where($subQb->isNull('v2.scheduledDate'))
			->andWhere($subQb->eq('v1.required', true))
			->andWhere($subQb->eq('v1.writer', $user))
			->andWhere($subQb->neq('s.type', StatusTypeEnum::CANCEL))
			->addGroupBy('v1.document')
		;
		
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.required, count(v.id) AS count, MIN(DATE_DIFF_WD(v.scheduledDate, CURRENT_DATE())) AS min')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->in('c.type', [CompanyTypeEnum::MAIN_CONTRACTOR, CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER]))
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
			->leftJoin(Version::class, 'v2', Join::WITH, 
				'v1.document = v2.document AND v2.required = false AND (
					v1.deliveryDate < v2.deliveryDate OR (
						v1.deliveryDate = v2.deliveryDate AND v1.name < v2.name
					)
				)')
			->innerJoin('v1.status', 's')
			->where($subQb->isNull('v2.deliveryDate'))
			->andWhere($subQb->eq('v1.required', false))
			->andWhere($subQb->eq('v1.checker', $user))
			->andWhere($subQb->neq('s.type', StatusTypeEnum::CANCEL))
			->addGroupBy('v1.document')
		;
		
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.required, count(d.id) AS count, MAX(DATE_DIFF_WD(CURRENT_DATE(), v.deliveryDate)) AS max')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->leftJoin('v.reviews', 'r', Join::WITH, $qb->in('r.visa', $this->visaRepository->getVisasByCompany($project, $user->getCompany())))
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->in('c.type', [CompanyTypeEnum::MAIN_CONTRACTOR, CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER]))
			->andWhere($qb->isNull('r.user'))
			->andWhere($qb->in('v.id', $subQb->getQuery()->getArrayResult()))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	private function getCoreQB($codifications, $fields, $project, Request $request): QueryBuilderService
	{
		
		$qb = $this->newQB('version');
		
		$qb->select('version.id AS version_id, document.id AS document_id, serie.id AS serie_id')
			->innerJoin('version.document', 'document')
			->innerJoin('document.serie', 'serie');
			
		foreach ($fields as $field) {
			
			if ($request->query->has($field['key']) === true) {
				
				$value = $request->query->all()[$field['key']];
				
				switch ($field['key']) {
					
					case 'document_name':
						$qb->andWhere($qb->like('document.name', $this->like($value)));
						break;
						
					case 'version_initial_scheduled_date':
						$value = implode(',', $value);
						if (($result = Regex::match('/>(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							$qb->andWhere($qb->gte('version.initialScheduledDate', new \DateTime($result->group(1))));
						}
						if (($result = Regex::match('/<(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							$qb->andWhere($qb->lte('version.initialScheduledDate', new \DateTime($result->group(1))));
						}
						break;
						
					case 'version_scheduled_date':
						$value = implode(',', $value);
						if (($result = Regex::match('/>(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
								$qb->andWhere($qb->orX($qb->gte('version.scheduledDate', new \DateTime($result->group(1))), $qb->isNull('version.scheduledDate')));
							} else {
								$qb->andWhere($qb->gte('version.scheduledDate', new \DateTime($result->group(1))));
							}
						}
						if (($result = Regex::match('/<(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
								$qb->andWhere($qb->orX($qb->lte('version.scheduledDate', new \DateTime($result->group(1))), $qb->isNull('version.scheduledDate')));
							} else {
								$qb->andWhere($qb->lte('version.scheduledDate', new \DateTime($result->group(1))));
							}
						}
						if (($result = Regex::match('/^0/', $value))->hasMatch()) {
							$qb->andWhere($qb->isNull('version.scheduledDate'));
						}
						break;
						
					case 'version_delivery_date':
						$value = implode(',', $value);
						if (($result = Regex::match('/>(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
								$qb->andWhere($qb->orX($qb->gte('version.deliveryDate', new \DateTime($result->group(1))), $qb->isNull('version.deliveryDate')));
							} else {
								$qb->andWhere($qb->gte('version.deliveryDate', new \DateTime($result->group(1))));
							}
						}
						if (($result = Regex::match('/<(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
								$qb->andWhere($qb->orX($qb->lte('version.deliveryDate', new \DateTime($result->group(1))), $qb->isNull('version.deliveryDate')));
							} else {
								$qb->andWhere($qb->lte('version.deliveryDate', new \DateTime($result->group(1))));
							}
						}
						if (($result = Regex::match('/^0/', $value))->hasMatch()) {
							$qb->andWhere($qb->isNull('version.deliveryDate'));
						}
						break;
						
					case 'version_date':
						$qb->addSelect("IF(version.required = false, version.deliveryDate, version.scheduledDate) AS HIDDEN version_date_");
						$value = implode(',', $value);
						if (($result = Regex::match('/>(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							$qb->andHaving($qb->gte('version_date_', new \DateTime($result->group(1))));
						}
						if (($result = Regex::match('/<(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
							$qb->andHaving($qb->lte('version_date_', new \DateTime($result->group(1))));
						}
						break;
						
					case 'version_is_required':
						$qb->andWhere($qb->eq('version.required', ($value == "1")));
						break;
						
					case 'writers':
						if (in_array(0, $value)) {
							$qb->andWhere($qb->orX($qb->in('version.writer', $value), $qb->isNull('version.writer')));
						} else {
							$qb->andWhere($qb->in('version.writer', $value));
						}
						break;
						
					case 'checkers':
						if (in_array(0, $value)) {
							$qb->andWhere($qb->orX($qb->in('version.checker', $value), $qb->isNull('version.checker')));
						} else {
							$qb->andWhere($qb->in('version.checker', $value));
						}
						break;
						
					case 'approvers':
						if (in_array(0, $value)) {
							$qb->andWhere($qb->orX($qb->in('version.approver', $value), $qb->isNull('version.approver')));
						} else {
							$qb->andWhere($qb->in('version.approver', $value));
						}
						break;
						
					case 'series':
						dump('ok');
						$qb->andWhere($qb->in('serie.id', $value));
						break;
						
					case 'companies':
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
					
					case (($result = Regex::match('/codification_(\d+)/', $field['key']))->hasMatch()):
						
						$id = $result->group(1);
						
						switch ($field['type']) {

							case CodificationTypeEnum::LIST:
								$qb->innerJoin('document.codificationChoices', $field['key'] . '_', Join::WITH, $qb->eq($field['key'] . '_.codification', $id));
								break;
								
							case CodificationTypeEnum::REGEX:
								$qb->innerJoin('document.codificationElements', $field['key'] . '_', Join::WITH, $qb->eq($field['key'] . '_.codification', $id));
								break;
						}
						
						switch ($field['type']) {
							
							case CodificationTypeEnum::LIST:
								$qb->andWhere($qb->in($field['key'] . '_.id', $value));
								break;
								
							case CodificationTypeEnum::REGEX:
								$qb->andWhere($qb->like($field['key'] . '_.value', $this->like($value)));
								break;
								
						}
						break;
						
					case (($result = Regex::match('/metadata_(\d+)/', $field['key']))->hasMatch()):
						
						$id = $result->group(1);
						
						switch ($field['type']) {
							
							case MetadataTypeEnum::BOOL:
							case MetadataTypeEnum::TEXT:
							case MetadataTypeEnum::REGEX:
							case MetadataTypeEnum::LINK:
								$qb->addNestedSelect(
									$this->newQB()
										->select($field['key'] . '_.value')
										->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['key'] . '_')
										->leftJoin($field['parent'] . '_' . $field['key'] . '_.metadataElements', $field['key'] . '_')
										->andWhere($qb->eq($field['key'] . '_.metadata', $id))
										->andWhere($field['parent'] . '_' . $field['key'] . '_.id = ' . $field['parent'] . '.id'),
										$field['key']
									);
								break;
							case MetadataTypeEnum::DATE:
								$qb->addNestedSelect(
									$this->newQB()
										->select($this->strToDate($field['key'] . '_.value'))
										->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['key'] . '_')
										->leftJoin($field['parent'] . '_' . $field['key'] . '_.metadataElements', $field['key'] . '_')
										->andWhere($qb->eq($field['key'] . '_.metadata', $id))
										->andWhere($field['parent'] . '_' . $field['key'] . '_.id = ' . $field['parent'] . '.id'),
										$field['key']
									);
								break;
								
							case MetadataTypeEnum::LIST:
								$qb->addNestedSelect(
									$this->newQB()
										->select($field['key'] . '_.id AS HIDDEN ' . $field['key'] . '_id')
										->from($this->getParentClass($field['parent']), $field['parent'] . '_' . $field['key'] . '_')
										->leftJoin($field['parent'] . '_' . $field['key'] . '_.metadataChoices', $field['key'] . '_')
										->andWhere($qb->eq($field['key'] . '_.metadata', $id))
										->andWhere($field['parent'] . '_' . $field['key'] . '_.id = ' . $field['parent'] . '.id'),
										$field['key'] . '_id'
									);
								break;
								
						}
						
						switch ($field['type']) {
							
							case MetadataTypeEnum::BOOL:
								if ($value == '1') {
									$qb->andHaving($qb->eq($field['key'] . '_value', 1));
								} else {
									$qb->andHaving($qb->isNull($field['key'] . '_value'));
								}
								break;
								
							case MetadataTypeEnum::TEXT:
							case MetadataTypeEnum::REGEX:
								$qb->andHaving($qb->like($field['key'] . '_value', $this->like($value)));
								break;
								
							case MetadataTypeEnum::DATE:
								$value = implode(',', $value);
								if (($r = Regex::match('/>(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
									if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
										$qb->andHaving(
											$qb->orX(
												$qb->gte($field['key'] . '_value', new \DateTime($r->group(1))),
												$qb->isNull($field['key'] . '_value')
											)
										);
									} else {
										$qb->andHaving($qb->gte($field['key'] . '_value', new \DateTime($r->group(1))));
									}
								}
								if (($r = Regex::match('/<(\d{2}-\d{2}-\d{4})/', $value))->hasMatch()) {
									if (Regex::match('/(?<=,)0/', $value)->hasMatch()) {
										$qb->andHaving(
											$qb->orX(
												$qb->lte($field['key'] . '_value', new \DateTime($r->group(1))),
												$qb->isNull($field['key'] . '_value')
												)
											);
									} else {
										$qb->andHaving($qb->lte($field['key'] . '_value', new \DateTime($r->group(1))));
									}
								}
								if (($r = Regex::match('/^0/', $value))->hasMatch()) {
									$qb->andHaving(
										$qb->isNull($field['key'] . '_value')
									);
								}
								break;
								
							case MetadataTypeEnum::LIST:
								if (in_array(0, $value)) {
									$qb->andHaving($qb->orX($qb->in($field['key'] . '_id', $value), $qb->isNull($field['key'] . '_id')));
								} else {
									$qb->andHaving($qb->in($field['key'] . '_id', $value));
								}
								break;
								
						}
						break;
						
					case (($result = Regex::match('/visa_(\d+)/', $field['key']))->hasMatch()):
						
						$id = $result->group(1);
						
						if ($qb->hasAlias($field['key'] . '_') === false) {
							
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
								->leftJoin('version.reviews', 'review_' . $id, Join::WITH, $qb->in('review_' . $id . '.visa', $visas))
								->leftJoin('review_' . $id . '.visa', $field['key'] . '_')
							;
							
						}
						
						if (in_array(0, $value)) {
							$qb->andWhere($qb->orX($qb->in($field['key'] . '_.id', $value), $qb->isNull($field['key'] . '_.id')));
						} else {
							$qb->andWhere($qb->in($field['key'] . '_.id', $value));
						}
						break;
						
					case 'version_first':
						$qb->leftJoin(Version::class, 'vf', Join::WITH,
								'version.document = vf.document AND (
									IF(version.required = false, version.deliveryDate, version.scheduledDate) > IF(vf.required = false, vf.deliveryDate, vf.scheduledDate) OR (
										IF(version.required = false, version.deliveryDate, version.scheduledDate) = IF(vf.required = false, vf.deliveryDate, vf.scheduledDate) AND version.name > vf.name
									)
								)')
							->andWhere($qb->andX($qb->isNull('vf.scheduledDate'), $qb->isNull('vf.deliveryDate')))
						;
						break;
						
					case 'version_first_scheduled':
						$qb->leftJoin(Version::class, 'vfs', Join::WITH,
								'version.document = vfs.document AND vfs.required = true AND (
									version.scheduledDate > vfs.scheduledDate OR (
										version.scheduledDate = vfs.scheduledDate AND version.name > vfs.name
									)
								)')
							->andWhere($qb->isNull('vfs.scheduledDate'), $qb->eq('version.required', true))
						;
						break;
					
					case 'version_first_delivered':
						$qb->leftJoin(Version::class, 'vfd', Join::WITH,
								'version.document = vfd.document AND vfd.required = false AND (
									version.deliveryDate > vfd.deliveryDate OR (
										version.deliveryDate = vfd.deliveryDate AND version.name > vfd.name
									)
								)')
							->andWhere($qb->isNull('vfd.deliveryDate'), $qb->eq('version.required', false))
						;
						break;
					
					case 'version_last':
						$qb->leftJoin(Version::class, 'vl', Join::WITH,
								'version.document = vl.document AND (
									IF(version.required = false, version.deliveryDate, version.scheduledDate) < IF(vl.required = false, vl.deliveryDate, vl.scheduledDate) OR (
										IF(version.required = false, version.deliveryDate, version.scheduledDate) = IF(vl.required = false, vl.deliveryDate, vl.scheduledDate) AND version.name < vl.name
									)
								)')
							->andWhere($qb->isNull('vl.scheduledDate'), $qb->isNull('vl.deliveryDate'))
						;
						break;
					
					case 'version_last_scheduled':
						$qb->leftJoin(Version::class, 'vls', Join::WITH,
								'version.document = vls.document AND vls.required = true AND (
									version.scheduledDate < vls.scheduledDate OR (
										version.scheduledDate = vls.scheduledDate AND version.name < vls.name
									)
								)')
							->andWhere($qb->isNull('vls.scheduledDate'), $qb->eq('version.required', true))
						;
						break;
					
					case 'version_last_delivered':
						$qb->leftJoin(Version::class, 'vld', Join::WITH,
								'version.document = vld.document AND vld.required = false AND (Y
									version.deliveryDate < vld.deliveryDate OR (
										version.deliveryDate = vld.deliveryDate AND version.name < vld.name
									)
								)')
							->andWhere($qb->isNull('vld.deliveryDate'), $qb->eq('version.required', false))
						;
						break;
					
				}
			}
		}
		
		return $qb;
	}
	
	private function like(string $value): string
	{
		return str_replace('%%', '%', '%' . str_replace('*', '%', $value) . '%');	
	}
	
	private function dateFormat(string $value): string
	{		
		return 'DATE_FORMAT(' . $value . ', \'' . DateService::SQL_INTERNAL_DATE_FORMAT . '\')';
	}

	private function strToDate(string $value): string
	{		
		return 'STR_TO_DATE(' . $value . ', \'' . DateService::SQL_INTERNAL_DATE_FORMAT . '\')';
	}

	private function getParentClass(string $parent): string
	{
		switch ($parent) {
			case 'serie':
				return Serie::class;
			case 'document':
				return Document::class;
			case 'version':
				return Version::class;
		};
	}

}
