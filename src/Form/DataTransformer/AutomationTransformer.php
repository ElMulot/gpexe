<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Yaml\Exception\ParseException;
use App\Entity\Automation;


class AutomationTransformer implements DataTransformerInterface
{
	
	public function transform($value)
	{
		
		if ($value === null) {
			return '';
		}
		return $value;
	}
	
	public function reverseTransform($value)
	{
		$validatedCode = Automation::getValidatedCode($value);
		if ($validatedCode instanceof ParseException) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($validatedCode->getMessage());
			throw $failure;
		}
				
		return $validatedCode;
	}
}

?>