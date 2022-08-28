<?php

namespace App\Service;

use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Metadata;
use App\Entity\MetadataValue;
use App\Entity\MetadataItem;
use App\Entity\User;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Helpers\Date;

class PropertyService
{
	public function __construct(private readonly TranslatorInterface $translator)
	{
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
					return match($value->getMetadata()->getType()) {
						MetadataTypeEnum::BOOL		=> $this->translator->trans(($value->getValue())?'Yes':'No'),
						MetadataTypeEnum::TEXT		=> $value->getValue(),
						MetadataTypeEnum::DATE		=> Date::fromFormat($value->getValue())->format($dateFormat),
						MetadataTypeEnum::LINK		=> $value->getValue(),
					};
					
				} else {
					return (string)$value;
				}
				
			default:
				return (string)$value;
		}
		
	}
}

?>