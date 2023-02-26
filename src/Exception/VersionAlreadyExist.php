<?php

namespace App\Exception;

class VersionAlreadyExist extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('The revision "%s" already exist.', is_scalar($value)?:'?');
		parent::__construct($message);
    }
}

?>