<?php

namespace App\Form;

use App\Entity\Company;
use App\Entity\Enum\CompanyTypeEnum;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;

class CompanyType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('codename')
			->add('type', ChoiceType::class, [
				'choices' => CompanyTypeEnum::getChoices(),
				'expanded' => true,
			])
			->add('priority', NumberType::class, [
				'required' => false,
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Company::class,
		]);
	}
}
