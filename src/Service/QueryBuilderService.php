<?php

namespace App\Service;

use Doctrine\ORM\QueryBuilder;
use Doctrine\ORM\Query\Expr;
use Doctrine\ORM\Query\QueryException;
use Spatie\Regex\Regex;

class QueryBuilderService extends QueryBuilder
{
	
	private $uid;
	
	private $aliases = [];
	
	public function addSelect($select = null)
	{
		if (empty($select)) {
			return $this;
		}
		
		$selects = is_array($select) ? $select : func_get_args();
		
		array_walk($selects, function($item) {
			if (is_string($item)) {
				if (($result = Regex::match('/\s+AS\s+([^\s]+)$/i', $item))->hasMatch()) {
					$this->addAlias($result->group(1));
				}
			}
		});
		
		return parent::addSelect($select);
	}
	
	public function addNestedSelect(QueryBuilderService $qb, $alias): self
	{
		$this->addAlias($alias);
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
	
	public function like($field, $parameter): Expr\Comparison
	{
		$this->uid++;
		$this->setParameter($this->uid, $parameter);
		return $this->expr()->like($field, '?' . $this->uid);
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
	
	public function count(string $x, string $alias = null): string
	{
		$this->addAlias($alias);
		return $this->expr()->count($x) . (($alias === null)?'':' AS ' . $alias);
	}
	
	public function hasAlias(string $alias): bool
	{
		return in_array($alias, $this->getAllAliases());
	}
	
	public function getAllAliases()
	{
		return array_merge(parent::getAllAliases(), $this->aliases);
	}
	
	public function getRunnableQuery(): string
	{
		$sql = $this->getQuery()->getSQL();
		
		foreach ($this->getParameters() as $parameter) {
			$sql = Regex::replace('/\?/', $this->getValueToString($parameter->getValue()), $sql, 1)->result();
		}
		
		return $sql;		
	}
	
	private function addAlias($alias)
	{
		if ($alias == false) {
			return;
		}
		
		if (in_array($alias, $this->aliases) === true) {
			throw new QueryException(sprintf('Specified alias %s is already defined.', $alias));
		}
		
		$this->aliases[] = $alias;
	}
	
	private function getValueToString($value): string
	{
		
		if (is_string($value)) {
			return $value;
		}
		
		if (is_int($value)) {
			return (string)$value;
		}
		
		if (is_bool($value)) {
			return $value?'TRUE':'FALSE';
		}
		
		if ($value instanceof \DateTimeInterface) {
			return $value;
		}
		
		if ($value instanceof \DateInterval) {
			return $value;
		}
		
		if (is_array($value)) {
			
			return join(',', array_map(function($v) {
				if (is_array($v) && array_key_exists('id', $v)) {
					return $this->getValueToString($v['id']);
				} else {
					return $this->getValueToString($v);
				}
			}, $value));
		}
		
		if (is_object($value)) {
			if (method_exists($value, 'getId')) {
				return $this->getValueToString($value->getId());
			} elseif (method_exists($value, '__toString')) {
				return $this->getValueToString($value->__toString());
			} else {
				throw new \Exception('Entité invalide');
			}
		}
		
		throw new \Exception('Paramètre invalide');
	}
	
}

?>