<?php

namespace App\Form\Extension;

use App\Form\Type\VariousEntityType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractTypeExtension;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;


/**
 * Add an option, small, for small custom form controls.
 */

class SmallOptionTypeExtension extends AbstractTypeExtension
{
    public static function getExtendedTypes(): iterable
    {
        return [EntityType::class, VariousEntityType::class];
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
			$view->vars['row_attr']['class'] = 'row mb-2';
			$view->vars['label_attr']['class'] = 'col-form-label col-form-label-sm';
			$view->vars['attr']['class'] = 'form-select-sm';
			if ($form->has('switch') === true) {
				$view->vars['group_attr']['class'] = 'input-group input-group-sm';
			}
		} else {
			
			$view->vars['row_attr']['class'] = 'row mb-3';
			$view->vars['label_attr']['class'] = 'col-form-label';
			if ($form->has('switch') === true) {
				$view->vars['group_attr']['class'] = 'input-group';
			}
		}
	}
}