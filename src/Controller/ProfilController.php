<?php

namespace App\Controller;

use App\Entity\Profil;
use App\Form\ProfilType;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\ProfilRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ProfilController extends AbstractController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine)
	{
	}
	
	#[Route(path: '/profil', name: 'profil')]
	public function index(ProfilRepository $profilRepository) : Response
	{
		return $this->renderForm('generic/list.html.twig', [
			'class' => Profil::class,
			'entities' => $profilRepository->getProfils(),
		]);
	}

	#[Route(path: '/profil/new', name: 'profil_new')]
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

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('profil'),
			]);

		} else {

			return $this->renderForm('generic/new.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/profil/{profil}/edit', name: 'profil_edit', requirements: ['profil' => '\d+'])]
	public function edit(Request $request, Profil $profil) : Response
	{
		$form = $this->createForm(ProfilType::class, $profil);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('profil'),
			]);

		} else {

			return $this->renderForm('generic/edit.html.twig', [
				'form' => $form,
			]);

		}
	}
	
	#[Route(path: '/profil/{profil}/delete', name: 'profil_delete', methods: ['GET', 'DELETE'], requirements: ['profil' => '\d+'])]
	public function delete(Request $request, Profil $profil, ProfilRepository $profilRepository) : Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($profil);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('profil'),
			]);

		} elseif ($profilRepository->getCountAdminProfil($profil->getId()) == 0) {

			$this->addFlash('danger', 'The last profil with Admin rights cannot be deleted');

			$request->setRequestFormat(TurboBundle::STREAM_FORMAT);
			return $this->renderForm('generic/success.stream.html.twig', [
				'redirect' => $this->generateUrl('profil'),
			]);
			
		} else {

			return $this->renderForm('generic/delete.html.twig', [
				'entities' => [$profil],
			]);

		}
	}
	
}
?>