<?php

namespace App\EventSubscriber;

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
	private $entityManagerInterface;
	
	public function __construct(EntityManagerInterface $entityManagerInterface)
	{
		$this->entityManagerInterface = $entityManagerInterface;
	}
	
	public function onInteractiveLogin(InteractiveLoginEvent $event)
	{
		$user = $event->getAuthenticationToken()->getUser();
		$user->setLastConnected(new \DateTime());
		$this->entityManagerInterface->persist($user);
		$this->entityManagerInterface->flush();
	}
	
	public static function getSubscribedEvents()
	{
		return [
			SecurityEvents::INTERACTIVE_LOGIN => 'onInteractiveLogin',
		];
	}
}

?>