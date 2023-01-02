<?php

namespace App\Tests\Form\Type;

use App\Form\Type\ChoiceVariousType;
use App\Form\DataMapper\VariousMapper;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use App\Form\DataTransformer\BooleanToStringTransformer;

class ChoiceVariousTypeTest extends TypeTestCase
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
		$textVariousType = new ChoiceVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$textVariousType], []),
		];
	}

	/**
	 * @dataProvider childrenCreationProvider
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		$form = $this->factory->create(ChoiceVariousType::class, $value, [
			'choices' => [
				'Zero'	=> 0,
				'One'	=> 1,
				'Two'	=> 2,
			]
		]);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}
	
	public function childrenCreationProvider()
	{
		return [
			'empty'					=> [[], false],
			'single value array'	=> [[0], false],
			'same value in array'	=> [[1, 1], false],
			'two different values'	=> [[1, 2], true],
		];
	}

	public function testSubmitVariousSwitchOn(): void
	{
		$form = $this->factory->create(ChoiceVariousType::class, [0, 1], [
			'choices' => [
				'Zero'	=> 0,
				'One'	=> 1,
				'Two'	=> 2,
			]
		]);

		$form->submit([
			'input'		=> '2',
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
		$form = $this->factory->create(ChoiceVariousType::class, [0, 1], [
			'choices' => [
				'Zero'	=> 0,
				'One'	=> 1,
				'Two'	=> 2,
			]
		]);

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
			'numeric0'		=> ['0', 0],
			'numeric1'		=> ['1', 1],
			'numeric2'		=> ['2', 2],
		];
	}

	/**
	 * @dataProvider submitInvalidDataProvider
	 */
	public function testSubmitInvalidData($value): void
	{
		$form = $this->factory->create(ChoiceVariousType::class, [0, 1], [
			'choices' => [
				'Zero'	=> 0,
				'One'	=> 1,
				'Two'	=> 2,
			]
		]);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertNull($form->getData());
	}

	public function submitInvalidDataProvider()
	{
		return [
			'null'			=> [null],
			'empty'			=> [''],
			'numeric'		=> ['3'],
			'non-numeric'	=> ['a'],
			'array'			=> ['[]'],
		];
	}
}

?>