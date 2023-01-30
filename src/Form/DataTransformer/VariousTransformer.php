<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class VariousTransformer implements DataTransformerInterface
{
	public function transform(mixed $value): mixed
	{
		// dump('VariousTransformer->transform', $value);
		if ($value === null) {
			return null;
		}
		
		if (is_array($value) === false) {
			throw new UnexpectedTypeException($value, 'array');
		}
		
		// if ($this->isVarious($value) === false) {
			return reset($value)?:null;
		// } else {
			// return null;
		// }
	}
	
	public function reverseTransform(mixed $value): mixed
	{
		// dump('VariousTransformer->reverseTransform', $value);
		return $value;
	}
}

?>