<?php

namespace App\Repository;

use App\Entity\CodificationValue;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodificationData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodificationData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodificationData[]	findAll()
 * @method CodificationData[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationValueRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, CodificationValue::class);
	}
	
	public function deleteCodificationValueOrphans()
	{
		$this
			->getEntityManager()
			->getConnection()
			->executeStatement(
				'DELETE codification_value.* FROM
					codification_value
				LEFT JOIN document_codification_value ON document_codification_value.codification_value_id = codification_value.id
				WHERE
					document_codification_value.document_id IS NULL'
			)
		;
	}
}
