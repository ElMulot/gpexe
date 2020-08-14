<?php

namespace App\Repository;

use App\Entity\Profil;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Profil|null find($id, $lockMode = null, $lockVersion = null)
 * @method Profil|null findOneBy(array $criteria, array $orderBy = null)
 * @method Profil[]    findAll()
 * @method Profil[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProfilRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Profil::class);
    }
    
    /**
     * @return Profil[]
     *
     */
    public function getProfils()
    {
    	return $this->createQueryBuilder('p')
	    	->addOrderBy('p.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return int
     *
     */
    public function countAdminProfil(int $id): int
     {
	     return (int)$this->createQueryBuilder('p')
		     ->select('count(p.id)')
		     ->andWhere('p.id <> :val')
		     ->setParameter('val', $id)
		     ->andWhere('p.isAdmin = true')
		     ->getQuery()
		     ->getSingleScalarResult()
	     ;
     }
}
