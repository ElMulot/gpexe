<?php

namespace App\Exception;

class AlreadyExistException extends \Exception
{
    public function __construct(mixed $value)
    {
        $message = sprintf('Erreur: la valeur "%s" est déjà utilisée', is_scalar($value)?:'');
		parent::__construct($message);
    }
}

?>