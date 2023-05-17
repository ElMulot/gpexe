<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Project;
use App\Entity\User;
use App\Form\CompanyType;
use Doctrine\Common\Collections\Collection;

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
	 * Return an array of companies from an array of version.id.
	 * Used-by : SerieController::new, SerieController::edit
	 * 
	 * @param array|null $versionIds
	 * @return Company[]
	 */
	public function getCompaniesByVersionIds(?array $versionIds = []): array
	{
		$qb = $this->newQb('c');
		
		return $qb
			->innerJoin('c.series', 's')
			->innerJoin('s.documents', 'd')
			->innerJoin('d.versions', 'v')
			->andWhere($qb->in('v.id', $versionIds))
			->addOrderBy('c.name')
			->getQuery()
			->getResult();
	}

	/**
	 * Return an array of companies from an array of serie.id.
	 * Used-by : SerieController::new
	 * 
	 * @param array|null $serieIds
	 * @return Company[]
	 */
	public function getCompaniesBySerieIds(?array $serieIds = []): array
	{
		$qb = $this->newQb('c');
		
		return $qb
			->innerJoin('c.series', 's')
			->andWhere($qb->in('s.id', $serieIds))
			->addOrderBy('c.name')
			->getQuery()
			->getResult();
	}

	/**
	 * @param array|null $ids
	 * @return Company[]
	 */
	public function getCompaniesByIds(?array $ids = []): array
	{
		$qb = $this->newQb('c');
		
		return $qb
			->andWhere($qb->in('c.id', $ids))
			->addOrderBy('c.name')
			->getQuery()
			->getResult()
		;
	}
}
