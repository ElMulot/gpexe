<?php

namespace App\Repository;

use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\Serializer\NameConverter\CamelCaseToSnakeCaseNameConverter;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\ORM\Tools\Pagination\Paginator;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\User;
use App\Entity\Version;
use App\Entity\Review;
use App\Service\RepositoryService;
use Monolog\Test\TestCase;

/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]	findAll()
 * @method Version[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends RepositoryService
{
	
	private $uid;
	
	private QueryBuilder $query;
	
	private $fields;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Version::class, Document::class);
		$this->router = $router;
	}
	
	public function getVersionsCount(array $fields, array $series, $request=null): int
	{
		$this->fields = $fields;
		
		return $this->getCoreQuery($series, $request)
			->select('count(v.id)')
			->getQuery()
			->getSingleScalarResult();
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsArray(array $fields, array $series, $request=null): array
	{
		
		$this->fields = $fields;
		
		$this->query = $this->getCoreQuery($series, $request);
		
		if ($request) {
			
			if ($request->query->get('sortAsc') || $request->query->get('sortDesc')) {
				$sortedField = $request->query->get('sortAsc') ?? $request->query->get('sortDesc');
				$order = ($request->query->get('sortAsc'))?'ASC':'DESC';
				
				switch ($sortedField) {
					case 'version_name':
						$this->query->addOrderBy('v.name', $order);
						break;
					case 'document_name':
						$this->query->addOrderBy('d.name', $order);
						break;
					case 'version_initial_scheduled_date':
						$this->query->addOrderBy('v.initialScheduledDate', $order);
						break;
					case 'version_scheduled_date':
						$this->query->addOrderBy('v.scheduledDate', $order);
						break;
					case 'version_delivery_date':
						$this->query->addOrderBy('v.deliveryDate', $order);
						break;
					case 'version_writer':
						$this->query
							->innerJoin('v.writer', 'w')
							->addOrderBy('w.name', $order)
						;
						break;
					case 'version_checker':
						$this->query
							->innerJoin('v.checker', 'c')
							->addOrderBy('c.name', $order)
						;
						break;
					case 'version_approver':
						$this->query
						->innerJoin('v.approver', 'a')
						->addOrderBy('a.name', $order);
						break;
					case 'serie_name':
						$this->query->addOrderBy('s.name', $order);
						break;
					case 'serie_company':
						$this->query
						->innerJoin('s.company', 'c')
						->addOrderBy('c.name', $order);
						break;
					case 'status_name':
						$this->query->addOrderBy('t.name', $order);
						break;
					case 'status_value':
						$this->query->addOrderBy('t.value', $order);
						break;
					case 'status_type':
						$this->query->addOrderBy('t.type', $order);
						break;
				}
				
			}
		}
		
		//page
		$page = $request->query->get('page');
		
		if ($request->query->get('results_per_page') > 0) {
			$this->query
				->setFirstResult(($page -1) * $request->query->get('results_per_page'))
				->setMaxResults($request->query->get('results_per_page'));
		}
		
		$versions = $this->query->getQuery()->getResult();
		
		if ($search = $request->query->get('search')) {
			
			$search = preg_replace('/\*+/', '.*', $search);
			foreach ($versions as $key => $version) {
				if (preg_match('/' . $search . '/', $version->getDocument()->getReference()) === 0) {
					unset($versions[$key]);
				}
			}
		}
		
		$display = $request->query->get('display') ?? [];
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
				$this->query = $this->createQueryBuilder('v');
				return $this->query->andWhere($this->query->expr()->in('v.id', $versionIds))
					->getQuery()
					->getResult();
			}
		}
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsByDocument(Document $document)
	{
		return $this->createQueryBuilder('v')
			->innerJoin('v.document', 'd')
			->andWhere('d.id = :id')
			->setParameter('id', $document->getId())
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
		return $this->createQueryBuilder('v')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->andWhere('s.project = :project')
			->setParameter('project', $project)
			->getQuery()
			->getResult()
		;
	}
	
	public function getProdAlerts(Project $project, User $user)
	{
		return $this->createQueryBuilder('v')
			->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MIN(DATE_DIFF(v.scheduledDate, CURRENT_DATE())) AS min')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere('s.project = :project')
			->andWhere('v.isRequired = true')
			->andWhere('v.writer = :user')
			->andWhere('c.type IN (:type)')
			->setParameter('project', $project)
			->setParameter('user', $user)
			->setParameter('type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER])
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	public function getCheckAlerts(Project $project, User $user)
	{
		
		$qb = $this->getEntityManager()->createQueryBuilder();
		
		$subQuery = $qb->select('r')
			->from(Review::class, 'r')
			->andWhere('r.user = :user')
		;
		
		return $this->createQueryBuilder('v')
			->select('s.id AS serieId, s.name AS serieName, c.type AS companyType, v.isRequired, count(v.id) AS count, MAX(DATE_DIFF(CURRENT_DATE(), v.deliveryDate)) AS max')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->innerJoin('s.company', 'c')
			->andWhere('s.project = :project')
			->andWhere('v.isRequired = false')
			->andWhere('v.checker = :user')
			->andWhere('c.type IN (:type)')
			->andWhere($qb->expr()->notIn('v.id', $subQuery->getDQL()))
			->setParameter('project', $project)
			->setParameter('user', $user)
			->setParameter('type', [Company::MAIN_CONTRACTOR, Company::SUB_CONTRACTOR, Company::SUPPLIER])
			->groupBy('s.id')
			->getQuery()
			->getResult()
		;
	}
	
	private function getCoreQuery(array $series, $request): QueryBuilder
	{
		$normalizer = new CamelCaseToSnakeCaseNameConverter();
		$codificationQuery = [];
		$subQuery = [];
		
		$this->query = $this->createQueryBuilder('v')
			->innerJoin('v.status', 't')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->andWhere('d.serie IN (:id)')->setParameter('id', $series);
		
		
		$this->query->leftJoin('s.metadataItems', 'si');
		$this->query->leftJoin('s.metadataValues', 'sv');
		$this->query->leftJoin('d.metadataItems', 'di');
		$this->query->leftJoin('d.metadataValues', 'dv');
		$this->query->leftJoin('v.metadataItems', 'vi');
		$this->query->leftJoin('v.metadataValues', 'vv');
		
		if ($request) {
			
			$codifications = $request->query->get('codification') ?? [];
			
			foreach ($codifications as $codification => $ids) {
				
				$subQuery = $this->getEntityManager()->createQueryBuilder()
				->select('d' . $codification)
				->from(Document::class, 'd' . $codification)
				->innerJoin('d' . $codification . '.codificationItems', 'i' . $codification);
				
				foreach ($ids as $id) {
					if ($id) {
						$andQuery = $this->query->expr()->andX(
							$this->addEq('i' . $codification . '.id', $id),
							$this->addEq('i' . $codification . '.codification', $codification));
						$subQuery->orWhere($andQuery);
					}
					
				}
				$this->query->andWhere($this->query->expr()->in('d.id', $subQuery->getDQL()));
				
			}
			
			$metadatasGroup = [];
			
			foreach ($request->query->get('serie') ?? [] as $field => $value) {
				switch ($field) {
					case 'name':
						$this->query
							->andWhere($this->query->expr()->in('d.serie', $value));
						break;
					case 'company':
						$this->query
							->andWhere($this->query->expr()->in('s.company', $value));
						break;
					default:
						$metadatasGroup['serie'][$field] = $value;
				}
			}
			
			foreach ($request->query->get('document') ?? [] as $field => $value) {
				switch ($field) {
					default:
						$metadatasGroup['document'][$field] = $value;
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
							$this->query
								->andWhere('v.' . $denormalizedField . ' >= :' . $denormalizedField . 'Inf')
								->setParameter($denormalizedField . 'Inf', new \DateTime($result[1]))
							;
						}
						if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
							$this->query
								->andWhere('v.' . $denormalizedField . ' <= :' . $denormalizedField . 'Sup')
								->setParameter($denormalizedField . 'Sup', new \DateTime($result[1]))
							;
						}
						break;
					case 'isRequired':
						$this->query
							->andWhere('v.isRequired = :isRequired')
							->setParameter('isRequired', ($value != "0"));
						break;
					case 'writer':
						$this->query
							->andWhere($this->query->expr()->in('v.writer', $value));
						break;
					case 'checker':
						$this->query
							->andWhere($this->query->expr()->in('v.checker', $value));
						break;
					case 'approver':
						$this->query
							->andWhere($this->query->expr()->in('v.approver', $value));
						break;
					default:
						$metadatasGroup['version'][$field] = $value;
				}
			}
			
			foreach ($request->query->get('status') ?? [] as $field => $value) {
				switch ($field) {
					case 'value':
						$this->query->andWhere($this->query->expr()->in('v.status', $value));
						break;
					case 'type':
						$this->query->andWhere($this->query->expr()->in('t.type', $value));
						break;
				}
			}
			dump($metadatasGroup);
			foreach ($metadatasGroup as $parent => $metadatas) {
				
				foreach ($metadatas as $metadataId => $value) {
					
					$field = $this->getField($parent, $metadataId);
					
					if ($field['type'] == Metadata::BOOLEAN) {
						
						switch ($parent) {
							case 'serie':
								$subQuery = $this->getEntityManager()->createQueryBuilder()
								->select('s' . $metadataId)
								->from(Serie::class, 's' . $metadataId)
								->innerJoin('s' . $metadataId . '.metadataValues', 'a');
								break;
								
							case 'document':
								$subQuery = $this->getEntityManager()->createQueryBuilder()
								->select('d' . $metadataId)
								->from(Document::class, 'd' . $metadataId)
								->innerJoin('d' . $metadataId . '.metadataValues', 'a');
								break;
							case 'version':
								$subQuery = $this->createQueryBuilder('v' . $metadataId)
								->innerJoin('v' . $metadataId . '.metadataValues', 'a');
								break;
						}
						
						if ($value == "0") {
							
							$subQuery->orWhere(
								$subQuery->expr()->orX(
									$this->addNotEq('i' . $metadataId . '.id', $ids),
									$this->addNotEq('i' . $metadataId . '.metadata', $metadataId)
								)
							);
							
						} elseif ($ids == "1") {
							
							$subQuery->orWhere(
								$subQuery->expr()->andX(
									$this->addEq('i' . $metadataId . '.id', $ids),
									$this->addEq('i' . $metadataId . '.metadata', $metadataId)
								)
							);
						}
						
					} elseif ($field['type'] == Metadata::DATE) {
						
						switch ($parent) {
							case 'serie':
								$subQuery = $this->getEntityManager()->createQueryBuilder()
									->select('s' . $metadataId)
									->from(Serie::class, 's' . $metadataId)
									->innerJoin('s' . $metadataId . '.metadataValues', 'a');
								break;
								
							case 'document':
								$subQuery = $this->getEntityManager()->createQueryBuilder()
									->select('d' . $metadataId)
									->from(Document::class, 'd' . $metadataId)
									->innerJoin('d' . $metadataId . '.metadataValues', 'a');
								break;
							case 'version':
								$subQuery = $this->createQueryBuilder('v')
									->innerJoin('v' . $metadataId . '.metadataValues', 'a');
								break;
						}
						
						$result = [];
						foreach ($value as $id) {
							
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $id, $result) === 1) {
								
								$subQuery
									->andWhere('a.' . $metadataId . '. >= :inf' . $metadataId)
									->setParameter('inf' . $fieldName, $result[1])
								;
							} elseif (preg_match('/<(\d{2}-\d{2}-\d{4})/', $id, $result) === 1) {
								$subQuery
									->andWhere('a.' . $metadataId . '. <= :sup' . $fieldName)
									->setParameter('sup' . $fieldName, $result[1])
								;
							}
							
						}
						
					} elseif ($field['type'] == Metadata::LIST) {
						
// 						switch ($parent) {
// 							case 'serie':
// 								$subQuery = $this->getEntityManager()->createQueryBuilder()
// 									->select('s' . $metadataId)
// 									->from(Serie::class, 's' . $metadataId)
// 									->innerJoin('s' . $metadataId . '.metadataItems', 'i' . $metadataId);
// 								break;
								
// 							case 'document':
// 								$subQuery = $this->getEntityManager()->createQueryBuilder()
// 									->select('d' . $metadataId)
// 									->from(Document::class, 'd' . $metadataId)
// 									->innerJoin('d' . $metadataId . '.metadataItems', 'i' . $metadataId);
// 								break;
// 							case 'version':
// 								$subQuery = $this->createQueryBuilder('v' . $metadataId)
// 									->innerJoin('v' . $metadataId . '.metadataItems', 'i' . $metadataId);
// 								break;
// 						}
						
						$result = [];
						foreach ($value as $id) {
							$this->query->orWhere(
								$this->query->expr()->andX(
									$this->addEq('vi.id', $id),
									$this->addEq('vi.metadata', $metadataId),								)
							);
						}
						
					}
					
					//$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
					
				}
			}
			
			if ($visas = $request->query->get('visa')) {
				$subQuery = $this->getEntityManager()->createQueryBuilder()
					->select('r')
					->from(Review::class, 'r')
					->innerJoin('r.user', 'u')
					->innerJoin('u.company', 'c')
					->andWhere($this->query->expr()->in('r.visa', array_keys($visas)))
					->andWhere($this->query->expr()->in('c.codename', array_values($visas)));
				$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
			}
			
		}
		
		return $this->query;
		
	}
	
	private function getField(string $parent, int $metadataId): ?array
	{
		foreach ($this->fields as $field) {
			if ($field['id'] == $parent . '_' . $metadataId) {
				return $field;
			}
		}
	}
	
	private function addEq($field, $parameter)
	{
		$this->uid++;
		$eqQuery = $this->query->expr()->eq($field, '?' . $this->uid);
		$this->query->setParameter($this->uid, $parameter);
		return $eqQuery;
	}
	
	private function addNotEq($field, $parameter)
	{
		$this->uid++;
		$notEqQuery = $this->query->expr()->neq($field, '?' . $this->uid);
		$this->query->setParameter($this->uid, $parameter);
		return $notEqQuery;
	}
	
	private function addAnd($array)
	{
		$andQuery = $this->query->expr()->andX();
		foreach ($array as $field => $parameter) {
			$andQuery->add($this->addEq($field, $parameter));
		}

		return $andQuery;
	}
	
	
	private function displayLog()
	{
		
		$conf = $this->getEntityManager()->getConnection()->getConfiguration();
		$backupLogger = $conf->getSQLLogger();
		$logger = new \Doctrine\DBAL\Logging\DebugStack();
		$conf->setSQLLogger($logger);
		
		$this->query->getQuery()->getResult();
		$conf->setSQLLogger($backupLogger); //restore logger for other queries
		
		$res = $logger->queries[1];
		
		foreach ($res['params'] as $p) {
			if (is_array($p)) {
				foreach ($p as $v) {
					$res['sql'] = str_replace('?', $v, $res['sql']);
				}
			} else {
				$res['sql'] = str_replace('?', $p, $res['sql']);
			}
		}
		dd($res['sql']);
	}
	
	public function test()
	{

		$this->query = $this->createQueryBuilder('v')
			->select('t, v, d, s, vi', 'vv')
			->innerJoin('v.status', 't')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's')
			->andWhere('d.serie IN (15)');
			
		
// 		$this->query->leftJoin('s.metadataItems', 'si');
// 		$this->query->leftJoin('s.metadataValues', 'sv');
// 		$this->query->leftJoin('d.metadataItems', 'di');
// 		$this->query->leftJoin('d.metadataValues', 'dv');
 		$this->query->leftJoin('v.metadataItems', 'vi');
		$this->query->leftJoin('v.metadataValues', 'vv');
		
// 		$this->query
// 			->andWhere('vi.metadata = 2')
// 			->andWhere('vi.id = 9');
		
		return $this->query->getQuery()
//  			->setFetchMode(Version::class, 'status', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
// 			->setFetchMode(Version::class, 'writer', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
// 			->setFetchMode(Version::class, 'checker', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
// 			->setFetchMode(Version::class, 'approver', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
		
// 			->setFetchMode(Version::class, 'document', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
// 			->setFetchMode(Document::class, 'serie', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
			
// 			->setFetchMode(Version::class, 'metadataItems', \Doctrine\ORM\Mapping\ClassMetadata::FETCH_EAGER)
			
		->getResult();
			
		//$this->displayLog();
	}
	
}
