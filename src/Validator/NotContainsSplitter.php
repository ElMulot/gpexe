<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;

#[\Attribute]
class NotContainsSplitter extends Constraint
{
	public string $message = 'codification.no_splitter';
}

?>