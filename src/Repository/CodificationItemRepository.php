<?php

namespace App\Repository;

use App\Entity\CodificationItem;
use App\Entity\Codification;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodificationItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodificationItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodificationItem[]    findAll()
 * @method CodificationItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationItemRepository extends ServiceEntityRepository
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
    	return $this->createQueryBuilder('c')
    	->andWhere('c.codification = :val')
    	->setParameter('val', $codification)
    	->addOrderBy('c.id')
    	->getQuery()
    	->getResult()
    	;
    }
}
