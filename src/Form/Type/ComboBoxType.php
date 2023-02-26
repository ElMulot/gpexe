<?php

namespace App\Form\Type;

use Symfony\Component\Form\FormView;
use App\Form\DataMapper\ComboBoxMapper;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\ChoiceList\View\ChoiceView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class ComboBoxType extends AbstractType
{	
	public function __construct(private readonly ComboBoxMapper $dataMappper)
	{
	}
	
	public function configureOptions(OptionsResolver $resolver): void
	{
		$resolver->setDefaults([
			'custom_option_label'	=> '[type a custom value]',
        ]);

		$resolver->setAllowedTypes('custom_option_label', 'string');
	}
	
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
		$builder->resetViewTransformers();
		// $builder->resetModelTransformers();
		
		$builder->setCompound(true);

		unset($options['custom_option_label']);
		$builder->add('choice', ChoiceType::class, $options);

		// if ($builder->getData() === null && $options['required'] === true) {
		// 	$builder->get('choice')->setData(reset($options['choices']));
		// }

		$builder->add('input', TextType::class, [
			'compound'	=> false,
			'required'	=> false,
		]);

		$builder->setDataMapper($this->dataMappper);
    }

	public function buildView(FormView $view, FormInterface $form, array $options)
	{
		$view->vars['customOptionLabel'] = $options['custom_option_label'];
	}


	public function getParent(): string
    {
        return ChoiceType::class;
    }


	public function getBlockPrefix(): ?string
	{
		return 'combobox';
	}

}