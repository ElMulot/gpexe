<?php

namespace App\Form\Extension;

use App\Form\Type\AbstractVariousType;
use App\Form\Type\BooleanType;
use App\Form\Type\DropzoneType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\OptionsResolver\OptionsResolver;


/**
 * Add an option, small, for small custom form controls.
 */

class SmallOptionTypeExtension extends AbstractTypeExtension
{
    public static function getExtendedTypes(): iterable
    {
        return [
			BooleanType::class,
			TextType::class,
			DateType::class,
			TextareaType::class,
			ChoiceType::class,
			EntityType::class,
			DropzoneType::class,
			AbstractVariousType::class,
		];
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
		$resolver->setDefaults([
			'small' => false,
		]);
		$resolver->setAllowedTypes('small', 'bool');
    }

    public function buildView(FormView $view, FormInterface $form, array $options): void
	{
		if ($options['small'] === true) {
			$view->vars['row_attr']['class'] = 'mb-2';
			$view->vars['label_attr']['class'] = 'col-form-label-sm';
			$view->vars['attr']['class'] = 'form-select-sm';
			if ($form->has('switch') === true) {
				$view->vars['group_class'] = 'input-group input-group-sm';
			}
		} else {
			// $view->vars['row_attr']['class'] = 'mb-3';
			// $view->vars['label_attr']['class'] = 'col-3';
			// $view->vars['attr']['class'] = 'col-8';
			if ($form->has('switch') === true) {
				$view->vars['group_class'] = 'input-group';
			}
		}
	}
}