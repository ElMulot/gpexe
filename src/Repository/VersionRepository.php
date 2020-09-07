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
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Version::class);
		$this->router = $router;
	}
	
	public function getVersionsCount($codifications, $fields, $series, $request=null): int
	{
		
		$this->newCoreQuery($codifications, $fields, $series, $request);
		
		return $this->query()
			->select($this->newExpr()->count('version.id'))
			->getQuery()
			->setMaxResults(1)
			->getSingleScalarResult()
		;
	}
	
	/**
	 * @return Version[]
	 *
	 */
	public function getVersionsArray($codifications, $fields, $series, $request=null): array
	{
		
		$this->newCoreQuery($codifications, $fields, $series, $request);
		$this->query()->select('version.id AS version_id, document.id AS document_id, serie.id as serie_id');
		$this->query()->addSelect('version.name');
		$this->query()->addSelect('version.name');
		$this->query()->addSelect('version.name');
		
		
		$results = $this->query()->getQuery()->getArrayResult();
		
		dd($results);
		
		dd($this->query()->getDQL());
		if ($request) {
			
			if ($request->query->get('sortAsc') || $request->query->get('sortDesc')) {
				$sortedField = $request->query->get('sortAsc') ?? $request->query->get('sortDesc');
				$order = ($request->query->get('sortAsc'))?'ASC':'DESC';
				
				switch ($sortedField) {
					case 'version_name':
						$this->query()->addOrderBy('version.name', $order);
						break;
					case 'document_name':
						$this->query()->addOrderBy('document.name', $order);
						break;
					case 'version_initial_scheduled_date':
						$this->query()->addOrderBy('version.initialScheduledDate', $order);
						break;
					case 'version_scheduled_date':
						$this->query()->addOrderBy('version.scheduledDate', $order);
						break;
					case 'version_delivery_date':
						$this->query()->addOrderBy('version.deliveryDate', $order);
						break;
					case 'version_writer':
						$this->query()->leftJoin('version.writer', 'writer');
						$this->query()->addOrderBy('writer.name', $order);
						break;
					case 'version_checker':
						$this->query()->leftJoin('version.checker', 'checker');
						$this->query()->addOrderBy('checker.name', $order);
						break;
					case 'version_approver':
						$this->query()->leftJoin('version.approver', 'approver');
						$this->query()->addOrderBy('approver.name', $order);
						break;
					case 'serie_name':
						$this->query()->addOrderBy('serie.name', $order);
						break;
					case 'serie_company':
						$this->query()->leftJoin('serie.company', 'company');
						$this->query()->addOrderBy('company.name', $order);
						break;
					case 'status_name':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addOrderBy('status.name', $order);
						break;
					case 'status_value':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addOrderBy('status.value', $order);
						break;
					case 'status_type':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addOrderBy('status.type', $order);
						break;
				}
			}
		
			//page
			$page = $request->query->get('page');
			
			if ($request->query->get('results_per_page') > 0) {
				$this->query()
					->setFirstResult(($page -1) * $request->query->get('results_per_page'))
					->setMaxResults($request->query->get('results_per_page'));
			}
		
		
		
			foreach (array_keys($request->query->get('display') ?? []) as $name) {
				
				switch ($name) {
					
					case 'document_reference':
					case $request->query->get('search'):
						
						foreach ($codifications as $codification) {
							
							if ($this->hasAlias('codification_' . $codification->getId()) === false) {
								switch ($codification->getType()) {
									case Codification::FIXED:
									case Codification::REGEX:
										$this->query()->leftJoin('document.codificationValues', 'codification_' . $codification->getId(), Join::WITH, 'codification_' . $codification->getId() . '.codification = ' . $codification->getId());
										break;
									case Codification::LIST:
										$this->query()->leftJoin('document.codificationItems', 'codification_' . $codification->getId(), Join::WITH, 'codification_' . $codification->getId() . '.codification = ' . $codification->getId());
										break;
								}
							}
							$this->query()->addSelect('codification_' . $codification->getId());
						}
						break;
					
					case 'version_name':
						$this->query()->addSelect('version.name');
						break;
					
					case 'document_name':
						$this->query()->addSelect('document.name');
						break;
						
					case 'version_initial_scheduled_date':
						$this->query()->addSelect('version.initialScheduledDate');
						break;
					
					case 'version_scheduled_date':
						$this->query()->addSelect('version.scheduledDate');
						break;
					
					case 'version_delivery_date':
						$this->query()->addSelect('version.deliveryDate');
						break;
						
					case 'version_is_required':
						$this->query()->addSelect('version.isRequired');
						break;
						
					case 'version_writer':
						if ($this->hasAlias('version.writer') === false) {
							$this->query()->leftJoin('version.writer', 'writer');
						}
						$this->query()->addSelect('writer.name');
						break;
						
					case 'version_checker':
						if ($this->hasAlias('version.checker') === false) {
							$this->query()->leftJoin('version.checker', 'checker');
						}
						$this->query()->addSelect('checker.name');
						break;
						
					case 'version_approver':
						if ($this->hasAlias('version.approver') === false) {
							$this->query()->leftJoin('version.approver', 'approver');
						}
						$this->query()->addSelect('approver.name');
						break;
						
					case 'serie_name':
						$this->query()->addSelect('serie.name');
						break;
					
					case 'serie_company':
						if ($this->hasAlias('company') === false) {
							$this->query()->leftJoin('serie.company', 'company');
						}
						$this->query()->addSelect('company.name');
						break;
					
					case 'status_name':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addSelect('status.name');
						break;
					
					case 'status_value':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addSelect('status.value');
						break;
					
					case 'status_type':
						if ($this->hasAlias('status') === false) {
							$this->query()->leftJoin('version.status', 'status');
						}
						$this->query()->addSelect('status.type');
						break;
					
					default:
						
						if (preg_match('/(serie|document|version)_(\d+)/', $name, $result) === 1) {
							
							foreach ($this->fields as $field) {
								
								if ($field['id'] == $name && $this->hasAlias('metadata_' . $result[2]) === false) {
									
									switch ($field['type']) {
										
										case Metadata::BOOLEAN:
										case Metadata::DATE:
											$this->query()->leftJoin($result[1] . '.metadataItems', 'metadata_' . $result[2], Join::WITH, 'metadata_' . $result[2] . '.metadata = ' . $result[2]);
											break;
											
										case Metadata::LIST:
											$this->query()->leftJoin($result[1] . '.metadataItems', 'metadata_' . $result[2], Join::WITH, 'metadata_' . $result[2] . '.metadata = ' . $result[2]);
											break;
											
									}
									
									$this->query()->addSelect('metadata_' . $result[2] . '.value');
								}
							}
						}
				}
			}
		}
		
// 		$stopwatch  = new Stopwatch();
// 		$stopwatch ->start('a');
// 		$versions = $this->query()->getQuery()->getResult();
		//dd($versions);
// 		dd($stopwatch ->stop('a')->getDuration());
		
		$this->ddSql();
		
		$results = $this->query()->getQuery()->getArrayResult();
		
		dd($results);
		
		if ($search = $request->query->get('search')) {
			
			$search = preg_replace('/\*+/', '.*', $search);
			
			foreach ($results as $result) {
				
				foreach ($codifications as $codification) { 
					
					if (array_key_exists('codification_' . $codification->getId(), $codification)) {
					
						if ($codification->isList()) {
							
							$value = $result['codification_' . $codification->getId()]->getValue();
							if (!empty($value)) $references[] = $value;
							
						} elseif ($codification->isRegex()) {
							
							$value = $codificationValue->getValue();
							if (!empty($value)) $references[] = $value;
							
						} else {
							
							$value = $codification->getValue();
							if (!empty($value)) $references[] .= $codification->getValue();
							
						}
					}
					
					return join($project->getSplitter(), $references);
					
				}
				
				
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
	
	private function newCoreQuery($codifications, $fields, $series, $request)
	{
		
		$this->fields = $fields;
		$normalizer = new CamelCaseToSnakeCaseNameConverter();
		$codificationQuery = [];
		$subQuery = [];
		
		
		$this->newQuery('version')
			->innerJoin('version.document', 'document')
			->innerJoin('document.serie', 'serie')
			->andWhere($this->in('serie.id', $series))
		;
		
		foreach ($codifications as $codification) {
			switch ($codification->getType()) {
				case Codification::REGEX:
					$this->query()->leftJoin('document.codificationValues', 'codification_' . $codification->getId(), Join::WITH, 'codification_' . $codification->getId() . '.codification = ' . $codification->getId());
					break;
				case Codification::LIST:
					$this->query()->leftJoin('document.codificationItems', 'codification_' . $codification->getId(), Join::WITH, 'codification_' . $codification->getId() . '.codification = ' . $codification->getId());
					break;
			}
		}
		
		if ($request) {
			
			foreach ($request->query->get('codification') ?? [] as $codification => $value) {
				$this->query()->andWhere($this->in('codification_' . $id . '.id', $value));
			}
			
			foreach ($request->query->get('serie') ?? [] as $field => $value) {
				switch ($field) {
					case 'name':
						$this->query()->andWhere($this->in('d.serie', $value));
						break;
					case 'company':
						$this->query()->innerJoin('serie.company', 'company');
						$this->query()->andWhere($this->in('s.company', $value));
						break;
					default:
						$this->addMetadataCriteria('serie', $field, $value);
				}
			}
			
			foreach ($request->query->get('document') ?? [] as $field => $value) {
				switch ($field) {
					default:
						$this->addMetadataCriteria('document', $field, $value);
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
							$this->query()->andWhere($this->gte('version.' . $denormalizedField, new \DateTime($result[1])));
						}
						if (preg_match('/<(\d{2}-\d{2}-\d{4})/', $value, $result) === 1) {
							$this->query()->andWhere($this->lte('version.' . $denormalizedField, new \DateTime($result[1])));
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
						$this->addMetadataCriteria('version', $field, $value);
				}
			}
			
			if ($request->query->get('status')) {
				$this->query()->innerJoin('version.status', 'status');
			}
			
			foreach ($request->query->get('status') ?? [] as $field => $value) {
				
				switch ($field) {
					case 'value':
						$this->query()->andWhere($this->in('status.value', $value));
						break;
					case 'type':
						$this->query()->andWhere($this->in('status.type', $value));
						break;
				}
			}
			
			foreach ($request->query->get('visa') ?? [] as $field => $values) {
				
				$this->query()
					->leftJoin('version.reviews', 'review_' . $field)
					->leftJoin('review_' . $field . '.visa', 'visa_' . $field, Join::WITH, 'visa_' . $field . '.company = ' . $field);
				
				$this->query()->andWhere($this->in('visa_' . $field . '.id', $values));
			}
			
		}
		
		$this->query()->groupBy('version.id');
	}
	
	private function addMetadataCriteria(string $parent, int $metadataId, $value)
	{
		
		foreach ($this->fields as $field) {
			if ($field['id'] == $parent . '_' . $metadataId) {
				
				switch ($field['type']) {
					
					case Metadata::BOOLEAN:
						
						$this->query()->leftJoin($parent . '.metadataValues', 'metadata_' . $metadataId, Join::WITH, 'metadata_' . $metadataId . '.metadata = ' . $metadataId);
						
						if ($value == "1") {
							$this->query()->andWhere($this->eq('metadata_' . $metadataId . '.value', 1));
						} else {
							$this->query()->andWhere(
								$this->orX(
									$this->eq('metadata_' . $metadataId . '.value', 0),
									$this->isNull('metadata_' . $metadataId . '.value')
								)
							);
						}
						
						break;
						
					case Metadata::DATE:
						
						$this->query()->leftJoin($parent . '.metadataItems', 'metadata_' . $metadataId, Join::WITH, 'metadata_' . $metadataId . '.metadata = ' . $metadataId);	
						
						$result = [];
						foreach ($value as $v) {
							
							if (preg_match('/>(\d{2}-\d{2}-\d{4})/', $v, $result) === 1) {
								$this->query()->andWhere($this->gte('metadata_' . $metadataId . '.value', $result[1]));
							} elseif (preg_match('/<(\d{2}-\d{2}-\d{4})/', $v, $result) === 1) {
								$this->query()->andWhere($this->lte('metadata_' . $metadataId . '.value', $result[1]));
							}
							
						}
						
						break;
					
					case Metadata::LIST:
						
						$this->query()->leftJoin($parent . '.metadataItems', 'metadata_' . $metadataId, Join::WITH, 'metadata_' . $metadataId . '.metadata = ' . $metadataId);
						
						$this->query()->andWhere($this->eq('metadata_' . $metadataId . '.value', $value));
						
						break;
				
				}
			}
			
		}
	}
	
	public function test()
	{

		
	}
	
}
