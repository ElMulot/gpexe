<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Yaml\Exception\ParseException;
use App\Service\AutomationService;


class AutomationTransformer implements DataTransformerInterface
{
	
	private $automationService;
	
	public function __construct(AutomationService $automationService)
	{
		$this->automationService = $automationService;
	}
	
	public function transform($value)
	{
		
		if ($value === null) {
			return '';
		}
		return $value;
	}
	
	public function reverseTransform($value): string
	{
		try {
			$validatedCode = $this->automationService->getValidatedCode($value);
		} catch (ParseException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
		
		return $validatedCode;
	}
}

?>