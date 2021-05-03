<?php
namespace App\Twig;

use Twig\Environment;
use Twig\TwigFilter;
use Twig\Extension\AbstractExtension;
use App\Service\PropertyService;
use Symfony\Contracts\Translation\TranslatorInterface;
use Spatie\Regex\Regex;

class FiltersExtension extends AbstractExtension
{
	
	private $translator;
	
	private $propertyService;
	
	public function __construct(TranslatorInterface $translator, PropertyService $propertyService) {
		$this->translator = $translator;
		$this->propertyService = $propertyService;
	}
	
	public function getFilters()
	{
		return [
			new TwigFilter('short_name', [$this, 'getShortName']),
			new TwigFilter('truncate', [$this, 'truncateFilter'], ['needs_environment' => true]),
			new TwigFilter('to_string', [$this, 'toString']),
		];
	}

	public function getShortName($class)
	{
		$reflect = new \ReflectionClass($class);
		return (strtolower(Regex::replace("#([A-Z])#", '_$1', lcfirst($reflect->getShortName()))->result()));
	}
	
	public function truncateFilter(Environment $env, $value, $length = 30, $preserve = false, $separator = '...')
	{
		if (mb_strlen($value, $env->getCharset()) > $length) {
			if ($preserve) {
				// If breakpoint is on the last word, return the value without separator.
				if (false === ($breakpoint = mb_strpos($value, ' ', $length, $env->getCharset()))) {
					return $value;
				}
				
				$length = $breakpoint;
			}
			
			return rtrim(mb_substr($value, 0, $length, $env->getCharset())).$separator;
		}
		
		return $value;
	}
	
	public function toString($property)
	{
		return $this->propertyService->toString($property);
	}
}

?>