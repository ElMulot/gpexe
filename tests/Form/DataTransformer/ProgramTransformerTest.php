<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\DataTransformer\ProgramTransformer;
use App\Service\ParseService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Form\Exception\TransformationFailedException;

class ProgramTransformerTest extends TestCase
{

	/**@var ParseService&MockObject */
	private $parseService;

	public function setUp(): void
	{
		$this->parseService = $this->createMock(ParseService::class);
	}
	
	/**
	 * @covers ProgramTransformer::transform
	 * @testWith	[null, ""]
	 * 				["test", "test"]
	 */
	public function testTransform($value, $expected): void
	{
		$transformer = new ProgramTransformer($this->parseService);
		$result = $transformer->transform($value);
		$this->assertSame($result, $expected);
	}

	/**
	 * @covers ProgramTransformer::reverseTransform
	 */
	public function testReverseTransformSuccess(): void
	{
		$this->parseService
			->method('getValidatedCode')
			->willReturn('expected');
		
		$transformer = new ProgramTransformer($this->parseService);
		$result = $transformer->reverseTransform('test');
		$this->assertSame($result, 'expected');
	}

	/**
	 * @covers ProgramTransformer::reverseTransform
	 */
	public function testReverseTransformFail(): void
	{
		$this->expectException(TransformationFailedException::class);
		
		$this->parseService
			->method('getValidatedCode')
			->willThrowException(new ParseException('error'));
		
		$transformer = new ProgramTransformer($this->parseService);
		$result = $transformer->reverseTransform('test');
	}
}