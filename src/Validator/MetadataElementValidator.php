<?php

namespace App\Validator;

use App\Entity\MetadataElement;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[\Attribute]
class MetadataElementValidator
{
	public static function validate(MetadataElement $object, ExecutionContextInterface $context)
	{
	
		if ($object->getMetadata()->isRegex() === false) {
			return;
		}
	
		$constraint = new Regex('/' . $object->getMetadata()->getPattern() . '/');
			
		$context
				->getValidator()
				->inContext($context)
				->atPath('value')
				->validate($object->getValue(), $constraint);
	}
}

?>