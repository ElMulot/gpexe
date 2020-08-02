<?php

namespace App\Form;

use App\Entity\Visa;
use App\Entity\Company;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;

class VisaType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$builder
            ->add('name')
            ->add('revisionRequired')
            ->add('company', EntityType::class, [
            	'class'		=> Company::class,
            	'choices' =>  $options['choices']
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class'	=> Visa::class,
        	'choices'		=> [],
        ]);
    }
}
