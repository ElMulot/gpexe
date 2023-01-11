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
	public function getViewsByProjectAndByUser(Project $project, User $user)
	{
		$qb = $this->newQB('v');
		
		return $qb
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->andWhere($qb->eq('v.project', $project))
			->andWhere(
				$qb->orX(
					$qb->andX(
						$qb->orX(
							$qb->eq('p.superAdmin', true),
							$qb->eq('p.admin', true)
						),
						$qb->eq('v.shared', true),
					),
					$qb->eq('v.user', $user)
				)
			)
			->orderBy('p.superAdmin, p.admin, v.name')
			->getQuery()
			->getResult()
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
			->andWhere($qb->eq('v.project', $project))
			->andWhere(
				$qb->orX(
					$qb->andX(
						$qb->orX(
							$qb->eq('p.superAdmin', true),
							$qb->eq('p.admin', true)
						),
						$qb->eq('v.shared', true),
					),
					$qb->eq('v.user', $user)
				)
			)
			->andWhere($qb->eq('v.default', true))
			->orderBy('p.superAdmin, p.admin')
			->setMaxResults(1)
			->getQuery()
			->getOneOrNullResult()
		;
	}
}
