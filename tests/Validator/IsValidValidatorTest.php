<?php

namespace App\Tests\Validator;

use App\Entity\Metadata;
use App\Validator\IsValid;
use App\Entity\Codification;
use App\Entity\MetadataElement;
use App\Entity\CodificationElement;
use App\Validator\IsValidValidator;
use Symfony\Component\Validator\Constraint;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;
use Symfony\Component\Validator\Validator\ContextualValidatorInterface;

class IsValidValidatorTest extends ConstraintValidatorTestCase
{
	protected function createValidator()
	{
		return new IsValidValidator();
	}

	protected function setUp(): void
	{
		parent::setUp();
		$this->constraint = new IsValid();
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);
	}

	/**
	 * @testWith	[null]
	 * 				[""]
	 * 				[[]]
	 * 				[['a', 'b']]
	 */
	public function testIfEmpty($value)
	{
		$this->validator->validate($value, $this->constraint);
		$this->assertNoViolation();
	}

	public function testIfDateTime()
	{
		/**@var \DateTime|MockObject */
		$dateTime = $this->createMock(\DateTime::class);
		
		$this->validator->validate($dateTime, $this->constraint);
		$this->assertNoViolation();
	}

	/**
	 * @testWith	["$", "$"]
	 * 				["a$", "$"]
	 * 				["$a", "$"]
	 * 				["\"", "\""]
	 * 				["a\"", "\""]
	 * 				["\"a", "\""]
	 */
	public function testForbiddenSymbol($value, $symbol)
	{
		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->forbiddenSymbolMessage)
			->setParameter('{{ symbol }}', $symbol)
			->assertRaised();
	}

	/**
	 * @dataProvider validRegexValuesProvider
	 */
	public function testRegexPatternAsPayloadSuccess($pattern, $value)
	{
		$payload['pattern'] = $pattern;
		$this->constraint->payload = $payload;
		
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider validRegexValuesProvider
	 */
	public function testRegexAsCodificationElementSuccess($pattern, $value)
	{
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('isRegex')
			->willReturn(true);
		
		$codification
			->method('getPattern')
			->willReturn($pattern);

		/**@var CodificationElement|MockObject */
		$codificationElement = $this->createMock(CodificationElement::class);
		$codificationElement
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider validRegexValuesProvider
	 */
	public function testRegexAsMetadataElementSuccess($pattern, $value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isRegex')
			->willReturn(true);
		
		$metadata
			->method('getPattern')
			->willReturn($pattern);

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
	 * @dataProvider validRegexValuesProvider
	 */
	public function testRegexAsCodificationSuccess($pattern, $value)
	{
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('isRegex')
			->willReturn(true);
		
		$codification
			->method('getPattern')
			->willReturn($pattern);

		$this->object = $codification;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}

	/**
	 * @dataProvider validRegexValuesProvider
	 */
	public function testRegexAsMetadataSuccess($pattern, $value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isRegex')
			->willReturn(true);
		
		$metadata
			->method('getPattern')
			->willReturn($pattern);

		$this->object = $metadata;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->assertNoViolation();
	}


/**
	 * @dataProvider invalidRegexValuesProvider
	 */
	public function testRegexPatternAsPayloadFail($pattern, $value)
	{
		$payload['pattern'] = $pattern;
		$this->constraint->payload = $payload;
		
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->regexMessage)
			->assertRaised();
	}

	/**
	 * @dataProvider invalidRegexValuesProvider
	 */
	public function testRegexAsCodificationElementFail($pattern, $value)
	{
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('isRegex')
			->willReturn(true);
		
		$codification
			->method('getPattern')
			->willReturn($pattern);

		/**@var CodificationElement|MockObject */
		$codificationElement = $this->createMock(CodificationElement::class);
		$codificationElement
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->regexMessage)
			->assertRaised();
	}

	/**
	 * @dataProvider invalidRegexValuesProvider
	 */
	public function testRegexAsMetadataElementFail($pattern, $value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isRegex')
			->willReturn(true);
		
		$metadata
			->method('getPattern')
			->willReturn($pattern);

		/**@var MetadataElement|MockObject */
		$metadataElement = $this->createMock(MetadataElement::class);
		$metadataElement
			->method('getMetadata')
			->willReturn($metadata);

		$this->object = $metadataElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->regexMessage)
			->assertRaised();
	}

	/**
	 * @dataProvider invalidRegexValuesProvider
	 */
	public function testRegexAsCodificationFail($pattern, $value)
	{
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('isRegex')
			->willReturn(true);
		
		$codification
			->method('getPattern')
			->willReturn($pattern);

		$this->object = $codification;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->regexMessage)
			->assertRaised();
	}

	/**
	 * @dataProvider invalidRegexValuesProvider
	 */
	public function testRegexAsMetadataFail($pattern, $value)
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isRegex')
			->willReturn(true);
		
		$metadata
			->method('getPattern')
			->willReturn($pattern);

		$this->object = $metadata;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate($value, $this->constraint);

		$this->buildViolation($this->constraint->regexMessage)
			->assertRaised();
	}

	public function testUrlAsPayload()
	{
		$this->constraint->payload['isLink'] = true;
		
		$this->context = $this->createContext();
		
		/**@var ContextualValidatorInterface|MockObject */
		$contextualValidator = $this->context
									->getValidator()
									->inContext($this->context);

		$contextualValidator
			->expects($this->once())
			->method('validate')
			->with("a", new Url(), Constraint::DEFAULT_GROUP);
		
		$this->validator->initialize($this->context);

		$this->validator->validate("a", $this->constraint);
	}

	public function testUrlAsMetadataElement()
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isLink')
			->willReturn(true);

		/**@var MetadataElement|MockObject */
		$metadataElement = $this->createMock(MetadataElement::class);
		$metadataElement
			->method('getMetadata')
			->willReturn($metadata);
		
		$this->object = $metadataElement;
		$this->context = $this->createContext();
		
		/**@var ContextualValidatorInterface|MockObject */
		$contextualValidator = $this->context
									->getValidator()
									->inContext($this->context);

		$contextualValidator
			->expects($this->once())
			->method('validate')
			->with("a", new Url(), Constraint::DEFAULT_GROUP);
		
		$this->validator->initialize($this->context);

		$this->validator->validate("a", $this->constraint);
	}

	public function testUrlAsMetadata()
	{
		/**@var Metadata|MockObject */
		$metadata = $this->createMock(Metadata::class);
		$metadata
			->method('isLink')
			->willReturn(true);
		
		$this->object = $metadata;
		$this->context = $this->createContext();
		
		/**@var ContextualValidatorInterface|MockObject */
		$contextualValidator = $this->context
									->getValidator()
									->inContext($this->context);

		$contextualValidator
			->expects($this->once())
			->method('validate')
			->with("a", new Url(), Constraint::DEFAULT_GROUP);
		
		$this->validator->initialize($this->context);

		$this->validator->validate("a", $this->constraint);
	}

	public function validRegexValuesProvider(): iterable
	{
		return [
			['', 'a'],
			['\d', '1'],
			['[a-z]\d', 'a1'],
		];
	}

	public function invalidRegexValuesProvider(): iterable
	{
		return [
			['\d', 'a'],
			['[a-z]', '1'],
			['[a-z]\d', '1a'],
		];
	}
}