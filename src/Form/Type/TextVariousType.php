<?php

namespace App\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextType;

class TextVariousType extends AbstractVariousType
{
	public function getParent(): string
	{
		return TextType::class;
	}
}
