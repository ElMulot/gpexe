<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Vue;
use App\Entity\Serie;

class VueController extends AbstractController
{
	public function new(Request $request, Serie $serie): Response
	{
		$vue = new Vue();
		$vue->setValue($request->query);
		$vue->setProject($serie->getProject());
		$vue->setUser($this->getUser());
		$form = $this->createForm(VueType::class, $vue);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($vue);
			$entityManager->flush();
			
			$this->addFlash('success', 'New vue created');
			return $this->redirectToRoute('document', [
				'serie' => $serie->getId(),
				'vue' => $vue,
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', $request->query->all() + [
					'serie' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
	}
}
