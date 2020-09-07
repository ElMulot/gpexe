<?php

//Updating the Web Debug Toolbar After AJAX Requests
//Only for dev mode

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class DebugSuscriber implements EventSubscriberInterface
{
	
	public function onKernelResponse(ResponseEvent $event)
	{
// 		if (!$this->getKernel()->isDebug()) {
// 			return;
// 		}
		
		$request = $event->getRequest();
		if (!$request->isXmlHttpRequest()) {
			return;
		}
		
		$response = $event->getResponse();
		$response->headers->set('Symfony-Debug-Toolbar-Replace', 1);
	}

    public static function getSubscribedEvents()
    {
        return [
            KernelEvents::RESPONSE => [['onKernelResponse', 20]],
        ];
    }
}
?>