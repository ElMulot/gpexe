<?php

namespace App\Repository;

use App\Entity\Project;
use App\Entity\Visa;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Visa|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visa|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visa[]    findAll()
 * @method Visa[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
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
}
