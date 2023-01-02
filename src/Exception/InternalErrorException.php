<?php

namespace App\Exception;

class InternalErrorException extends \Exception
{
    public function __construct()
    {
        $message = 'Erreur interne';
		parent::__construct($message);
    }
}

?>