<?php

namespace App\Form;

use App\Entity\User;
use App\Entity\Profil;
use App\Entity\Company;
use App\Entity\Project;
use App\Form\Type\BooleanType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\LocaleType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TimezoneType;

class UserType extends AbstractType
{
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		/**@var User $user */
		$user = $builder->getData();
		
		$builder
			->add('email', EmailType::class);
		
		if ($user->getId() === null) {
			$builder
				->add('plainPassword', PasswordType::class, [
					'hash_property_path' => 'password',
					'mapped' => false
				]);
		} else {
			$builder
				->add('new_password', PasswordType::class, [
					'hash_property_path' => 'password',
					'required' => false,
					'mapped' => false,
				]);
		}

		$builder
			->add('name')
			->add('locale', LocaleType::class, [
				'choices' => [
					'Français'	=> 'fr_FR',
					'English'	=> 'en_GB',
				],
				'choice_loader' => null,
				'empty_data' => 'fr_FR',
			])
			->add('timezone', TimezoneType::class,[
				'preferred_choices' => [
					'Europe/Paris',
					'Europe/London',
				]
			])
			->add('activated', BooleanType::class)
			->add('profil', EntityType::class, [
				'class'	=> Profil::class,
			])
			->add('company', EntityType::class, [
				'class'	=> Company::class,
			])
			->add('projects', EntityType::class, [
				'class'			=> Project::class,
				'multiple'		=> true,
				'expanded'		=> true,
			])
		;
	}
	
	public function configureOptions(OptionsResolver $resolver)
	{
		$resolver->setDefaults([
			'data_class'	=> User::class,
		]);
	}
}
?>