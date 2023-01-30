<?php

namespace App\Tests\EventListener;

use App\Entity\Automation;
use App\Entity\Enum\ProgramTypeEnum;
use App\Entity\Program;
use App\Entity\Project;
use App\EventListener\ProgramListener;
use PHPUnit\Framework\TestCase;
use App\EventListener\ProjectListener;
use App\Repository\AutomationRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class ProgramListenerTest extends TestCase
{

	public $automationRepository;

	public $objectManager;
	
	public $event;

	public function setUp(): void
	{
		$this->automationRepository = $this->createMock(AutomationRepository::class);
		
		$this->objectManager = $this->createMock(ObjectManager::class);

		/**@var LifecycleEventArgs&MockObject */
		$this->event = $this->createMock(LifecycleEventArgs::class);
		$this->event
			->method('getObjectManager')
			->willReturn($this->objectManager);

	}

	/**
	 * @covers ProgramListener::postPersist
	 * @testWith	[3, true]
	 * 				[0, false]
	 */
	function testTaskCreation(int $frequency, bool $expected): void
	{
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);
		
		$automation = new Automation();
		$automation->setEnabled(true);
		$automation->setNextRun((new \DateTime('today'))->add(new \DateInterval("P{$frequency}D")));
		$automation->setCommand('app:task');
		$automation->setArguments(['id' => 1]);
		$automation->setProject($project);

		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::TASK);
		$program
			->method('getParsedCode')
			->with('frequency')
			->willReturn($frequency);
		$program
			->method('isEnabled')
			->willReturn(true);
		$program
			->method('getId')
			->willReturn(1);
		$program
			->method('getProject')
			->willReturn($project);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('persist')
			->with($automation);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('flush');

		$programListener = new ProgramListener($this->automationRepository);

		$programListener->postPersist($program, $this->event);
	}

	/**
	 * @covers ProgramListener::postPersist
	 * @testWith	[3, true]
	 * 				[0, false]
	 */
	function testProgressCreation(int $frequency, bool $expected): void
	{
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);
		
		$automation = new Automation();
		$automation->setEnabled(true);
		$automation->setNextRun((new \DateTime('today'))->add(new \DateInterval("P{$frequency}D")));
		$automation->setCommand('app:progress');
		$automation->setArguments(['id' => 1]);
		$automation->setProject($project);

		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::PROGRESS);
		$program
			->method('getParsedCode')
			->with('frequency')
			->willReturn($frequency);
		$program
			->method('isEnabled')
			->willReturn(true);
		$program
			->method('getId')
			->willReturn(1);
		$program
			->method('getProject')
			->willReturn($project);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('persist')
			->with($automation);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('flush');
	
		$programListener = new ProgramListener($this->automationRepository);

		$programListener->postPersist($program, $this->event);
	}

	/**
	 * @covers ProgramListener::postUpdate
	 * @testWith	[3, true]
	 * 				[0, false]
	 */
	function testTaskUpdate(int $frequency, bool $expected): void
	{
		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::TASK);
		$program
			->method('getParsedCode')
			->with('frequency')
			->willReturn($frequency);
		$program
			->method('isEnabled')
			->willReturn(true);
		$program
			->method('getId')
			->willReturn(1);

		/**@var Automation&MockObject */
		$automation = $this->createMock(Automation::class);
		$automation
			->expects($this->exactly($expected))
			->method('setEnabled')
			->with(true);
		$automation
			->expects($this->exactly($expected))
			->method('setNextRun')
			->with((new \DateTime('today'))->add(new \DateInterval("P{$frequency}D")));

		$this->objectManager
			->expects($this->exactly($expected))
			->method('persist')
			->with($automation);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('flush');

		$this->automationRepository
			->method('getAutomationByCommandAndByArguments')
			->with('app:task', ['id' => 1])
			->willReturn($automation);
	
		$programListener = new ProgramListener($this->automationRepository);

		$programListener->postUpdate($program, $this->event);
	}

	/**
	 * @covers ProgramListener::postUpdate
	 * @testWith	[3, true]
	 * 				[0, false]
	 */
	function testProgressUpdate(int $frequency, bool $expected): void
	{
		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::PROGRESS);
		$program
			->method('getParsedCode')
			->with('frequency')
			->willReturn($frequency);
		$program
			->method('isEnabled')
			->willReturn(true);
		$program
			->method('getId')
			->willReturn(1);

		/**@var Automation&MockObject */
		$automation = $this->createMock(Automation::class);
		$automation
			->expects($this->exactly($expected))
			->method('setEnabled')
			->with(true);
		$automation
			->expects($this->exactly($expected))
			->method('setNextRun')
			->with((new \DateTime('today'))->add(new \DateInterval("P{$frequency}D")));

		$this->objectManager
			->expects($this->exactly($expected))
			->method('persist')
			->with($automation);

		$this->objectManager
			->expects($this->exactly($expected))
			->method('flush');

		$this->automationRepository
			->method('getAutomationByCommandAndByArguments')
			->with('app:progress', ['id' => 1])
			->willReturn($automation);
	
		$programListener = new ProgramListener($this->automationRepository);

		$programListener->postUpdate($program, $this->event);
	}

	/**
	 * @covers ProgramListener::preRemove
	 */
	function testTaskDeleted(): void
	{
		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::TASK);
		$program
			->method('getId')
			->willReturn(1);

		/**@var Automation&MockObject */
		$automation = $this->createMock(Automation::class);

		$this->objectManager
			->expects($this->once())
			->method('remove')
			->with($automation);

		$this->objectManager
			->expects($this->once())
			->method('flush');

		$this->automationRepository
			->method('getAutomationByCommandAndByArguments')
			->with('app:task', ['id' => 1])
			->willReturn($automation);
	
		$programListener = new ProgramListener($this->automationRepository);

		$programListener->preRemove($program, $this->event);
	}

	/**
	 * @covers ProgramListener::preRemove
	 */
	function testProgressDeleted(): void
	{
		/**@var Program&MockObject */
		$program = $this->createMock(Program::class);
		$program
			->method('getType')
			->willReturn(ProgramTypeEnum::PROGRESS);
		$program
			->method('getId')
			->willReturn(1);

		/**@var Automation&MockObject */
		$automation = $this->createMock(Automation::class);

		$this->objectManager
			->expects($this->once())
			->method('remove')
			->with($automation);

		$this->objectManager
			->expects($this->once())
			->method('flush');

		$this->automationRepository
			->method('getAutomationByCommandAndByArguments')
			->with('app:progress', ['id' => 1])
			->willReturn($automation);
	
		$programListener = new ProgramListener($this->automationRepository);

		$programListener->preRemove($program, $this->event);
	}

}

?>