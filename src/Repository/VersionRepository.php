<?php

namespace App\Repository;

use App\Entity\Version;
use App\Entity\Serie;
use App\Entity\Document;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;


/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]    findAll()
 * @method Version[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Version::class, Document::class);
    }

    /**
     * @return Version[]
     *
     */
    public function getVersions(Serie $serie, $request=null)
    {
    	$codificationQuery = [];
    	$subQuery = [];
    	$uid = 0;
    	
    	$query = $this->createQueryBuilder('v')
	    	->innerJoin('v.document', 'd')
	    	->andWhere('d.serie = :serie')
	    	->setParameter('serie', $serie);

	    if ($request) {
	    	
	    	if ($request->query) {
	    	
			    if ($request->query->get('v')) {
		
			    	$versionIds = $request->query->get('v');
			    	if (is_array($versionIds)) {
			    		$query->andWhere($query->expr()->in('v.id', $versionIds));
			    	}
			    	
			    } else {
			    	
			    	if ($codifications = $request->query->get('c')) {
			    		
			    		foreach ($codifications as $codificationId => $codificationValues) {
				    		
				    		$subQuery = $this->getEntityManager()->createQueryBuilder()
					    		->select('d' . $codificationId . '.id')
					    		->from(Document::class, 'd' . $codificationId)
					    		->innerJoin('d' . $codificationId . '.codificationItems', 'c' . $codificationId);
				    		
					    	foreach ($codificationValues as $id => $codificationValue) {
					    		if ($codificationValue) {
				    				
				    				$andQuery = $query->expr()->andX(
				    					$query->expr()->eq('c' . $codificationId . '.codification', ':i' . $uid),
				    					$query->expr()->eq('c' . $codificationId . '.value', ':v' . $uid));
				    				
				    				
				    				$query->setParameter('i' . $uid, $codificationId)
				    					->setParameter('v' . $uid, $codificationValue);
				    				$subQuery->orWhere($andQuery);
				    				$uid = $uid + 1;
				    			}
				    			
				    		}
				    		$query->andWhere($query->expr()->in('d.id', $subQuery->getDQL()));
				    		
				    	}
				    	
			    	}
			    	
			    	if ($metadatas = $request->query->get('m')) {
			    		
			    		foreach ($metadatas as $metadataId => $metadataValues) {
			    				
			    			$subQuery = $this->createQueryBuilder('v'.$metadataId)
			    			->innerJoin('v' . $metadataId . '.metadataItems', 'm' . $metadataId);
			    			
			    			
			    			if (is_array($metadataValues)) {
				    			foreach ($metadataValues as $metadataValue) {
				    				if ($metadataValue) {
				    					$andQuery = $query->expr()->andX(
				    						$query->expr()->eq('m' . $metadataId . '.metadata', ':i' . $uid),
				    						$query->expr()->eq('m' . $metadataId . '.value', ':v' . $uid));
				    				
				    					
				    					$query->setParameter('i' . $uid, $metadataId)
				    						->setParameter('v' . $uid, $metadataValue);
					    				$subQuery->orWhere($andQuery);
					    				$uid = $uid + 1;
				    				}
				    				
				    			}
				    			$query->andWhere($query->expr()->in('v.id', $subQuery->getDQL()));
			    			
			    			} else { //boolean
			    				
			    				if ($metadataValues == "0" || $metadataValues == "1") {
			    					$andQuery = $query->expr()->andX(
			    						$query->expr()->eq('m' . $metadataId . '.metadata', ':i' . $uid),
			    						$query->expr()->eq('m' . $metadataId . '.value', ':v' . $uid));
			    					
			    					
			    					$query->setParameter('i' . $uid, $metadataId)
			    					->setParameter('v' . $uid, $metadataValues);
			    					$subQuery->orWhere($andQuery);
			    					$uid = $uid + 1;
			    				}
			    					
			    				$query->andWhere($query->expr()->in('v.id', $subQuery->getDQL()));
			    			}
			    		}
			    	}
			    }
		    }
	    }
	    
    	return $query->addOrderBy('v.date')
    	->getQuery()
    	->getResult();
    	
    }
    
    /**
     * @return Version[]
     *
     */
    public function getVersionsByDocument(Document $document)
    {
        return $this->createQueryBuilder('v')
            ->innerJoin('v.document', 'd')
            ->andWhere('d.id = :id')
            ->setParameter('id', $document->getId())
            ->addOrderBy('v.date', 'DESC')
            ->addOrderBy('v.name', 'DESC')
            ->getQuery()
            ->getResult()
        ;
    }
}
