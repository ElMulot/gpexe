<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\Event\ResponseEvent;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class TurboHeaderSubscriber implements EventSubscriberInterface
{
    final const ALLOWED_HEADERS = ['Turbo-Frame', 'Turbo-Stream-Replace', 'Turbo-Location'];

    public function __construct(private readonly UrlGeneratorInterface $urlGenerator)
    {
    }

    public function onKernelResponse(ResponseEvent $event)
    {        
        $request = $event->getRequest();
        $response = $event->getResponse();
        
        foreach (self::ALLOWED_HEADERS as $header) {
            if ($request->headers->has($header) === true) {
                $response->headers->set($header, $request->headers->get($header));
            }
        }
        
        if ($response->isRedirection() === true && $request->headers->has('Turbo-Frame') === true) {
            $response = new Response(null, 200, [
                'Turbo-Location' => $response->headers->get('Location'),
            ]);
            $event->setResponse($response);
        }
    }

    public static function getSubscribedEvents(): array
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