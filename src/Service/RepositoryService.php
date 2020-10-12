<?php

namespace App\Service;

use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;

class RepositoryService extends ServiceEntityRepository
{
	
	public function newQB($alias = null, $indexBy = null): QueryBuilderService
	{
		$qb = new QueryBuilderService($this->getEntityManager());
		
		if ($alias) {
			$qb
				->select($alias)
				->from($this->getEntityName(), $alias, $indexBy)
			;
		}
		
		return $qb;
	}
	
	public function ddSql($qb)
	{
		$sql = $qb->getQuery()->getSQL();
		
		foreach ($qb->getParameters() as $parameter) {
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
