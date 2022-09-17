<?php

namespace App\Exception;

class InvalidCodenameException extends \Exception
{
    public function __construct(string $codename)
    {
        $message = sprintf('Le champ "%s" n\'existe pas', $codename);
		parent::__construct($message);
    }
}

?>