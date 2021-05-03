<?php

namespace App\Repository;

use App\Entity\Codification;
use App\Entity\Project;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Codification|null find($id, $lockMode = null, $lockVersion = null)
 * @method Codification|null findOneBy(array $criteria, array $orderBy = null)
 * @method Codification[]	findAll()
 * @method Codification[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Codification::class);
	}

	/**
	 * @return Codification[]
	 *
	 */
	public function getCodifications(Project $project)
	{
		$qb = $this->newQB('c');
		return $qb
			->andWhere($qb->eq('c.project', $project))
			->getQuery()
			->getResult()
		;
	}
}
