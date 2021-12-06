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
	
	private $doctrineExtractor;
	
	public function __construct(EntityManagerInterface $entityManager)
	{
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
		
		$properties = $this->doctrineExtractor->getProperties($class);
		
		foreach ($properties as $property) {
			$type = $this->doctrineExtractor->getTypes($class, $property);
			if (current($type)->isCollection() === false) {
				$headers[$property] = ucfirst(strtolower(Regex::replace("#([A-Z])#", ' $1', $property)->result()));
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