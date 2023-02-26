<?php

namespace App\EventSubscriber;

use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Http\SecurityEvents;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class LocaleSubscriber implements EventSubscriberInterface
{
	public function __construct(private readonly RequestStack $requestStack,
								#[Autowire('%app.config.default_locale%')]
								private readonly string $defaultLocale)
	{
	}

	public function onKernelRequest(RequestEvent $event)
	{
		$request = $event->getRequest();
		if (!$request->hasPreviousSession()) {
			return;
		}
		
		// try to see if the locale has been set as a _locale routing parameter
		if ($locale = $request->attributes->get('_locale')) {
			$request->getSession()->set('_locale', $locale);
		} else {
			// if no explicit locale has been set on this request, use one from the session
			$request->setLocale($request->getSession()->get('_locale', $this->defaultLocale));
		}
	}

	public function onInteractiveLogin(InteractiveLoginEvent $event)
	{
		/** @var User $user */
		$user = $event->getAuthenticationToken()->getUser();
		
		if ($user->getLocale() != null) {
			$this->requestStack->getSession()->set('_locale', $user->getLocale());
		}
	}

	public static function getSubscribedEvents(): array
	{
		return [
			// must be registered before (i.e. with a higher priority than) the default Locale listener
			KernelEvents::REQUEST => [['onKernelRequest', 20]],
			SecurityEvents::INTERACTIVE_LOGIN => 'onInteractiveLogin',
		];
	}
}
?>