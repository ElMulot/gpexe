<?php

namespace App\Tests\Entity;

use App\Entity\User;
use App\Tests\Validator\ConstraintValidatorFactory;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntityValidator;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Form\Test\TypeTestCase;
use Symfony\Component\Validator\Validation;

class UserTest extends TypeTestCase
{
	protected function getExtensions()
	{
		//symfony bug: doctrine.orm.validator.unique is not recognized in test mode
		$factory = new ConstraintValidatorFactory();
		$factory->addValidator('doctrine.orm.validator.unique', $this->createMock(UniqueEntityValidator::class));

		$validator = Validation::createValidatorBuilder()
			->setConstraintValidatorFactory($factory)
			->enableAnnotationMapping()
			->addDefaultDoctrineAnnotationReader()
			->getValidator();

		return [
			new ValidatorExtension($validator),
		];
	}
	
	public function testSomething()
    {

		$user = new User();
		$user->setEmail('test@est.com');

		$this->assertSame($user->getEmail(), 'test@est.com');
		
		$factory = new ConstraintValidatorFactory();
		$factory->addValidator('doctrine.orm.validator.unique', $this->createMock(UniqueEntityValidator::class));

		$validator = Validation::createValidatorBuilder()
			->setConstraintValidatorFactory($factory)
			->enableAnnotationMapping()
			->addDefaultDoctrineAnnotationReader()
			->getValidator();

		$this->assertTrue($validator->validate($user));


    }
}