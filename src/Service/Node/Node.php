<?php

namespace App\Service\Node;


class Node
{
	
	const CODE	= 1;
	const FIELD = 2;
	const EXCEL = 3;
	
	private $type;
	
	private $value;
	
	private $isRegex;
	
	public function __construct(int $type, string $value, bool $isRegex = false)
	{
		$this->type = $type;
		$this->isRegex = $isRegex;
		$this->value = ($isRegex)?preg_quote($value):$value;
	}
	
	public static function newCodeNode(string $value, bool $inRegex)
	{
		return new self(self::CODE, $value, $inRegex);
	}
	
	public static function newFieldNode(string $value, bool $inRegex)
	{
		return new self(self::FIELD, $value, $inRegex);
	}
	
	public static function newExcelNode(string $value, bool $inRegex)
	{
		return new self(self::EXCEL, $value, $inRegex);
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