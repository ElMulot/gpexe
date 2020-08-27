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
		return $this->createQueryBuilder('v')
			->select('v.id, v.name')
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$this->expr()->andX(
					$this->expr()->eq('p.isAdmin', ':isAdmin'),
					$this->expr()->eq('v.isShared', ':isShared'),
				),
				$this->expr()->eq('v.user', ':user')
			)
			->setParameter('isAdmin', true)
			->setParameter('isShared', true)
			->setParameter('user', $user)
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
		return $this->createQueryBuilder('v')
			->andWhere('v.id = :id')
			->setParameter('id', $vueId)
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
		$query = $this->createQueryBuilder('v');
		
		return $query
			->innerJoin('v.user', 'u')
			->innerJoin('u.profil', 'p')
			->orWhere(
				$query->expr()->andX(
					$query->expr()->eq('p.isAdmin', ':isAdmin'),
					$query->expr()->eq('v.isShared', ':isShared'),
					),
				$query->expr()->eq('v.user', ':user')
				)
			->andWhere('v.isDefault = :isDefault')
			->setParameter('isAdmin', true)
			->setParameter('isShared', true)
			->setParameter('user', $user)
			->setParameter('isDefault', true)
			->orderBy('v.isDefault')
			->getQuery()
			->getOneOrNullResult()
		;
	}
}
