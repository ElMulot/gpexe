<?php

namespace App\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ChoiceVariousType extends AbstractVariousType
{
	public function getParent(): string
    {
        return ChoiceType::class;
    }
}
