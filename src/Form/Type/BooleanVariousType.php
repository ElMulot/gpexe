<?php

namespace App\Form\Type;

use Symfony\Component\OptionsResolver\OptionsResolver;

class BooleanVariousType extends AbstractVariousType
{
    public function getParent(): string
    {
        return BooleanType::class;
    }
}
