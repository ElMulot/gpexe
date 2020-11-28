<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\MetadataValue;
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * @method MetadataValue|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataValue|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataValue[]    findAll()
 * @method MetadataValue[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataValueRepository extends RepositoryService
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MetadataValue::class);
    }
    
    public function deleteMetadataValueOrphans()
    {    	
    	$this
    		->getEntityManager()
    		->getConnection()
    		->executeStatement(
    			'DELETE metadata_value.* FROM
				    metadata_value
				LEFT JOIN serie_metadata_value ON serie_metadata_value.metadata_value_id = metadata_value.id
				LEFT JOIN document_metadata_value ON document_metadata_value.metadata_value_id = metadata_value.id
				LEFT JOIN version_metadata_value ON version_metadata_value.metadata_value_id = metadata_value.id
				WHERE
				    serie_metadata_value.serie_id IS NULL AND 
					document_metadata_value.document_id IS NULL AND 
					version_metadata_value.version_id IS NULL'
    		)
    	;
    }

}
