<?php 

namespace App\Form\DataTransformer;

use App\Service\FileUploaderService;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Validator\Constraints\Image;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

class ImageTransformer implements DataTransformerInterface
{

	public function __construct(#[Autowire('%app.uploads_directory%')]
								private readonly string $uploadsDirectory,
								private readonly FileUploaderService $fileUploadService,
								private readonly ValidatorInterface $validator)
	{
	}
	
	public function transform($value): ?File
	{
		if ($value == false) {
			return null;
		}
		try {
			return new File($this->uploadsDirectory . $value);
		} catch (FileNotFoundException $e) {
			return null;
		}
	}
	
	public function reverseTransform($value): string
	{
		if ($value === null) {
			return '';
		}
		if ($value instanceof File === false) {
			throw new TransformationFailedException('This is not a file');
		}
		
		if ($value->getClientOriginalName() !== 'croppedImage.jpg') {
			return $value->getClientOriginalName();
		}

		$constraint = new Image(maxSize: '20k');
		$errors = $this->validator->validate($value, $constraint);
		if ($errors->count() > 0) {
			$failure = new TransformationFailedException($errors[0]->getMessage());
			$failure->setInvalidMessage($errors[0]->getMessage());
			throw $failure;
		}
		return $this->fileUploadService->upload($value);
	}
}

?>