<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\NewUserType;
use App\Form\EditUserType;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\UX\Turbo\Stream\TurboStreamResponse;

class UserController extends AbstractController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine, private readonly UserPasswordHasherInterface $passwordHasher)
	{
	}
	
	#[Route(path: '/user', name: 'user')]
	public function index(UserRepository $userRepository) : Response
	{
		return $this->renderForm('user/index.html.twig', [
			'class' => User::class,
			'entities' => $userRepository->findAll(),
		]);
	}
	
	#[Route(path: '/user/new', name: 'user_new')]
	public function new(Request $request) : Response
	{
		$user = new User();
		$form = $this->createForm(NewUserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$user->setPassword($this->passwordHasher->hashPassword($user, $user->getPassword()));
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');


			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('user'),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/user/{user}/edit', name: 'user_edit', requirements: ['user' => '\d+'])]
	public function edit(Request $request, User $user) : Response
	{
		$form = $this->createForm(EditUserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			if (!empty($form->get('new_password')->getData())) {
				$user->setPassword($this->passwordHasher->hashPassword($user, $form->get('new_password')->getData()));
			}
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('user'),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/user/{user}/delete', name: 'user_delete', methods: ['GET', 'DELETE'], requirements: ['user' => '\d+'])]
	public function delete(Request $request, User $user) : Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('company'),
			], new TurboStreamResponse());

		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$user],
			]);

		}
	}
	
}
?>