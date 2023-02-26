<?php

namespace App\Exception;

class CodificationNotDefinedException extends \Exception
{
    public function __construct()
    {
        $message = sprintf('The codification of project documents is not yet defined.');
		parent::__construct($message);
    }
}

?>