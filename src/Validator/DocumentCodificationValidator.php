<?php

namespace App\Validator;

use App\Entity\Document;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;

#[\Attribute]
class DocumentCodificationValidator
{
	public static function validate(Document $object, ExecutionContextInterface $context)
	{
		dump('DocumentCodificationValidator');
		
		// $splitter = $object->getSerie()->getProject()->getSplitter();
		
		// $constraint = new Regex('/' . $splitter . '/', "The splitter \"{$splitter}\" must not be used as a character.", null, false);

		// $context
		// 	->getValidator()
		// 	->inContext($context)
		// 	->atPath('rawValue')
		// 	->validate($object->getVa(), $constraint);
	}

}

?>