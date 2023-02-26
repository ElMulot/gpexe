<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Serializer\Encoder\EncoderInterface;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;

class ViewTransformer implements DataTransformerInterface
{
	
	public function __construct(private readonly EncoderInterface $encoder)
	{
	}

	public function transform(mixed $value): string
	{
		try {
			return $this->encoder->encode($value, 'json');
		} catch (NotEncodableValueException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
	}
	
	public function reverseTransform(mixed $value): mixed
	{
		try {
			return $this->encoder->decode($value, 'json');
		} catch (NotEncodableValueException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
	}
}

?>