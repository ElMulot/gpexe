<?php

namespace App\Twig;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyInfo\PropertyInfoExtractor;
use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;
use Symfony\Bridge\Doctrine\PropertyInfo\DoctrineExtractor;
use Spatie\Regex\Regex;

class HeadersFunctionsExtension extends AbstractExtension
{

	private $entityManager;
	private $doctrineExtractor;
	
	public function __construct(EntityManagerInterface $entityManager)
	{
		$this->entityManager = $entityManager;
		$this->doctrineExtractor = new DoctrineExtractor($entityManager);
	}
	
	public function getFunctions()
	{
		return [
			new TwigFunction('headers', [$this, 'getHeaders']),
		];
	}
	
	public function getHeaders($class)
	{
		$headers = [];
		
		// $metadata = $this->entityManager->getClassMetadata($class);
		// dump($metadata);
		dd(PHP_VERSION_ID);

		$properties = $this->doctrineExtractor->getProperties($class);
		foreach ($properties as $property) {
			$type = $this->doctrineExtractor->getTypes($class, $property);
			if ($type === null) { //enum type
				$metadata = $this->entityManager->getClassMetadata($class);
				if (Regex::match('/_enum$/', $metadata->getTypeOfField($property))->hasMatch() === true) {
					$headers[$property] = ucfirst(strtolower(Regex::replace('/([A-Z])/', ' $1', $property)->result()));
				}
			} elseif (current($type)->isCollection() === false) {
				$headers[$property] = ucfirst(strtolower(Regex::replace('/([A-Z])/', ' $1', $property)->result()));
			}
		}
		return $headers;
	}
	
	private function getProperties($class)
	{
		$propertiesName = [];
		
		$properties = $this->doctrineExtractor->getProperties($class);
		
		foreach ($properties as $property) {
			$type = $this->doctrineExtractor->getTypes($class, $property);
			if ($type[0]->isCollection() === false) {
				$propertiesName[] = $property;
			}
		}
		
		return $propertiesName;
	}
}

?>