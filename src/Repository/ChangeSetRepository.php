<?php

namespace App\Repository;

use App\Entity\ChangeSet;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method ChangeSet|null find($id, $lockMode = null, $lockVersion = null)
 * @method ChangeSet|null findOneBy(array $criteria, array $orderBy = null)
 * @method ChangeSet[]	findAll()
 * @method ChangeSet[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ChangeSetRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, ChangeSet::class);
	}
}