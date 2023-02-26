<?php

namespace App\Tests\EventListener;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use PHPUnit\Framework\TestCase;
use Doctrine\Persistence\ObjectManager;
use App\EventListener\MetadataItemListener;
use PHPUnit\Framework\MockObject\MockObject;
use Doctrine\Persistence\Event\LifecycleEventArgs;


class MetadataItemListenerTest extends TestCase
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
	 * @covers MetadataItemListener::postRemove
	 */
	function testPreRemoveIfMetadataItemIsDefaultValue(): void
	{
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test');

		$metadata
			->expects($this->once())
			->method('setDefaultValue')
			->with(null);

		/**@var MetadataItem&MockObject */
		$metadataItem = $this->createMock(MetadataItem::class);
		$metadataItem
			->method('getValue')
			->willReturn('test');

		$metadataItem
			->method('getMetadata')
			->willReturn($metadata);

		$this->objectManager
			->expects($this->once())
			->method('persist')
			->with($metadata);

		$this->objectManager
			->expects($this->once())
			->method('flush');

		$metadataItemListener = new MetadataItemListener();

		$metadataItemListener->postRemove($metadataItem, $this->event);
	}

	/**
	 * @covers MetadataItemListener::postRemove
	 */
	function testPreRemoveIfMetadataItemIsNotDefaultValue(): void
	{
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test0');

		$metadata
			->expects($this->never())
			->method('setDefaultValue');

		/**@var MetadataItem&MockObject */
		$metadataItem = $this->createMock(MetadataItem::class);
		$metadataItem
			->method('getValue')
			->willReturn('test1');

		$metadataItem
			->method('getMetadata')
			->willReturn($metadata);

		$this->objectManager
			->expects($this->never())
			->method('persist');

		$this->objectManager
			->expects($this->never())
			->method('flush');

		$metadataItemListener = new MetadataItemListener();

		$metadataItemListener->postRemove($metadataItem, $this->event);
	}
}

?>