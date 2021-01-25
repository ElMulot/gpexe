<?php

namespace App\Service;

use App\Entity\MetadataValue;
use App\Entity\MetadataItem;
use App\Entity\User;
use Symfony\Contracts\Translation\TranslatorInterface;

class PropertyService
{
	private $translator;
	
	public function __construct(TranslatorInterface $translator) {
		$this->translator = $translator;
	}
	
	public function toString($value)
	{
		switch (gettype($value)) {
			case 'boolean':
				return $this->translator->trans(($value)?'Yes':'No');
				
			case 'object':
				if ($value instanceof \DateTime) {
					return $value->format('d-m-Y');
				} else if ($value instanceof User) {
					return $value->getName();
				} else if ($value instanceof MetadataItem || $value instanceof MetadataValue) {
					switch (gettype($value->getValue())) {
						case 'boolean':
							return $this->translator->trans(($value->getValue())?'Yes':'No');
							
						case 'object':
							return $value->getValue()->format('d-m-Y');
							
						default:
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