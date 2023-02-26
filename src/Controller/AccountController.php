<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AccountType;
use App\Form\ChangePasswordType;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AccountController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly UserPasswordHasherInterface $passwordHasher)
	{
	}
	
	#[Route(path: '/account', name: 'account')]
	public function index(Request $request) : Response
	{
		return $this->render('pages/main/account.html.twig');
	}

	#[Route(path: '/account/personal', name: 'personal')]
	public function personal(Request $request) : Response
	{
		return $this->render('pages/main/account/_personal_infos.html.twig', [
			'user' => $this->getUser()
		]);
	}
	
	#[Route(path: '/account/edit', name: 'accountEdit')]
	public function edit(Request $request) : Response
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

			return $this->renderSuccess($request, 'personal');

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}
	
	#[Route(path: '/account/change_password', name: 'changePassword')]
	public function changePassword(Request $request) : Response
	{
		$form = $this->createForm(ChangePasswordType::class);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			
			$changePassword = $form->getData();

			/** @var User $user */
			$user = $this->getUser();
			$user->setPlainPassword($changePassword['new_password']);
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Password changed');

			return $this->redirectToRoute('personal');
		} else {
			return $this->render('pages/main/account/_change_password.html.twig', [
				'form' => $form,
			]);
		}
	}
}
?>