<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use App\Entity\Automation;

class AutomationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
    	$builder
    	->add('name', TextType::class, [
    		'attr' => [
    			'class' => 'col-sm-5',
    		],
    	])
    	->add('enabled', CheckboxType::class, [
    		'label_attr' => [
    			'class' => 'col-sm-2',
    		],
    		'attr' => [
    			'class' => 'col-sm-1 mt-2',
    		],
    	])
    	->add('code', TextareaType::class, [
    		'attr' => [
    			'class' => 'mt-4',
    			'rows' => '',
    			'cols' => '',
    			'data-toggle' => 'code_mirror',
    		],
    	])
    	;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Automation::class,
        ]);
    }
}
