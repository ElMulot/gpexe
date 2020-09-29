<?php

namespace App\Repository;


use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Log;
use App\Entity\ChangeSet;
use App\Service\RepositoryService;

/**
 * @method Log|null find($id, $lockMode = null, $lockVersion = null)
 * @method Log|null findOneBy(array $criteria, array $orderBy = null)
 * @method Log[]	findAll()
 * @method Log[]	findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class LogRepository extends RepositoryService
{
	public function __construct(ManagerRegistry $registry)
	{
		parent::__construct($registry, Log::class);
	}

	public function getLog()
	{
		$log = $this->newQb('l')
			->innerJoin('l.user', 'u')
			->innerJoin('l.changeSets', 'c')
			->addOrderBy('l.date', 'DESC')
			->setMaxResults(1000)
			->getQuery()
			->getResult()
		;
		
		$this->newQB('l')
			->select('PARTIAL l.{id}, c')
			->innerJoin('l.changeSets', 'c')
			->getQuery()
			->getResult()
		;
		
		return $log;
	}
}
