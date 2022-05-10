<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Project;
use App\Entity\User;
use App\Form\CompanyType;

/**
 * @method Company|null find($id, $lockMode = null, $lockVersion = null)
 * @method Company|null findOneBy(array $criteria, array $orderBy = null)
 * @method Company[]	findAll()
 * @method Company[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Company::class);
	}
	
	/**
	 * @return Company[]
	 *
	 */
	public function getCompanies()
	{
		return $this->newQb('c')
			->addOrderBy('c.name')
			->getQuery()
			->getResult()
		;
	}
	
	
	/**
	 * @return Company[]
	 */
	public function getCompaniesByProject(Project $project, $types = [], User $user = null)
	{
		$qb = $this->newQb('c');
		
		$qb->innerJoin('c.users', 'u')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id',  $project->getId()))
			->andWhere($qb->in('c.type', $types))
			->addOrderBy('c.name')
		;
		
		if ($user !== null) {
			$qb->andWhere($qb->eq('u.id', $user));
		}
		
		return $qb->getQuery()->getResult();
	}
	
	/**
	 * @return Company[]
	 */
	public function getCheckerCompanies(Project $project)
	{
		$qb = $this->newQb('c');
		
		return $qb->innerJoin('c.users', 'u')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id',  $project->getId()))
			->andWhere($qb->in('c.type', [CompanyTypeEnum::MAIN_CONTRACTOR, CompanyTypeEnum::CHECKER]))
			->addOrderBy('c.priority', 'ASC')
			->addOrderBy('c.name')
			->getQuery()
			->getResult()
		;
	}
	
	
	/**
	 * @return Company[]
	 */
	public function getCompaniesByProjectAsArray(Project $project)
	{
		$qb = $this->newQb('c');
		
		return $qb->select('c.id', 'c.name')
			->innerJoin('c.users', 'u')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id', $project->getId()))
			->addOrderBy('c.name')
			->getQuery()
			->getArrayResult()
		;
	}

	/**
	 * @return Company[]
	 */
	public function getCompaniesBySerieIds(array $ids): array
	{
		$qb = $this->newQb('c');
		
		return $qb->innerJoin('c.series', 's')
			->andWhere($qb->in('s.id', $ids))
			->addOrderBy('c.name')
			->getQuery()
			->getResult()
		;
	}
}
