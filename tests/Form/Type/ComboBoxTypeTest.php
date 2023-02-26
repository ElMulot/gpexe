<?php

namespace App\Tests\Form\Type;

use App\Form\DataMapper\ComboBoxMapper;
use App\Form\Type\BooleanType;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\Type\ComboBoxType;
use PHPUnit\Framework\MockObject\MockObject;

class ComboBoxTypeTest extends TypeTestCase
{
	private $dataMappper;

	protected function setUp(): void
	{
		$this->dataMappper = new ComboBoxMapper();
		parent::setUp();
	}

    protected function getExtensions()
    {
		$type = new ComboBoxType($this->dataMappper);
        return [
            new PreloadedExtension([$type], [])
        ];
    }

	/**
	 * @covers ComboBoxType
	 */	
	public function testChildrenCreation(): void
	{
		$choices = [
			'Zero'	=> 0,
			'One'	=> 1,
			'Two'	=> 2,
		];
		
		$form = $this->factory->create(ComboBoxType::class, null, [
			'choices' => $choices,
			'custom_option_label' => '[type a custom value]',
			'custom_option_value' => -1,
		]);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('choice'));
		$this->assertSame($form->get('choice')->getConfig()->getOption('choices'), $choices + ['[type a custom value]' => -1]);
		$this->assertTrue($form->has('input'));
	}

	/**
	 * @covers ComboBoxType
	 */	
	public function testSubmitFromChoice(): void
	{
		$choices = [
			'Zero'	=> 0,
			'One'	=> 1,
			'Two'	=> 2,
		];
		
		$form = $this->factory->create(ComboBoxType::class, null, [
			'choices' => $choices,
			'custom_option_label' => '[type a custom value]',
			'custom_option_value' => -1,
		]);

		$form->submit([
			'choice'	=> '2',
			'input'		=> null,
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame(2, $form->getData());
	}

	/**
	 * @covers ComboBoxType
	 */	
	public function testSubmitFromInput(): void
	{
		$choices = [
			'Zero'	=> 0,
			'One'	=> 1,
			'Two'	=> 2,
		];
		
		$form = $this->factory->create(ComboBoxType::class, null, [
			'choices' => $choices,
			'custom_option_label' => '[type a custom value]',
			'custom_option_value' => -1,
		]);

		$form->submit([
			'choice'	=> '2',
			'input'		=> '3',
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertSame('3', $form->getData());
	}
}

?>