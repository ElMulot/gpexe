<?php

namespace App\Repository;

use App\Entity\Company;
use App\Entity\Metadata;
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
    
    /**
     * @return Serie[]
     */
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
    
    /**
     * @return Serie[]
     */
    public function getSeriesByType(Project $project, string $type)
    {
    	switch ($type) {
    		case 'sdr':
	    		return $this->createQueryBuilder('s')
	    			->innerJoin('s.company', 'c')
		    		->andWhere('c.type IN (:type)')
		    		->setParameter('type', [Company::SUB_CONTRACTOR, Company::SUPPLIER])
		    		->getQuery()
		    		->getResult()
	    		;
    		case 'mdr':
    			return $this->createQueryBuilder('s')
	    			->innerJoin('s.company', 'c')
	    			->andWhere('c.type = :type')
	    			->setParameter('type', Company::MAIN_CONTRACTOR)
	    			->getQuery()
	    			->getResult()
    			;
    		default:
    			return null;
    	}
    }
}
