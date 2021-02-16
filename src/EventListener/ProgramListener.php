<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Automation;
use App\Entity\Program;
use App\Repository\AutomationRepository;
use App\Repository\StatusRepository;
use App\Service\ProgramService;

class ProgramListener
{
	
	private EntityManagerInterface $entityManager;
	
	private StatusRepository $statusRepository;
	
	public function __construct(EntityManagerInterface $entityManager, AutomationRepository $automationRepository)
	{
		$this->entityManager = $entityManager;
		$this->automationRepository = $automationRepository;
	}
	
	public function postPersist(Program $program, LifecycleEventArgs $event)
	{
		//create automation
		switch ($program->getType()) {
			case Program::TASK:
			case Program::PROGRESS:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				$nextRun = (new \DateTime('now'))->add(new \DateInterval('P' . $frequency . 'D'));
				$automation = new Automation;
				$automation->setEnabled($program->getEnabled());
				$automation->setNextRun($nextRun);
				$automation->setRoute(ProgramService::class . '::automation');
				$automation->setParameters(['program' => $program->getId()]);
				$automation->setProject($program->getProject());
				$event->getObjectManager()->persist($automation);
				$event->getObjectManager()->flush();
				break;
		}
	}
	
	public function postUpdate(Program $program, LifecycleEventArgs $event)
	{
		//update automation
		switch ($program->getType()) {
			case Program::TASK:
			case Program::PROGRESS:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				$nextRun = (new \DateTime('now'))->add(new \DateInterval('P' . $frequency . 'D'));
				
				if ($automation = $this->automationRepository->getAutomationByRouteAndByParameters(ProgramService::class . '::automation', ['program' => $program->getId()])) {
					$automation->setEnabled($program->getEnabled());
					$automation->setNextRun($nextRun);
					$event->getObjectManager()->persist($automation);
					$event->getObjectManager()->flush();
				} else {
					$this->postPersist($program, $event);
				}
				break;
		}
	}
	
	public function preRemove(Program $program, LifecycleEventArgs $event)
	{
		//delete automation
		switch ($program->getType()) {
			case Program::TASK:
			case Program::PROGRESS:
				if ($automation = $this->automationRepository->getAutomationByRouteAndByParameters(ProgramService::class . '::automation', ['program' => $program->getId()])) {	
					$event->getObjectManager()->remove($automation);
					$event->getObjectManager()->flush();
				}
				break;
				
		}
	}
	
}

?>