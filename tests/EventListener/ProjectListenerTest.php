<?php

namespace App\Tests\EventListener;

use App\Entity\Project;
use PHPUnit\Framework\TestCase;
use App\EventListener\ProjectListener;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\Persistence\Event\LifecycleEventArgs;

class ProjectListenerTest extends TestCase
{

	public $event;

	public $publicDirectory;

	public $uploadsDirectory;

	public function setUp(): void
	{
		$objectManager = $this->createMock(ObjectManager::class);

		/**@var LifecycleEventArgs&MockObject */
		$this->event = $this->createMock(LifecycleEventArgs::class);
		$this->event
			->method('getObjectManager')
			->willReturn($objectManager);

		$this->publicDirectory  = '%kernel.project_dir%/config/ressources/';
		$this->uploadsDirectory = 'uploads/';
	}

	/**
	 * @covers ProjectListener::preUpdate
	 * @testWith	["oldImage.jpeg", "newImage.jpeg"]
	 * 				["oldImage.jpeg", ""]
	 */
	function testDeleteOldImageWhenProjectIsUpdated(string $oldImageName, string $newImageName): void
	{
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);

		/**@var PreUpdateEventArgs&MockObject */
		$event = $this->createMock(PreUpdateEventArgs::class);
		$event
			->method('getOldValue')
			->with('image')
			->willReturn($oldImageName);
		$event
			->method('getNewValue')
			->with('image')
			->willReturn($newImageName);

		/**@var FileSystem&MockObject */
		$fileSystem = $this->createMock(Filesystem::class);

		$fileSystem
			->expects($this->once())
			->method('remove')
			->with($this->publicDirectory . $this->uploadsDirectory . $oldImageName);
	
		$projectListener = new ProjectListener($this->publicDirectory, $this->uploadsDirectory, $fileSystem);

		$projectListener->preUpdate($project, $event);
	}

	/**
	 * @covers ProjectListener::preUpdate
	 * @testWith	["", "image.jpeg"]
	 * 				["image.jpeg", "image.jpeg"]
	 */
	function testKeepOldImageWhenProjectIsUpdated(string $oldImageName, string $newImageName): void
	{
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);

		/**@var PreUpdateEventArgs&MockObject */
		$event = $this->createMock(PreUpdateEventArgs::class);
		$event
			->method('getOldValue')
			->with('image')
			->willReturn($oldImageName);
		$event
			->method('getNewValue')
			->with('image')
			->willReturn($newImageName);

		/**@var FileSystem&MockObject */
		$fileSystem = $this->createMock(Filesystem::class);

		$fileSystem
			->expects($this->never())
			->method('remove');
	
		$projectListener = new ProjectListener($this->publicDirectory, $this->uploadsDirectory, $fileSystem);

		$projectListener->preUpdate($project, $event);
	}

	/**
	 * @covers ProjectListener::postRemove
	 */
	function testDeleteImageWhenProjectIsDeleted(): void
	{
		$imageName = 'image.jpeg';
		
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getImage')
			->willReturn($imageName);

		/**@var FileSystem&MockObject */
		$fileSystem = $this->createMock(Filesystem::class);

		$fileSystem
			->expects($this->once())
			->method('remove')
			->with($this->publicDirectory . $this->uploadsDirectory . $imageName);
	
		$projectListener = new ProjectListener($this->publicDirectory, $this->uploadsDirectory, $fileSystem);

		$projectListener->postRemove($project);
	}

	/**
	 * @covers ProjectListener::postRemove
	 */
	function testDoNothingWhenProjectIsDeleted(): void
	{
		$imageName = '';
		
		/**@var Project&MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getImage')
			->willReturn($imageName);

		/**@var FileSystem&MockObject */
		$fileSystem = $this->createMock(Filesystem::class);

		$fileSystem
			->expects($this->never())
			->method('remove');
	
		$projectListener = new ProjectListener($this->publicDirectory, $this->uploadsDirectory, $fileSystem);

		$projectListener->postRemove($project);
	}

}

?>