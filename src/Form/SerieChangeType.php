<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use App\Entity\Serie;

class SerieChangeType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$options['series']->removeElement($options['current_serie']);
		
    	$builder->add('serie', EntityType::class, [
        	'class' => Serie::class,
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
            'data_class' => Serie::class,
        	'current_serie' => null,
        	'series' => [],
        ]);
    }
}

?>