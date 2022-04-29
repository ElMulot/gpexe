<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\AccountType;
use App\Form\ChangePasswordType;
use Symfony\UX\Turbo\TurboBundle;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class AccountController extends AbstractController
{
	
	public function __construct(private readonly UserPasswordHasherInterface $passwordHasher, private readonly ManagerRegistry $doctrine)
	{
	}
	
	#[Route(path: '/account', name: 'account')]
	public function index(Request $request) : Response
	{
		return $this->renderForm('pages/main/account.html.twig');
	}

	#[Route(path: '/account/personal', name: 'personal')]
	public function personal(Request $request) : Response
	{
		return $this->renderForm('pages/main/account/_personal_infos.html.twig', [
			'user' => $this->getUser()
		]);
	}
	
	#[Route(path: '/account/edit', name: 'account_edit')]
	public function edit(Request $request) : Response
	{
		$user = $this->getUser();
		$form = $this->createForm(AccountType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			$request->getSession()->set('_locale', $user->getLocale());
			
			$this->addFlash('success', 'Datas updated');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('personal'),
			]);

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form
			]);

		}
	}
	
	#[Route(path: '/account/change_password', name: 'change_password')]
	public function changePassword(Request $request) : Response
	{
		$form = $this->createForm(ChangePasswordType::class);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			
			$changePassword = $form->getData();
			$user = $this->getUser();
			$user->setPassword($this->passwordHasher->hashPassword($user, $changePassword['new_password']));
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Password changed');

			return $this->redirectToRoute('personal');
		} else {
			return $this->renderForm('pages/main/account/_change_password.html.twig', [
				'form' => $form,
			]);
		}
	}

	public function getUser(): User
	{
		return parent::getUser();
	}
}
?>