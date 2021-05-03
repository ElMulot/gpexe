<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\RepeatedType;
use Symfony\Component\Security\Core\Validator\Constraints as SecurityAssert;
use Doctrine\ORM\Mapping as ORM;


class ChangePasswordType extends AbstractType
{
	
	/**
	 * @SecurityAssert\UserPassword(
	 *	 message = "Wrong value for your current password"
	 * )
	 */
	private $currentPassword;
	
	private $newPassword;
	
	public function getCurrentPassword(): ?string
	{
		return $this->currentPassword;
	}
	
	public function getNewPassword(): ?string
	{
		return $this->newPassword;
	}
	
	public function setCurrentPassword(string $name): self
	{
		$this->currentPassword = $name;
		
		return $this;
	}
	
	public function setNewPassword(string $name): self
	{
		$this->newPassword = $name;
		
		return $this;
	}
	
	public function buildForm(FormBuilderInterface $builder, array $options)
	{
		$builder
			->add('current_password', PasswordType::class)
			->add('new_password', RepeatedType::class, [
				'type' => PasswordType::class,
				'invalid_message' => 'The password fields must match.',
				'options' => ['attr' => ['class' => 'password-field']],
				'required' => true,
				'first_options'  => ['label' => 'New password'],
				'second_options' => ['label' => 'Confirm new password'],]
			);
	}
}
