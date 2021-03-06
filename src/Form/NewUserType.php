<?php

namespace App\Form;

use App\Entity\Project;
use App\Entity\User;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;


class NewUserType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('email', EmailType::class)
			->add('password', PasswordType::class)
			->add('name')
			->add('locale', ChoiceType::class, [
				'choices' => [
					'Français' => 'fr_FR',
					'English' => 'en_GB',
				],
			])
			->add('activated')
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