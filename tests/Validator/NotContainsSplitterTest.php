<?php

namespace App\Tests\Validator;

use App\Entity\Codification;
use App\Entity\CodificationChoice;
use App\Entity\CodificationElement;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Entity\MetadataElement;
use App\Entity\Project;
use App\Validator\IsValid;
use App\Validator\IsValidValidator;
use App\Validator\NotContainsSplitter;
use App\Validator\NotContainsSplitterValidator;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\Constraints\Url;
use Symfony\Component\Validator\Test\ConstraintValidatorTestCase;
use Symfony\Component\Validator\Validator\ContextualValidatorInterface;

class NotContainsSplitterTest extends ConstraintValidatorTestCase
{
	protected function createValidator()
	{
		return new NotContainsSplitterValidator();
	}

	protected function setUp(): void
	{
		parent::setUp();
		$this->constraint = new NotContainsSplitter();
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);
	}

	/**
	 * @testWith	[null]
	 * 				[""]
	 */
	public function testIfEmpty($value)
	{
		$this->validator->validate($value, $this->constraint);
		$this->assertNoViolation();
	}

	public function testAsPayloadSuccess()
	{
		$payload['splitter'] = '-';
		$this->constraint->payload = $payload;
		
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a', $this->constraint);

		$this->assertNoViolation();
	}

	public function testAsCodificationElementSuccess()
	{
		/**@var Project|MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getSplitter')
			->willReturn('-');
		
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('getProject')
			->willReturn($project);

		/**@var CodificationElement|MockObject */
		$codificationElement = $this->createMock(CodificationElement::class);
		$codificationElement
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a', $this->constraint);

		$this->assertNoViolation();
	}

	public function testAsCodificationChoiceSuccess()
	{
		/**@var Project|MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getSplitter')
			->willReturn('-');
		
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('getProject')
			->willReturn($project);

		/**@var CodificationChoice|MockObject */
		$codificationChoice = $this->createMock(CodificationChoice::class);
		$codificationChoice
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationChoice;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a', $this->constraint);

		$this->assertNoViolation();
	}

	public function testAsPayloadFail()
	{
		$payload['splitter'] = '-';
		$this->constraint->payload = $payload;
		
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a-a', $this->constraint);

		$this->buildViolation($this->constraint->message)
			->setParameter('{{ splitter }}', '-')
			->assertRaised();
	}

	public function testAsCodificationElementFail()
	{
		/**@var Project|MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getSplitter')
			->willReturn('-');
		
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('getProject')
			->willReturn($project);

		/**@var CodificationElement|MockObject */
		$codificationElement = $this->createMock(CodificationElement::class);
		$codificationElement
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationElement;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a-a', $this->constraint);

		$this->buildViolation($this->constraint->message)
			->setParameter('{{ splitter }}', '-')
			->assertRaised();
	}

	public function testAsCodificationChoiceFail()
	{
		/**@var Project|MockObject */
		$project = $this->createMock(Project::class);
		$project
			->method('getSplitter')
			->willReturn('-');
		
		/**@var Codification|MockObject */
		$codification = $this->createMock(Codification::class);
		$codification
			->method('getProject')
			->willReturn($project);

		/**@var CodificationChoice|MockObject */
		$codificationChoice = $this->createMock(CodificationChoice::class);
		$codificationChoice
			->method('getCodification')
			->willReturn($codification);

		$this->object = $codificationChoice;
		$this->context = $this->createContext();
		$this->validator->initialize($this->context);

		$this->validator->validate('a-a', $this->constraint);

		$this->buildViolation($this->constraint->message)
			->setParameter('{{ splitter }}', '-')
			->assertRaised();
	}
}