<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use App\Entity\Project;
use App\Entity\User;
use App\Entity\Version;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordAuthenticatedUserInterface;
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
	public function upgradePassword(PasswordAuthenticatedUserInterface $user, string $newHashedPassword): void
	{
		if (!$user instanceof User) {
			throw new UnsupportedUserException(sprintf('Instances of "%s" are not supported.', $user::class));
		}

		$user->setPassword($newHashedPassword);
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
	 * Return an array of users from an array of versions
	 * Used-by : VersionType
	 * @param Version[]|null $versions
	 * @return User[]
	 */
	public function getWriters(Project $project, ?array $versions = []): array
	{
		$qb = $this->newQB('u');

		return $qb
			->innerJoin('u.projects', 'p')
			->innerJoin('p.series', 's')
			->innerJoin('s.documents', 'd')
			->innerJoin('d.versions', 'v')
			->andWhere($qb->eq('p.id', $project))
			->andWhere($qb->in('v.id', array_map(fn(Version $version) => $version->getId(), $versions)))
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
			->andWhere($qb->in('c.type', [CompanyTypeEnum::MAIN_CONTRACTOR, CompanyTypeEnum::CHECKER]))
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
	 * @param Serie[] $series
	 */
	public function getUsersBySeriesAsArray(?array $series = []): array
	{
		if (!$series) {
			return [];
		}

		dump($series);

		$qb = $this->newQB('u');
		return $qb
			->select('u.id, u.name')
			->innerJoin('u.projects', 'p')
			->innerJoin('p.series', 's')
			->andWhere($qb->in('s.id', $series))
			->addOrderBy('u.name')
			->getQuery()
			->getArrayResult();
	}
	
	/**
	 * @return User[]
	 */
	public function getCheckersArray(Project $project)
	{
		$qb = $this->newQB('u');
		return $qb
		->select('u.id, u.name')
			->innerJoin('u.company', 'c')
			->innerJoin('u.projects', 'p')
			->andWhere($qb->eq('p.id', $project))
			->andWhere($qb->in('c.type', [CompanyTypeEnum::MAIN_CONTRACTOR, CompanyTypeEnum::CHECKER]))
			->addOrderBy('u.name')
			->getQuery()
			->getResult()
		;
	}
	
}
