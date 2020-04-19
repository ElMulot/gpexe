<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Project;
use App\Entity\Serie;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Serie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Serie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Serie[]    findAll()
 * @method Serie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SerieRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Serie::class);
    }
    
    public function getSeries(Project $project, Company $company)
    {
    	return $this->createQueryBuilder('s')
    	->andWhere('s.project = :project')
    	->setParameter('project', $project)
    	->andWhere('s.company = :company')
    	->setParameter('company', $company)
    	->addOrderBy('s.name')
    	->getQuery()
    	->getResult()
    	;
    }
}
