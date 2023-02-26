<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly UserPasswordHasherInterface $passwordHasher,
								#[Autowire('%app.config.default_locale%')]
								private readonly string $defaultLocale,
								#[Autowire('%app.config.default_timezone%')]
								private readonly string $defaultTimezone)
	{
	}
	
	#[Route(path: '/user', name: 'user')]
	public function index(UserRepository $userRepository) : Response
	{
		return $this->render('pages/user/index.html.twig', [
			'class' => User::class,
			'entities' => $userRepository->findAll(),
		]);
	}
	
	#[Route(path: '/user/new', name: 'userNew')]
	public function new(Request $request) : Response
	{
		$user = new User();
		$user->setLocale($this->defaultLocale);
		$user->setTimezone($this->defaultTimezone);
		$form = $this->createForm(UserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'user');

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/user/{user}/edit', name: 'userEdit', requirements: ['user' => '\d+'])]
	public function edit(Request $request, User $user) : Response
	{
		$form = $this->createForm(UserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'user');

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/user/{user}/delete', name: 'userDelete', methods: ['GET', 'DELETE'], requirements: ['user' => '\d+'])]
	public function delete(Request $request, User $user) : Response
	{
		$form = $this->createDeleteForm($user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'user');

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$user],
				'form' => $form,
			]);

		}
	}
	
}
?>