<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class VariousTransformer implements DataTransformerInterface
{
	
	public function transform(mixed $value): mixed
	{
		if ($value === null) {
			return null;
		}

		if (is_array($value) === false) {
			throw new UnexpectedTypeException($value, 'array');
		}

		if (count(array_unique($value)) === 1) {
			return reset($value);
		} else {
			return null;
		}
	}
	
	public function reverseTransform(mixed $value): mixed
	{
		dump($value);
		return $value;
	}
}

?>