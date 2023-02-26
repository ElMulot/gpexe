<?php

namespace App\Tests\Form\DataTransformer;

use App\Form\DataTransformer\BooleanToStringTransformer;
use App\Form\DataTransformer\ProgramTransformer;
use App\Form\DataTransformer\ViewTransformer;
use App\Service\ParseService;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ViewTransformerTest extends TestCase
{

	/**@var JsonEncoder&MockObject */
	private $jsonEncoder;

	public function setUp(): void
	{
		$this->jsonEncoder = $this->createMock(JsonEncoder::class);
	}
	
	/**
	 * @covers ViewTransformer::transform
	 */
	public function testTransformSuccess(): void
	{
		$this->jsonEncoder
			->method('encode')
			->with(['name' => 'test'], 'json')
			->willReturn('{"name": "test"}');
		
		$transformer = new ViewTransformer($this->jsonEncoder);
		$result = $transformer->transform(['name' => 'test']);
		$this->assertSame('{"name": "test"}', $result);
	}

	/**
	 * @covers ViewTransformer::transform
	 */
	public function testTransformFail(): void
	{
		$this->expectException(TransformationFailedException::class);
		
		$this->jsonEncoder
			->method('encode')
			->willThrowException(new NotEncodableValueException());
		
		$transformer = new ViewTransformer($this->jsonEncoder);
		$result = $transformer->transform(['name' => 'test']);
	}

	/**
	 * @covers ViewTransformer::reverseTransform
	 */
	public function testReverseTransformSuccess(): void
	{
		$this->jsonEncoder
			->method('decode')
			->with('{"name": "test"}', 'json')
			->willReturn(['name' => 'test']);
		
		$transformer = new ViewTransformer($this->jsonEncoder);
		$result = $transformer->reverseTransform('{"name": "test"}');
		$this->assertSame(['name' => 'test'], $result);
	}

	/**
	 * @covers ViewTransformer::reverseTransform
	 */
	public function testReverseTransformFail(): void
	{
		$this->expectException(TransformationFailedException::class);
		
		$this->jsonEncoder
			->method('decode')
			->willThrowException(new NotEncodableValueException());
		
		$transformer = new ViewTransformer($this->jsonEncoder);
		$transformer->reverseTransform('{"name": "test"}');
	}
}