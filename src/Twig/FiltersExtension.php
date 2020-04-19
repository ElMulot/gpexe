<?php
namespace App\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFilter;
use Twig\Environment;

class FiltersExtension extends AbstractExtension
{

	public function getFilters()
	{
		return [
			new TwigFilter('short_name', [$this, 'getShortName']),
			new TwigFilter('truncate', [$this, 'truncateFilter'], ['needs_environment' => true]),
		];
	}

	public function getShortName($class)
	{
		$reflect = new \ReflectionClass($class);
		return (strtolower(preg_replace("#([A-Z])#", '_$1', lcfirst($reflect->getShortName()))));
    }
    
    function truncateFilter(Environment $env, $value, $length = 30, $preserve = false, $separator = '...')
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
}

?>