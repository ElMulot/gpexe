<?php

namespace App\Repository;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Stopwatch\Stopwatch;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query\Expr;
use Doctrine\ORM\Query\Expr\Join;
use App\Entity\Codification;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Status;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Review;
use App\Service\RepositoryService;
use App\Service\QueryBuilderService;



/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]	findAll()
 * @method Version[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends RepositoryService
{
	
	private $router;
	
	private $fields;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Version::class);
		$this->router = $router;
	}
	
	public function getVersionsCount($codifications, $fields, $series, $request=null): int
	{
		
		$qb = $this->getCoreQB($codifications, $fields, $series, $request);
		
		return $qb
			->select($qb->expr()->count('version.id'))
			->getQuery()
			->getSingleScalarResult()
		;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsArray($codifications, $fields, $series, $project, $request=null): array
	{
		
		$qb = $this->getCoreQB($codifications, $fields, $series, $request);
		
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
						$qb->addNestedSelect(
							$this->newQB()
								->select('writer.name')
								->from(User::class, 'writer')
								->where('writer.id = version.writer'),
							'writer_name'
						);
						$qb->addOrderBy('writer_name', $order);
						break;
					case 'version_checker':
						$qb->addNestedSelect(
							$this->newQB()
								->select('checker.name')
								->from(User::class, 'checker')
								->where('checker.id = version.checker'),
							'checker_name'
						);
						$qb->addOrderBy('checker_name', $order);
						break;
					case 'version_approver':
						$qb->addNestedSelect(
							$this->newQB()
								->select('approver.name')
								->from(User::class, 'approver')
								->where('approver.id = version.checker'),
							'approver_name'
						);
						$qb->addOrderBy('version_approver', $order);
						break;
					case 'serie_name':
						$qb->addOrderBy('serie.name', $order);
						break;
					case 'serie_company':
						$qb->addNestedSelect(
							$this->newQB()
								->select('company2.name')
								->from(Company::class, 'company2')
								->where('company2.id = serie.company'),
							'company_name'
						);
						$qb->addOrderBy('company_name', $order);
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
						$qb->addNestedSelect(
						$this->newQB()
								->select('status3.value')
								->from(Status::class, 'status2')
								->where('status3.id = version.status'),
							'status_value'
						);
						$qb->addOrderBy('status_value', $order);
						break;
					case 'status_type':
						$qb->addNestedSelect(
						$this->newQB()
								->select('status4.type')
								->from(Status::class, 'status4')
								->where('status4.id = version.status'),
							'status_type'
						);
						$qb->addOrderBy('status_type', $order);
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
		
		
		
			foreach (array_keys($request->query->get('display') ?? []) as $name) {
				
				switch ($name) {
					
					case 'document_reference':
					case $request->query->get('search'):
						foreach ($codifications as $codification) {
							
							$id = $codification->getId();
							
							switch ($codification->getType()) {
								case Codification::REGEX:
									$qb->addNestedSelect(
										$this->newQB()
											->select("c{$id}.value")
											->from(Document::class, "d{$id}")
											->innerJoin("d{$id}.codificationValues", "c{$id}")
											->where("c{$id}.codification = {$id}")
											->andWhere("d{$id}.id = document.id"),
										"codification_{$id}"
									);
									break;
								case Codification::LIST:
									$qb->addNestedSelect(
										$this->newQB()
											->select("c{$id}.value")
											->from(Document::class, "d{$id}")
											->innerJoin("d{$id}.codificationItems", "c{$id}")
											->where("c{$id}.codification = {$id}")
											->andWhere("d{$id}.id = document.id"),
										"codification_{$id}"
									);
									break;
							}
						}
						break;
					
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
						$qb->addNestedSelect(
							$this->newQB()
								->select('writer2.name')
								->from(User::class, 'writer2')
								->where('writer2.id = version.writer'),
							'version_writer'
						);
						break;
						
					case 'version_checker':
						$qb->addNestedSelect(
							$this->newQB()
								->select('checker2.name')
								->from(User::class, 'checker2')
								->where('checker2.id = version.checker'),
							'version_checker'
						);
						break;
						
					case 'version_approver':
						$qb->addNestedSelect(
							$this->newQB()
								->select('approver2.name')
								->from(User::class, 'approver2')
								->where('approver2.id = version.checker'),
							'version_approver'
						);
						break;
					
					case 'serie_name':
						$qb->addSelect('serie.name AS serie_name');
						break;
					
					case 'serie_company':
						$qb->addNestedSelect(
							$this->newQB()
								->select('company3.name')
								->from(Company::class, 'company3')
								->where('company3.id = serie.company'),
							'serie_company'
						);
						break;
					
					case 'status_value':
						$qb->addNestedSelect(
							$this->newQB()
								->select('status6.value')
								->from(Status::class, 'status6')
								->where('status6.id = version.status'),
							'status_value'
						);
						break;
					
					case 'status_type':
						$qb->addNestedSelect(
							$this->newQB()
								->select('status7.name')
								->from(Status::class, 'status7')
								->where('status7.id = version.status'),
							'status_type'
						);
						break;
					
					case (preg_match('/metadata_(\d+)/', $name, $result) === 1):
							
						foreach ($this->fields as $field) {
							
							$id = $result[1];
							
							if ($field['id'] == $id) {
								
								switch ($field['parent']) {
									case 'serie':
										$className = Serie::class;
										break;
									case 'document':
										$className = Document::class;
										break;
									case 'version':
										$className = Version::class;
										break;
								}
								
								switch ($field['type']) {
									
									case Metadata::BOOLEAN:
									case Metadata::TEXT:
									case Metadata::DATE:
									case Metadata::LINK:
										
										$qb->addNestedSelect(
											$this->newQB()
												->select("m{$id}.value")
												->from($className, "p{$id}")
												->innerJoin("p{$id}.metadataValues", "m{$id}", Join::WITH, "m{$id}.metadata = {$id}")
												->where("p{$id}.id = {$field['parent']}.id"),
											"metadata_{$id}"
										);
										break;
										
									case Metadata::LIST:
										
										$qb->addNestedSelect(
											$this->newQB()
												->select("m{$id}.value")
												->from($className, "p{$id}")
												->innerJoin("p{$id}.metadataItems", "m{$id}", Join::WITH, "m{$id}.metadata = {$id}")
												->where("p{$id}.id = {$field['parent']}.id"),
											"metadata_{$id}"
										);
										break;
										
								}
							}
						}
						break;
						
					case (preg_match('/visa_(\d+)/', $name, $result) === 1):
						
						$id = $result[1];
						$qb->addNestedSelect(
							$this->newQB()
								->select("visa{$id}.name")
								->from(Review::class, "review{$id}")
								->innerJoin("review{$id}.visa", "visa{$id}")
								->where("review{$id}.version = version.id")
								->andWhere("visa{$id}.company = {$id}"),
							"visa_{$id}"
						);
						break;
				}
			}
		}
		
		$results = $qb->getQuery()->getArrayResult();
		
		if (array_key_exists('document_reference', $request->query->get('display') ?? []) || $request->query->get('search')) {
			
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
		
		if ($search = $request->query->get('search')) {

			$search = preg_replace('/(\*+)/', '.', $search);
			
			foreach ($results as $key => $result) {
				if (preg_match('/' . $search . '/', $result['document_reference']) === 0) {
					unset($results[$key]);
				}
			}
			
			$results = array_values($results);
			
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
		return $qb->innerJoin('v.document', 'd')
			->andWhere($qb->eq('d.id', $document->getId()))
			->addOrderBy('v.initialScheduledDate', 'DESC')
			->addOrderBy('v.scheduledDate', 'DESC')
			->addOrderBy('v.deliveryDate', 'DESC')
			->addOrderBy('v.name', 'ASC')
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
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MIN(DATE_DIFF(v.scheduledDate, CURRENT_DATE())) AS min')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('v.isRequired', true))
			->andWhere($qb->eq('v.writer', $user))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	public function getCheckAlerts(Project $project, User $user)
	{
		$qb = $this->newQB('v');
		return $qb->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MAX(DATE_DIFF(CURRENT_DATE(), v.deliveryDate)) AS max')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->leftJoin('v.reviews', 'r')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('v.isRequired', false))
			->andWhere($qb->eq('v.checker', $user))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
			->andWhere($qb->orX($qb->neq('r.user', $user), $qb->isNull('r.user')))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	private function getCoreQB($codifications, $fields, $series, $request): QueryBuilderService
	{
		
		$this->fields = $fields;
		$codificationQuery = [];
		$subQuery = [];
		
		
		$qb = $this->newQB('version');
		
		$qb->select('version.id AS version_id, document.id AS document_id, serie.id as serie_id')
			->innerJoin('version.document', 'document')
			->innerJoin('document.serie', 'serie')
			->andWhere($qb->in('serie.id', $series))
		;
		
		if ($request->query->get('filter')) {
			
			foreach ($codifications as $codification) {
				
				$id = $codification->getId();
				
				if (array_key_exists("codification_{$id}", $request->query->get('filter'))) {
					
					$value = $request->query->get('filter')["codification_{$id}"];
					
					$subQb = $this->newQB();
					$subQb->select('d.id')
						->from(Document::class, 'd')
						->innerJoin('d.codificationItems', "i")
						->where($subQb->eq("i.codification", $id))
						->andWhere($subQb->in("i.id", $value));
					
					$qb->andWhere($qb->in('document.id', $subQb->getQuery()->getArrayResult()));
				}
				
			}
			
			foreach ($this->fields as $field) {
				
				if (array_key_exists($field['full_id'], $request->query->get('filter'))) {
					
					$value = $request->query->get('filter')[$field['full_id']];
					switch ($field['full_id']) {
						case 'serie_name':
							$qb->andWhere($qb->in('serie.id', $value));
							break;
							
						case 'serie_company':
							$subQb = $this->newQB();
							$subQb
								->select('s.id')
								->from(Serie::class, 's')
								->where($subQb->in('s.company', $value));
							
							$qb->andWhere($qb->in('serie.id', $subQb->getQuery()->getArrayResult()));
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
						
// 						case 'version_last_delivered':
// 							$subQb = $this->newQB('v.id, MAX(v.deliveryDate) AS HIDDEN max')
// 								->innerJoin('v.document', 'd')
// 								->where('d.document = document.id')
// 								->groupBy('v.id');
							
// 							$qb->andWhere('version.id IN(' . $subQb->getDQL() . ')');
							
						case 'status_value':
							$subQb = $this->newQB('v');
							$subQb->innerJoin('v.status', 's')
								->where($subQb->in('s.id', $value));
							
							$qb->andWhere($qb->in('version.id', $subQb->getQuery()->getArrayResult()));
							break;
							
						case 'status_type':
							$subQb = $this->newQB('v');
							$subQb->innerJoin('v.status', 's')
								->where($subQb->in('s.type', $value));
							
							$qb->andWhere($qb->in('version.id', $subQb->getQuery()->getArrayResult()));
							break;
							
						case (preg_match('/metadata_(\d+)/', $field['full_id'], $result) === 1):
							
							$id = $field['id'];
							
							switch ($field['parent']) {
								case 'serie':
									$className = Serie::class;
									break;
								case 'document':
									$className = Document::class;
									break;
								case 'version':
									$className = Version::class;
									break;
							}
							
							switch ($field['type']) {
								
								case Metadata::BOOLEAN:
								case Metadata::DATE:
									$subQb = $this->newQB()
										->select('p.id')
										->from($className, 'p')
										->innerJoin('p.metadataValues', 'm');
									break;
									
								case Metadata::LIST:
									$subQb = $this->newQB()
										->select('p.id')
										->from($className, 'p')
										->innerJoin('p.metadataItems', 'm');
									break;
									
							}
							
							switch ($field['type']) {
								
								case Metadata::BOOLEAN:
									
									if ($value == '1') {
										$subQb
											->where($subQb->eq('m.metadata', $id))
											->andWhere($subQb->eq('m.value', 1));
									} else {
										$subQb
											->where($subQb->eq('m.metadata', $id))
											->andWhere($subQb->orX(
												$subQb->eq('m.value', 0),
												$subQb->isNull('m.value')
											)
										);
									}
									break;
									
								case Metadata::DATE:
									
									foreach ($value as $v) {
										
										$r = [];
										if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $v, $r) === 1) {
											
											$subQb
												->where($subQb->eq('m.metadata', $id))
												->andWhere($subQb->gte("STR_TO_DATE(m.value, '%d-%m-%Y')", \DateTime::createFromFormat('d-m-Y', $r[1])));
										
										} elseif (preg_match('/<(\d{2}-\d{2}-\d{4})/', $v, $r) === 1) {
											
											$subQb
												->where($subQb->eq('m.metadata', $id))
												->andWhere($subQb->lte("STR_TO_DATE(m.value, '%d-%m-%Y')", \DateTime::createFromFormat('d-m-Y', $r[1])));
										}
										
									}
									
									break;
									
								case Metadata::LIST:
									
									$subQb
										->where($subQb->eq('m.metadata', $id))
										->andWhere($subQb->in('m.id', $value));
									
									break;
									
							}
							
							$qb->andWhere($qb->in("{$field['parent']}.id", $subQb->getQuery()->getArrayResult()));
							break;
							
						case (preg_match('/visa_(\d+)/', $field['full_id'], $result) === 1):
							
							$id = $field['id'];
							
							$subQb = $this->newQB('version');
							$subQb->innerJoin('version.reviews', 'r')
								->innerJoin('r.visa', 'v')
								->where($subQb->eq('v.company', $id))
								->andWhere($subQb->in('v.id', $value));
							
							$qb->andWhere($qb->in('version.id', $subQb->getQuery()->getArrayResult()));
							break;
					}
				}
			}
		}
		
		if ($request->query->get('display')) {
			
			if (array_key_exists('version_last_scheduled', $request->query->get('display'))) {
				
				$subQb = $this->newQB('v1');
				$subQb->select('v1.id, v1.deliveryDate, v2.id AS v2i, v2.scheduledDate AS v2d')
	 				->leftJoin(Version::class, 'v2', Join::WITH, 'v1.document = v2.document AND v1.scheduledDate < v2.scheduledDate')
	 				->where($subQb->isNull('v2.scheduledDate'))
					->andWhere($subQb->eq('v1.isRequired', true))
					->addGroupBy('v1.document')
// 					->orderBy('v1.scheduledDate', 'ASC')
				;
	
				$qb->andWhere($qb->in('version.id', $subQb->getQuery()->getArrayResult()));
				
			}
			
			if (array_key_exists('version_last_delivered', $request->query->get('display'))) {
				
				$subQb = $this->newQB('v1');
				$subQb->select('v1.id, v1.deliveryDate, v2.id AS v2i, v2.deliveryDate AS v2d')
					->leftJoin(Version::class, 'v2', Join::WITH, 'v1.document = v2.document AND v1.deliveryDate < v2.deliveryDate')
					->where($subQb->isNull('v2.deliveryDate'))
					->andWhere($subQb->eq('v1.isRequired', false))
					->addGroupBy('v1.document')
	// 				->orderBy('v1.deliveryDate', 'ASC')
				;
				
				$qb->andWhere($qb->in('version.id', $subQb->getQuery()->getArrayResult()));
				
			}
		}
		
		return $qb;
	}
	
	public function test()
	{

		
	}
	
}
