<?php

namespace App\Exception;

class CodificationNotDefinedException extends \Exception
{
    public function __construct()
    {
        $message = sprintf('Erreur: la codification des documents du projet n\'est pas définie');
		parent::__construct($message);
    }
}

?>