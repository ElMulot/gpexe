<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\BooleanToStringTransformer;
use PHPUnit\Framework\TestCase;

class BooleanToStringTransformerTest extends TestCase
{

	/**
	 * @dataProvider transformProvider
	 */

	public function testTransform($value, $expected): void
	{
		$transformer = new BooleanToStringTransformer();
		$result = $transformer->transform($value);
		$this->assertSame($result, $expected);
	}

	/**
	 * @dataProvider reverseTransformProvider
	 */

	public function testReverseTransform($value, $expected): void
	{
		$transformer = new BooleanToStringTransformer();
		$result = $transformer->reverseTransform($value);
		$this->assertSame($result, $expected);
	}

	public function transformProvider()
	{
		return [
			'null'		=> [null, '0'],
			'false'		=> [false, '0'],
			'true'		=> [true, '1'],
		];
	}

	public function reverseTransformProvider()
	{
		return [
			'null'			=> [null, false],
			'empty'			=> ['', true],
			'numeric'		=> ['0', true],
			'numeric2'		=> ['1', true],
			'non-numeric'	=> ['a', true],
		];
	}

}