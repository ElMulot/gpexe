<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Common\Persistence\Event\LifecycleEventArgs;
use App\Entity\Status;
use App\Repository\StatusRepository;

class StatusListener
{
	
	private EntityManagerInterface $entityManager;
	
	private StatusRepository $statusRepository;
	
	public function __construct(EntityManagerInterface $entityManager, StatusRepository $statusRepository)
	{
		$this->entityManager = $entityManager;
		$this->statusRepository = $statusRepository;
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
		$s->setIsDefault(true);
		$event->getObjectManager()->persist($s);
		$event->getObjectManager()->flush();
	}
}

?>