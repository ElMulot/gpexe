<?php

namespace App\Tests\Form\Type;

use App\Form\Type\BooleanType;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Form\PreloadedExtension;
use App\Form\DataTransformer\BooleanToStringTransformer;

class BooleanTypeTest extends TypeTestCase
{
	
	private $viewTransformer;

    protected function setUp(): void
    {
        $this->viewTransformer = new BooleanToStringTransformer();
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
	 * @dataProvider submitValidDataProvider
	 */
	public function testSubmitValidData(mixed $value, bool $expected): void
	{
		$form = $this->factory->create(BooleanType::class);
		$form->submit($value);
		$this->assertTrue($form->isSynchronized());
		$this->assertSame($expected, $form->getData());
	}

	public function submitValidDataProvider()
	{
		return [
			'null'			=> [null, false],
			'empty'			=> ['', true],
			'false'			=> ['0', true],
			'true'			=> ['1', true],
			'non-numeric'	=> ['a', true],
		];
	}
}

?>