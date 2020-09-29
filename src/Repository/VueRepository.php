<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Vue;
use App\Entity\Project;
use App\Entity\User;
use App\Service\RepositoryService;

/**
 * @method Vue|null find($id, $lockMode = null, $lockVersion = null)
 * @method Vue|null findOneBy(array $criteria, array $orderBy = null)
 * @method Vue[]	findAll()
 * @method Vue[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VueRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Vue::class);
	}

	/**
	 * @return Vue[]
	 *
	 */
	public function getVues(Project $project, User $user)
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
	 * @return Vue
	 *
	 */
	public function getVueById(int $vueId)
	{
		$qb = $this->newQB('v');
		
		return $qb->andWhere($qb->eq('v.id', $vueId))
			->getQuery()
			->getOneOrNullResult()
		;
	}
	
	/**
	 * @return Vue
	 *
	 */
	public function getDefaultVue(Project $project, User $user)
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
