<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\Security\Http\Event\LoginSuccessEvent;

class UserLocaleSubscriber implements EventSubscriberInterface
{
    private $session;

    public function __construct(SessionInterface $session)
    {
    	$this->session = $session;
    }

    public function onLoginSuccess(LoginSuccessEvent $event)
    {
    	$user = $event->getAuthenticatedToken()->getUser();
        if ($user->getLocale() !== null) {
            $this->session->set('_locale', $user->getLocale());
        }
    }

    public static function getSubscribedEvents()
    {
        return [
        	LoginSuccessEvent::class => 'onLoginSuccess',
        ];
    }
}

?>