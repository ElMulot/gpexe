<?php

namespace App\Repository;

use App\Entity\Enum\MetadataParentEnum;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Metadata|null find($id, $lockMode = null, $lockVersion = null)
 * @method Metadata|null findOneBy(array $criteria, array $orderBy = null)
 * @method Metadata[]	findAll()
 * @method Metadata[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MetadataRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Metadata::class);
	}

	/**
	 * @return Metadata[]
	 *
	 */
	public function getMetadatas(Project $project)
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('m.project', $project))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Metadata[]
	 *
	 */
	public function getMetadatasForSerie(Project $project)
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('m.project', $project))
			->andWhere($qb->eq('m.parent', MetadataParentEnum::SERIE))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Metadata[]
	 *
	 */
	public function getMetadatasForDocument(Project $project)
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('m.project', $project))
			->andWhere($qb->eq('m.parent', MetadataParentEnum::DOCUMENT))
			->getQuery()
			->getResult()
		;
	}
	
	/**
	 * @return Metadata[]
	 *
	 */
	public function getMetadatasForVersion(Project $project)
	{
		$qb = $this->newQb('m');
		return $qb
			->andWhere($qb->eq('m.project', $project))
			->andWhere($qb->eq('m.parent', MetadataParentEnum::VERSION))
			->getQuery()
			->getResult()
		;
	}
}
