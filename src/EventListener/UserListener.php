<?php

namespace App\EventListener;

use App\Entity\User;
use Doctrine\ORM\Events;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsEntityListener(entity:User::class, event: Events::prePersist, method: 'hashPassword', lazy:true)]
class UserListener
{
	
	public function __construct(private readonly UserPasswordHasherInterface $passwordHasher)
	{
	}
	
	public function hashPassword(User $user)
	{
		$plaintextPassword = $user->getPassword();
		$hashedPassword = $this->passwordHasher->hashPassword($user, $plaintextPassword);
		$user->setPassword($hashedPassword);
	}
}

?>