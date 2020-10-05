<?php

namespace App\Repository;

use App\Entity\Metadata;
use App\Entity\Project;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Metadata|null find($id, $lockMode = null, $lockVersion = null)
 * @method Metadata|null findOneBy(array $criteria, array $orderBy = null)
 * @method Metadata[]    findAll()
 * @method Metadata[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Metadata::class);
    }

    /**
     * @return Metadata[]
     *
     */
    public function getMetadatas(Project $project)
    {
    	return $this->createQueryBuilder('m')
	    	->andWhere('m.project = :project')
	    	->setParameter('project', $project)
	    	->addOrderBy('m.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Metadata[]
     *
     */
    public function getMetadatasForSerie(Project $project)
    {
    	return $this->createQueryBuilder('m')
	    	->andWhere('m.project = :project')
	    	->setParameter('project', $project)
	    	->andWhere('m.parent = :parent')
	    	->setParameter('parent', Metadata::SERIE)
	    	->addOrderBy('m.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Metadata[]
     *
     */
    public function getMetadatasForDocument(Project $project)
    {
    	return $this->createQueryBuilder('m')
	    	->andWhere('m.project = :project')
	    	->setParameter('project', $project)
	    	->andWhere('m.parent = :parent')
	    	->setParameter('parent', Metadata::DOCUMENT)
	    	->addOrderBy('m.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return Metadata[]
     *
     */
    public function getMetadatasForVersion(Project $project)
    {
    	return $this->createQueryBuilder('m')
	    	->andWhere('m.project = :project')
	    	->setParameter('project', $project)
	    	->andWhere('m.parent = :parent')
	    	->setParameter('parent', Metadata::VERSION)
	    	->addOrderBy('m.name')
	    	->getQuery()
	    	->getResult()
    	;
    }
}
