<?php

namespace App\Repository;

use App\Entity\Project;
use App\Entity\Status;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Status|null find($id, $lockMode = null, $lockVersion = null)
 * @method Status|null findOneBy(array $criteria, array $orderBy = null)
 * @method Status[]    findAll()
 * @method Status[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatusRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Status::class);
    }
	
    /**
     * @return Status[]
     *
     */
    public function getStatuses(Project $project)
    {
    	$qb = $this->newQb('s');
    	return $qb
	    	->andWhere($qb->eq('s.project', $project))
	    	->addOrderBy('s.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Status[]
     *
     */
    public function getNonCancelledStatuses(Project $project)
    {
    	$qb = $this->newQb('s');
    	return $qb
	    	->select('s.id')
	    	->andWhere($qb->eq('s.project', $project))
	    	->andWhere($qb->neq('s.type', Status::CANCEL))
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return int
     *
     */
    public function getStatusesCount(Project $project): int
    {
    	$qb = $this->newQb('s');
    	return (int)$qb
	    	->select('count(s.id)')
	    	->andWhere($qb->eq('s.project', $project))
	    	->getQuery()
	    	->getSingleScalarResult()
    	;
    }
    
    /**
     * @return Status[]
     *
     */
    public function getDefaultStatus(Project $project)
    {
    	$qb = $this->newQb('s');
    	return $qb
    		->andWhere($qb->eq('s.project', $project))
    		->andWhere($qb->eq('s.isDefault', true))
	    	->getQuery()
	    	->getSingleResult()
    	;
    }
    
    /**
     * @return Status[]
     *
     */
    public function getStatusesAsArray(Project $project)
    {
    	$qb = $this->newQb('s');
    	return $qb
	    	->select('s.id, s.value')
	    	->andWhere($qb->eq('s.project', $project))
	    	->addOrderBy('s.name')
	    	->getQuery()
	    	->getArrayResult()
    	;
    }
}
