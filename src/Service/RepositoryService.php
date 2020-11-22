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
}
