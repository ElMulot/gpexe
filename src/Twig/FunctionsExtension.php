<?php

namespace App\Twig;

use Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Symfony\Component\PropertyInfo\PropertyInfoExtractor;
use Symfony\Component\PropertyAccess\PropertyAccess;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class FunctionsExtension extends AbstractExtension
{
    private $propertyInfo;
    
    private $propertyAccessor;
    
    public function __construct()
    {
        $phpDocExtractor = new PhpDocExtractor();
        $reflectionExtractor = new ReflectionExtractor();
        
        $listExtractors = [$reflectionExtractor];
        $typeExtractors = [$phpDocExtractor, $reflectionExtractor];
        $descriptionExtractors = [$phpDocExtractor];
        $accessExtractors = [$reflectionExtractor];
        $propertyInitializableExtractors = [$reflectionExtractor];
        $this->propertyInfo = new PropertyInfoExtractor($listExtractors, $typeExtractors, $descriptionExtractors, $accessExtractors, $propertyInitializableExtractors);
        
        $this->propertyAccessor = PropertyAccess::createPropertyAccessor();
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
        
        $properties = $this->getProperties($class);
        
        foreach ($properties as $property) {
        	$headers[$property] = ucfirst(strtolower(preg_replace("#([A-Z])#", ' $1', $property)));
        }
        return $headers;
	}

	private function getProperties($class)
	{
		$propertiesName = [];

		$properties = $this->propertyInfo->getProperties($class);

		foreach ($properties as $key => $property) {
			if (($this->propertyInfo->isReadable($class, $property) && $this->propertyInfo->isWritable($class, $property)) || $property == 'id') {
				$type = $this->propertyInfo->getTypes($class, $property);
				if (!$type[0]->isCollection()) $propertiesName[] = $property;
            }
        }
        
        return $propertiesName;
    }
}

?>