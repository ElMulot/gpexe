<?php

namespace App\Tests\EventListener;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use PHPUnit\Framework\TestCase;
use Doctrine\Persistence\ObjectManager;
use App\EventListener\MetadataChoiceListener;
use PHPUnit\Framework\MockObject\MockObject;
use Doctrine\Persistence\Event\LifecycleEventArgs;


class MetadataChoiceListenerTest extends TestCase
{
	
	private $event;

	private $objectManager;

	public function setUp(): void
	{
		/**@var ObjectManager&MockObject */
		$this->objectManager = $this->createMock(ObjectManager::class);

		/**@var LifecycleEventArgs&MockObject */
		$this->event = $this->createMock(LifecycleEventArgs::class);
		$this->event
			->method('getObjectManager')
			->willReturn($this->objectManager);
	}

	/**
	 * @covers MetadataChoiceListener::postRemove
	 */
	function testPreRemoveIfMetadataChoiceIsDefaultValue(): void
	{
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test');

		$metadata
			->expects($this->once())
			->method('setDefaultRawValue')
			->with(null);

		/**@var MetadataChoice&MockObject */
		$metadataChoice = $this->createMock(MetadataChoice::class);
		$metadataChoice
			->method('getValue')
			->willReturn('test');

		$metadataChoice
			->method('getMetadata')
			->willReturn($metadata);

		$this->objectManager
			->expects($this->once())
			->method('persist')
			->with($metadata);

		$this->objectManager
			->expects($this->once())
			->method('flush');

		$metadataChoiceListener = new MetadataChoiceListener();

		$metadataChoiceListener->postRemove($metadataChoice, $this->event);
	}

	/**
	 * @covers MetadataChoiceListener::postRemove
	 */
	function testPreRemoveIfMetadataChoiceIsNotDefaultValue(): void
	{
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test0');

		$metadata
			->expects($this->never())
			->method('setDefaultRawValue');

		/**@var MetadataChoice&MockObject */
		$metadataChoice = $this->createMock(MetadataChoice::class);
		$metadataChoice
			->method('getValue')
			->willReturn('test1');

		$metadataChoice
			->method('getMetadata')
			->willReturn($metadata);

		$this->objectManager
			->expects($this->never())
			->method('persist');

		$this->objectManager
			->expects($this->never())
			->method('flush');

		$metadataChoiceListener = new MetadataChoiceListener();

		$metadataChoiceListener->postRemove($metadataChoice, $this->event);
	}
}

?>