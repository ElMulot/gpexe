<?php

namespace App\Form;

use App\Entity\View;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Form\DataTransformer\ViewTransformer;

class ViewType extends AbstractType
{
 	
	public function __construct(private readonly Security $security, private readonly ViewTransformer $transformer)
	{
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('isShared')
			->add('default')
		;
		
		if ($this->security->isGranted('ROLE_ADMIN')) {
			$builder->add('value', TextareaType::class, [
				'attr' => ['rows' => 10],
			]);
			$builder->get('value')->addViewTransformer($this->transformer);
		}
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => View::class,
		]);
	}
}
