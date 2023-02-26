<?php

namespace App\Tests\Form\Type;

use App\Entity\Project;
use App\Form\Type\DropzoneType;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Form\PreloadedExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\HttpFoundation\File\File;

class DropzoneTypeTest extends TypeTestCase
{

	private $publicDirectory;

	protected function setUp(): void
	{
		$this->publicDirectory = '%kernel.project_dir%/public/';
		parent::setUp();
	}

	protected function getExtensions()
	{
		$type = new DropzoneType($this->publicDirectory);
		return [
			new PreloadedExtension([$type], []),
		];
	}


	/**
	 * @covers DropzoneType
	 */
	public function testSubmitValidData()
	{
		$model = $this->createMock(File::class);
		$form = $this->factory->create(DropzoneType::class, $model);
		$this->assertTrue($form->isSynchronized());
	}

	/**
	 * @covers DropzoneType
	 */
	public function testMineTypeFormView()
	{
		$model = $this->createMock(File::class);
		$view = $this->factory->create(DropzoneType::class, $model)->createView();
		$this->assertArrayHasKey('mime_type', $view->vars);
		$this->assertIsString('mine_type');
	}
}

?>