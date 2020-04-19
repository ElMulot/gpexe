<?php

namespace App\Security;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Logout\LogoutSuccessHandlerInterface;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;

class LogoutSuccessHandler extends AbstractController implements LogoutSuccessHandlerInterface
{
    private $urlGenerator;
    
    public function __construct(UrlGeneratorInterface $urlGenerator)
    {
        $this->urlGenerator = $urlGenerator;
    }
    
    public function onLogoutSuccess(Request $request)
    {
        //$this->addFlash('success', 'Datas updated');
        return new RedirectResponse($this->urlGenerator->generate('login', ['logout' => 'success']));
    }
}

?>