<?php

namespace App\Tests\Form\DataMapper;

use App\Form\DataMapper\VariousMapper;
use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\DataTransformer\ProgramTransformer;
use App\Form\DataTransformer\ViewTransformer;
use App\Service\ParseService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class VariousMapperTest extends TestCase
{

	/**
	 * @covers VariousMapper::mapDataToForms
	 */
	public function testMapDataToFormsSuccess(): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->once())
			->method('setData')
			->with('test');
		
		$forms = new \ArrayObject(['input' => $form]);

		$mapper = new VariousMapper();
		$mapper->mapDataToForms('test', $forms);
	}

	/**
	 * @covers VariousMapper::mapDataToForms
	 */
	public function testMapDataToFormsFail(): void
	{
		/**@var FormInterface&MockObject */
		$form = $this->createMock(FormInterface::class);
		$form->expects($this->never())
			->method('setData');
		
		$forms = new \ArrayObject(['input' => $form]);

		$mapper = new VariousMapper();
		$mapper->mapDataToForms(null, $forms);
	}

	/**
	 * @covers VariousMapper::mapFormsToData
	 */
	public function testMapFormsToDataSuccess(): void
	{
		/**@var FormInterface&MockObject */
		$formSwitch = $this->createMock(FormInterface::class);
		$formSwitch->method('getData')
			->willReturn(false);

		/**@var FormInterface&MockObject */
		$formInput = $this->createMock(FormInterface::class);
		$formInput->method('getData')
			->willReturn('test');
		
		$forms = new \ArrayObject([
			'switch'	=> $formSwitch,
			'input'		=> $formInput,
		]);
		$viewData = '';

		$mapper = new VariousMapper();
		$mapper->mapFormsToData($forms, $viewData);
		$this->assertSame('test', $viewData);
	}

	/**
	 * @covers VariousMapper::mapFormsToData
	 */
	public function testMapFormsToDataFail(): void
	{
		/**@var FormInterface&MockObject */
		$formSwitch = $this->createMock(FormInterface::class);
		$formSwitch->method('getData')
			->willReturn(true);

		/**@var FormInterface&MockObject */
		$formInput = $this->createMock(FormInterface::class);
		$formInput->method('getData')
			->willReturn('test');
		
		$forms = new \ArrayObject([
			'switch'	=> $formSwitch,
			'input'		=> $formInput,
		]);
		$viewData = '';

		$mapper = new VariousMapper();
		$mapper->mapFormsToData($forms, $viewData);
		$this->assertSame(null, $viewData);
	}
}