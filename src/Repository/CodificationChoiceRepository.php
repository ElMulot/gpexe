<?php

namespace App\Repository;

use App\Entity\Codification;
use App\Entity\CodificationChoice;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method CodificationChoice|null find($id, $lockMode = null, $lockVersion = null)
 * @method CodificationChoice|null findOneBy(array $criteria, array $orderBy = null)
 * @method CodificationChoice[]	findAll()
 * @method CodificationChoice[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CodificationChoiceRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, CodificationChoice::class);
	}

	/**
	 * @return CodificationChoice[]
	 *
	 */
	public function getCodificationChoice(Codification $codification)
	{
		$qb = $this->newQb('c');
		return $qb
			->andWhere($qb->eq('c.codification', $codification))
			->addOrderBy('c.value', 'ASC')
			->getQuery()
			->getResult()
		;
	}
}
