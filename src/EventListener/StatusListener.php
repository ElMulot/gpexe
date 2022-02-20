<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Status;
use App\Repository\StatusRepository;

class StatusListener
{
	
	public function __construct(private readonly EntityManagerInterface $entityManager, private readonly StatusRepository $statusRepository)
	{
	}
	
	public function setIsDefault(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		
		if ($this->statusRepository->getStatusesCount($project) == 1) {
			$status->setIsDefault(true);
		} elseif ($status->getIsDefault()) {
			
			foreach($this->statusRepository->getStatuses($project) as $s) {
				if ($s->getId() !== $status->getId() && $s->getIsDefault()) {
					$s->setIsDefault(false);
					$event->getObjectManager()->persist($s);
					$event->getObjectManager()->flush();
				}
			}
			
		} else {
			foreach($this->statusRepository->getStatuses($project) as $s) {
				if ($s->getIsDefault()) {
					return;
				}
			}
			$status->setIsDefault(true);
		}
	}
	
	public function postRemove(Status $status, LifecycleEventArgs $event)
	{
		$project = $status->getProject();
		
		foreach($this->statusRepository->getStatuses($project) as $s) {
			if ($s->getIsDefault()) {
				return;
			}
		}
		$status->setIsDefault(true);
		$event->getObjectManager()->persist($status);
		$event->getObjectManager()->flush();
	}
}

?>