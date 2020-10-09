<?php

namespace App\Repository;

use App\Entity\Company;

use App\Entity\Metadata;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Serie;
use App\Entity\Document;
use App\Entity\Version;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Visa;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;

/**
 * @method Serie|null find($id, $lockMode = null, $lockVersion = null)
 * @method Serie|null findOneBy(array $criteria, array $orderBy = null)
 * @method Serie[]    findAll()
 * @method Serie[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class SerieRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Serie::class);
    }
    
    /**
     * @return Serie[]
     */
    public function getSeries(Project $project)
    {
    	return $this->createQueryBuilder('s')
	    	->andWhere('s.project = :project')
	    	->setParameter('project', $project)
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    
    /**
     * @return Serie[]
     *
     */
    public function getHydratedSeries(Project $project)
    {
    	$qb = $this->newQb()
	    	->select('serie, document')
	    	->from(Serie::class, 'serie')
    	;
    	
    	$series = $qb->innerJoin('serie.documents', 'document')
    		->andWhere($qb->eq('serie.project', $project))
	    	->getQuery()
	    	->getResult()
    	;
    	
	    $this->newQB()
	    	->select('PARTIAL serie.{id}, serieMetadataItem, metadata1')
	    	->from(Serie::class, 'serie')
	    	->innerJoin('serie.metadataItems', 'serieMetadataItem')
	    	->innerJoin('serieMetadataItem.metadata', 'metadata1')
	    	->getQuery()
	    	->getResult()
	    ;
	    
	    $this->newQB()
	    	->select('PARTIAL serie.{id}, serieMetadataValue, metadata2')
	    	->from(Serie::class, 'serie')
	    	->innerJoin('serie.metadataValues', 'serieMetadataValue')
	    	->innerJoin('serieMetadataValue.metadata', 'metadata2')
	    	->getQuery()
	    	->getResult()
	    ;
    	
    	$this->newQB()
	    	->select('PARTIAL document.{id}, version, status, writer, checker, approver')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.versions', 'version')
	    	->innerJoin('version.status', 'status')
	    	->leftJoin('version.writer', 'writer')
	    	->leftJoin('version.checker', 'checker')
	    	->leftJoin('version.approver', 'approver')
	    	->getQuery()
	    	->getResult()
	    ;
    	
	    $this->newQB()
	    	->select('PARTIAL document.{id}, documentCodificationItem, codification1')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.codificationItems', 'documentCodificationItem')
	    	->innerJoin('documentCodificationItem.codification', 'codification1')
	    	->getQuery()
	    	->getResult()
	    ;
	    	
	    $this->newQB()
	    	->select('PARTIAL document.{id}, documentCodificationValue, codification2')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.codificationValues', 'documentCodificationValue')
	    	->innerJoin('documentCodificationValue.codification', 'codification2')
	    	->getQuery()
	    	->getResult()
	    ;
	    	
	    $this->newQB()
	    	->select('PARTIAL document.{id}, documentMetadataItem, metadata3')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.metadataItems', 'documentMetadataItem')
	    	->innerJoin('documentMetadataItem.metadata', 'metadata3')
	    	->getQuery()
	    	->getResult()
	    ;
	    
	    $this->newQB()
	    	->select('PARTIAL document.{id}, documentMetadataValue, metadata4')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.metadataValues', 'documentMetadataValue')
	    	->innerJoin('documentMetadataValue.metadata', 'metadata4')
	    	->getQuery()
	    	->getResult()
	    ;
    	
	    $this->newQB()
	    	->select('PARTIAL version.{id}, review')
	    	->from(Version::class, 'version')
	    	->innerJoin('version.reviews', 'review')
	    	->getQuery()
	    	->getResult()
	    ;
	    
	    $this->newQB()
	    	->select('PARTIAL version.{id}, versionMetadataItem, metadata5')
	    	->from(Version::class, 'version')
	    	->innerJoin('version.metadataItems', 'versionMetadataItem')
	    	->innerJoin('versionMetadataItem.metadata', 'metadata5')
	    	->getQuery()
	    	->getResult()
	    ;
	    	
	    $this->newQB()
	    	->select('PARTIAL version.{id}, versionMetadataValue, metadata6')
	    	->from(Version::class, 'version')
	    	->innerJoin('version.metadataValues', 'versionMetadataValue')
	    	->innerJoin('versionMetadataValue.metadata', 'metadata6')
	    	->getQuery()
	    	->getResult()
	    ;
	    
	    $this->newQB()
	    	->select('PARTIAL review.{id}, visa, company')
	    	->from(Review::class, 'review')
	    	->innerJoin('review.visa', 'visa')
	    	->innerJoin('visa.company', 'company')
	    	->getQuery()
	    	->getResult()
	    ;
    	
	    return $series;
    }
    
    /**
     * @return Serie[]
     */
    public function getSeriesByCompany(Project $project, Company $company)
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
