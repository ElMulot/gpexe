<?php

namespace App\Twig;

use Twig\TwigFunction;
use Symfony\Component\Uid\Uuid;
use Twig\Extension\AbstractExtension;

class UuidFunctionExtension extends AbstractExtension
{
	
	public function getFunctions()
	{
		return [
			new TwigFunction('uuid', [$this, 'getUuid']),
		];
	}
	
	public function getUuid()
	{
		return Uuid::v1();
	}
}

?>