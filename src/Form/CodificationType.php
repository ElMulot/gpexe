<?php

namespace App\Form;

use App\Entity\Codification;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class CodificationType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('type', ChoiceType::class, [
            	'choices' => [
            		'Fix' => Codification::FIXED,
            		'List' => Codification::LIST,
            		'Text' => Codification::REGEX,
            	],
            	'expanded' => true,
            	'disabled' => ($builder->getData()->getId() != null),
            ])
            ->add('value', TextType::class, [
            	'required' => false
            ])
            ->add('isMandatory')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Codification::class,
        ]);
    }
}
