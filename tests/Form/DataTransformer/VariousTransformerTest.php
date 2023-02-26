<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\VariousTransformer;
use PHPUnit\Framework\TestCase;
use stdClass;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class VariousTransformerTest extends TestCase
{

	/**
	 * covers VariousTransformer::transform
	 * @testWith	[null, null]
	 * 				[[], null]
	 * 				[["1"], "1"]
	 * 				[["1", "1"], "1"]
	 * 				[["1", "2"], "1"]
	 */
	public function testTransform($value, $expected): void
	{
		$transformer = new VariousTransformer();
		$result = $transformer->transform($value);
		$this->assertSame($result, $expected);
	}

	/**
	 * covers VariousTransformer::transform
	 * @testWith	[true]
	 * 				[1]
	 * 				["a"]
	 */
	public function testTransformException($value): void
	{
		$this->expectException(UnexpectedTypeException::class);
		$transformer = new VariousTransformer();
		$transformer->transform($value);
	}
}