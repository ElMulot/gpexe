<?php

namespace App\Service;

use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query\Expr;

class QueryBuilderService extends QueryBuilder
{
	
	private $uid;
	
	public function addNestedSelect(QueryBuilderService $qb, $alias): self
	{
		return $this->addSelect('(' . $qb->getDQL() . ') AS ' . $alias);
	}
	
	public function eq($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->eq($field, '?' . $this->uid);
	}
	
	public function neq($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->neq($field, '?' . $this->uid);
	}
	
	public function gt($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->gt($field, '?' . $this->uid);
	}
	
	public function gte($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->gte($field, '?' . $this->uid);
	}
	
	public function in($field, $parameter): Expr\Func
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->in($field, '?' . $this->uid);
	}
	
	public function notIn($field, $parameter): Expr\Func
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->notIn($field, '?' . $this->uid);
	}
	
	public function lt($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->lt($field, '?' . $this->uid);
	}
	
	public function lte($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->lte($field, '?' . $this->uid);
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
		return $this->expr()->isNull($x);
	}
	
	public function isNotNull(string $x): string
	{
		return $this->expr()->isNotNull($x);
	}
	
	public function hasAlias(string $alias): bool
	{
		return in_array($alias, $this->getAllAliases());
	}
	
}

?>