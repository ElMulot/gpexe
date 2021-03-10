<?php

namespace App\Service\Node;


class Node
{
	
	const CODE	= 1;
	const FIELD = 2;
	const EXCEL = 3;
	
	private $type;
	
	private $value;
	
	public function __construct(int $type, string $value)
	{
		$this->type = $type;
		$this->value = $value;
	}
	
	public static function newCodeNode(string $value)
	{
		return new self(self::CODE, $value);
	}
	
	public static function newFieldNode(string $value)
	{
		return new self(self::FIELD, $value);
	}
	
	public static function newExcelNode(string $value)
	{
		return new self(self::EXCEL, $value);
	}
	
	public function getType(): int
	{
		return $this->type;
	}
	
	public function getValue($entity = null): string
	{
		switch ($this->type) {
			case self::CODE:
				return $this->value;
			case self::FIELD:
				return $entity->getPropertyValue($this->value);
			case self::EXCEL:
				return $i;
		}
	}
}


?>