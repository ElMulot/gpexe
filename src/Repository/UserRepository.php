<?php

namespace App\Repository;

use App\Entity\User;
use App\Entity\Company;
use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\PasswordUpgraderInterface;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * @method User|null find($id, $lockMode = null, $lockVersion = null)
 * @method User|null findOneBy(array $criteria, array $orderBy = null)
 * @method User[]    findAll()
 * @method User[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserRepository extends ServiceEntityRepository implements PasswordUpgraderInterface
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
    	return $this->createQueryBuilder('u')
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
    	return $this->createQueryBuilder('u')
	    	->innerJoin('u.company', 'c')
	    	->innerJoin('u.projects', 'p')
	    	->andWhere('p.id = :project')
	    	->setParameter('project', $project)
	    	->andWhere('c.type IN (:type)')
	    	->setParameter('type', [Company::MAIN_CONTRACTOR, Company::CHECKER])
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
    	return $this->createQueryBuilder('u')
	    	->andWhere('u.company = :company')
	    	->setParameter('company', $company)
	    	->addOrderBy('u.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return User[]
     */
    public function getUsersBySeries(array $series)
    {
    	if ($series == false) {
    		return [];
    	}
    	return $this->createQueryBuilder('u')
	    	->innerJoin('u.projects', 'p')
	    	->innerJoin('p.series', 's')
	    	->andWhere($this->createQueryBuilder('s')->expr()->in('s.id', $series))
	    	->addOrderBy('u.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
}
