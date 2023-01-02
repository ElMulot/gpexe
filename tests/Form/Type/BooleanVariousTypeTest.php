<?php

namespace App\Tests\Form\Type;

use App\Form\DataMapper\VariousMapper;
use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\DataTransformer\ViewTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use App\Form\Type\BooleanType;
use App\Form\Type\BooleanVariousType;
use App\Form\Type\DropzoneType;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\PreloadedExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Validator\Validation;

class BooleanVariousTypeTest extends TypeTestCase
{
	
	private $suscriber;
	private $modelTransformer;
	private $viewTransformer;
	private $dataMappper;

	protected function setUp(): void
	{
		$this->suscriber = new VariousFieldSubscriber();
		$this->modelTransformer = new VariousTransformer();
		$this->viewTransformer = new BooleanToStringTransformer();
		$this->dataMappper = new VariousMapper();
		parent::setUp();
	}

	protected function getExtensions()
	{
		$booleanVariousType = new BooleanVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);
		$booleanType = new BooleanType($this->viewTransformer);

		return [
			new PreloadedExtension([$booleanVariousType, $booleanType], []),
		];
	}

	/**
	 * @dataProvider childrenCreationProvider
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		$form = $this->factory->create(BooleanVariousType::class, $value);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}
	
	public function childrenCreationProvider()
	{
		return [
			'empty'					=> [[], false],
			'single value array'	=> [[true], false],
			'same value in array'	=> [[true, true], false],
			'two different values'	=> [[false, true], true],
		];
	}

	public function testSubmitVariousSwitchOn(): void
	{
		$form = $this->factory->create(BooleanVariousType::class, [false, true]);

		$form->submit([
			'input'		=> '1',
			'switch'	=> '1',
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertNull($form->getData());
	}

	/**
	 * @dataProvider submitValidDataProvider
	 */
	public function testSubmitValidData($value, $expected): void
	{
		$form = $this->factory->create(BooleanVariousType::class, [false, true]);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}

	public function submitValidDataProvider()
	{
		return [
			'null'			=> [null, false],
			'empty'			=> ['', true],
			'false'			=> ['0', true],
			'true'			=> ['1', true],
			'non-numeric'	=> ['a', true],
		];
	}
}

?>