<?php

namespace App\Repository;

use App\Entity\Program;
use App\Entity\Project;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Program|null find($id, $lockMode = null, $lockVersion = null)
 * @method Program|null findOneBy(array $criteria, array $orderBy = null)
 * @method Program[]    findAll()
 * @method Program[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgramRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Program::class);
    }
    
    /**
     * @return Program[]
     *
     */
    public function getPrograms(Project $project)
    {
    	$qb = $this->newQB('p');
    	return $qb
	    	->andWhere($qb->eq('p.project', $project))
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Program[]
     *
     */
    public function getEnabledPrograms(Project $project)
    {
    	$qb = $this->newQB('p');
    	return $qb
	    	->andWhere($qb->eq('p.project', $project))
	    	->andWhere($qb->eq('p.enabled', true))
	    	->getQuery()
    		->getResult()
    	;
    }
}
