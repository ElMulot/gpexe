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
		$type = new ChoiceVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$type], []),
		];
	}

	/**
	 * @covers ChoiceVariousType
	 * @testWith	[[], false]
	 * 				[[0], false]
	 * 				[[1, 1], false]
	 * 				[[1, 2], true]
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

	/**
	 * @covers ChoiceVariousType
	 */	
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
	 * @covers ChoiceVariousType
	 * @testWith	["0", 0]
	 * 				["1", 1]
	 * 				["2", 2]
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

	/**
	 * @covers ChoiceVariousType
	 * @testWith	[null]
	 * 				[""]
	 * 				["3"]
	 * 				["a"]
	 * 				["[]"]
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
}

?>