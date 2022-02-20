<?php

namespace App\EventSubscriber;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;
use Symfony\Component\Security\Http\SecurityEvents;

/**
 * Stores the locale of the user in the session after the
 * login. This can be used by the LocaleSubscriber afterwards.
 */
class LastConnectedSubscriber implements EventSubscriberInterface
{
	public function __construct(private readonly EntityManagerInterface $entityManagerInterface)
	{
	}
	
	public function onInteractiveLogin(InteractiveLoginEvent $event)
	{
		/** @var User $user */
		$user = $event->getAuthenticationToken()->getUser();
		$user->setLastConnected(new \DateTime());
		$this->entityManagerInterface->persist($user);
		$this->entityManagerInterface->flush();
	}
	
	public static function getSubscribedEvents(): array
	{
		return [
			SecurityEvents::INTERACTIVE_LOGIN => 'onInteractiveLogin',
		];
	}
}

?>