<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\ChangeSet;

/**
 * @method ChangeSet|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChangeSet|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChangeSet[]    findAll()
 * @method ChangeSet[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChangeSetRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
    	parent::__construct($registry, ChangeSet::class);
    }
}