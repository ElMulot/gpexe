<?php

namespace App\Tests\Form\Type;

use App\Form\Type\TextVariousType;
use App\Form\DataMapper\VariousMapper;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;

class TextVariousTypeTest extends TypeTestCase
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
		$type = new TextVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$type], []),
		];
	}

	/**
	 * @covers TextVariousType
	 * @testWith	[[], false]
	 * 				[["a"], false]
	 * 				[["a", "a"], false]
	 * 				[["a", "b"], true]
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		$form = $this->factory->create(TextVariousType::class, $value);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}

	/**
	 * @covers TextVariousType
	 */	
	public function testSubmitVariousSwitchOn(): void
	{
		$form = $this->factory->create(TextVariousType::class, ['a', 'b']);

		$form->submit([
			'input'		=> 'a',
			'switch'	=> '1',
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertNull($form->getData());
	}

	/**
	 * @covers TextVariousType
	 * @testWith	[null, null]
	 * 				["", null]
	 * 				["1", "1"]
	 * 				["a", "a"]
	 */	
	public function testSubmitValidData($value, $expected): void
	{
		$form = $this->factory->create(TextVariousType::class, ['a', 'b']);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}
}

?>