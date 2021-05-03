<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Project;
use App\Entity\User;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]	findAll()
 * @method User[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends RepositoryService implements PasswordUpgraderInterface
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, User::class);
	}

	/**
	 * Used to upgrade (rehash) the user's password automatically over time.
	 */
	public function upgradePassword(UserInterface $user, string $newEncodedPassword): void
	{
		if (!$user instanceof User) {
			throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', \get_class($user)));
		}

		$user->setPassword($newEncodedPassword);
		$this->_em->persist($user);
		$this->_em->flush();
	}
	
	/**
	 * @return User[]
	 */
	public function getUsers()
	{
		return $this->newQB('u')
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return User[]
	 */
	public function getCheckers(Project $project)
	{
		$qb = $this->newQB('u');
		return $qb
			->innerJoin('u.company', 'c')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id', $project))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::CHECKER]))
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return User[]
	 */
	public function getUsersByCompany(Company $company)
	{
		$qb = $this->newQB('u');
		return $qb
			->andWhere($qb->eq('u.company', $company))
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return User[]
	 */
	public function getUsersArrayBySeries(array $series)
	{
		if ($series == false) {
			return [];
		}
		$qb = $this->newQB('u');
		return $qb
			->select('u.id, u.name')
			->innerJoin('u.projects', 'p')
			->innerJoin('p.series', 's')
			->andWhere($qb->in('s.id', $series))
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return User[]
	 */
	public function getCheckersArrayBySeries(Project $project)
	{
		$qb = $this->newQB('u');
		return $qb
		->select('u.id, u.name')
			->innerJoin('u.company', 'c')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id', $project))
			->andWhere($qb->in('c.type', [Company::MAIN_CONTRACTOR, Company::CHECKER]))
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
}
