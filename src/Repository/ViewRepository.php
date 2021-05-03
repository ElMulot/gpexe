<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Project;
use App\Entity\User;
use App\Entity\View;
use App\Service\RepositoryService;

/**
 * @method View|null find($id, $lockMode = null, $lockVersion = null)
 * @method View|null findOneBy(array $criteria, array $orderBy = null)
 * @method View[]	findAll()
 * @method View[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ViewRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, View::class);
	}

	/**
	 * @return View[]
	 *
	 */
	public function getViewsByProjectAndByUserAsArray(Project $project, User $user)
	{
		$qb = $this->newQB('v');
		
		return $qb->select('v.id, v.name, u.id AS user_id, p.isSuperAdmin, p.isAdmin')
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$qb->andX(
					$qb->orX(
						$qb->eq('p.isSuperAdmin', true),
						$qb->eq('p.isAdmin', true)
					),
					$qb->eq('v.isShared', true),
				)
			)
			->orWhere($qb->eq('v.user', $user))
			->orderBy('p.isSuperAdmin, p.isAdmin, v.name')
			->getQuery()
			->getArrayResult()
		;
	}
	
	/**
	 * @return View
	 *
	 */
	public function getViewById(int $viewId)
	{
		$qb = $this->newQB('v');
		
		return $qb->andWhere($qb->eq('v.id', $viewId))
			->getQuery()
			->getOneOrNullResult()
		;
	}
	
	/**
	 * @return View
	 *
	 */
	public function getDefaultViewByProjectAndByUser(Project $project, User $user)
	{
		
		$qb = $this->newQB('v');
		return $qb->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$qb->andX(
					$qb->orX(
						$qb->eq('p.isSuperAdmin', true),
						$qb->eq('p.isAdmin', true)
						),
					$qb->eq('v.isShared', true),
					)
				)
			->orWhere($qb->eq('v.user', $user))
			->andWhere($qb->eq('v.isDefault', true))
			->orderBy('p.isSuperAdmin, p.isAdmin')
			->setMaxResults(1)
			->getQuery()
			->getOneOrNullResult()
		;
	}
}
