<?php

namespace App\Exception;

class InvalidReferenceException extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('La référence "%s" n\'est pas valide.', is_scalar($value)?:'?');
		parent::__construct($message);
    }
}

?>