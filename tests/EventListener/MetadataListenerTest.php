<?php

namespace App\Tests\EventListener;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use PHPUnit\Framework\TestCase;
use App\EventListener\MetadataListener;
use Doctrine\Persistence\ObjectManager;
use App\EventListener\MetadataChoiceListener;
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

		//create 3 MetadataChoice
		$metadataChoicesCollection = new ArrayCollection();
		for ($i=0; $i<2; $i++) {

			/**@var MetadataChoice&MockObject */
			$metadataChoice = $this->createMock(MetadataChoice::class);
			$metadataChoice
				->method('getValue')
				->willReturn("test{$i}");

			$metadataChoicesCollection->add($metadataChoice);
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
			->method('getMetadataChoices')
			->willReturn($metadataChoicesCollection);

		$metadataChoice = new MetadataChoice();
		$metadataChoice->setMetadata($metadata);
		$metadataChoice->setValue('test');

		$this->objectManager
			->expects($this->once())
			->method('persist')
			->with($metadataChoice);

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

		//create 3 MetadataChoice
		$metadataChoicesCollection = new ArrayCollection;
		for ($i=0; $i<2; $i++) {

			/**@var MetadataChoice&MockObject */
			$metadataChoice = $this->createMock(MetadataChoice::class);
			$metadataChoice
				->method('getValue')
				->willReturn("test{$i}");

			$metadataChoicesCollection->add($metadataChoice);
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
			->method('getMetadataChoices')
			->willReturn($metadataChoicesCollection);

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