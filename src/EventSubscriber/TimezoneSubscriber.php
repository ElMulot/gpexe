<?php

namespace App\EventSubscriber;

use Twig\Environment;
use Twig\Extension\CoreExtension;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\Security\Http\SecurityEvents;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Security\Http\Event\InteractiveLoginEvent;

class TimezoneSubscriber implements EventSubscriberInterface
{
	public function __construct(private readonly RequestStack $requestStack,
								private readonly Environment $environment,
								#[Autowire('%app.config.default_timezone%')]
								private readonly string $defaultTimezone)
	{
	}

	public function onKernelRequest(RequestEvent $event)
	{
		$request = $event->getRequest();
		
		if (!$request->hasPreviousSession()) {
			return;
		}
		
		// try to see if the timezone has been set as a _timezone routing parameter
		if ($timezone = $request->attributes->get('_timezone')) {
			$request->getSession()->set('_timezone', $timezone);
		} else {
			// if no explicit timezone has been set on this request, use one from the session
			$this->environment->getExtension(CoreExtension::class)->setTimezone($request->getSession()->get('_timezone', $this->defaultTimezone));
		}
	}

	public function onInteractiveLogin(InteractiveLoginEvent $event)
	{
		/** @var User $user */
		$user = $event->getAuthenticationToken()->getUser();

		if ($user->getTimezone() != null) {
			$this->requestStack->getSession()->set('_timezone', $user->getTimezone());
		}
	}

	public static function getSubscribedEvents(): array
	{
		return [
			KernelEvents::REQUEST => [['onKernelRequest', 20]],
			SecurityEvents::INTERACTIVE_LOGIN => 'onInteractiveLogin',
		];
	}
}
?>