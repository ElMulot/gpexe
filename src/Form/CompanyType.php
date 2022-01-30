<?php

namespace App\Form;

use App\Entity\Company;
use App\Entity\Enum\CompanyEnum;
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
				'choices' => [
					'Main contractor' => Company::MAIN_CONTRACTOR, 
					'Sub-contractor' => Company::SUB_CONTRACTOR,
					'Supplier' => Company::SUPPLIER,
					'Checker' => Company::CHECKER,
				],
				'expanded' => true,
			])
			->add('priority', NumberType::class, [
				'required' => false,
				'empty_data' => '0',
			])
			->add('status', ChoiceType::class, [
				'choices' => CompanyEnum::getTypesMap()
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
