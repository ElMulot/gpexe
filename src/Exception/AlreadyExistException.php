<?php

namespace App\Exception;

class AlreadyExistException extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('The value "%s" is already used.', is_scalar($value)?:'');
		parent::__construct($message);
    }
}

?>