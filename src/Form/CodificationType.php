<?php

namespace App\Form;

use App\Entity\Codification;
use App\Entity\Enum\CodificationTypeEnum;
use App\Form\Type\ComboBoxType;
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
		/**@var Codification */
		$codification = $builder->getData();
		
		$builder
			->add('name')
			->add('codename', TextType::class);
		
		if ($codification->isRegex() === true) {
			$builder->add('pattern', TextType::class, [
				'required' => false,
			]);
		}
		switch ($codification->getType()) {
			case CodificationTypeEnum::FIXED:
				$builder->add('defaultRawValue', TextType::class, [
					'required'	=> true,
					'label' => 'Value',
				]);
				break;
			case CodificationTypeEnum::TEXT:
			case CodificationTypeEnum::REGEX:
				$builder->add('defaultRawValue', TextType::class, [
					'required'	=> false,
				]);
				break;
			case CodificationTypeEnum::LIST:
				$builder->add('defaultRawValue', ComboBoxType::class, [
					'required'	=> false,
					'choices'	=> $codification->getCodificationChoices()->getValues(),
					'choice_label'	=> 'value',
				]);
				break;
		}	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Codification::class,
		]);
	}
}
