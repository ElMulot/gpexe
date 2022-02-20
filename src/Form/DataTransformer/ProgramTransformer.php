<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Yaml\Exception\ParseException;
use App\Service\ParseService;


class ProgramTransformer implements DataTransformerInterface
{
	
	public function __construct(private readonly ParseService $parseService)
	{
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
			$validatedCode = $this->parseService->getValidatedCode($value);
		} catch (ParseException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
		
		return $validatedCode;
	}
}

?>