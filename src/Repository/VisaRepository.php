<?php

namespace App\Repository;

use App\Entity\Visa;
use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;

/**
 * @method Visa|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visa|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visa[]    findAll()
 * @method Visa[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisaRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Visa::class);
    }

    /**
     * @return Visa[]
     *
     */
    public function getVisas(Project $project)
    {
    	return $this->createQueryBuilder('v')
    	->andWhere('v.project = :val')
    	->setParameter('val', $project)
    	->addOrderBy('v.name')
    	->getQuery()
    	->getResult()
    	;
    }
}
