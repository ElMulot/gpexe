<?php

namespace App\Service;

use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Entity\MetadataItem;
use App\Entity\User;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Helpers\Date;

class PropertyService
{
	private $translator;
	
	public function __construct(TranslatorInterface $translator) {
		$this->translator = $translator;
	}
	
	public function toString($value, $dateFormat = 'd-m-Y')
	{
		switch (gettype($value)) {
			case 'boolean':
				return $this->translator->trans(($value)?'Yes':'No');
				
			case 'object':
				if ($value instanceof \DateTimeInterface) {
					return $value->format($dateFormat);
				} else if ($value instanceof User) {
					return $value->getName();
				} else if ($value instanceof MetadataItem) {
					return $value->getValue();
				} else if ($value instanceof MetadataValue) {
					
					switch ($value->getMetadata()->getType()) {
						case Metadata::BOOLEAN:
							
							return $this->translator->trans(($value->getValue())?'Yes':'No');
						case Metadata::TEXT:
							return $value->getValue();
						case Metadata::DATE:
							return Date::fromFormat($value->getValue())->format($dateFormat);
						case Metadata::LINK:
							return $value->getValue();
					}
					
				} else {
					return (string)$value;
				}
				
			default:
				return (string)$value;
		}
		
	}
}

?>