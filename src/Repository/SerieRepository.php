<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Serie;
use App\Entity\Version;
use App\Service\RepositoryService;
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
	
	private $router;
	
	public function __construct(ManagerRegistry $registry, UrlGeneratorInterface $router)
	{
		parent::__construct($registry, Serie::class);
		$this->router = $router;
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
		->andWhere($qb->eq('c.type', Company::MAIN_CONTRACTOR))
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
	public function getSeriesByTypeAsArray(Project $project, string $type)
	{
		switch ($type) {
			case 'sdr':
				$qb = $this->newQb('s');
				$series = $qb
					->select('s.id, s.name')
					->innerJoin('s.company', 'c')
					->andWhere($qb->in('c.type', [Company::SUB_CONTRACTOR, Company::SUPPLIER]))
					->addOrderBy('s.name')
					->getQuery()
					->getArrayResult()
				;
				break;
			case 'mdr':
				$qb = $this->newQb('s');
				$series = $qb
					->select('s.id, s.name')
					->innerJoin('s.company', 'c')
					->andWhere($qb->eq('c.type', Company::MAIN_CONTRACTOR))
					->addOrderBy('s.name')
					->getQuery()
					->getArrayResult()
				;
				break;
			default:
				$series = [];
		}
		
		foreach ($series as &$serie) {
			$serie['type'] = $type;
			$serie['url'] = $this->router->generate('document', [
				'project' => $project->getId(),
				'type' => $type,
				'serie' => $serie['id'],
			]);
		}
		
		return $series;
	}
	
	/**
	 * @return Serie[]
	 */
	public function getSeriesByCompanyAsArray(Project $project, Company $company)
	{
		$qb = $this->newQb('s');
		$series = $qb
			->select('s.id, s.name, c.type AS company_type')
			->innerJoin('s.company', 'c')
			->andWhere($qb->eq('s.project', $project))
			->andWhere($qb->eq('s.company', $company))
			->addOrderBy('s.name')
			->getQuery()
			->getArrayResult()
		;
		
		foreach ($series as &$serie) {
			switch ($serie['company_type']) {
				case Company::SUB_CONTRACTOR:
				case Company::SUPPLIER:
					$serie['type'] = 'sdr';
				case Company::MAIN_CONTRACTOR:
					$serie['type'] = 'mdr';
			}
			unset($serie['company_type']);
			
			$serie['url'] = $this->router->generate('document', [
				'project' => $project->getId(),
				'type' => $serie['type'],
				'serie' => $serie['id'],
			]);	
		}
		
		return $series;
	}
	
}
