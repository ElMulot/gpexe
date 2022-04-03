<?php

//Updating the Web Debug Toolbar After AJAX Requests
//Only for dev mode

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class MaintenanceSubscriber implements EventSubscriberInterface
{
	public function __construct(private readonly UrlGeneratorInterface $urlGenerator, private readonly bool $maintenanceMode)
	{
	}

	public function onKernelResponse(ResponseEvent $event)
	{
		if ($event->getRequest()->getUri() == $this->urlGenerator->generate('logout', [], UrlGeneratorInterface::ABSOLUTE_URL)) {
			return;
		}

		if ($event->getRequest()->getUri() == $this->urlGenerator->generate('login', [], UrlGeneratorInterface::ABSOLUTE_URL)) {
			$event->getResponse()->headers->set('Return', 1);
			return;
		}
		
		if ($this->maintenanceMode === true) {
            $response = new Response(null, 302, [
                'Location' => $this->urlGenerator->generate('logout', [], UrlGeneratorInterface::ABSOLUTE_URL),
            ]);
			$event->setResponse($response);
		}
	}

	public static function getSubscribedEvents(): array
	{
		return [
			KernelEvents::RESPONSE => [['onKernelResponse', 20]],
		];
	}
}
?>