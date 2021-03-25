<?php

namespace App\Service\Code;


class Variable extends AbstractNode
{
	public function getValue(): string
	{
		return $this->value;
	}
}


?>