<?php

namespace App\Tests\Form\Type;

use App\Form\Type\BooleanType;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\BooleanToStringTransformer;
use PHPUnit\Framework\MockObject\MockObject;

class BooleanTypeTest extends TypeTestCase
{
	private $viewTransformer;

	protected function setUp(): void
	{
		/**@var BooleanToStringTransformer&MockObject */
		$this->viewTransformer = $this->createMock(BooleanToStringTransformer::class);
		$this->viewTransformer
			->method('transform')
			->willReturnMap(
				[null, '0'],
				[false, false],
				[true, true],
			);
		
		parent::setUp();
	}

    protected function getExtensions()
    {
		$type = new BooleanType($this->viewTransformer);
        return [
            new PreloadedExtension([$type], [])
        ];
    }

	/**
	 * @covers BooleanType
	 * @testWith	[null, false]
	 * 				["", true]
	 * 				["0", true]
	 * 				["1", true]
	 * 				["a", true]
	 */
	public function testSubmitValidData(mixed $value, bool $expected): void
	{
		$form = $this->factory->create(BooleanType::class);
		$form->submit($value);
		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}
}

?>