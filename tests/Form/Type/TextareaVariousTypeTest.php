<?php

namespace App\Tests\Form\Type;

use App\Form\DataMapper\VariousMapper;
use App\Form\Type\TextareaVariousType;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;

class TextareaVariousTypeTest extends TypeTestCase
{
	
	private $suscriber;
	private $modelTransformer;
	private $dataMappper;

	protected function setUp(): void
	{
		$this->suscriber = new VariousFieldSubscriber();
		$this->modelTransformer = new VariousTransformer();
		$this->dataMappper = new VariousMapper();
		parent::setUp();
	}

	protected function getExtensions()
	{
		$type = new TextareaVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$type], []),
		];
	}

	/**
	 * @covers TextareaVariousType
	 * @testWith	[[], false]
	 * 				[["a"], false]
	 * 				[["a", "a"], false]
	 * 				[["a", "b"], true]
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		$form = $this->factory->create(TextareaVariousType::class, $value);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}

	/**
	 * @covers TextareaVariousType
	 */	
	public function testSubmitVariousSwitchOn(): void
	{
		$form = $this->factory->create(TextareaVariousType::class, ['a', 'b']);

		$form->submit([
			'input'		=> 'a',
			'switch'	=> '1',
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame(['a', 'b'], $form->getData());
	}

	/**
	 * @covers TextareaVariousType
	 * @testWith	[null, null]
	 * 				["", null]
	 * 				["1", "1"]
	 * 				["a", "a"]
	 */	
	public function testSubmitValidData($value, $expected): void
	{
		$form = $this->factory->create(TextareaVariousType::class, ['a', 'b']);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}

	/**
	 * @covers TextareaVariousType
	 * @testWith	[null, null]
	 * 				["", null]
	 * 				["1", "1"]
	 * 				["a", "a"]
	 */	
	public function testSubmitValidDataWithoutSwitch($value, $expected): void
	{
		$form = $this->factory->create(TextareaVariousType::class, ['a']);

		$form->submit([
			'input'		=> $value
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}
}

?>