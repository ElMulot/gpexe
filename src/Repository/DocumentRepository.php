<?php

namespace App\Repository;

use Symfony\Component\HttpFoundation\Request;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Common\Collections\Collection;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Project;
use App\Service\RepositoryService;

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
    	$qb = $this->newQB('d');
    	return $qb
    		->innerJoin('d.serie', 's')
	    	->andWhere($qb->eq('s.project', $project))
	    	->getQuery()
	    	->getResult()
    	;
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
    public function getDocumentByReference(Project $project, $codificationItems, $codificationValues)
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
    		$qb->andWhere($qb->in('d.id', $subQb->getDQL()));
    		
    	}
    	
    	foreach ($codificationValues->getValues() as $id => $codificationValue) {
    		
    		$id = $codificationValue->getCodification()->getId();
    		
    		$subQb = $this->newQB();
    		$subQb->select('d' . $id)
	    		->from(Document::class, 'd' . $id)
	    		->innerJoin('d' . $id . '.codificationValues', 'v' . $id)
	    		->andWhere($subQb->eq('i' . $id . '.value', $codificationValue->getValue()))
	    	;
    		
	    		$qb->andWhere($qb->in('d.id', $subQb->getDQL()));
    		
    	}
    	
    	return $qb
    		->setMaxResults(1)
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
