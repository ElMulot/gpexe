<?php

namespace App\Form;

use App\Entity\Metadata;
use App\Form\Type\BooleanType;
use App\Form\Type\ComboBoxType;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\MetadataParentEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class MetadataType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/**@var Metadata $metadata */
		$metadata = $builder->getData();

		$builder
			->add('name', TextType::class)
			->add('codename', TextType::class);
		
		if ($metadata->isBoolean() === false) {
			$builder->add('mandatory', BooleanType::class, [
				'required' => false,
				'disabled' => (bool)$metadata->getId() && $metadata->isMandatory() === false,
			]);
		}
		
		if ($metadata->isRegex() === true) {
			$builder->add('pattern', TextType::class, [
				'required' => false,
			]);
		}

		switch ($metadata->getType()) {
			case MetadataTypeEnum::BOOL:
				$builder->add('defaultValue', BooleanType::class);
				break;
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::LINK:
				$builder->add('defaultValue', TextType::class, [
					'required'	=> false,
				]);
				break;
			case MetadataTypeEnum::DATE:
				$builder->add('defaultValue', DateType::class, [
					'required'	=> false,
					'getter'	=> function(Metadata $metadata, FormInterface $form): mixed
					{
						return new \DateTime($metadata->getDefaultValue());
					},
					'setter'	=> function(Metadata $metadata, $modelData, FormInterface $form): void
					{
						$metadata->setDefaultValue($modelData->format('d-m-Y'));
					},
				]);
				break;
			case MetadataTypeEnum::LIST:
				dump($metadata->getMetadataItems()->getValues());
				$builder->add('defaultValue', ComboBoxType::class, [
					'required'	=> false,
					'choices'	=> $metadata->getMetadataItems()->getValues(),
					'choice_label'	=> 'value',
				]);
				break;
		}
			
		$builder
			->add('parent', ChoiceType::class, [
				'choices' => MetadataParentEnum::getChoices(),
				'expanded' => true,
				'disabled' => (bool)$metadata->getId(),
			]);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Metadata::class,
		]);
	}
}
