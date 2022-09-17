<?php

namespace App\Exception;

class MandatoryValueException extends \Exception
{
    public function __construct(string $codename)
    {
        $message = sprintf('Erreur: la valeur "%s" ne peut être vide', $codename);
		parent::__construct($message);
    }
}

?>