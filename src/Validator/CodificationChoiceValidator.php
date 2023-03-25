<?php

namespace App\Validator;

use App\Entity\CodificationChoice;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[\Attribute]
class CodificationChoiceValidator
{
	public static function validate(string $value, ExecutionContextInterface $context): void
	{
		$codificationChoice = $context->getObject();
		
		if ($codificationChoice instanceof CodificationChoice === false) {
			return;
		}
		
		$splitter = $codificationChoice->getCodification()->getProject()->getSplitter();
		
		$constraint = new Regex("/{$splitter}/", "The splitter \"{$splitter}\" must not be used as a character.", null, false);

		$context
			->getValidator()
			->inContext($context)
			->atPath('value')
			->validate($value, $constraint);
	}

}

?>