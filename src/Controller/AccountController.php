<?php

namespace App\Controller;

use App\Form\AccountType;
use App\Form\ChangePasswordType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;


class AccountController extends AbstractController
{
	
	private $passwordHasher;
	
	public function __construct(UserPasswordHasherInterface $passwordHasher)
	{
		$this->passwordHasher = $passwordHasher;
	}
	
	/**
	 * @Route("/account", name="account")
	 */
	public function index(Request $request): Response
	{
		return $this->renderForm('account/index.html.twig', [
			'route_back' => $this->generateUrl('home'),
			'user' => $this->getUser()
		]);
	}
	
	/**
	 * @Route("/account/edit", name="account_edit")
	 */
	public function edit(Request $request): Response
	{
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			$request->getSession()->set('_locale', $user->getLocale());
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('account');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' => $this->generateUrl('account'),
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/account/changePassword", name="change_password")
	 */
	public function changePassword(Request $request): Response
	{
		$form = $this->createForm(ChangePasswordType::class);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$changePassword = $form->getData();
			$user = $this->getUser();
			$user->setPassword($this->passwordHasher->hashPassword($user, $changePassword['new_password']));
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Password changed');
			return $this->redirectToRoute('account');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' => $this->generateUrl('account'),
				'form' => $form,
			]);
		}
	}
}
?>