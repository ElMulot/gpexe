<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Project;
use App\Entity\Serie;
use App\Service\RepositoryService;
use Doctrine\Common\Collections\Collection;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

/**
 * @method Serie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Serie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Serie[]	findAll()
 * @method Serie[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SerieRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry, private readonly UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Serie::class);
	}
	
	/**
	 * @return Collection
	 */
	public function getSeriesByIds(array $ids)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->in('s.id', $ids))
			->addOrderBy('c.type, s.name')
			->getQuery()
			->getResult()
		;
	}

	/**
	 * @return Serie[]
	 */
	public function getSeriesByIdsAsArray(array $ids)
	{
		$qb = $this->newQb('s');
		return $qb
			->select('s.id, s.name, c.type', $qb->count('d.id', 'count'))
			->innerJoin('s.company', 'c')
			->innerJoin('s.documents', 'd')
			->andWhere($qb->in('s.id', $ids))
			->addOrderBy('c.type, s.name')
			->addGroupBy('s.id')
			->getQuery()
			->getArrayResult()
		;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesByProject(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->andWhere($qb->eq('s.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesByProjectAsArray(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->select('s.id, s.name, c.type', $qb->count('d.id', 'count'))
			->innerJoin('s.company', 'c')
			->innerJoin('s.documents', 'd')
			->andWhere($qb->eq('s.project', $project))
// 			->andWhere($qb->lt('s.id', 5))
			->addOrderBy('c.type, s.name')
			->addGroupBy('s.id')
			->getQuery()
			->getArrayResult()
		;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesExcept(Serie $serie)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $serie->getProject()))
			->andWhere($qb->neq('s.id', $serie->getId()))
			->addOrderBy('c.name, s.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Serie[]
	 *
	 */
	public function getDefaultSerie(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('c.type', CompanyTypeEnum::MAIN_CONTRACTOR))
			->getQuery()
			->getSingleResult()
		;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesByCompany(Project $project, Company $company)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('s.company', $company))
			->addOrderBy('c.type, s.name')
			->getQuery()
			->getResult()
		;
	}

	/**
	 * @return Serie[]
	 */
	public function getMdrSeriesByProject(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('c.type', CompanyTypeEnum::MAIN_CONTRACTOR))
			->addOrderBy('s.name')
			->getQuery()
			->getResult()
		;
	}

	/**
	 * @return Serie[]
	 */
	public function getSdrSeriesByProject(Project $project)
	{
		$qb = $this->newQb('s');
		return $qb
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->in('c.type', [CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER]))
			->addOrderBy('s.name')
			->getQuery()
			->getResult()
		;
	}
	
	// /**
	//  * @return Serie[]
	//  */
	// public function getSeriesByTypeAsArray(Project $project, string $type)
	// {
	// 	switch ($type) {
	// 		case 'sdr':
	// 			$qb = $this->newQb('s');
	// 			$results = $qb
	// 				->select('s.id, s.name')
	// 				->innerJoin('s.company', 'c')
	// 				->andWhere($qb->eq('s.project', $project))
	// 				->andWhere($qb->in('c.type', [CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER]))
	// 				->addOrderBy('s.name')
	// 				->getQuery()
	// 				->getArrayResult()
	// 			;
	// 			break;
	// 		case 'mdr':
	// 			$qb = $this->newQb('s');
	// 			$results = $qb
	// 				->select('s.id, s.name')
	// 				->innerJoin('s.company', 'c')
	// 				->andWhere($qb->eq('s.project', $project))
	// 				->andWhere($qb->eq('c.type', CompanyTypeEnum::MAIN_CONTRACTOR))
	// 				->addOrderBy('s.name')
	// 				->getQuery()
	// 				->getArrayResult()
	// 			;
	// 			break;
	// 		case 'all':
	// 			$qb = $this->newQb('s');
	// 			$results = $qb
	// 				->select('s.id, s.name')
	// 				->innerJoin('s.company', 'c')
	// 				->andWhere($qb->eq('s.project', $project))
	// 				->addOrderBy('s.name')
	// 				->getQuery()
	// 				->getArrayResult()
	// 			;
	// 			break;
	// 		default:
	// 			$results = [];
	// 	}
		
	// 	array_walk($results, function(&$item) use ($project, $type) {
	// 		$item['type'] = $type;
	// 		$item['url'] = $this->router->generate('document', [
	// 			'project' => $project->getId(),
	// 			'type' => $type,
	// 			'serie' => $item['id'],
	// 		]);
	// 	});
		
	// 	return $results;
	// }
	
	// /**
	//  * @return Serie[]
	//  */
	// public function getSeriesByCompanyAsArray(Project $project, Company $company)
	// {
	// 	$qb = $this->newQb('s');
	// 	$results = $qb
	// 		->select('s.id, s.name, c.type AS company_type')
	// 		->innerJoin('s.company', 'c')
	// 		->andWhere($qb->eq('s.project', $project))
	// 		->andWhere($qb->eq('s.company', $company))
	// 		->addOrderBy('s.name')
	// 		->getQuery()
	// 		->getArrayResult()
	// 	;
		
	// 	array_walk($results, function(&$item) use ($project) {
	// 		$item['type'] = match ($item['company_type']) {
	// 			CompanyTypeEnum::SUB_CONTRACTOR, CompanyTypeEnum::SUPPLIER	=> 'sdr',
	// 			CompanyTypeEnum::MAIN_CONTRACTOR							=> 'mdr',
	// 		};
	// 		unset($item['company_type']);
			
	// 		$item['url'] = $this->router->generate('document', [
	// 			'project' => $project->getId(),
	// 			'type' => $item['type'],
	// 			'serie' => $item['id'],
	// 		]);
	// 	});
		
	// 	return $results;
	// }
	
}
