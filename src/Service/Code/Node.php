<?php

namespace App\Service\Code;


class Node extends AbstractNode
{
	public function getValue($entity): string
	{
		switch ($this->type) {
			case self::CODE:
				return $this->value;
			case self::FIELD:
				return $entity->getPropertyValue($this->value);
			case self::EXCEL:
				return $entity->getCell($this->value)->getValue();
		}
	}
}


?>