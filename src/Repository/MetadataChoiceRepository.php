<?php

namespace App\Repository;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method MetadataChoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method MetadataChoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method MetadataChoice[]	findAll()
 * @method MetadataChoice[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataChoiceRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, MetadataChoice::class);
	}

	/**
	 * @param Metadata $metadata
	 * @return MetadataChoice[]
	 */
	public function getMetadataChoice(Metadata $metadata)
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('m.metadata', $metadata))
			->getQuery()
			->getResult()
		;
	}

	/**
	 * @param integer $id
	 * @return MetadataChoice
	 */
	public function getMetadataChoiceById(int $id): MetadataChoice
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('id', $id))
			->getQuery()
			->getSingleResult();
	}
}
