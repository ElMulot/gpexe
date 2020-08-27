<?php

namespace App\Service;

use Doctrine\ORM\EntityRepository;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepositoryInterface;
use Doctrine\Persistence\ManagerRegistry;
use LogicException;

class RepositoryService extends EntityRepository implements ServiceEntityRepositoryInterface
{
	/**
	 * @param string $entityClass The class name of the entity this repository manages
	 */
	public function __construct(ManagerRegistry $registry, $entityClass)
	{
		$manager = $registry->getManagerForClass($entityClass);
		
		
		 if ($manager === null) {
			 throw new LogicException(sprintf(
			 'Could not find the entity manager for class "%s". Check your Doctrine configuration to make sure it is configured to load this entity’s metadata.',
			 $entityClass
			 ));
		 }
		 
		
		parent::__construct($manager, $manager->getClassMetadata($entityClass));
	}
	
	public function expr() {
		return $this->getEntityManager()->createQueryBuilder()->expr();
	}
}
