<?php

namespace App\Repository;

use App\Entity\MetadataItem;
use App\Entity\Metadata;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method MetadataItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataItem[]    findAll()
 * @method MetadataItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetadataItem::class);
    }

    /**
     * @return MetadataItem[]
     *
     */
    public function getMetadataItem(Metadata $metadata)
    {
    	return $this->createQueryBuilder('m')
    	->andWhere('m.metadata = :val')
    	->setParameter('val', $metadata)
    	->addOrderBy('m.value')
    	->getQuery()
    	->getResult()
    	;
    }
}
