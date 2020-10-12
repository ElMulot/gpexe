<?php

namespace App\Repository;

use App\Entity\Codification;
use App\Entity\CodificationItem;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodificationItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodificationItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodificationItem[]    findAll()
 * @method CodificationItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationItemRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CodificationItem::class);
    }

    /**
     * @return CodificationItem[]
     *
     */
    public function getCodificationItem(Codification $codification)
    {
    	$qb = $this->newQb('c');
    	return $qb
	    	->andWhere($qb->eq('c.codification', $codification))
	    	->getQuery()
	    	->getResult()
    	;
    }
}
