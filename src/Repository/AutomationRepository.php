<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Automation;
use App\Entity\Project;

/**
 * @method Automation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Automation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Automation[]    findAll()
 * @method Automation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AutomationRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Automation::class);
    }
    
    /**
     * @return Automation[]
     *
     */
    public function getAutomations(Project $project)
    {
    	return $this->createQueryBuilder('a')
	    	->andWhere('a.project = :val')
	    	->setParameter('val', $project)
	    	->addOrderBy('a.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Automation[]
     *
     */
    public function getEnabledAutomations(Project $project)
    {
    	return $this->createQueryBuilder('a')
	    	->andWhere('a.project = :project')
	    	->setParameter('project', $project)
	    	->andWhere('a.enabled = :enabled')
	    	->setParameter('enabled', true)
	    	->addOrderBy('a.name')
	    	->getQuery()
    		->getResult()
    	;
    }
}
