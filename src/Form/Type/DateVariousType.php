<?php

namespace App\Form\Type;

use Symfony\Component\Form\Extension\Core\Type\DateType;

class DateVariousType extends AbstractVariousType
{
    public function getParent(): string
    {
        return DateType::class;
    }
}
