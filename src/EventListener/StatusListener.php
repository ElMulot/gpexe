<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Status;
use App\Repository\StatusRepository;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;

#[AsEntityListener(entity:Status::class, event: Events::postPersist, method: 'setDefault', lazy:true)]
#[AsEntityListener(entity:Status::class, event: Events::preUpdate, method: 'setDefault', lazy:true)]
#[AsEntityListener(entity:Status::class, event: Events::preRemove, lazy:true)]
#[AsEntityListener(entity:Status::class, event: Events::postRemove, lazy:true)]
class StatusListener
{
	
	public function __construct(private readonly StatusRepository $statusRepository)
	{
	}
	
	public function setDefault(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		$statuses = $this->statusRepository->getStatuses($project);

		if (count($statuses) === 0) {
			return;
		}

		if ($status->isDefault() === true) {
			
			foreach($statuses as $s) {
				if ($s !== $status && $s->isDefault() === true) {
					$s->setDefault(false);
					$event->getObjectManager()->persist($s);
					$event->getObjectManager()->flush();
				}
			}

		} else {

			foreach($statuses as $s) {
				if ($s->isDefault() === true) {
					return;
				}
			}

			$s = reset($statuses);
			$s->setDefault(true);
			$event->getObjectManager()->persist($s);
			$event->getObjectManager()->flush();
		}
		
	}

	public function preRemove(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		$statuses = $this->statusRepository->getStatuses($project);
		
		if (count($statuses) === 1) {
			throw new \Exception('There must be at least one status.');
		}
	}
	
	public function postRemove(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		$statuses = $this->statusRepository->getStatuses($project);
		
		if (count($statuses) === 0) {
			return;
		}

		foreach($statuses as $s) {
			if ($s->isDefault() === true) {
				return;
			}
		}
		
		$this->setDefault(reset($statuses), $event);
	}
}

?>