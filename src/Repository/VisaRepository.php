<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Project;
use App\Entity\Visa;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Visa|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visa|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visa[]	findAll()
 * @method Visa[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisaRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Visa::class);
	}

	/**
	 * @return Visa[]
	 *
	 */
	public function getVisas(Project $project)
	{
		$qb = $this->newQB('v');
		return $qb
			->andWhere($qb->eq('v.project', $project))
			->addOrderBy('v.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Visa[]
	 *
	 */
	public function getVisasByCompany(Project $project, Company $company)
	{
		$qb = $this->newQB('v');
		return $qb
			->andWhere($qb->eq('v.project', $project))
			->andWhere($qb->eq('v.company', $company))
			->addOrderBy('v.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Visa[]
	 *
	 */
	public function getVisasByCompanyAsArray(Project $project, Company $company)
	{
		$qb = $this->newQB('v');
		return $qb
			->select('v.id, v.name')
			->andWhere($qb->eq('v.project', $project))
			->andWhere($qb->eq('v.company', $company))
			->addOrderBy('v.name')
			->getQuery()
			->getResult()
		;
	}
}
