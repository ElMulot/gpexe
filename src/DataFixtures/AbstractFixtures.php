<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Symfony\Component\Validator\Validator\ValidatorInterface;

/**
 * Abstract used to validate the fixtures.
 * To be functionnal, the database must be flushed each time.
 */
abstract class AbstractFixtures extends Fixture implements DependentFixtureInterface
{

    public function __construct(private readonly ValidatorInterface $validator)
	{
	}
	
	public function validate(mixed $object): void
	{
		$violations = $this->validator->validate($object);
		
		if ($violations->count() > 0) {
			$message = sprintf("Violations detected:\n%s", $violations);
			throw new \DomainException($message);
		}

	}
}
