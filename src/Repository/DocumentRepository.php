<?php

namespace App\Repository;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\Document;
use App\Entity\Project;
use App\Entity\Review;
use App\Entity\Serie;
use App\Entity\Version;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends RepositoryService
{
	
	public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
    }
    
    /**
     * @return Document[]
     *
     */
    public function getDocumentsByProject(Project $project)
    {
    	
    	$qb = $this->newQb();
    	
    	$documents = $qb
    		->select('serie, document, company, project')
	    	->from(Document::class, 'document')
	    	->innerJoin('document.serie', 'serie')
	    	->innerJoin('serie.company', 'company')
	    	->innerJoin('serie.project', 'project')
	    	->andWhere($qb->eq('serie.project', $project))
// 			->andWhere($qb->eq('serie.id', '29'))
	    	->getQuery()
	    	->getResult()
    	;
    	
    	$this->newQB()
	    	->select('PARTIAL project.{id}, visa, company')
	    	->from(Project::class, 'project')
	    	->innerJoin('project.visas', 'visa')
	    	->innerJoin('visa.company', 'company')
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
	    	->leftJoin('version.reviews', 'review')
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
    	
	    return $documents;
    }
    
    
    /**
     * @return Document[]
     *
     */
    public function getDocumentsByRequest(Request $request)
    {	
    	$versionIds = $request->query->get('id');
    	
    	if (is_array($versionIds)) {
    		$qb = $this->newQB('d');
    		return $qb
	    		->innerJoin('d.versions', 'v')
	    		->andWhere($qb->in('v.id', $versionIds))
    			->addGroupBy('d.id')
    			->getQuery()
    			->getResult()
    		;
    	}
    	return null;
    }
    
    /**
     * @return Document[]
     *
     */
    public function getDocumentsByReference(Project $project, $codificationItems, $codificationValues)
    {
    	$qb = $this->newQB('d');
    	$qb->innerJoin('d.serie', 's')
    		->andWhere($qb->eq('s.project', $project));
		
    	foreach ($codificationItems->getValues() as $codificationItem) {
    		
    		$id = $codificationItem->getCodification()->getId();
    		
    		$subQb = $this->newQB();
    		$subQb->select('d' . $id)
    			->from(Document::class, 'd' . $id)
    			->innerJoin('d' . $id . '.codificationItems', 'i' . $id)
    			->andWhere($subQb->eq('i' . $id . '.value', $codificationItem->getValue()))
    		;
    		
    		$qb->andWhere($qb->in('d.id', $subQb->getQuery()->getArrayResult()));
    		
    	}
    	
    	foreach ($codificationValues->getValues() as $id => $codificationValue) {
    		
    		$id = $codificationValue->getCodification()->getId();
    		
    		$subQb = $this->newQB();
    		$subQb->select('d' . $id)
	    		->from(Document::class, 'd' . $id)
	    		->innerJoin('d' . $id . '.codificationValues', 'v' . $id)
	    		->andWhere($subQb->eq('v' . $id . '.value', $codificationValue->getValue()))
	    	;
    		
	    	$qb->andWhere($qb->in('d.id', $subQb->getQuery()->getArrayResult()));
    		
    	}
    	
    	return $qb
    		->getQuery()
    		->getResult()
    	;
    }
    
    /**
     * @return Document[]
     *
     */
    public function getOrphanedDocuments()
    {
    	$qb = $this->newQB('d');
    	
    	return $qb
    		->leftJoin('d.versions', 'v')
    		->andWhere($qb->isNull('v.id'))
    		->getQuery()
    		->getResult()
    	;
    }
}
