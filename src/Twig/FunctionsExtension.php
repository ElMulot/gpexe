<?php

namespace App\Twig;

use Twig\TwigFunction;
use Spatie\Regex\Regex;
use Twig\Extension\AbstractExtension;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Uid\Uuid;
use Symfony\Component\Uid\UuidV1;

class FunctionsExtension extends AbstractExtension
{

	public function __construct(private readonly EntityManagerInterface $entityManager)
	{
	}
	
	public function getFunctions()
	{
		return [
			new TwigFunction('headers', [$this, 'getHeaders']),
			new TwigFunction('uuid', [$this, 'getUuid']),
		];
	}
	
	public function getHeaders(string $class): array
	{
		$headers = [];

		foreach ($this->entityManager->getClassMetadata($class)->getFieldNames() as $fieldName) {
			$headers[] = $fieldName;
		}
		return $headers;
	}

	public function getUuid(): UuidV1
	{
		return Uuid::v1();
	}
}

?>