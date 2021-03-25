<?php

namespace App\EventListener;

use Doctrine\ORM\Event\OnFlushEventArgs;
use Symfony\Component\Security\Core\Security;
use App\Entity\ChangeSet;
use App\Entity\Log;

class LogListener
{

	private $security;
	
	private $disableLog;
	
	private $entityManager;
		
	public function __construct(Security $security, string $disableLog)
	{
		$this->security = $security;
		$this->disableLog = $disableLog;
	}
	
	public function onFlush(OnFlushEventArgs $args)
	{
		
		if ($this->disableLog) {
			return;
		}
		
		$this->entityManager = $args->getEntityManager();
		$uow = $this->entityManager->getUnitOfWork();
		
		foreach ($uow->getScheduledEntityInsertions() as $entity) {
			if ($entity instanceof Log || $entity instanceof ChangeSet) {
				continue;
			}
			
			$log = $this->setLog(Log::INSERT, $entity);
			
			foreach ($uow->getEntityChangeSet($entity) as $field => $values) {
				$changeSet = new ChangeSet();
				$changeSet
					->setLog($log)
					->setField($field)
					->setNewValue($this->getStringValue($values[1]))
				;
				$this->entityManager->persist($changeSet);
				$uow->computeChangeSet($this->entityManager->getClassMetadata(ChangeSet::class), $changeSet);
			}
			
			$this->entityManager->persist($log);
			$uow->computeChangeSet($this->entityManager->getClassMetadata(Log::class), $log);
		}
		
		foreach ($uow->getScheduledEntityUpdates() as $entity) {
			if ($entity instanceof Log || $entity instanceof ChangeSet) {
				continue;
			}
			
			$log = $this->setLog(Log::UPDATE, $entity);
			
			foreach ($uow->getEntityChangeSet($entity) as $field => $values) {
				$changeSet = new ChangeSet();
				
				$changeSet
					->setLog($log)
					->setField($field)
					->setOldValue($this->getStringValue($values[0]))
					->setNewValue($this->getStringValue($values[1]))
				;
				$this->entityManager->persist($changeSet);
				$uow->computeChangeSet($this->entityManager->getClassMetadata(ChangeSet::class), $changeSet);
			}
			$this->entityManager->persist($log);
			$uow->computeChangeSet($this->entityManager->getClassMetadata(Log::class), $log);
		}
		
		foreach ($uow->getScheduledEntityDeletions() as $entity) {
			
			if ($entity instanceof Log || $entity instanceof ChangeSet) {
				continue;
			}
			
			$log = $this->setLog(Log::DELETE, $entity);
			$this->entityManager->persist($log);
			$uow->computeChangeSet($this->entityManager->getClassMetadata(Log::class), $log);
		}
	}
	
	private function setLog(int $type, $entity): Log
	{
		$log = new Log();
		$log->setType($type);
		$reflect = new \ReflectionClass(get_class($entity));
		$log
			->setEntity($reflect->getShortName())
			->setEntityId($entity->getId())
		;
		
		$classMetadata = $this->entityManager->getClassMetadata($reflect->getName());
		if ($classMetadata->hasField('name')) {
			$log->setEntityName($entity->getName());
		} elseif ($classMetadata->hasField('value')) {
			$log->setEntityName($entity->getValue());
		}
		
		$log
			->setDate(new \DateTime())
			->setUser($this->security->getUser())
		;
		
		return $log;
	}
	
	private function getStringValue($value): ?string
	{
		if (is_array($value)) {
			return '[array]';
		} elseif (is_object($value) === false) {
			return (string)$value;
		} elseif ($value instanceof \DateTimeInterface) {
			return $value->format('d-m-Y');
		} else {
			return '[' . $value->__toString() . ']';
		}
		
	}
}
?>