<?php

namespace App\Form;

use App\Entity\View;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Form\DataTransformer\ViewTransformer;

class ViewType extends AbstractType
{
 	
	private $security;
	
	private $transformer;
	
	public function __construct(Security $security, ViewTransformer $transformer)
	{
		$this->security = $security;
		$this->transformer = $transformer;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('isShared')
			->add('isDefault')
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
