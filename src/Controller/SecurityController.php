<?php

namespace App\Controller;

use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;


class SecurityController extends AbstractController
{
	
	private $imgDir;
	
	public function __construct(KernelInterface $kernel)
	{
		$this->imgDir = $kernel->getProjectDir() . '/public/img/';
	}
	
	/**
	 * @Route("/login", name="login")
	 */
	public function login(AuthenticationUtils $authenticationUtils, Request $request): Response
	{
		if ($this->getUser()) {
			return $this->redirectToRoute('home');
		}
		
		// get the login error if there is one
		$error = $authenticationUtils->getLastAuthenticationError();
		// last username entered by the user
		$lastUsername = $authenticationUtils->getLastUsername();
		
		$finder = new Finder();
		$finder->files()
			->in($this->imgDir)
			->name('*.jpg')
			->name('*.jpeg')
			->name('*.png')
		;
		
		$imgName = null;
		
		if ($finder->hasResults()) {
			$rand = random_int(0, $finder->count()-1);
			$files = iterator_to_array($finder, false);
			$imgName = $files[$rand]->getRelativePathname();
		}
		
		$logout = false;
		if ($request->cookies->has('sf_redirect')) {
			$cookie = json_decode($request->cookies->get('sf_redirect'), true);
			if ($cookie['route'] === 'logout') {
				$logout = true;
			}
		}
		
		return $this->renderForm('security/login.html.twig', [
			'last_username' => $lastUsername, 
			'error' => $error,
			'img_name' => $imgName,
			'logout' => $logout,
		]);
	}

    /**
     * @Route("/logout", name="logout", methods={"GET"})
     */
    public function logout(): void
    {
    }
}
?>