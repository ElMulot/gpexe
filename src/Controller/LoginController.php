<?php

namespace App\Controller;

use Symfony\Component\Finder\Finder;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class LoginController extends AbstractController
{
	
	private $imgDir;
	
	public function __construct(KernelInterface $kernel,
								#[Autowire('%maintenance_mode%')]
								private bool $maintenanceMode)
	{
		$this->imgDir = $kernel->getProjectDir() . '/assets/images/';
	}
	
	#[Route(path: '/login', name: 'login')]
	public function index(AuthenticationUtils $authenticationUtils, Request $request) : Response
	{
		if ($this->getUser()) {
			return $this->redirectToRoute('home');
		}
		// get the login error if there is one
		$error = $authenticationUtils->getLastAuthenticationError();

		// last username entered by the user
		$lastUsername = $authenticationUtils->getLastUsername();
		
		$logout = false;

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

		//maintenance mode
		if ($this->maintenanceMode === true) {
			$error = new CustomUserMessageAuthenticationException();
			$error->setSafeMessage('Maintenance on going.');
		} elseif ($request->cookies->has('sf_redirect')) {
			$cookie = json_decode($request->cookies->get('sf_redirect'), true, 512, JSON_THROW_ON_ERROR);
			if ($cookie['route'] === 'logout') {
				$logout = true;
			}
		}
		return $this->renderForm('pages/login/index.html.twig', [
			'last_username' => $lastUsername, 
			'error' => $error,
			'img_name' => 'images/' . $imgName,
			'logout' => $logout,
		]);
	}

    #[Route(path: '/logout', name: 'logout', methods: ['GET'])]
	public function logout(Request $request) : void
	{
	}
}
?>