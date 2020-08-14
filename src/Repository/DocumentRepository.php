<?php

namespace App\Repository;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\Common\Collections\Collection;
use App\Entity\Company;
use App\Entity\Document;
use App\Entity\Project;

/**
 * @method Document|null find($id, $lockMode = null, $lockVersion = null)
 * @method Document|null findOneBy(array $criteria, array $orderBy = null)
 * @method Document[]    findAll()
 * @method Document[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DocumentRepository extends ServiceEntityRepository
{
    
	private $encoder;
	
	public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Document::class);
        $this->encoder = new JsonEncoder();
    }
    
    /**
     * @return Document[]
     *
     */
    public function getAllDocuments(Project $project)
    {
    	return $this->createQueryBuilder('d')
	    	->innerJoin('d.serie', 's')
	    	->andWhere('s.project = :project')
	    	->setParameter('project', $project)
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
    		$query = $this->createQueryBuilder('d')
    			->innerJoin('d.versions', 'v');
    		return $query->andWhere($query->expr()->in('v.id', $versionIds))
    			->addGroupBy('d.id')
    			->getQuery()
    			->getResult();
    	}
    	return null;
    }
    
    /**
     * @return Document[]
     *
     */
    public function getDocumentByReference(Project $project, $codificationItems, $codificationValues)
    {
    	$query = $this->createQueryBuilder('d')
    		->innerJoin('d.serie', 's')
	    	->andWhere('s.project = :project')
	    	->setParameter('project', $project);
		
    	foreach ($codificationItems->getValues() as $codificationItem) {
    		
    		$id = $codificationItem->getCodification()->getId();
    		
    		$subQuery = $this->getEntityManager()->createQueryBuilder()
    			->select('d' . $id)
    			->from(Document::class, 'd' . $id)
    			->innerJoin('d' . $id . '.codificationItems', 'i' . $id)
    			->andWhere('i' . $id . '.value = ?' . $id)
    		;
			$query->setParameter($id, $codificationItem->getValue());
    		$query->andWhere($query->expr()->in('d.id', $subQuery->getDQL()));
    		
    	}
    	
    	foreach ($codificationValues->getValues() as $id => $codificationValue) {
    		
    		$id = $codificationValue->getCodification()->getId();
    		
    		$subQuery = $this->getEntityManager()->createQueryBuilder()
	    		->select('d' . $id)
	    		->from(Document::class, 'd' . $id)
	    		->innerJoin('d' . $id . '.codificationValues', 'v' . $id)
	    		->andWhere('v' . $id . '.value = ?' . $id)
	    	;
    		
	    	$query->setParameter($id, $codificationValue->getValue());
	    	$query->andWhere($query->expr()->in('d.id', $subQuery->getDQL()));
    		
    	}
    	
    	return $query->setMaxResults(1)->getQuery()->getResult();
    }
}
