<?php

namespace App\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\TextareaType;

class TextareaVariousType extends AbstractVariousType
{
    public function getParent(): string
    {
        return TextareaType::class;
    }
}
