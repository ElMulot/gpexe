<?php

namespace App\Form;

use App\Entity\Status;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;

class StatusType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('value')
            ->add('type', ChoiceType::class, [
            	'choices' => [
            		'Information' => Status::INFORMATION,
            		'Review' => Status::REVIEW,
            		'Cancel' => Status::CANCEL,
            		'As built' => Status::AS_BUILT,
            	],
            	'expanded' => true,
            	'disabled' => ($builder->getData()->getId() != null),
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