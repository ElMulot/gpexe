<?php

namespace App\Tests\Form;

use App\Entity\User;
use App\Form\AccountType;
use Symfony\Component\Form\Test\TypeTestCase;
use App\Tests\Validator\ConstraintValidatorFactory;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntityValidator;
use Symfony\Component\Form\Extension\Validator\ValidatorExtension;
use Symfony\Component\Validator\Validation;


class AccountTypeTest extends TypeTestCase
{

	// protected function getExtensions()
	// {
	// 	//symfony bug: doctrine.orm.validator.unique is not recognized in test mode
	// 	$factory = new ConstraintValidatorFactory();
	// 	$factory->addValidator('doctrine.orm.validator.unique', $this->createMock(UniqueEntityValidator::class));

	// 	$validator = Validation::createValidatorBuilder()
	// 		->setConstraintValidatorFactory($factory)
	// 		->enableAnnotationMapping()
	// 		->addDefaultDoctrineAnnotationReader()
	// 		->getValidator();

	// 	return [
	// 		new ValidatorExtension($validator),
	// 	];
	// }
	
	// /**
	//  * @dataProvider submitValidDataProvider
	//  */
	// public function testSubmitValidData(): void
	// {
	// 	$formData = [
	// 		'name'		=> 'Test',
	// 		'email'		=> 'test',
	// 		'locale'	=> 'en_GB',
	// 	];
		
	// 	$model = new User();
	// 	$expected = clone $model;

	// 	$expected->setName($formData['name'])
	// 			->setEmail($formData['email'])
	// 			->setLocale($formData['locale']);



	// 	$form = $this->factory->create(AccountType::class, $model);
	// 	$form->submit($formData);
	// 	$this->assertFalse($form->isValid());
	// 	$this->assertTrue($form->isSynchronized());

	// 	$this->assertEquals($expected, $model);
	// }

	// public function submitValidDataProvider()
	// {
	// 	return [
	// 		'null'			=> [null, false],
	// 		'empty'			=> ['', true],
	// 		'false'			=> ['0', true],
	// 		'true'			=> ['1', true],
	// 		'non-numeric'	=> ['a', true],
	// 	];
	// }
}

?>