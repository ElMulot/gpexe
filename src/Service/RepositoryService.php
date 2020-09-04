<?php

namespace App\Service;

use Doctrine\ORM\EntityRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\DBAL\Logging\DebugStack;
use LogicException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\Common\Collections\ExpressionBuilder;

class RepositoryService extends EntityRepository implements ServiceEntityRepositoryInterface
{
	
	private $query;
	
	private $uid;
	
	/**
	 * @param string $entityClass The class name of the entity this repository manages
	 */
	public function __construct(ManagerRegistry $registry, $entityClass)
	{
		$manager = $registry->getManagerForClass($entityClass);
		
		if ($manager === null) {
			throw new LogicException(sprintf(
				'Could not find the entity manager for class "%s". Check your Doctrine configuration to make sure it is configured to load this entity’s metadata.',
				$entityClass)
			);
		}

		parent::__construct($manager, $manager->getClassMetadata($entityClass));
	}
	
	public function query($alias, $indexBy = null): QueryBuilder
	{
		if ($this->query === null) {
			if ($alias == false) {
				$this->query = $this->getEntityManager()->createQueryBuilder();
			} else {
				$this->query = $this->createQueryBuilder($alias, $indexBy);
			}
		}
		
		return $this->query;
	}
	
	public function expr(): ExpressionBuilder
	{
		return $this->getEntityManager()->createQueryBuilder()->expr();
	}
	
	public function eq($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->eq($field, '?' . $this->uid);
	}
	
	public function neq($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->neq($field, '?' . $this->uid);
	}
	
	public function gt($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->gt($field, '?' . $this->uid);
	}
	
	public function gte($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->gte($field, '?' . $this->uid);
	}
	
	public function in($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->in($field, '?' . $this->uid);
	}
	
	public function lt($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->lt($field, '?' . $this->uid);
	}
	
	public function lte($field, $parameter): ExpressionBuilder
	{
		$this->uid++;
		$this->getQuery()->setParameter($this->uid, $parameter);
		return $this->expr()->lte($field, '?' . $this->uid);
	}
	
	public function getResult()
	{
		return $this->query()->getQuery()->getResult();
	}
	
	public function getArrayResult(): array
	{
		return $this->query()->getQuery()->getArrayResult();
	}
	
	public function getScalarResult(): array
	{
		return $this->query()->getQuery()->getScalarResult();
	}
	
	public function getOneOrNullResult($hydrationMode = null)
	{
		return $this->query()->getQuery()->getOneOrNullResult($hydrationMode);
	}
	
	public function getSingleResult($hydrationMode = null)
	{
		return $this->query()->getQuery()->getSingleResult($hydrationMode);
	}
	
	public function getSingleScalarResult()
	{
		return $this->query()->getQuery()->getSingleScalarResult();
	}
	
	public function dumpLog()
	{
		
		$conf = $this->getEntityManager()->getConnection()->getConfiguration();
		$backupLogger = $conf->getSQLLogger();
		$logger = new DebugStack();
		$conf->setSQLLogger($logger);
		
		$this->getResult();
		$conf->setSQLLogger($backupLogger); //restore logger for other queries
		
		$res = $logger->queries[1];
		
		foreach ($res['params'] as $p) {
			if (is_array($p)) {
				foreach ($p as $v) {
					$res['sql'] = str_replace('?', $v, $res['sql']);
				}
			} else {
				$res['sql'] = str_replace('?', $p, $res['sql']);
			}
		}
		dump($res['sql']);
	}
	
}
