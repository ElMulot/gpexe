<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\MetadataValue;

/**
 * @method MetadataValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataValue[]    findAll()
 * @method MetadataValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataValueRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetadataValue::class);
    }

}
