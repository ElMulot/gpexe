<?php

namespace App\Form\Type;

use App\Form\DataTransformer\BooleanToStringTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\OptionsResolver;

class BooleanType extends AbstractType
{	
	public function configureOptions(OptionsResolver $resolver): void
	{
		// dump('BooleanType->configureOptions');
        $emptyData = function (FormInterface $form, $viewData) {
            return $viewData;
        };
		
		$resolver->setDefaults([
			'choices' => [
				'Yes'	=> true,
				'No'	=> false,
			],
			'compound'		=> false,
			'empty_data'	=> $emptyData,
			'false_values'	=> [null],
        ]);

		// $resolver->setAllowedTypes('data', ['null', 'boolean', 'string']);
		// $resolver->setAllowedTypes('empty_data', ['null', 'boolean', 'string']);
		$resolver->setAllowedTypes('false_values', 'array');
	}
	
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
		// dump('BooleanType->buildForm');
		$builder->setData($options['data'] ?? false);
		$builder->resetViewTransformers();

		$viewTransformer = new BooleanToStringTransformer($options['false_values']);
		$builder->addViewTransformer($viewTransformer);

		// $options['required'] = true;
		// parent::buildForm($builder, $options);
    }

	public function buildView(FormView $view, FormInterface $form, array $options)
	{
		$view->vars['placeholder'] = null;
	}

	public function getParent(): string
    {
        return ChoiceType::class;
    }
}