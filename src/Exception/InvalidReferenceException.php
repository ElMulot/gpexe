<?php

namespace App\Exception;

class InvalidReferenceException extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('The reference "%s" is not valid.', is_scalar($value)?:'?');
		parent::__construct($message);
    }
}

?>