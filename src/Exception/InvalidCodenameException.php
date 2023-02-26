<?php

namespace App\Exception;

class InvalidCodenameException extends \Exception
{
    public function __construct(string $codename)
    {
        $message = sprintf('The field "%s" doesn\'t exist.', $codename);
		parent::__construct($message);
    }
}

?>