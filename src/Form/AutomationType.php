<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use App\Entity\Automation;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class AutomationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        	->add('enabled')
        	->add('nextRun', DateType::class, [
        		'widget' => 'single_text',
        		'format' => 'dd-MM-yyyy',
        		'html5' => false,
    		]
        );
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
        	'data_class' => Automation::class,
        ]);
    }
}
