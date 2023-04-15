<?php

namespace App\Form;

use App\Entity\Metadata;
use App\Form\Type\BooleanType;
use App\Form\Type\ComboBoxType;
use App\Entity\Enum\MetadataTypeEnum;
use App\Entity\Enum\MetadataParentEnum;
use App\Service\DateService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class MetadataType extends AbstractType
{
	public function __construct(private readonly DateService $dateService)
	{
		
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/**@var Metadata */
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
				$builder->add('defaultRawValue', BooleanType::class, [
					'label' => 'Default value',
				]);
				break;
			case MetadataTypeEnum::TEXT:
			case MetadataTypeEnum::REGEX:
			case MetadataTypeEnum::LINK:
				$builder->add('defaultRawValue', TextType::class, [
					'required'	=> false,
					'label' => 'Default value',
				]);
				break;
			case MetadataTypeEnum::DATE:
				$builder->add('defaultRawValue', DateType::class, [
					'required'	=> false,
					'label' => 'Default value',
					'getter'	=> function(Metadata $metadata, FormInterface $form): mixed
					{
						return new \DateTime($metadata->getDefaultValue());
					},
					'setter'	=> function(Metadata $metadata, $modelData, FormInterface $form): void
					{
						$metadata->setDefaultRawValue($this->dateService->formatAsInternal($modelData));
					},
				]);
				break;
			case MetadataTypeEnum::LIST:
				$builder->add('defaultRawValue', ComboBoxType::class, [
					'required'	=> false,
					'label' => 'Default value',
					'choices'	=> $metadata->getMetadataChoices()->getValues(),
					'choice_label'	=> 'value',
				]);
				break;
		}
			
		$builder
			->add('parent', ChoiceType::class, [
				'choices' => MetadataParentEnum::cases(),
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
