<?php

namespace App\Service\Code;


abstract class AbstractNode
{
	
	final const CODE	= 1;
	final const FIELD = 2;
	final const EXCEL = 3;
	
	public function __construct(protected int $type, protected string $value)
	{
	}
	
	public function getType(): int
	{
		return $this->type;
	}
}


?>