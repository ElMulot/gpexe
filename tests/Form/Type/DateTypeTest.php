<?php

namespace App\Tests\Form\Type;

use App\Helpers\Date;
use App\Form\Type\DateVariousType;
use App\Form\DataMapper\VariousMapper;
use App\Form\Extension\DateTypeExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\VariousTransformer;
use App\Form\EventSubscriber\VariousFieldSubscriber;
use App\Service\DateService;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Form\Extension\Core\Type\DateType;

class DateTypeTest extends TypeTestCase
{
	private $dateService;

	protected function setUp(): void
	{
		/**@var DateService&MockObject */
		$this->dateService = $this->createMock(DateService::class);
		$this->dateService
			->method('getFlatpickrDateFormat')
			->willReturn('d-m-Y');

		parent::setUp();
	}

	// protected function getExtensions()
	// {
	// 	$type = new DateType();

	// 	return [
	// 		new PreloadedExtension([$type], []),
	// 	];
	// }

	protected function getTypeExtensions()
	{
		return [
			new DateTypeExtension($this->dateService, 'dd/MM/yyyy')
		];
	}

	/**
	 * @covers DateTypeExtension
	 */	
	public function testCreation(): void
	{
		$form = $this->factory->create(DateType::class);
		$this->assertTrue($form->isSynchronized());

		$this->assertSame('single_text', $form->getConfig()->getOption('widget'));
		$this->assertFalse($form->getConfig()->getOption('html5'));

		$this->assertTrue($form->getConfig()->hasOption('today_button'));
		$this->assertTrue($form->getConfig()->getOption('today_button'));

		$this->assertTrue($form->getConfig()->hasOption('disable_weekend'));
		$this->assertTrue($form->getConfig()->getOption('disable_weekend'));

		$this->assertSame(DateService::PHP_INTERNAL_DATE_FORMAT, $form->getConfig()->getOption('input_format'));
		$this->assertSame('dd/MM/yyyy', $form->getConfig()->getOption('format'));

		$view = $form->createView();

		$this->assertArrayHasKey('data-controller', $view->vars['attr']);
		$this->assertSame('flatpickr', $view->vars['attr']['data-controller']);

		$this->assertArrayHasKey('data-flatpickr-today-button-value', $view->vars['attr']);
		$this->assertSame($form->getConfig()->getOption('today_button'), $view->vars['attr']['data-flatpickr-today-button-value']);

		$this->assertArrayHasKey('data-flatpickr-disable-weekend-value', $view->vars['attr']);
		$this->assertSame($form->getConfig()->getOption('disable_weekend'), $view->vars['attr']['data-flatpickr-disable-weekend-value']);

		$this->assertArrayHasKey('data-flatpickr-mandatory-value', $view->vars['attr']);
		$this->assertSame($form->getConfig()->getOption('required'), $view->vars['attr']['data-flatpickr-mandatory-value']);

		$this->assertArrayHasKey('data-flatpickr-date-format-value', $view->vars['attr']);
		$this->assertSame($this->dateService->getFlatpickrDateFormat(), $view->vars['attr']['data-flatpickr-date-format-value']);

	}
}

			

?>