<?php

namespace App\Service\Code;


abstract class AbstractNode
{
	
	const CODE	= 1;
	const FIELD = 2;
	const EXCEL = 3;
	
	protected $type;
	
	protected $value;
	
	public function __construct(int $type, string $value)
	{
		$this->type = $type;
		$this->value = $value;
	}
	
	public function getType(): int
	{
		return $this->type;
	}
}


?>