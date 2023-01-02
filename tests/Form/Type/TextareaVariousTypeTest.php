<?php

namespace App\Tests\Form\Type;

use App\Form\DataMapper\VariousMapper;
use App\Form\Type\TextareaVariousType;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;

class TextAreaVariousTypeTest extends TypeTestCase
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
		$textVariousType = new TextareaVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$textVariousType], []),
		];
	}

	/**
	 * @dataProvider childrenCreationProvider
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		$form = $this->factory->create(TextareaVariousType::class, $value);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}
	
	public function childrenCreationProvider()
	{
		return [
			'empty'					=> [[], false],
			'single value array'	=> [['a'], false],
			'same value in array'	=> [['a', 'a'], false],
			'two different values'	=> [['a', 'b'], true],
		];
	}

	public function testSubmitVariousSwitchOn(): void
	{
		$form = $this->factory->create(TextareaVariousType::class, ['a', 'b']);

		$form->submit([
			'input'		=> 'a',
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
		$form = $this->factory->create(TextareaVariousType::class, ['a', 'b']);

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
			'null'			=> [null, null],
			'empty'			=> ['', null],
			'numeric'		=> ['1', '1'],
			'non-numeric'	=> ['a', 'a'],
		];
	}
}

?>