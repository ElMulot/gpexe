<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Project;
use App\Entity\User;

/**
 * @method Project|null find($id, $lockMode = null, $lockVersion = null)
 * @method Project|null findOneBy(array $criteria, array $orderBy = null)
 * @method Project[]	findAll()
 * @method Project[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProjectRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Project::class);
	}

	/**
	 * @return Project[]
	 *
	 */
	public function getProjects(User $user)
	{
		return $this->createQueryBuilder('p')
			->innerJoin('p.users', 'u')
			->andWhere('u.id = :val')
			->setParameter('val', $user->getId())
			->addOrderBy('p.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Project[]
	 *
	 */
	public function getAllProjects()
	{
		return $this->createQueryBuilder('p')
			->addOrderBy('p.name')
			->getQuery()
			->getResult()
		;
	}
}
