<?php

namespace App\Validator;

use App\Entity\Metadata;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[\Attribute]
class MetadataValidator {

	public static function validate(Metadata $object, ExecutionContextInterface $context)
	{
		if ($object->isRegex() === false) {
			return;
		}
		
		$constraint = new Regex('/' . $object->getPattern() . '/');

		$context
			->getValidator()
			->inContext($context)
			->atPath('defaultValue')
			->validate($object->getDefaultValue(), $constraint);
	}

}

?>