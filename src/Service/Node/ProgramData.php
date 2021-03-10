<?php

namespace App\Service\Node;


class ProgramData
{
	private $type;
	
	private $dateFormatInput;
		
	private $dateFormatOutput;
	
	public function __construct(int $type)
	{
		$this->type = $type;
	}
	
	public function getType(): int
	{
		return $this->type;
	}
}


?>