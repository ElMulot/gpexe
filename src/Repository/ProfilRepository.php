<?php

namespace App\Repository;

use App\Entity\Profil;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Profil|null find($id, $lockMode = null, $lockVersion = null)
 * @method Profil|null findOneBy(array $criteria, array $orderBy = null)
 * @method Profil[]    findAll()
 * @method Profil[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProfilRepository extends RepositoryService
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
    	return $this->newQB('p')
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
		$qb = $this->newQB('p');
     	return (int)$qb
		     ->select('count(p.id)')
		     ->andWhere($qb->neq('p.id', $id))
		     ->andWhere($qb->eq('p.isAdmin', true))
		     ->getQuery()
		     ->getSingleScalarResult()
	     ;
     }
}
