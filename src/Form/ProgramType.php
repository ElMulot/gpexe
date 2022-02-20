<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Entity\Program;
use App\Form\DataTransformer\ProgramTransformer;
use App\Entity\Enum\ProgramTypeEnum;

class ProgramType extends AbstractType
{
	
	public function __construct(private readonly ProgramTransformer $transformer)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{		
		if ($builder->getData() === null) {
			$builder
				->add('type', ChoiceType::class, [
					'choices' => ProgramTypeEnum::getChoices(),
					'expanded' => true,
					'mapped' => false,
				])
			;
		} else {
			$builder
				->add('name', TextType::class, [
					'attr' => [
						'class' => 'col-5 mt-2',
					],
				])
				->add('enabled', CheckboxType::class, [
					'required' => false,
					'label_attr' => [
						'class' => 'col-form-label col-2',
					],
					'attr' => [
						'class' => 'col-1 mt-2',
					],
				])
				->add('code', TextareaType::class, [
					'required' => false,
					'attr' => [
						'class' => 'mt-4',
						'rows' => '',
						'cols' => '',
						'data-toggle' => 'code_mirror',
					],
				])
			;
		
			$builder->get('code')->addViewTransformer($this->transformer);
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Program::class,
		]);
	}
}
