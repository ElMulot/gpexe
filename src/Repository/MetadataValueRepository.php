<?php

namespace App\Repository;

use App\Entity\MetadataValue;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MetadataValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataValue[]    findAll()
 * @method MetadataValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataValueRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetadataValue::class);
    }

}
