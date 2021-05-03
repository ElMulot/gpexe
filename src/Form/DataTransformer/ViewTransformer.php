<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Exception\NotEncodableValueException;
use Symfony\Component\Serializer\Serializer;
use PhpParser\JsonDecoder;

class ViewTransformer implements DataTransformerInterface
{
	
	public function transform($value)
	{
		try {
			$encoder = new JsonEncoder();
			return $encoder->encode($value, 'json');
		} catch (NotEncodableValueException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
	}
	
	public function reverseTransform($value)
	{
		try {
			$encoder = new JsonEncoder();
			return $encoder->decode($value, 'json');
		} catch (NotEncodableValueException $e) {
			$failure = new TransformationFailedException();
			$failure->setInvalidMessage($e->getMessage());
			throw $failure;
		}
	}
}

?>