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

	/**
	 * Checks if an array contains at most 1 distinct value.
	 *
	 * @param array $array
	 * @return boolean
	 */
	private function isVarious(array $array): bool
	{
		if (count($array) > 1) {
			$firstValue = reset($array);
			foreach ($array as $value) {
				if ($firstValue !== $value) {
					return true;
				}
			}
		}

		return false;
	}
}

?>