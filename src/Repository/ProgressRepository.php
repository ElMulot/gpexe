<?php

namespace App\Repository;

use App\Entity\Program;
use App\Entity\Progress;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Progress|null find($id, $lockMode = null, $lockVersion = null)
 * @method Progress|null findOneBy(array $criteria, array $orderBy = null)
 * @method Progress[]    findAll()
 * @method Progress[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgressRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Progress::class);
    }
    
    /**
     * @return Progress[]
     *
     */
    public function getProgressArray(Program $program)
    {
    	$qb = $this->newQB('p');
    	return $qb
    		->select('p.date, p.value, IDENTITY(p.serie) AS serieId')
    		->andWhere($qb->eq('p.program', $program))
    		->addOrderBy('p.date', 'DESC')
	    	->getQuery()
	    	->getArrayResult()
    	;
    }
}
