<?php

namespace App\EventListener;

//use App\Entity\Log;
use Doctrine\ORM\Event\OnFlushEventArgs;

class LogListener
{
	public function onFlush(OnFlushEventArgs $args)
	{

		$logger = new \Doctrine\DBAL\Logging\EchoSQLLogger();
		
		$args->getEntityManager()->getConnection()->getConfiguration()->setSQLLogger($logger);
		
		dd($logger->startQuery());
		
		
		//$entity = $args->getObject();
		
		/*
		if ($entity instanceof Log) {
			return;
		}
		*/
		
		$entityManager = $args->getObjectManager();
		
		dd($entityManager);
	}
}
?>