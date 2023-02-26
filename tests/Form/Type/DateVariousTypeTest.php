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

class DateVariousTypeTest extends TypeTestCase
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
		$type = new DateVariousType($this->suscriber, $this->modelTransformer, $this->dataMappper);

		return [
			new PreloadedExtension([$type], []),
		];
	}

	protected function getTypeExtensions()
	{
		return [
			new DateTypeExtension('dd/MM/yyyy')
		];
	}

	/**
	 * @covers DateVariousType
	 * @testWith	[["2000-01-01"], false]
	 * 				[["2000-01-01"], false]
	 * 				[["2000-01-01", "2000-01-01"], false]
	 * 				[["2000-01-01", "2000-01-02"], true]
	 */	
	public function testChildrenCreation($value, $expected): void
	{
		array_walk($value, fn(&$item) => $item = new \DateTime($item));

		$form = $this->factory->create(DateVariousType::class, $value, ['compound' => true]);
		$this->assertTrue($form->isSynchronized());

		$this->assertTrue($form->has('input'));
		$this->assertSame($expected, $form->has('switch'));
	}

	/**
	 * @covers DateVariousType
	 */	
	public function testSubmitVariousSwitchOn(): void
	{
		$date1 = new \DateTime("2000-01-01");
		$date2 = new \DateTime("2000-01-02");
		
		$form = $this->factory->create(DateVariousType::class, [$date1, $date2]);

		$form->submit([
			'input'		=> '2000-01-03',
			'switch'	=> '1',
		]);

		$this->assertTrue($form->isSynchronized());
		$this->assertNull($form->getData());
	}

	/**
	 * @covers DateVariousType
	 * @testWith	[null]
	 * 				[""]
	 */	
	public function testSubmitEmptyData($value): void
	{
		$date1 = new \DateTime("2000-01-01");
		$date2 = new \DateTime("2000-01-02");

		$form = $this->factory->create(DateVariousType::class, [$date1, $date2], [
			'format' => 'dd/MM/yyyy',
		]);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertNull($form->getData());
	}

	/**
	 * @covers DateVariousType
	 * @testWith	["02/01/2000", "2000-01-02"]
	 * 				["03/01/2000", "2000-01-03"]
	 */	
	public function testSubmitValidData($value, $expected): void
	{
		$date1 = new \DateTime("2000-01-01");
		$date2 = new \DateTime("2000-01-02");

		$form = $this->factory->create(DateVariousType::class, [$date1, $date2], [
			'format' => 'dd/MM/yyyy',
		]);

		$form->submit([
			'input'		=> $value,
			'switch'	=> null,
		]);

		$this->assertEquals(new \DateTime($expected), $form->getData());
	}
}

			

?>