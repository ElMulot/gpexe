<?php 

namespace App\Form\DataTransformer;

use InvalidArgumentException;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class BooleanToStringTransformer implements DataTransformerInterface
{
    private array $falseValues;

    public function __construct(array $falseValues = [null])
    {
        $this->falseValues = $falseValues;
    }
	
	public function transform(mixed $value): mixed
	{
		// dump('BooleanToStringTransformer->transform', $value);
		if (null === $value) {
            return '0';
        }

        if (!\is_bool($value)) {
            throw new TransformationFailedException('Expected a Boolean.');
        }

		return ($value)?'1':'0';
	}
	
	public function reverseTransform(mixed $value): mixed
	{
		// dump('BooleanToStringTransformer->reverseTransform', $value, $this->falseValues);
		if (\in_array($value, $this->falseValues, true)) {
            return false;
        }

        if (!\is_string($value)) {
            throw new TransformationFailedException('Expected a string.');
        }

        return true;
	}
}

?>