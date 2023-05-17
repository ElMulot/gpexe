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
	 * Return an array of view accessible by the user.
	 * Used-by : EngineeringController::index, ViewController::index
	 *
	 * @param Project $project
	 * @param User $user
	 * @return View[]
	 */
	public function getViewsByProjectAndByUser(Project $project, User $user): array
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
	 * Return the dedicated view if accessible by the user.
	 * If the default view doesn't exist or is not accessible to this user, return null
	 * Used-by : EngineeringController::index, ViewController::index
	 *
	 * @param Project $project
	 * @param User $user
	 * @param int|null $id
	 * @return View|null
	 */
	public function getViewByProjectByUserAndById(Project $project, User $user, ?int $id): ?View
	{
		$qb = $this->newQB('v');
		
		return $qb
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->andWhere($qb->eq('v.id', $id))
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
			->setMaxResults(1)
			->getQuery()
			->getOneOrNullResult();
		
	}
	
	/**
	 * Return the default view.
	 * If the default view doesn't exist, return null
	 * Used-by : EngineeringController::index, ViewController::index
	 *
	 * @param Project $project
	 * @param User $user
	 * @return View|null
	 */
	public function getDefaultViewByProjectAndByUser(Project $project, User $user): ?View
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
			->getOneOrNullResult();
		
	}
}
