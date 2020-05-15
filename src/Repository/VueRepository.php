<?php

namespace App\Repository;

use App\Entity\Vue;
use App\Entity\Project;
use App\Entity\User;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Vue|null find($id, $lockMode = null, $lockVersion = null)
 * @method Vue|null findOneBy(array $criteria, array $orderBy = null)
 * @method Vue[]	findAll()
 * @method Vue[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VueRepository extends ServiceEntityRepository
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
		$query = $this->createQueryBuilder('v');
		
		return $query
			->innerJoin('v.profil', 'p')
			->orWhere(
				$query->expr()->andX(
					$query->expr()->eq('p.isAdmin', ':isAdmin'),
					$query->expr()->eq('v.share', ':share'),
				),
				$query->expr()->eq('v.user', ':user')
			)
			->setParameter('isAdmin', true)
			->setParameter('share', true)
			->setParameter('user', $user)
			->orderBy('v.name')
			->getQuery()
			->getResult()
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
			->innerJoin('v.profil', 'p')
			->orWhere(
				$query->expr()->andX(
					$query->expr()->eq('p.isAdmin', ':isAdmin'),
					$query->expr()->eq('v.share', ':share'),
					),
				$query->expr()->eq('v.user', ':user')
				)
			->andWhere('v.default = :default')
			->setParameter('isAdmin', true)
			->setParameter('share', true)
			->setParameter('user', $user)
			->setParameter('default', true)
			->orderBy('v.default')
			->getQuery()
			->getOneOrNullResult()
		;
	}
}
