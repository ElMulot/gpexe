<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\NewUserType;
use App\Form\EditUserType;
use App\Repository\UserRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly UserPasswordHasherInterface $passwordHasher)
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
	
	#[Route(path: '/user/new', name: 'user_new')]
	public function new(Request $request) : Response
	{
		$user = new User();
		$form = $this->createForm(NewUserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$user->setCreatedOn(new \DateTime());
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
	
	#[Route(path: '/user/{user}/edit', name: 'user_edit', requirements: ['user' => '\d+'])]
	public function edit(Request $request, User $user) : Response
	{
		$form = $this->createForm(EditUserType::class, $user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			if (!empty($form->get('new_password')->getData())) {
				$user->setPassword($form->get('new_password')->getData());
			}
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
	
	#[Route(path: '/user/{user}/delete', name: 'user_delete', methods: ['GET', 'DELETE'], requirements: ['user' => '\d+'])]
	public function delete(Request $request, User $user) : Response
	{
		$form = $this->createDeleteForm($user);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'company');

		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$user],
				'form' => $form,
			]);

		}
	}
	
}
?>