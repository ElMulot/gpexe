<?php

namespace App\Service\Code;


use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use App\Entity\MetadataElement;
use App\Entity\User;
use App\Service\PropertyService;

class Node extends AbstractNode
{
	public function getValue($entity, $row): string
	{
		switch ($this->type) {
			case self::CODE:
				
				return $this->value;
				
			case self::FIELD:
				
				$value = $entity->getPropertyValue($this->value);
				if ($value instanceof \DateTimeInterface) {
					return '\'' . $value->format('d-m-Y') . '\'';
				} else {
					return '\'' . addslashes($value) . '\'';
				}
				
			case self::EXCEL:
				
				$cell = $row->getCell($this->value);
				if ($date = $cell->getDateTime()) {
					return '(new Date(\'' . $date->format('d-m-Y') . '\'))';
				} else {
					return '\'' . addslashes($cell->getValue()) . '\'';
				}
		}
	}
}


?>