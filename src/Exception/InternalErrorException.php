<?php

namespace App\Exception;

class InternalErrorException extends \Error
{
    public function __construct(string $message = 'Internal error.')
    {
		parent::__construct($message);
    }
}

?>