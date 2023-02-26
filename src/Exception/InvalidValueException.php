<?php

namespace App\Exception;

class InvalidValueException extends \Exception
{
    public function __construct(mixed $value, string $codename)
    {
        $message = sprintf('Error while writting "%s" in the field "%s"', is_scalar($value)?:'?', $codename);
		parent::__construct($message);
    }
}

?>