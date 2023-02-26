<?php

namespace App\Service;

use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Entity\MetadataItem;
use App\Entity\User;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Helpers\Date;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class PropertyService
{
	public function __construct(private readonly TranslatorInterface $translator,
								private readonly DateService $dateService)
	{
	}
	
	public function toString(mixed $value, ?string $pattern = null, ?string $locale = null, ?string $timezone = null)
	{
		switch (gettype($value)) {
			case 'boolean':
				return $this->translator->trans(($value)?'Yes':'No');
				
			case 'object':
				if ($value instanceof \DateTimeInterface) {
					return $this->dateService->format($value, $pattern, $locale, $timezone);
				} else if ($value instanceof MetadataValue) {
					return $this->toString($value->getTypedValue());
				} else {
					return (string)$value;
				}
				
			default:
				return (string)$value;
		}
		
	}
}

?>