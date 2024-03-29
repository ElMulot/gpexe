<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Automation;
use App\Entity\Enum\ProgramTypeEnum;
use App\Entity\Program;
use App\Repository\AutomationRepository;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;
use App\Helpers\Date;

#[AsEntityListener(entity:Program::class, event: Events::postPersist, lazy:true)]
#[AsEntityListener(entity:Program::class, event: Events::postUpdate, lazy:true)]
#[AsEntityListener(entity:Program::class, event: Events::preRemove, lazy:true)]
class ProgramListener
{
		
	public function __construct(private readonly AutomationRepository $automationRepository)
	{
	}
	
	public function postPersist(Program $program, LifecycleEventArgs $event)
	{
		//create automation
		switch ($program->getType()) {
			case ProgramTypeEnum::TASK:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				if ($frequency <= 0) {
					return;
				}

				$nextRun = (new Date('today'))->add('P' . $frequency . 'D');
				
				$automation = new Automation();
				$automation->setEnabled($program->isEnabled());
				$automation->setNextRun($nextRun);
				$automation->setCommand('app:task');
				$automation->setArguments(['id' => $program->getId()]);
				$automation->setProject($program->getProject());
				$event->getObjectManager()->persist($automation);
				$event->getObjectManager()->flush();
				break;
				
			case ProgramTypeEnum::PROGRESS:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				if ($frequency <= 0) {
					return;
				}

				$nextRun = (new Date('today'))->add('P' . $frequency . 'D');

				$automation = new Automation();
				$automation->setEnabled($program->isEnabled());
				$automation->setNextRun($nextRun);
				$automation->setCommand('app:progress');
				$automation->setArguments(['id' => $program->getId()]);
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
			case ProgramTypeEnum::TASK:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				if ($frequency <= 0) {
					return;
				}

				$nextRun = (new Date('today'))->add('P' . $frequency . 'D');
				
				if ($automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:task', ['id' => $program->getId()])) {
					$automation->setEnabled($program->isEnabled());
					$automation->setNextRun($nextRun);
					$event->getObjectManager()->persist($automation);
					$event->getObjectManager()->flush();
				} else {
					$this->postPersist($program, $event);
				}
				break;
				
			case ProgramTypeEnum::PROGRESS:
				$frequency = $program->getParsedCode('frequency') ?? 7;
				if ($frequency <= 0) {
					return;
				}

				$nextRun = (new Date('today'))->add('P' . $frequency . 'D');
				
				if ($automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:progress', ['id' => $program->getId()])) {
					$automation->setEnabled($program->isEnabled());
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
			case ProgramTypeEnum::TASK:
				if ($automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:task', ['id' => $program->getId()])) {
					$event->getObjectManager()->remove($automation);
					$event->getObjectManager()->flush();
				}
				break;
				
			case ProgramTypeEnum::PROGRESS:
				if ($automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:progress', ['id' => $program->getId()])) {	
					$event->getObjectManager()->remove($automation);
					$event->getObjectManager()->flush();
				}
				break;
				
		}
	}
	
}

?>