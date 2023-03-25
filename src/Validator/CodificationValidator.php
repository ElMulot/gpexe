<?php

namespace App\Validator;

use App\Entity\Codification;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[\Attribute]
class CodificationValidator
{
	public static function validate(Codification $object, ExecutionContextInterface $context)
	{
		$splitter = $object->getProject()->getSplitter();
		
		$constraints[] = new Regex('/' . $splitter . '/', "The splitter \"{$splitter}\" must not be used as a character.", null, false);

		if ($object->isRegex() === true) {
			$constraints[] = new Regex('/' . $object->getPattern() . '/');
		}

		$context
			->getValidator()
			->inContext($context)
			->atPath('defaultRawValue')
			->validate($object->getDefaultValue(), $constraints);
	}

}

?>