<?php

namespace App\Tests\Form\DataMapper;

use PHPUnit\Framework\TestCase;
use App\Form\DataMapper\ComboBoxMapper;
use Symfony\Component\Form\FormInterface;
use PHPUnit\Framework\MockObject\MockObject;

class ComboBoxMapperTest extends TestCase
{

	/**
	 * @covers ComboBoxMapperTest::mapDataToForms
	 */
	public function testMapDataToFormsSuccess(): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->once())
			->method('setData')
			->with('expected_value');
		
		$forms = new \ArrayObject(['choice' => $form]);

		$mapper = new ComboBoxMapper();
		$mapper->mapDataToForms('expected_value', $forms);
	}

	/**
	 * @covers ComboBoxMapperTest::mapDataToForms
	 */
	public function testMapDataToFormsFail(): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->never())
			->method('setData');
		
		$forms = new \ArrayObject(['choice' => $form]);

		$mapper = new ComboBoxMapper();
		$mapper->mapDataToForms(null, $forms);
	}

	/**
	 * @covers ComboBoxMapperTest::mapFormsToData
	 */
	public function testMapFormsToDataFromChoice(): void
	{
		/**@var FormInterface&MockObject */
		$formChoice = $this->createMock(FormInterface::class);
		$formChoice->method('getData')
			->willReturn('expected_value');

		/**@var FormInterface&MockObject */
		$formInput = $this->createMock(FormInterface::class);
		$formInput->method('getData')
			->willReturn(null);
		
		$forms = new \ArrayObject([
			'choice'	=> $formChoice,
			'input'		=> $formInput,
		]);
		$viewData = '';

		$mapper = new ComboBoxMapper();
		$mapper->mapFormsToData($forms, $viewData);
		$this->assertSame('expected_value', $viewData);
	}

	/**
	 * @covers ComboBoxMapperTest::mapFormsToData
	 */
	public function testMapFormsToDataFromInput(): void
	{
		/**@var FormInterface&MockObject */
		$formChoice = $this->createMock(FormInterface::class);
		$formChoice->method('getData')
			->willReturn('unexpected_value');

		/**@var FormInterface&MockObject */
		$formInput = $this->createMock(FormInterface::class);
		$formInput->method('getData')
			->willReturn('expected_value');
		
		$forms = new \ArrayObject([
			'choice'	=> $formChoice,
			'input'		=> $formInput,
		]);
		$viewData = '';

		$mapper = new ComboBoxMapper();
		$mapper->mapFormsToData($forms, $viewData);
		$this->assertSame('expected_value', $viewData);
	}
}