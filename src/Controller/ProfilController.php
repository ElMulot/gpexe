<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Profil;
use App\Form\ProfilType;
use App\Repository\ProfilRepository;

class ProfilController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(ProfilRepository $profilRepository): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Profils'),
			'route_back' =>  $this->generateUrl('project'),
			'class' => Profil::class,
			'entities' => $profilRepository->getProfils(),
		]);
	}

	public function new(Request $request): Response
	{
		$profil = new Profil();
		$form = $this->createForm(ProfilType::class, $profil);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($profil);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('profil');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('profil'),
				'form' => $view,
			]);
		}
	}
	
	public function edit(Request $request, Profil $profil): Response
	{
		$form = $this->createForm(ProfilType::class, $profil);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('profil');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('profil'),
				'form' => $view,
			]);
		}
	}
	
	public function delete(Request $request, Profil $profil, ProfilRepository $profilRepository): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($profil);
			$entityManager->flush();
			
			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('profil');
		} elseif ($profilRepository->getCountAdminProfil($profil->getId()) == 0) {
			$this->addFlash('danger', 'The last entry with Admin rights cannot be deleted');
			return $this->redirectToRoute('profil');
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('profil'),
				'entities' => [$profil],
			]);
		}
		
		
	}
	
}
?>