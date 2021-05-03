<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Serie;

class SerieChangeType extends AbstractType
{
	public function buildForm(FormBuilderInterface $builder, array $options)
	{		
		$currentSerie = $options['current_serie'];
		
		$builder->add('serie', ChoiceType::class, [
			'choices' => $options['series'],
			'choice_label' => function(Serie $serie) {
				return $serie->getCompany()->getName() . ' - ' . $serie->getName();
			},
			'mapped' => false,
		]);
	}

	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => null,
			'current_serie' => null,
			'series' => [],
		]);
	}
}

?>