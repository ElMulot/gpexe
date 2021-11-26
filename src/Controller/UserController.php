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

class UserController extends AbstractController
{
	
	private $translator;
	
	private $passwordHasher;
	
	public function __construct(TranslatorInterface $translator, UserPasswordHasherInterface $passwordHasher)
	{
		$this->translator = $translator;
		$this->passwordHasher = $passwordHasher;
	}
	
	/**
	 * @Route("/user", name="user")
	 */
	public function index(UserRepository $userRepository): Response
	{
		return $this->renderForm('user/index.html.twig', [
			'header' => $this->translator->trans('User'),
			'route_back' =>  $this->generateUrl('project'),
			'class' => User::class,
			'entities' => $userRepository->findAll(),
		]);
	}
	
	/**
	 * @Route("/user/new", name="user_new")
	 */
	public function new(Request $request): Response
	{
		$user = new User();
		$form = $this->createForm(NewUserType::class, $user);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$user->setPassword($this->passwordHasher->hashPassword($user, $user->getPassword()));
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('user');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('user'),
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/user/{user}/edit", name="user_edit", requirements={"user"="\d+"})
	 */
	public function edit(Request $request, User $user): Response
	{
		$form = $this->createForm(EditUserType::class, $user);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			if (!empty($form->get('new_password')->getData())) {
				$user->setPassword($this->passwordHasher->hashPassword($user, $form->get('new_password')->getData()));
			}
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('user');
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('user'),
				'form' => $form,
			]);
		}
	}
	
	/**
	 * @Route("/user/{user}/delete", name="user_delete", methods={"GET", "DELETE"}, requirements={"user"="\d+"})
	 */
	public function delete(Request $request, User $user): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($user);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('user');
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('user'),
				'entities' => [$user],
			]);
		}
		
		
	}
	
}
?>