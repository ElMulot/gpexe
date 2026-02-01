<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AccountType;
use App\Form\ChangePasswordType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AccountController extends AbstractController
{
	private $doctrine;	

	private $passwordHasher;
	
	public function __construct(ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher)
	{
		$this->doctrine = $doctrine;
		$this->passwordHasher = $passwordHasher;
	}
	
	public function index(Request $request): Response
	{
		return $this->render('account/index.html.twig', [
			'route_back' => $this->generateUrl('home'),
			'user' => $this->getUser()
		]);
	}
	
	public function edit(Request $request): Response
	{
		/** @var User $user */
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			$request->getSession()->set('_locale', $user->getLocale());
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('account');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' => $this->generateUrl('account'),
				'form' => $view
			]);
		}
	}
	
	public function changePassword(Request $request): Response
	{
		$form = $this->createForm(ChangePasswordType::class);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$changePassword = $form->getData();
			/** @var User $user */
			$user = $this->getUser();
			$user->setPassword($this->passwordHasher->hashPassword($user, $changePassword['new_password']));
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Password changed');
			return $this->redirectToRoute('account');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' => $this->generateUrl('account'),
				'form' => $view,
			]);
		}
	}
}
?>