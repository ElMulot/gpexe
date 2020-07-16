<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Status;
use App\Entity\Project;

/**
 * @method Status|null find($id, $lockMode = null, $lockVersion = null)
 * @method Status|null findOneBy(array $criteria, array $orderBy = null)
 * @method Status[]    findAll()
 * @method Status[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class StatusRepository extends ServiceEntityRepository
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
    	return $this->createQueryBuilder('s')
    	->andWhere('s.project = :val')
    	->setParameter('val', $project)
    	->addOrderBy('s.name')
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
    	return (int)$this->createQueryBuilder('s')
	    	->select('count(s.id)')
	    	->andWhere('s.project = :val')
	    	->setParameter('val', $project)
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
    	return $this->createQueryBuilder('s')
	    	->andWhere('s.project = :project')
	    	->setParameter('project', $project)
	    	->andWhere('s.isDefault = :isDefault')
	    	->setParameter('isDefault', true)
	    	->getQuery()
	    	->getSingleResult()
    	;
    }
}
