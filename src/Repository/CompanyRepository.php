<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Company|null find($id, $lockMode = null, $lockVersion = null)
 * @method Company|null findOneBy(array $criteria, array $orderBy = null)
 * @method Company[]    findAll()
 * @method Company[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CompanyRepository extends ServiceEntityRepository
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
    	return $this->createQueryBuilder('c')
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Company[]
     */
    public function getCompaniesByProject(Project $project)
    {
    	return $this->createQueryBuilder('c')
	    	->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere('p.id = :id')
	    	->setParameter('id', $project->getId())
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    
    /**
     * @return Company[]
     */
    public function getMainContractors(Project $project)
    {
    	return $this->createQueryBuilder('c')
	    	->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere('p.id = :id')
	    	->setParameter('id', $project->getId())
	    	->andWhere('c.type = :type')
	    	->setParameter('type', Company::MAIN_CONTRACTOR)
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Company[]
     */
    public function getSubContractors(Project $project)
    {
    	return $this->createQueryBuilder('c')
	    	->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere('p.id = :id')
	    	->setParameter('id', $project->getId())
	    	->andWhere('c.type IN (:type)')
	    	->setParameter('type', [Company::SUB_CONTRACTOR, Company::SUPPLIER])
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Company[]
     */
    public function getCheckerCompanies(Project $project)
    {
    	return $this->createQueryBuilder('c')
	    	->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere('p.id = :id')
	    	->setParameter('id', $project->getId())
	    	->andWhere('c.type IN (:type)')
	    	->setParameter('type', [Company::MAIN_CONTRACTOR, Company::CHECKER])
	    	->addOrderBy('c.priority', 'DESC')
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
}
