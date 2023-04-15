<?php

namespace App\Tests\Validator;

use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Validator\IsMandatory;
use App\Entity\MetadataElement;
use App\Validator\IsMandatoryValidator;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;

class IsMandatoryValidatorTest extends ConstraintValidatorTestCase
{
	protected function createValidator()
	{
		return new IsMandatoryValidator();
	}

	protected function setUp(): void
	{
		parent::setUp();
		$this->constraint = new IsMandatory();
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);
	}

	/**
	 * @dataProvider emptyValuesProvider
	 * @dataProvider notEmptyValuesProvider
	 */
	public function testNotMandatoryAsMetadataElement($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(false);

		/**@var MetadataElement|MockObject */
		$metadataElement = $this->createMock(MetadataElement::class);
		$metadataElement
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider emptyValuesProvider
	 * @dataProvider notEmptyValuesProvider
	 */
	public function testNotMandatoryAsMetadataChoice($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(false);

		/**@var MetadataElement|MockObject */
		$metadataChoice = $this->createMock(MetadataChoice::class);
		$metadataChoice
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataChoice;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider notEmptyValuesProvider
	 */
	public function testMandatoryAsMetadataElementSuccess($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(true);

		/**@var MetadataElement|MockObject */
		$metadataElement = $this->createMock(MetadataElement::class);
		$metadataElement
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);
		
		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider notEmptyValuesProvider
	 */
	public function testMandatoryAsMetadataChoiceSuccess($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(true);

		/**@var MetadataChoice|MockObject */
		$metadataChoice = $this->createMock(MetadataChoice::class);
		$metadataChoice
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataChoice;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);
		
		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider emptyValuesProvider
	 */
	public function testMandatoryAsMetadataElementFail($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(true);

		/**@var MetadataElement|MockObject */
		$metadataElement = $this->createMock(MetadataElement::class);
		$metadataElement
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataElement;
		$this->context = $this->createContext();
        $this->validator->initialize($this->context);

        $this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->message)
			->assertRaised();
	}

	/**
	 * @dataProvider emptyValuesProvider
	 */
	public function testMandatoryAsMetadataChoiceFail($value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isMandatory')
			->willReturn(true);

		/**@var MetadataChoice|MockObject */
		$metadataChoice = $this->createMock(MetadataChoice::class);
		$metadataChoice
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataChoice;
		$this->context = $this->createContext();
        $this->validator->initialize($this->context);

        $this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->message)
			->assertRaised();
	}

	public function emptyValuesProvider(): iterable
	{
		return [
			[null],
			[false],
			[''],
			[[]],

		];
	}

	public function notEmptyValuesProvider(): iterable
	{
		return [
			[true],
			[0],
			[1],
			['0'],
			['1'],
			['a'],
		];
	}
}