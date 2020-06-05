<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use App\Entity\Automation;


class AutomationTransformer implements DataTransformerInterface
{
	
	public function transform($value)
	{
		if ($value === null) {
			return '';
		}
		
		return Automation::getValidatedCode($value);
	}
	
	public function reverseTransform($value)
	{
		return Automation::getValidatedCode($value);
	}
}

?>