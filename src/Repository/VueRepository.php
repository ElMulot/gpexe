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
		return $this->newQuery('v')
			->select('v.id, v.name')
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$this->andX(
					$this->eq('p.isAdmin', true),
					$this->eq('v.isShared', true),
				),
				$this->eq('v.user', $user)
			)
			->orderBy('v.name')
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
		return $this->newQuery('v')
			->andWhere($this->eq('v.id', $vueId))
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
		
		return $this->newQuery('v')
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$this->andX(
					$this->eq('p.isAdmin', true),
					$this->eq('v.isShared', true),
					),
				$this->eq('v.user', $user)
				)
			->andWhere($this->eq('v.isDefault', true))
			->orderBy('v.isDefault')
			->getQuery()
			->getOneOrNullResult()
		;
	}
}
