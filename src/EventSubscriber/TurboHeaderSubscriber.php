<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class TurboHeaderSubscriber implements EventSubscriberInterface
{
    const ALLOWED_HEADERS = ['Turbo-Frame', 'Turbo-Stream-Replace', 'Turbo-Location'];
    
    private UrlGeneratorInterface $urlGenerator;

    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }

    public function onKernelResponse(ResponseEvent $event)
    {        
        foreach (self::ALLOWED_HEADERS as $header) {
            if ($event->getRequest()->headers->has($header) === true) {
                $event->getResponse()->headers->set($header, $event->getRequest()->headers->get($header));
            }
        }
        
        if ($event->getResponse()->isRedirection() === true) {
            $response = new Response(null, 200, [
                'Turbo-Location' => $event->getResponse()->headers->get('Location'),
            ]);
            $event->setResponse($response);
        }
    }

    public static function getSubscribedEvents()
    {
        return [
            ResponseEvent::class => 'onKernelResponse',
        ];
    }

    // private function shouldWrapRedirect(Request $request, Response $response): bool
    // {
    //     if ($response->isRedirection() === false) {
    //         return false;
    //     }
        
    //     $location = $response->headers->get('Location');
    //     if ($location === $this->urlGenerator->generate('login', [], UrlGeneratorInterface::ABSOLUTE_URL)) {
    //         return true;
    //     }

    //     return true;
    //     return (bool)$request->headers->get('Turbo-Frame-Redirect');
    // }
}

?>