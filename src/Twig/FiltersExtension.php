<?php
namespace App\Twig;

use Twig\Environment;
use Twig\TwigFilter;
use Twig\Extension\AbstractExtension;
use App\Service\PropertyService;
use Doctrine\ORM\EntityManagerInterface;
use Spatie\Regex\Regex;

class FiltersExtension extends AbstractExtension
{
	
	public function __construct(private readonly EntityManagerInterface $entityManager, private readonly PropertyService $propertyService)
	{
	}
	
	public function getFilters(): array
	{
		return [
			new TwigFilter('short_name', [$this, 'getShortName']),
			new TwigFilter('truncate', [$this, 'truncateFilter'], ['needs_environment' => true]),
			new TwigFilter('to_string', [$this, 'toString']),
			new TwigFilter('title', [$this, 'getTitle']),
			new TwigFilter('type', [$this, 'getType']),
			new TwigFilter('turbo_stream_header_to_array', [$this, 'turboStreamHeaderToArray']),
			new TwigFilter('turbo_stream_header_to_string', [$this, 'turboStreamHeaderToString']),			
		];
	}

	public function getShortName(string|object $class): string
	{
		$reflect = new \ReflectionClass($class);
		return (strtolower(Regex::replace("#([A-Z])#", '_$1', lcfirst($reflect->getShortName()))->result()));
	}
	
	public function truncateFilter(Environment $env, string $value, int $length = 30, bool $preserve = false, string $separator = '...'): string
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
	
	public function toString(string $property): string
	{
		return $this->propertyService->toString($property);
	}

	public function getTitle(string $header): string
	{
		return ucfirst(strtolower(Regex::replace('/([A-Z])/', ' $1', $header)->result()));
	}

	public function getType(string $header, string $class): string
	{
		if ($this->entityManager->getClassMetadata($class)->hasAssociation($header) === true) {
			return 'string';
		} else {
			return $this->entityManager->getClassMetadata($class)->getTypeOfField($header);
		}
	}

    public function turboStreamHeaderToArray(?string $json): array
	{
		if ($json == false) {
			return [];
		} else {
			return json_decode($json) ?? [$json];
		}
    }

    public function turboStreamHeaderToString(?array $var): string
	{
		if ($var == false) {
			return '';
		} elseif (count($var) === 1) {
			return reset($var);
		} else {
			return json_encode($var);
		}
    }
}

?>