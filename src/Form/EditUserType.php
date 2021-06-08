<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\DateType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\NumberType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;


class EditUserType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
    		->add('email', EmailType::class)
    		->add('new_password', PasswordType::class, [
    			'required' => false,
    			'mapped' => false,
    		])
    		->add('name')
    		->add('locale', ChoiceType::class, [
    			'choices' => [
    				'Français' => 'fr_FR',
    				'English' => 'en_GB',
    			],
    		])
    		->add('activated', CheckboxType::class, [
    			'required' => false,
    		])
    		->add('profil')
    		->add('company')
    		->add('projects', EntityType::class, [
    		    'class' => Project::class,
    		    'choice_label' => 'name',
    		    'multiple' => true,
    		    'expanded' => true,
    		])
		;
	}
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class' => User::class,
		]);
	}
}
?>