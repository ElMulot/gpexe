<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\Response;

class AjaxRedirectService {

	public function __construct()
	{
		
	}
	
	public function get(string $path, string $target): Response
	{
		return new Response('<a class="active" data-url="' . $path . '" data-toggle="ajax" data-target="' . $target . '"></a>');
	}		
}

?>