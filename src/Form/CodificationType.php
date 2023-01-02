<?php

namespace App\Form;

use App\Entity\Codification;
use App\Entity\Enum\CodificationTypeEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class CodificationType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('type', ChoiceType::class, [
				'choices' => CodificationTypeEnum::getChoices(),
				'expanded' => true,
				'disabled' => $builder->getData()->getId(),
			])
			->add('codename', TextType::class)
			->add('pattern', TextType::class, [
				'required' => false
			])
			->add('value', TextType::class, [
				'required' => false
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Codification::class,
		]);
	}
}
