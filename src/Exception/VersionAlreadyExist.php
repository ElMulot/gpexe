<?php

namespace App\Exception;

class VersionAlreadyExist extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('La révision "%s" existe déjà.', is_scalar($value)?:'?');
		parent::__construct($message);
    }
}

?>