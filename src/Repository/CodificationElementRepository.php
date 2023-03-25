<?php

namespace App\Repository;

use App\Entity\CodificationElement;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodificationData|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodificationData|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodificationData[]	findAll()
 * @method CodificationData[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationElementRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, CodificationElement::class);
	}
	
	public function deleteCodificationElementOrphans()
	{
		$this
			->getEntityManager()
			->getConnection()
			->executeStatement(
				'DELETE codification_element.* FROM
					codification_element
				LEFT JOIN document_codification_element ON document_codification_element.codification_element_id = codification_element.id
				WHERE
					document_codification_element.document_id IS NULL'
			)
		;
	}
}
