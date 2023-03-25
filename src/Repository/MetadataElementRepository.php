<?php

namespace App\Repository;

use Doctrine\Persistence\ManagerRegistry;
use App\Service\RepositoryService;
use App\Entity\MetadataElement;
use Doctrine\ORM\Query\ResultSetMapping;

/**
 * @method MetadataElement|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataElement|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataElement[]	findAll()
 * @method MetadataElement[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataElementRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, MetadataElement::class);
	}
	
	public function deleteMetadataElementOrphans()
	{		
		$this
			->getEntityManager()
			->getConnection()
			->executeStatement(
				'DELETE metadata_element.* FROM
					metadata_element
				LEFT JOIN serie_metadata_element ON serie_metadata_element.metadata_element_id = metadata_element.id
				LEFT JOIN document_metadata_element ON document_metadata_element.metadata_element_id = metadata_element.id
				LEFT JOIN version_metadata_element ON version_metadata_element.metadata_element_id = metadata_element.id
				WHERE
					serie_metadata_element.serie_id IS NULL AND 
					document_metadata_element.document_id IS NULL AND 
					version_metadata_element.version_id IS NULL'
			)
		;
	}

}
