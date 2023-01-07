<?php

namespace App\EventListener;

use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\User;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserListener
{
	
	public function __construct(private readonly EntityManagerInterface $entityManager,
								private readonly UserPasswordHasherInterface $passwordHasher)
	{
	}
	
	public function hashPassword(User $user, LifecycleEventArgs $event)
	{
		
		$plaintextPassword = $user->getPassword();
		$hashedPassword = $this->passwordHasher->hashPassword($user, $plaintextPassword);
		// dump($hashedPassword, $plaintextPassword);
		$user->setPassword($hashedPassword);
	}
}

?>