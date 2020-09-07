<?php

namespace App\Repository;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;
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
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Review;
use App\Service\RepositoryService;



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
	
	private $project;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Version::class);
		$this->router = $router;
		$this->codificationRepository = $codificationRepository;
	}
	
	public function getVersionsCount($codifications, $metadatas, $series, $request=null): int
	{
		$this->fields = $fields;
		
		$this->newCoreQuery($codifications, $metadatas, $request);
		return $this->query()
			->select('count(v.id)')
			->getQuery()
			->getSingleScalarResult()
		;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsArray($codifications, $metadatas, $series, $request=null): array
	{
		
		$this->fields = $fields;
		
		$this->newCoreQuery($series, $request);
		
		if ($request) {
			
			if ($request->query->get('sortAsc') || $request->query->get('sortDesc')) {
				$sortedField = $request->query->get('sortAsc') ?? $request->query->get('sortDesc');
				$order = ($request->query->get('sortAsc'))?'ASC':'DESC';
				
				switch ($sortedField) {
					case 'version_name':
						$this->query()->addOrderBy('v.name', $order);
						break;
					case 'document_name':
						$this->query()->addOrderBy('d.name', $order);
						break;
					case 'version_initial_scheduled_date':
						$this->query()->addOrderBy('v.initialScheduledDate', $order);
						break;
					case 'version_scheduled_date':
						$this->query()->addOrderBy('v.scheduledDate', $order);
						break;
					case 'version_delivery_date':
						$this->query()->addOrderBy('v.deliveryDate', $order);
						break;
					case 'version_writer':
						$this->query()->addOrderBy('w.name', $order)
						;
						break;
					case 'version_checker':
						$this->query()->addOrderBy('k.name', $order)
						;
						break;
					case 'version_approver':
						$this->query()->addOrderBy('a.name', $order);
						break;
					case 'serie_name':
						$this->query()->addOrderBy('s.name', $order);
						break;
					case 'serie_company':
						$this->query()->addOrderBy('c.name', $order);
						break;
					case 'status_name':
						$this->query()->addOrderBy('t.name', $order);
						break;
					case 'status_value':
						$this->query()->addOrderBy('t.value', $order);
						break;
					case 'status_type':
						$this->query()->addOrderBy('t.type', $order);
						break;
				}
			}
		}
		
		//page
		$page = $request->query->get('page');
		
		if ($request->query->get('results_per_page') > 0) {
			$this->query()
				->setFirstResult(($page -1) * $request->query->get('results_per_page'))
				->setMaxResults($request->query->get('results_per_page'));
		}
		
		$display = $request->query->get('display') ?? [];
		
// 		$this->ddSql();
// 		$this->query()->select('');
// 		$this->query()->addSelect('v.name, vi.value');
		
// 		foreach ($this->fields as $fullCodeName => $field) {
// 			if (($display[$field['id']] ?? null) > 0) {
				
				
				
// 				$row[$field['id']] = $version->getPropertyValueToString($fullCodeName);
// 			}
// 		}
		
		
// 		$stopwatch  = new Stopwatch();
// 		$stopwatch ->start('a');
		$versions = $this->query()->getQuery()->getResult();
		//dd($versions);
// 		dd($stopwatch ->stop('a')->getDuration());
		
		if ($search = $request->query->get('search')) {
			
			$search = preg_replace('/\*+/', '.*', $search);
			foreach ($versions as $key => $version) {
				if (preg_match('/' . $search . '/', $version->getDocument()->getReference()) === 0) {
					unset($versions[$key]);
				}
			}
		}
		
		$result = [];
		$row = [];
		
		foreach ($versions as $version) {
			$row['id'] = $version->getId();
			$row['detailUrl'] = $this->router->generate('document_detail', [
				'id' => $version->getId()
			]);
			
			foreach ($this->fields as $fullCodeName => $field) {
				if (($display[$field['id']] ?? null) > 0) {
					$row[$field['id']] = $version->getPropertyValueToString($fullCodeName);
				}
			}
			$result[] = $row;
		}
		
		return $result;
		
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersions($request)
	{
		if ($versionIds = $request->query->get('id')) {
			if (is_array($versionIds)) {
				$this->newQuery('v')
					->andWhere($this->in('v.id', $versionIds))
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
		return $this->newQuery('v')
			->innerJoin('v.document', 'd')
			->andWhere($this->eq('d.id', $document->getId()))
			->addOrderBy('v.initialScheduledDate', 'DESC')
			->addOrderBy('v.scheduledDate', 'DESC')
			->addOrderBy('v.deliveryDate', 'DESC')
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
		return $this->newQuery('v')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->andWhere($this->eq('s.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	public function getProdAlerts(Project $project, User $user)
	{
		return $this->newQuery('v')
			->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MIN(DATE_DIFF(v.scheduledDate, CURRENT_DATE())) AS min')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere($this->eq('s.project', $project))
			->andWhere($this->eq('v.isRequired', true))
			->andWhere($this->eq('v.writer', $user))
			->andWhere($this->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	public function getCheckAlerts(Project $project, User $user)
	{
		return $this->newQuery('v')
			->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MAX(DATE_DIFF(CURRENT_DATE(), v.deliveryDate)) AS max')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->leftJoin('v.reviews', 'r')
			->andWhere($this->eq('s.project', $project))
			->andWhere($this->eq('v.isRequired', false))
			->andWhere($this->eq('v.checker', $user))
			->andWhere($this->in('c.type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER]))
 			->andWhere($this->orX($this->neq('r.user', $user), $this->isNull('r.user')))
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	private function newCoreQuery($codifications, $metadatas, $request)
	{
		$normalizer = new CamelCaseToSnakeCaseNameConverter();
		$codificationQuery = [];
		$subQuery = [];
		
		
		$this->newQuery('v')
			->innerJoin('v.status', 't')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->leftJoin('v.writer', 'w')
			->leftJoin('v.checker', 'k')
			->leftJoin('v.approver', 'a')
		;
		
		foreach ($codifications as $codification) {
			switch ($codification->getType()) {
				case Codification::REGEX:
					$this->query()->leftJoin('d.codificationValues', 'codification[' . $codification->getId() . ']');
					break;
				case Codification::LIST:
					$this->query()->leftJoin('d.codificationItems', 'codification[' . $codification->getId() . ']');
					break;
			}
		}
		
		foreach ($metadatas as $metadata) {
			switch ($codification->getType()) {
				case Codification::REGEX:
					$this->query()->leftJoin('d.codificationValues', 'codification[' . $codification->getId() . ']');
					break;
				case Codification::LIST:
					$this->query()->leftJoin('d.codificationItems', 'codification[' . $codification->getId() . ']');
					break;
			}
		}

		$this->query()->leftJoin('s.metadataItems', 'si')
			->leftJoin('s.metadataValues', 'sv')
			->leftJoin('d.metadataItems', 'di')
			->leftJoin('d.metadataValues', 'dv')
			->leftJoin('v.metadataItems', 'vi')
			->leftJoin('v.metadataValues', 'vv')
			->leftJoin('v.reviews', 'r')
			->leftJoin('r.user', 'u')
			->andWhere($this->in('d.serie', $series));
			
		if ($request) {
			
			$codifications = $request->query->get('codification') ?? [];
			
			foreach ($codifications as $codification => $ids) {
				
				$subExpr = $this->orX();
				
				foreach ($ids as $id) {
					
					if ($id) {
						$subExpr->add(
							$this->newExpr()->andX(
								$this->eq('ci.id', $id),
								$this->eq('ci.codification', $codification)
							)
						);
						$subExpr->add(
							$this->newExpr()->andX(
								$this->eq('cv.id', $id),
								$this->eq('cv.codification', $codification)
							)
						);
					}
					
				}
				$this->query()->andWhere($subExpr);
			}
			
			foreach ($request->query->get('serie') ?? [] as $field => $value) {
				switch ($field) {
					case 'name':
						$this->query()->andWhere($this->in('d.serie', $value));
						break;
					case 'company':
						$this->query()->andWhere($this->in('s.company', $value));
						break;
					default:
						$this->query()->andWhere($this->getMetadataExpr('serie', $field, $value));
				}
			}
			
			foreach ($request->query->get('document') ?? [] as $field => $value) {
				switch ($field) {
					default:
						$this->query()->andWhere($this->getMetadataExpr('document', $field, $value));
				}
			}
			
			foreach ($request->query->get('version') ?? [] as $field => $value) {
				switch ($field) {
					case 'initial_scheduled_date':
					case 'scheduled_date':
					case 'delivery_date':
						$denormalizedField = $normalizer->denormalize($field);
						$value = implode(',', $value);
						$result = [];
						if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
							$this->query()->andWhere($this->gte('v.' . $denormalizedField, new \DateTime($result[1])));
						}
						if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
							$this->query()->andWhere($this->lte('v.' . $denormalizedField, new \DateTime($result[1])));
						}
						break;
					case 'isRequired':
						$this->query()->andWhere($this->eq('v.isRequired', ($value != "0")));
						break;
					case 'writer':
						$this->query()->andWhere($this->in('v.writer', $value));
						break;
					case 'checker':
						$this->query()->andWhere($this->in('v.checker', $value));
						break;
					case 'approver':
						$this->query()->andWhere($this->in('v.approver', $value));
						break;
					default:
						$this->query()->andWhere($this->getMetadataExpr('version', $field, $value));
				}
			}
			
			foreach ($request->query->get('status') ?? [] as $field => $value) {
				switch ($field) {
					case 'value':
						$this->query()->andWhere($this->in('v.status', $value));
						break;
					case 'type':
						$this->query()->andWhere($this->in('t.type', $value));
						break;
				}
			}
			
			if ($visas = $request->query->get('visa')) {
				$this->query()
					->andWhere($this->in('r.visa', array_keys($visas)))
					->andWhere($this->in('c.codename', array_values($visas)));
			}
			
		}
		
		$this->ddSql();
	}
	
	private function getMetadataExpr(string $parent, int $metadataId, $value)
	{
		
		switch ($parent) {
			case 'serie':
				$alias = 's';
				break;
			case 'document':
				$alias = 'd';
				break;
			case 'version':
				$alias = 'v';
				break;
		}
		
		foreach ($this->fields as $field) {
			if ($field['id'] == $parent . '_' . $metadataId) {
				
				switch ($field['type']) {
					
					case Metadata::BOOLEAN:
						
						if ($value == "1") {
							$subExpr = $this->orX(
								$this->andX(
									$this->eq($alias . 'v.metadata', $metadataId),
									$this->eq($alias . 'v.value', 1)
								)
							);
						} else {
							$subExpr = $this->orX(
								$this->andX(
									$this->eq($alias . 'v.metadata', $metadataId),
									$this->neq($alias . 'v.value', 1)
								)
							);
						}
						break;
						
					case Metadata::DATE:
						
						$subExpr = $this->newExpr();
						$result = [];
						foreach ($value as $v) {
							
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $v, $result) === 1) {
								
								$subExpr = $subExpr->orX(
									$this->andX(
										$this->eq($alias . 'v.metadata', $metadataId),
										$this->gte($alias . 'v.value', $result[1])
									)
								);
								
							} elseif (preg_match('/<(\d{2}-\d{2}-\d{4})/', $v, $result) === 1) {

								$subExpr = $subExpr->orX(
									$this->andX(
										$this->eq($alias . 'v.metadata', $metadataId),
										$this->lte($alias . 'v.value', $result[1])
									)
								);
								
							}
							
						}
						break;
					
					case Metadata::LIST:
						
						$subExpr = $this->orX(
							$this->andX(
								$this->eq($alias . 'i.metadata', $metadataId),
								$this->in($alias . 'i.id', $value),
							)
						);
						break;
				
				}
				return $subExpr;
			}
			
		}
		return null;
	}
	
	public function test()
	{

		
	}
	
}
