<?php

namespace App\Form\Type;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;

class EntityVariousType extends AbstractVariousType
{
	public function getParent(): string
	{
		return EntityType::class;
	}
}
