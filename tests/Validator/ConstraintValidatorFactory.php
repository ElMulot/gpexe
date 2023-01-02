<?php
namespace App\Tests\Validator;

use Symfony\Component\Validator\ConstraintValidatorFactory as SymfonyConstraintValidatorFactory;
use Symfony\Component\Validator\ConstraintValidatorInterface;

class ConstraintValidatorFactory extends SymfonyConstraintValidatorFactory
{
    public function addValidator(string $className, ConstraintValidatorInterface $validator): void
    {
        $this->validators[$className] = $validator;
    }
}