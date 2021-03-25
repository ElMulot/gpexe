<?php

namespace App\Repository;

use App\Entity\Automation;
use App\Entity\Program;
use App\Entity\Project;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Automation|null find($id, $lockMode = null, $lockVersion = null)
 * @method Automation|null findOneBy(array $criteria, array $orderBy = null)
 * @method Automation[]    findAll()
 * @method Automation[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AutomationRepository extends RepositoryService
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
    	$qb = $this->newQB('a');
    	return $qb
    		->andWhere($qb->eq('a.project', $project))
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Automation[]
     *
     */
    public function getAutomationsToRun()
    {
    	$qb = $this->newQB('a');
    	return $qb
	    	->andWhere($qb->eq('a.enabled', true))
	    	->andWhere($qb->lte('a.nextRun', new \DateTime('')))
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Automation[]
     *
     */
    public function getAutomationByRouteAndByParameters(string $route, array $parameters)
    {
    	$qb = $this->newQB('a');
    	$automations = $qb
	    	->andWhere($qb->eq('a.route', $route))
	    	->getQuery()
	    	->getResult()
    	;
    	
    	foreach ($automations as $automation) {
    		if ($automation->getParameters() == $parameters) {
    			return $automation;
    		}
    	}
    	
    	return null;
    }
}
