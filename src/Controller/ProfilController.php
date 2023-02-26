<?php

namespace App\Controller;

use App\Entity\Profil;
use App\Form\ProfilType;
use App\Repository\ProfilRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProfilController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine)
	{
	}
	
	#[Route(path: '/profil', name: 'profil')]
	public function index(ProfilRepository $profilRepository) : Response
	{
		return $this->render('generic/list.html.twig', [
			'class' => Profil::class,
			'entities' => $profilRepository->getProfils(),
		]);
	}

	#[Route(path: '/profil/new', name: 'profilNew')]
	public function new(Request $request) : Response
	{
		$profil = new Profil();
		$form = $this->createForm(ProfilType::class, $profil);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($profil);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');

			return $this->renderSuccess($request, 'profil');

		} else {

			return $this->render('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/profil/{profil}/edit', name: 'profilEdit', requirements: ['profil' => '\d+'])]
	public function edit(Request $request, Profil $profil) : Response
	{
		$form = $this->createForm(ProfilType::class, $profil);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			return $this->renderSuccess($request, 'profil');

		} else {

			return $this->render('generic/edit.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/profil/{profil}/delete', name: 'profilDelete', methods: ['GET', 'DELETE'], requirements: ['profil' => '\d+'])]
	public function delete(Request $request, Profil $profil, ProfilRepository $profilRepository) : Response
	{
		$form = $this->createDeleteForm($profil);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($profil);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			return $this->renderSuccess($request, 'profil');

		} elseif ($profilRepository->getCountAdminProfil($profil->getId()) == 0) {

			$this->addFlash('danger', 'The last profil with Admin rights cannot be deleted');

			return $this->renderSuccess($request, 'profil');
			
		} else {

			return $this->render('generic/delete.html.twig', [
				'entities' => [$profil],
				'form' => $form,
			]);

		}
	}
	
}
?>