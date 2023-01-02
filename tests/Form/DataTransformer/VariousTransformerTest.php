<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\VariousTransformer;
use PHPUnit\Framework\TestCase;
use stdClass;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class VariousTransformerTest extends TestCase
{

	/**
	 * @dataProvider transformProvider
	 */
	public function testTransform($value, $expected): void
	{
		$transformer = new VariousTransformer();
		$result = $transformer->transform($value);
		$this->assertSame($result, $expected);
	}

	/**
	 * @dataProvider transformExceptionProvider
	 */
	public function testTransformException($value): void
	{
		$this->expectException(UnexpectedTypeException::class);
		$transformer = new VariousTransformer();
		$transformer->transform($value);
	}

	public function transformProvider()
	{
		return [
			'null'						=> [null, null],
			'empty array'				=> [[], null],
			'single value array'		=> [['1'], '1'],
			'same value in array'		=> [['1', '1'], '1'],
			'two different values'		=> [['1', '2'], '1'],
		];
	}

	public function transformExceptionProvider()
	{
		return [
			'boolean input value'		=> [true],
			'integer input value'		=> [1],
			'string input value'		=> ['a'],
			'object input value'		=> [$this->createMock(stdClass::class)],
		];
	}
}