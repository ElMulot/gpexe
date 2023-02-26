<?php

namespace App\EventListener;

use App\Entity\User;
use Doctrine\ORM\Events;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsEntityListener(entity:User::class, event: Events::prePersist, method: 'hashPassword', lazy:true)]
#[AsEntityListener(entity:User::class, event: Events::preUpdate, method: 'hashPassword', lazy:true)]
class UserListener
{
	
	public function __construct(private readonly UserPasswordHasherInterface $passwordHasher)
	{
	}
	
	public function hashPassword(User $user)
	{
		$plainPassword = $user->getPlainPassword();
		
		if ($plainPassword) {
			$hashedPassword = $this->passwordHasher->hashPassword($user, $plainPassword);
			$user->setPassword($hashedPassword);
		}
		
	}
}

?>