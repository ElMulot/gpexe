<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\BooleanToStringTransformer;
use PHPUnit\Framework\TestCase;

class BooleanToStringTransformerTest extends TestCase
{

	/**
	 * @covers BooleanToStringTransformer::transform
	 * @testWith	[null, "0"]
	 * 				[false, "0"]
	 * 				[true, "1"]
	 */
	public function testTransform($value, $expected): void
	{
		$transformer = new BooleanToStringTransformer();
		$result = $transformer->transform($value);
		$this->assertSame($result, $expected);
	}

	/**
	 * @covers BooleanToStringTransformer::reverseTransform
	 * @testWith	[null, false]
	 * 				["", true]
	 * 				["0", true]
	 * 				["1", true]
	 * 				["a", true]
	 */
	public function testReverseTransform($value, $expected): void
	{
		$transformer = new BooleanToStringTransformer();
		$result = $transformer->reverseTransform($value);
		$this->assertSame($result, $expected);
	}
}