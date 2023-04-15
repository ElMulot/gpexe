<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

#[\Attribute]
class IsValid extends Constraint
{
	public string $forbiddenSymbolMessage = 'value.forbidden_symbol';

	public string $regexMessage = 'value.regex';
}

?>