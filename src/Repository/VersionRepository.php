<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use App\Entity\Project;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Entity\Review;


/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]	findAll()
 * @method Version[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends ServiceEntityRepository
{
	
	private $uid;
	
	private $query;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Version::class, Document::class);
		$this->router = $router;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsArray(array $fields, Serie $serie=null, $request=null)
	{
		
		$codificationQuery = [];
		$subQuery = [];
		
		$this->query = $this->createQueryBuilder('v')
			->innerJoin('v.status', 't')
			->innerJoin('v.document', 'd')
			->innerJoin('d.serie', 's');
		
		if ($serie) {
			$this->query->andWhere('d.serie = :id')->setParameter('id', $serie);
		}
		
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
			
			$metadatas = [];
			
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
						$metadatas[$field] = $value;
				}
			}
			
			foreach ($request->query->get('document') ?? [] as $field => $value) {
				switch ($field) {
					default:
						$metadatas[$field] = $value;
				}
			}
			
			foreach ($request->query->get('version') ?? [] as $field => $value) {
				switch ($field) {
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
						$metadatas[$field] = $value;
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
			
			foreach ($metadatas as $metadata => $ids) {
				
				$subQuery = $this->createQueryBuilder('v' . $metadata)
				->innerJoin('v' . $metadata . '.metadataItems', 'i' . $metadata);
				
				if (is_array($ids)) {
					foreach ($ids as $id) {
						if ($id) {
							$andQuery = $this->query->expr()->andX(
								$this->addEq('i' . $metadata . '.id', $id),
								$this->addEq('i' . $metadata . '.metadata', $id));
							$subQuery->orWhere($andQuery);
						}
						
					}
					
				} else { //boolean
					
					if ($ids == "0") {
						
						$orQuery = $this->query->expr()->orX(
							$this->addNotEq('i' . $metadata . '.id', $ids),
							$this->addNotEq('i' . $metadata . '.metadata', $metadata));
						$subQuery->orWhere($orQuery);
						
					} elseif ($ids == "1") {
						
						$andQuery = $this->query->expr()->andX(
							$this->addEq('i' . $metadata . '.id', $ids),
							$this->addEq('i' . $metadata . '.metadata', $metadata));
						$subQuery->orWhere($andQuery);
					}
					
					
				}
				
				$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
			}
			
			if ($visas = $request->query->get('visa')) {
				$subQuery = $this->getEntityManager()->createQueryBuilder()
					->select('r')
					->from(Review::class, 'r')
					->innerJoin('r.user', 'u')
					->andWhere($this->query->expr()->in('r.visa', array_keys($visas)))
					->andWhere($this->query->expr()->in('u.company', array_values($visas)));
				$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
			}
			
			if ($request->query->get('sortAsc') || $request->query->get('sortDesc')) {
				$sortedField = $request->query->get('sortAsc') || $request->query->get('sortDesc');
				$order = ($request->query->get('sortAsc'))?'ASC':'DESC';
				
				switch ($sortedField) {
					case 'version[name]':
						$this->query->addOrderBy('v.name', $order);
						break;
					case 'document[name]':
						$this->query->addOrderBy('d.name', $order);
						break;
					case 'version[initial_scheduled_date]':
						$this->query->addOrderBy('v.initialScheduledDate', $order);
						break;
					case 'version[scheduled_date]':
						$this->query->addOrderBy('v.scheduledDate', $order);
						break;
					case 'version[delivery_date]':
						$this->query->addOrderBy('v.deliveryDate', $order);
						break;
					case 'version[writer]':
						$this->query
						->innerJoin('v.writer', 'w')
						->addOrderBy('w.name', $order);
						break;
					case 'version[checker]':
						$this->query
						->innerJoin('v.checker', 'c')
						->addOrderBy('c.name', $order);
						break;
					case 'version[approver]':
						$this->query
						->innerJoin('v.approver', 'a')
						->addOrderBy('a.name', $order);
						break;
					case 'serie[name]':
						$this->query->addOrderBy('s.name', $order);
						break;
					case 'serie[company]':
						$this->query
						->innerJoin('s.company', 'c')
						->addOrderBy('c.name', $order);
						break;
					case 'status[name]':
						$this->query->addOrderBy('t.name', $order);
						break;
					case 'status[value]':
						$this->query->addOrderBy('t.value', $order);
						break;
					case 'status[type]':
						$this->query->addOrderBy('t.type', $order);
						break;
				}
				
			}
			
		}
		
		$versions = $this->query->getQuery()->getResult();
		
		$display = $request->query->get('display') ?? [];
		$result = [];
		$row = [];
		
		
		foreach ($versions as $version) {
			$row['id'] = $version->getId();
			$row['detailUrl'] = $this->router->generate('document_detail', [
				'id' => $version->getId()
			]);
			
			foreach ($fields as $fullCodeName => $field) {
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
	
}
