<?php

namespace App\Exception;

class MandatoryValueException extends \Exception
{
    public function __construct(string $codename)
    {
        $message = sprintf('The value "%s" cannot be empty.', $codename);
		parent::__construct($message);
    }
}

?>