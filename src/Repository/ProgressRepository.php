<?php

namespace App\Repository;

use App\Entity\Program;
use App\Entity\Progress;
use App\Service\RepositoryService;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method Progress|null find($id, $lockMode = null, $lockVersion = null)
 * @method Progress|null findOneBy(array $criteria, array $orderBy = null)
 * @method Progress[]	findAll()
 * @method Progress[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ProgressRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Progress::class);
	}
	
	/**
	 * @return Progress[]
	 *
	 */
	public function getProgressAsArray(Program $program, array $series = null)
	{
		$qb = $this->newQB('p');
		
		if ($series !== null) {
			return $qb
				->select("p.date, p.value, IDENTITY(p.serie) AS serieId")
				->andWhere($qb->eq('p.program', $program))
				->andWhere($qb->in('p.serie', $series))
				->addOrderBy('p.date', 'DESC')
				->getQuery()
				->getArrayResult()
			;
		} else {
			return $qb
				->select("p.date, p.value, IDENTITY(p.serie) AS serieId")
				->andWhere($qb->eq('p.program', $program))
				->addOrderBy('p.date', 'DESC')
				->getQuery()
				->getArrayResult()
			;
		}
	}
	
	/**
	 * @return Progress[]
	 *
	 */
	public function deleteProgressByProgramAndByDate(Program $program, \DateTimeInterface $date)
	{
		$qb = $this->newQB();
		return $qb
			->delete($this->getEntityName(), 'p')
			->andWhere($qb->eq('p.program', $program))
			->andWhere($qb->gte('p.date', $date))
			->getQuery()
			->execute()
		;
	}
	
}
