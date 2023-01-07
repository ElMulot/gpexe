<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Status;
use App\Repository\StatusRepository;

class StatusListener
{
	
	public function __construct(private readonly StatusRepository $statusRepository)
	{
	}
	
	public function setDefault(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		
		if ($this->statusRepository->getStatusesCount($project) == 1) {
			$status->setDefault(true);
		} elseif ($status->isDefault()) {
			
			foreach($this->statusRepository->getStatuses($project) as $s) {
				if ($s->getId() !== $status->getId() && $s->isDefault()) {
					$s->setDefault(false);
					$event->getObjectManager()->persist($s);
					$event->getObjectManager()->flush();
				}
			}
			
		} else {
			foreach($this->statusRepository->getStatuses($project) as $s) {
				if ($s->isDefault()) {
					return;
				}
			}
			$status->isDefault(true);
		}
	}
	
	public function postRemove(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		
		foreach($this->statusRepository->getStatuses($project) as $s) {
			if ($s->isDefault()) {
				return;
			}
		}
		$status->isDefault(true);
		$event->getObjectManager()->persist($status);
		$event->getObjectManager()->flush();
	}
}

?>