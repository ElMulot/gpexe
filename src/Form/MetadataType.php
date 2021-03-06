<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use App\Entity\Metadata;

class MetadataType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		
		$builder
			->add('name')
			->add('codename')
			->add('type', ChoiceType::class, [
				'choices' => [
					'Checkbox' => Metadata::BOOLEAN,
					'Text' => Metadata::TEXT,
					'Date' => Metadata::DATE,
					'Link' => Metadata::LINK,
					'List' => Metadata::LIST,
				],
				'expanded' => true,
				'disabled' => ($builder->getData()->getId() != null),
			])
			->add('isMandatory', CheckboxType::class, [
				'required' => false,
				'disabled' => $builder->getData()->getId() && ($builder->getData()->getIsMandatory() === false || $builder->getData()->isBoolean() === true),
			])
			->add('parent', ChoiceType::class, [
				'choices' => [
					'Serie' => Metadata::SERIE,
					'Document' => Metadata::DOCUMENT,
					'Version' => Metadata::VERSION,
				],
				'expanded' => true,
				'disabled' => ($builder->getData()->getId() != null),
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
