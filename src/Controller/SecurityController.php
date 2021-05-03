<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Finder\Finder;


class SecurityController extends AbstractController
{
	
	private $imgDir;
	
	public function __construct(KernelInterface $kernel)
	{
		$this->imgDir = $kernel->getProjectDir() . '/public/img/';
	}
	
	public function login(AuthenticationUtils $authenticationUtils): Response
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
		
		return $this->render('security/login.html.twig', [
			'last_username' => $lastUsername, 
			'error' => $error,
			'img_name' => $imgName,
		]);
	}
}
?>