<?php

namespace App\Repository;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MetadataItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataItem[]    findAll()
 * @method MetadataItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataItemRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetadataItem::class);
    }

    /**
     * @return MetadataItem[]
     *
     */
    public function getMetadataItem(Metadata $metadata)
    {
    	$qb = $this->newQb('m');
    	return $qb
	    	->andWhere($qb->eq('m.metadata', $metadata))
	    	->getQuery()
	    	->getResult()
    	;
    }
    
    /**
     * @return MetadataItem[]
     *
     */
    public function getMetadataItemAsArray(Metadata $metadata)
    {
    	$qb = $this->newQb('m');
    	return $qb
    		->select('m.id, m.value')
	    	->andWhere($qb->eq('m.metadata', $metadata))
	    	->getQuery()
	    	->getResult()
    	;
    }
}
