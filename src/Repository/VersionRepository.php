<?php

namespace App\Repository;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use App\Entity\Version;
use App\Entity\Serie;
use App\Entity\Document;


/**
 * @method Version|null find($id, $lockMode = null, $lockVersion = null)
 * @method Version|null findOneBy(array $criteria, array $orderBy = null)
 * @method Version[]    findAll()
 * @method Version[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VersionRepository extends ServiceEntityRepository
{
    
	private $encoder;
	
	private $uid;
	
	private $query;
	
	public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Version::class, Document::class);
        $this->encoder = new JsonEncoder();
    }

    /**
     * @return Version[]
     *
     */
    public function getVersions(Serie $serie, $request=null)
    {
    	
    	$codificationQuery = [];
    	$subQuery = [];
    	
    	$this->query = $this->createQueryBuilder('v')
	    	->innerJoin('v.document', 'd')
	    	->andWhere('d.serie = :serie')
	    	->setParameter('serie', $serie);

	    if ($request) {
    		if ($versionIds = $request->query->get('id')) {
    			
		    	if (is_array($versionIds)) {
		    		$this->query->andWhere($this->query->expr()->in('v.id', $versionIds));
		    	}
		    	
		    } else {
		    	
		    	if ($codifications = $request->query->get('codification')) {
		    		
		    		foreach ($codifications as $codename => $values) {
			    		
			    		$subQuery = $this->getEntityManager()->createQueryBuilder()
			    			->select('d' . $codename)
			    			->from(Document::class, 'd' . $codename)
			    			->innerJoin('d' . $codename . '.codificationItems', 'i' . $codename)
			    			->innerJoin('i' . $codename . '.codification', 'c' . $codename);
			    		
			    		foreach ($values as $value) {
			    			if ($value) {
			    				
			    				$andQuery = $this->query->expr()->andX(
			    					$this->addEq('i' . $codename . '.value', $value),
			    					$this->addEq('c' . $codename . '.codename', $codename));
			    				$subQuery->orWhere($andQuery);
			    				
			    				/*
			    				$andQuery = $this->query->expr()->andX(
			    					$this->query->expr()->eq('c'.$codename . '.codename', ':i' . $uid),
			    					$this->query->expr()->eq('i'.$codename . '.value', ':v' . $uid));
			    				
			    				
			    				$this->query->setParameter('i' . $uid, $codename)
			    					->setParameter('v' . $uid, $codename);
			    				$subQuery->orWhere($andQuery);
			    				$uid = $uid + 1;
			    				*/
			    			}
			    			
			    		}
			    		$this->query->andWhere($this->query->expr()->in('d.id', $subQuery->getDQL()));
			    		
			    	}
			    	
		    	}
		    	
		    	$metadatas = ($request->query->get('serie') ?? []) + ($request->query->get('document') ?? []) + ($request->query->get('version') ?? []);
		    		
	    		foreach ($metadatas as $codename => $values) {
	    			
	    			$subQuery = $this->createQueryBuilder('v' . $codename)
	    				->innerJoin('v' . $codename . '.metadataItems', 'i' . $codename)
	    				->innerJoin('i' . $codename . '.metadata', 'm' . $codename);
	    			
	    			if (is_array($values)) {
	    				foreach ($values as $value) {
	    					if ($value) {
	    						$andQuery = $this->query->expr()->andX(
	    							$this->addEq('i' . $codename . '.value', $value),
	    							$this->addEq('m' . $codename . '.codename', $codename));
	    						$subQuery->orWhere($andQuery);
	    						
	    						/*
	    						$subQuery->orWhere($this->addEq('m' . $codename . '.value', $value));
	    						
		    					$andQuery = $this->query->expr()->andX(
		    						$this->query->expr()->eq('m' . $metadataId . '.metadata', ':i' . $uid),
		    						$this->query->expr()->eq('m' . $metadataId . '.value', ':v' . $uid));
		    				
		    					
		    					$this->query->setParameter('i' . $uid, $metadataId)
		    						->setParameter('v' . $uid, $metadataValue);
			    				$subQuery->orWhere($andQuery);
			    				$uid = $uid + 1;
			    				*/
		    				}
		    				
		    			}
		    			$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
	    			
	    			} else { //boolean
	    				
	    				if ($values == "0") {
	    					
	    					$orQuery = $this->query->expr()->orX(
	    						$this->addNotEq('i' . $codename . '.value', $values),
	    						$this->addNotEq('m' . $codename . '.codename', $codename));
	    					$subQuery->orWhere($orQuery);
	    				
	    				} elseif ($values == "1") {
	    					
	    					$andQuery = $this->query->expr()->andX(
	    						$this->addEq('i' . $codename . '.value', $values),
	    						$this->addEq('m' . $codename . '.codename', $codename));
	    					$subQuery->orWhere($andQuery);
	    					
	    					/*
	    					$andQuery = $this->query->expr()->andX(
	    						$this->query->expr()->eq('m' . $metadataId . '.metadata', ':i' . $uid),
	    						$this->query->expr()->eq('m' . $metadataId . '.value', ':v' . $uid));
	    					
	    					
	    					$this->query->setParameter('i' . $uid, $metadataId)
	    					->setParameter('v' . $uid, $metadataValues);
	    					$subQuery->orWhere($andQuery);
	    					$uid = $uid + 1;
	    					*/
	    				}
	    					
	    				$this->query->andWhere($this->query->expr()->in('v.id', $subQuery->getDQL()));
	    			}
	    		}
		    }
	    }
	    
    	return $this->query->addOrderBy('v.date')
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
    
    function addEq($field, $parameter)
    {
    	$this->uid++;
    	$eqQuery = $this->query->expr()->eq($field, '?' . $this->uid);
    	$this->query->setParameter($this->uid, $parameter);
    	return $eqQuery;
    }
    
    function addNotEq($field, $parameter)
    {
    	$this->uid++;
    	$notEqQuery = $this->query->expr()->neq($field, '?' . $this->uid);
    	$this->query->setParameter($this->uid, $parameter);
    	return $notEqQuery;
    }
    
    function addAnd($array)
    {
    	$andQuery = $this->query->expr()->andX();
    	foreach ($array as $field => $parameter) {
    		$andQuery->add($this->addEq($field, $parameter));
    	}

    	return $andQuery;
    }
    
}
