<?php

namespace App\Tests\EventListener;

use App\Entity\Project;
use App\Entity\Status;
use App\EventListener\StatusListener;
use App\Repository\StatusRepository;
use PHPUnit\Framework\TestCase;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use PHPUnit\Framework\MockObject\MockObject;


class StatusListenerTest extends TestCase
{
	
	public $event;

	public function setUp(): void
	{
		$objectManager = $this->createMock(ObjectManager::class);

		/**@var LifecycleEventArgs&MockObject */
		$this->event = $this->createMock(LifecycleEventArgs::class);
		$this->event
			->method('getObjectManager')
			->willReturn($objectManager);
	}

	/**
	 * @covers StatusListener::setDefault
	 */
	function testSetDefaultIfOnlyOneStatus(): void
	{
		$project = $this->createMock(Project::class);

		/**@var Status&MockObject */
		$status = $this->createMock(Status::class);
		$status
			->method('getProject')
			->willReturn($project);
		$status
			->expects($this->once())
			->method('setDefault')
			->with(true);

		$statuses[] = $status;

		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository
			->method('getStatuses')
			->willReturn($statuses);
			
		$statusListener = new StatusListener($statusRepository);

		$statusListener->setDefault($status, $this->event);
	}

	/**
	 * @covers StatusListener::setDefault
	 */
	function testSetDefaultIfCurrentStatusSetsToTrue(): void
	{
		$project = $this->createMock(Project::class);

		//create 3 statuses
		for ($i=0; $i<2; $i++) {
			
			/**@var Status&MockObject */
			$status = $this->createMock(Status::class);
			
			if ($i === 0) {
				$status
					->method('isDefault')
					->willReturn(true);
			
				$status
					->expects($this->once())
					->method('setDefault')
					->with(false);
			} else {
				$status
					->method('isDefault')
					->willReturn(false);
			
				$status
					->expects($this->never())
					->method('setDefault');
			}

			$statuses[] = $status;
		}

		//create 1 status with default set to true
		/**@var Status&MockObject */
		$defaultStatus = $this->createMock(Status::class);
		
		$defaultStatus
			->method('getProject')
			->willReturn($project);
		
		$defaultStatus
			->method('isDefault')
			->willReturn(true);
		
		$defaultStatus
			->expects($this->never())
			->method('setDefault');
		
		$statuses[] = $defaultStatus;

		/**@var StatusRepository&MockObject */
		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository
			->method('getStatuses')
			->willReturn($statuses);
			
		$statusListener = new StatusListener($statusRepository);

		$statusListener->setDefault($defaultStatus, $this->event);
	}

	/**
	 * @covers StatusListener::setDefault
	 */
	function testSetDefaultIfCurrentStatusSetsToFalse(): void
	{
		$project = $this->createMock(Project::class);

		//create 3 statuses
		for ($i=0; $i<2; $i++) {
			
			/**@var Status&MockObject */
			$status = $this->createMock(Status::class);
			
			if ($i === 0) {
				$status
					->method('isDefault')
					->willReturn(false);
			
				$status
					->expects($this->once())
					->method('setDefault')
					->with(true);
			} else {
				$status
					->method('isDefault')
					->willReturn(false);
			
				$status
					->expects($this->never())
					->method('setDefault');
			}
			
			$statuses[] = $status;
		}

		//create 1 status with default set to true
		/**@var Status&MockObject */
		$defaultStatus = $this->createMock(Status::class);
		$defaultStatus
			->method('getProject')
			->willReturn($project);
		
		$defaultStatus
			->method('isDefault')
			->willReturn(false);
		
		$defaultStatus
			->expects($this->never())
			->method('setDefault');
		
		$statuses[] = $defaultStatus;

		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository
			->method('getStatuses')
			->willReturn($statuses);
			
		$statusListener = new StatusListener($statusRepository);

		$statusListener->setDefault($defaultStatus, $this->event);
	}
	
	/**
	 * @covers StatusListener::postRemove
	 */
	function testPostRemoveIfRemovedStatusSetsToTrue(): void
	{
		$project = $this->createMock(Project::class);

		//create 3 statuses
		for ($i=0; $i<2; $i++) {

			/**@var Status&MockObject */
			$status = $this->createMock(Status::class);

			$status
				->method('getProject')
				->willReturn($project);

			if ($i === 0) {
				$status
					->method('isDefault')
					->willReturn(false);
			
				$status
					->expects($this->once())
					->method('setDefault')
					->with(true);
			} else {
				$status
					->method('isDefault')
					->willReturn(false);
			
				$status
					->expects($this->never())
					->method('setDefault');
			}

			$statuses[] = $status;
		}

		//create 1 status with default set to true
		/**@var Status&MockObject */
		$deletedStatus = $this->createMock(Status::class);
		$deletedStatus
			->method('getProject')
			->willReturn($project);
		
		$deletedStatus
			->method('isDefault')
			->willReturn(true);
		
		$deletedStatus
			->expects($this->never())
			->method('setDefault');

		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository
			->method('getStatuses')
			->willReturn($statuses);
			
		$statusListener = new StatusListener($statusRepository);

		$statusListener->postRemove($deletedStatus, $this->event);
	}

	/**
	 * @covers StatusListener::postRemove
	 */
	function testPostRemoveIfRemovedStatusSetsToFalse(): void
	{
		$project = $this->createMock(Project::class);

		//create 3 statuses
		for ($i=0; $i<2; $i++) {
			/**@var Status&MockObject */
			$status = $this->createMock(Status::class);

			$status
				->method('getProject')
				->willReturn($project);
			
			$status
				->method('isDefault')
				->willReturn(($i === 1)?true:false);
			
			
			$status
				->expects($this->atMost(1))
				->method('setDefault')
				->with(($i === 1)?true:false);

			$statuses[] = $status;
		}

		//create 1 status with default set to false
		/**@var Status&MockObject */
		$deletedStatus = $this->createMock(Status::class);
		$deletedStatus
			->method('getProject')
			->willReturn($project);
		
		$deletedStatus
			->method('isDefault')
			->willReturn(false);
		
		$deletedStatus
			->expects($this->never())
			->method('setDefault');

		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository
			->method('getStatuses')
			->willReturn($statuses);
			
		$statusListener = new StatusListener($statusRepository);

		$statusListener->postRemove($deletedStatus, $this->event);
	}

}

?>