<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

#[\Attribute]
class IsMandatory extends Constraint
{
	public string $message = 'value.mandatory';
}

?>