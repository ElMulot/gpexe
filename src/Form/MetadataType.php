<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use App\Entity\Metadata;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\MetadataParentEnum;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class MetadataType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		$builder
			->add('name', TextType::class)
			->add('codename', TextType::class)
			->add('type', ChoiceType::class, [
				'choices' => MetadataTypeEnum::getChoices(),
				'expanded' => true,
				'disabled' => $builder->getData()->getId(),
			])
			->add('isMandatory', CheckboxType::class, [
				'required' => false,
				'disabled' => $builder->getData()->getId() && ($builder->getData()->getIsMandatory() === false || $builder->getData()->isBoolean() === true),
			])
			->add('pattern', TextType::class, [
				'required' => false,
				'disabled' => $builder->getData()->getId() && ($builder->getData()->getIsMandatory() === false || $builder->getData()->isBoolean() === true),
			])
			->add('default', TextType::class, [
				'required' => false,
				'disabled' => $builder->getData()->getId() && ($builder->getData()->getIsMandatory() === false || $builder->getData()->isBoolean() === true),
			])
			->add('parent', ChoiceType::class, [
				'choices' => MetadataParentEnum::getChoices(),
				'expanded' => true,
				'disabled' => $builder->getData()->getId(),
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Metadata::class,
		]);
	}
}
