<?php

namespace App\Tests\EventListener;

use App\EventListener\StatusListener;
use App\Repository\StatusRepository;
use PHPUnit\Framework\TestCase;
use Doctrine\Persistence\ObjectManager;

class StatusListenerTest extends TestCase
{
	
	function testSetDefault(): void
	{
		
		$objectManager = $this->createMock(ObjectManager::class)
			->setMethods(['persist', 'flush']);

		$event = $this->createMock(LifecycleEventArgs::class);
		$event->method('getObjectManager')
			->willReturn($objectManager);

		$statusRepository = $this->createMock(StatusRepository::class);
		$statusRepository->method('getStatusesCount')
			->willReturn(1);
		
		$listener = new StatusListener($statusRepository);
		
		$this->assertSame($listener->setDefault($status));
		
	}
	
	
}

?>