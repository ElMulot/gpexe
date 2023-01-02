<?php

namespace App\Exception;

class InvalidValueException extends \Exception
{
    public function __construct(mixed $value, string $codename)
    {
        $message = sprintf('Erreur en écrivant la valeur "%s" dans le champ "%s"', is_scalar($value)?:'?', $codename);
		parent::__construct($message);
    }
}

?>