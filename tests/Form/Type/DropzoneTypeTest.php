<?php

namespace App\Tests\Form\Type;

use App\Form\Type\DropzoneType;
use Symfony\Bundle\FrameworkBundle\Test\KernelTestCase;

class DropzoneTypeTest extends KernelTestCase
{
	
	/**
	* @dataProvider iconPathProvider
	*/
	public function testIconPath($mimeType, $iconPath)
    {
        self::bootKernel();

		$container = static::getContainer();
		$dropzoneType = $container->get(DropzoneType::class);
		$result = $dropzoneType->getIconPath($mimeType);

		$this->assertSame($iconPath, $result);

    }


	public function iconPathProvider()
	{
		return [
			'Image mime type' => ['image/jpeg', 'icons/file-earmark-image.svg'],
			'Pdf mime type' => ['application/pdf', 'icons/file-earmark-pdf.svg'],
			'Invalid mime type' => ['application', 'icons/file-earmark.svg'],
			'Unexpected mime type' => ['text/html', 'icons/file-earmark.svg'],
		];
	}
}

?>