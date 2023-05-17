<?php

namespace App\Tests\Form\DataTransformer;

use org\bovigo\vfs\vfsStream;
use PHPUnit\Framework\TestCase;
use App\Service\FileUploaderService;
use org\bovigo\vfs\vfsStreamDirectory;
use PHPUnit\Framework\MockObject\MockObject;
use App\Form\DataTransformer\ImageTransformer;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\Validator\ConstraintViolationList;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;

class ImageTransformerTest extends TestCase
{
	public string $fileName;

	public string $uploadsDirectory;
	
	public string $publicDir;
	
    private vfsStreamDirectory $root;

	/**@var FileUploaderService&MockObject */
	public $fileUploadService;
	
	/**@var ValidatorInterface&MockObject */
	public $validator;

	public function setUp(): void
	{
		$this->uploadsDirectory = 'uploads/';
		
		$this->root = vfsStream::setup('public', null, [
														$this->uploadsDirectory => [
															'test.jpg'			=> '',
															'croppedImage.jpg'	=> '',
														]
													]);

		$this->publicDir  = $this->root->url() . '/';
		
		$this->fileUploadService = $this->createMock(FileUploaderService::class);

		$this->validator = $this->createMock(ValidatorInterface::class);
	}

	/**
	 * @covers ImageTransformer::transform
	 * @testWith		["test.jpg"]
	 * 					["croppedImage.jpg"]
	 */
	public function testTransformSuccess(string $fileName): void
	{
		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		/**@var File $result */
		$result = $transformer->transform($fileName);

		$this->assertInstanceOf(File::class, $result);
		$this->assertSame($result->getPath() . '/', $this->publicDir . $this->uploadsDirectory);
		$this->assertSame($result->getFilename(), $fileName);
		
	}

	/**
	 * @covers ImageTransformer::transform
	 * @testWith		[false]
	 * 					["notFoundFile.jpg"]
	 */
	public function testTransformFail(mixed $fileName): void
	{
		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$result = $transformer->transform($fileName);
		$this->assertSame(null, $result);
	}

	/**
	 * @covers ImageTransformer::reverseTransform
	 */
	public function testReverseTransformSuccessWithRegularImage(): void
	{
		$file = $this->root->getChild($this->uploadsDirectory . 'test.jpg');
		
		$fileObject = new UploadedFile($file->url(), $file->getName());

		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$result = $transformer->reverseTransform($fileObject);

		$this->assertSame($result, $file->getName());
		
	}

	/**
	 * @covers ImageTransformer::reverseTransform
	 */
	public function testReverseTransformSuccessWithCroppedImage(): void
	{
		$file = $this->root->getChild($this->uploadsDirectory . 'croppedImage.jpg');
		
		$fileObject = new UploadedFile($file->url(), $file->getName());

		/**@var ConstraintViolationList&MockObject */
		$constraintViolationList = $this->createMock(ConstraintViolationList::class);
		$constraintViolationList
			->method('count')
			->willReturn(0);

		$this->validator
			->method('validate')
			->willReturn($constraintViolationList);
		
		$this->fileUploadService
			->expects($this->once())
			->method('upload')
			->with($fileObject);

		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$transformer->reverseTransform($fileObject);
	}

	/**
	 * @covers ImageTransformer::reverseTransform
	 */
	public function testReverseTransformFailWithCroppedImage(): void
	{
		$this->expectException(TransformationFailedException::class);
		
		$file = $this->root->getChild($this->uploadsDirectory . 'croppedImage.jpg');
		
		$fileObject = new UploadedFile($file->url(), $file->getName());

		/**@var ConstraintViolationList&MockObject */
		$constraintViolationList = $this->createMock(ConstraintViolationList::class);
		$constraintViolationList
			->method('count')
			->willReturn(1);

		$this->validator
			->method('validate')
			->willReturn($constraintViolationList);
		
		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$transformer->reverseTransform($fileObject);
	}

	/**
	 * @covers ImageTransformer::reverseTransform
	 */
	public function testReverseTransformWithNull(): void
	{
		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$result = $transformer->reverseTransform(null);

		$this->assertSame($result, '');
	}

	/**
	 * @covers ImageTransformer::reverseTransform
	 */
	public function testReverseTransformFailWithNotAFile(): void
	{
		$this->expectException(TransformationFailedException::class);
		
		$transformer = new ImageTransformer($this->publicDir, $this->uploadsDirectory, $this->fileUploadService, $this->validator);

		$result = $transformer->reverseTransform('string test');
	}
}