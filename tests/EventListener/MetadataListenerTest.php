<?php

namespace App\Tests\EventListener;

use App\Entity\Metadata;
use App\Entity\MetadataItem;
use PHPUnit\Framework\TestCase;
use App\EventListener\MetadataListener;
use Doctrine\Persistence\ObjectManager;
use App\EventListener\MetadataItemListener;
use Doctrine\Common\Collections\ArrayCollection;
use PHPUnit\Framework\MockObject\MockObject;
use Doctrine\Persistence\Event\LifecycleEventArgs;


class MetadataListenerTest extends TestCase
{
	
	private $event;

	private MockObject $objectManager;

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
	 * @covers MetadataListener::postPersist
	 */
	function testPostPersistIfMetadataDefaultValueIsNew(): void
	{

		//create 3 MetadataItem
		$metadataItemsCollection = new ArrayCollection();
		for ($i=0; $i<2; $i++) {

			/**@var MetadataItem&MockObject */
			$metadataItem = $this->createMock(MetadataItem::class);
			$metadataItem
				->method('getValue')
				->willReturn("test{$i}");

			$metadataItemsCollection->add($metadataItem);
		}

		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test');

		$metadata
			->method('isList')
			->willReturn(true);

		$metadata
			->method('getMetadataItems')
			->willReturn($metadataItemsCollection);

		$metadataItem = new MetadataItem();
		$metadataItem->setMetadata($metadata);
		$metadataItem->setValue('test');

		$this->objectManager
			->expects($this->once())
			->method('persist')
			->with($metadataItem);

		$this->objectManager
			->expects($this->once())
			->method('flush');

		$metadataListener = new MetadataListener();

		$metadataListener->postPersist($metadata, $this->event);
	}

	/**
	 * @covers MetadataListener::postPersist
	 */
	function testPostPersistIfMetadataDefaultValueIsNotNew(): void
	{

		//create 3 MetadataItem
		$metadataItemsCollection = new ArrayCollection;
		for ($i=0; $i<2; $i++) {

			/**@var MetadataItem&MockObject */
			$metadataItem = $this->createMock(MetadataItem::class);
			$metadataItem
				->method('getValue')
				->willReturn("test{$i}");

			$metadataItemsCollection->add($metadataItem);
		}
		
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test1');

		$metadata
			->method('isList')
			->willReturn(true);

		$metadata
			->method('getMetadataItems')
			->willReturn($metadataItemsCollection);

		$this->objectManager
			->expects($this->never())
			->method('persist');

		$this->objectManager
			->expects($this->never())
			->method('flush');

		$metadataListener = new MetadataListener();

		$metadataListener->postPersist($metadata, $this->event);
	}

	/**
	 * @covers MetadataListener::postPersist
	 */
	function testPostPersistIfMetadataIsNotAList(): void
	{
		
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn('test');

		$metadata
			->method('isList')
			->willReturn(false);

		$this->objectManager
			->expects($this->never())
			->method('persist');

		$this->objectManager
			->expects($this->never())
			->method('flush');

		$metadataListener = new MetadataListener();

		$metadataListener->postPersist($metadata, $this->event);
	}

	/**
	 * @covers MetadataListener::postPersist
	 */
	function testPostPersistIfMetadataDefaultValueIsNull(): void
	{
		
		/**@var Metadata&MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('getDefaultValue')
			->willReturn(null);

		$metadata
			->method('isList')
			->willReturn(true);

		$this->objectManager
			->expects($this->never())
			->method('persist');

		$this->objectManager
			->expects($this->never())
			->method('flush');

		$metadataListener = new MetadataListener();

		$metadataListener->postPersist($metadata, $this->event);
	}
}

?>