<?php

namespace App\Form;

use App\Entity\Enum\StatusTypeEnum;
use App\Entity\Status;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;

class StatusType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('name')
			->add('value')
			->add('type', ChoiceType::class, [
				'choices' => StatusTypeEnum::getChoices(),
				'expanded' => true,
				'disabled' => ($builder->getData()->getId() != null),
			])
			->add('default', CheckboxType::class, [
				'required' => false
			])
		;
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => Status::class,
		]);
	}
}