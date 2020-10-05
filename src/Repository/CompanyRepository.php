<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Company;
use App\Entity\Project;
use App\Entity\User;

/**
 * @method Company|null find($id, $lockMode = null, $lockVersion = null)
 * @method Company|null findOneBy(array $criteria, array $orderBy = null)
 * @method Company[]    findAll()
 * @method Company[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
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
    public function getCompaniesByProject(Project $project)
    {
    	$qb = $this->newQb('c');
    	
	    return $qb->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere($qb->eq('p.id', $project->getId()))
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    
    /**
     * @return Company[]
     */
    public function getMainContractors(Project $project, User $user = null)
    {
    	$qb = $this->newQb('c');
	    
	    $qb->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere($qb->eq('p.id',  $project->getId()))
	    	->andWhere($qb->eq('c.type', Company::MAIN_CONTRACTOR))
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
    public function getSubContractors(Project $project, User $user = null)
    {
    	$qb = $this->newQb('c');
    	
    	$qb->innerJoin('c.users', 'u')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere($qb->eq('p.id',  $project->getId()))
	    	->andWhere($qb->in('c.type', [Company::SUB_CONTRACTOR, Company::SUPPLIER]))
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
	    	->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::CHECKER]))
	    	->addOrderBy('c.priority', 'DESC')
	    	->addOrderBy('c.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
}
