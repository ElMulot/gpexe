<?php

namespace App\Service;

use Doctrine\ORM\EntityRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\DBAL\Logging\DebugStack;
use LogicException;
use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query\Expr;

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
	
	public function newQuery($alias, $indexBy = null): QueryBuilder
	{
		if ($alias == false) {
			$this->query = $this->getEntityManager()->createQueryBuilder();
		} else {
			$this->query = $this->createQueryBuilder($alias, $indexBy);
		}
		
		return $this->query;
	}
	
	public function query()
	{
		return $this->query;
	}
	
	public function newExpr(): Expr
	{
		return $this->getEntityManager()->createQueryBuilder()->expr();
	}
	
	public function eq($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->eq($field, '?' . $this->uid);
	}
	
	public function neq($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->neq($field, '?' . $this->uid);
	}
	
	public function gt($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->gt($field, '?' . $this->uid);
	}
	
	public function gte($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->gte($field, '?' . $this->uid);
	}
	
	public function in($field, $parameter): Expr\Func
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->in($field, '?' . $this->uid);
	}
	
	public function notIn($field, $parameter): Expr\Func
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->notIn($field, '?' . $this->uid);
	}
	
	public function lt($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->lt($field, '?' . $this->uid);
	}
	
	public function lte($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->query->setParameter($this->uid, $parameter);
		return $this->newExpr()->lte($field, '?' . $this->uid);
	}
	
	public function andX($x = null): Expr\Andx
	{
		return new Expr\Andx(func_get_args());
	}
	
	public function orX($x = null): Expr\Orx
	{
		return new Expr\Orx(func_get_args());
	}
	
	public function isNull(string $x): string
	{
		return $this->newExpr()->isNull($x);
	}
	
	public function isNotNull(string $x): string
	{
		return $this->newExpr()->isNotNull($x);
	}
	
	public function hasAlias(string $alias): bool
	{
		return in_array($alias, $this->query->getAllAliases());
	}
	
// 	public function getResult()
// 	{
// 		return $this->query()->getQuery()->getResult();
// 	}
	
// 	public function getArrayResult(): array
// 	{
// 		return $this->query()->getQuery()->getArrayResult();
// 	}
	
// 	public function getScalarResult(): array
// 	{
// 		return $this->query()->getQuery()->getScalarResult();
// 	}
	
// 	public function getOneOrNullResult($hydrationMode = null)
// 	{
// 		return $this->query()->getQuery()->getOneOrNullResult($hydrationMode);
// 	}
	
// 	public function getSingleResult($hydrationMode = null)
// 	{
// 		return $this->query()->getQuery()->getSingleResult($hydrationMode);
// 	}
	
// 	public function getSingleScalarResult()
// 	{
// 		return $this->query()->getQuery()->getSingleScalarResult();
// 	}
	
	public function ddSql()
	{
		$sql = $this->query()->getQuery()->getSQL();
		
		foreach ($this->query()->getParameters() as $parameter) {
			$sql = preg_replace('/\?/', $this->getValueToString($parameter->getValue()), $sql, 1);
		}
		dd($sql);
		
		
// 		$conf = $this->getEntityManager()->getConnection()->getConfiguration();
// 		$backupLogger = $conf->getSQLLogger();
// 		$logger = new \Doctrine\DBAL\Logging\DebugStack();
// 		$conf->setSQLLogger($logger);
		
// 		$this->query()->getQuery()->getResult();
// 		$conf->setSQLLogger($backupLogger); //restore logger for other queries
		
// 		$res = $logger->queries[1];
// 		dump($res);
// 		foreach ($res['params'] as $p) {
// 			if (is_array($p)) {
// 				foreach ($p as $v) {
// 					$res['sql'] = str_replace('?', $v, $res['sql']);
// 				}
// 			} else {
// 				$res['sql'] = str_replace('?', $p, $res['sql']);
// 			}
// 		}
// 		dd($res['sql']);
	}
	
	private function getValueToString($value): string
	{
		if (is_object($value)) {
			if (method_exists($value, 'getId')) {
				return $value->getId();
			} elseif (method_exists($value, '__toString')) {
				return $value->__toString();
			} else {
				throw new \Exception('Objet invalide');
			}
		} elseif (is_array($value)) {
			
			return join(',', array_map(function($v) {
				return $this->getValueToString($v);
			}, $value));
			
		} else {
			return (string)$value;
		}
	}
	
}
