<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Vue;
use App\Entity\Serie;
use App\Form\VueType;

class VueController extends AbstractController
{
	public function new(Request $request, Serie $serie): Response
	{
		$vue = new Vue();
		$request->query->remove('page');
		$request->query->remove('vue');
		$vue->setValue($request->query->all());
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
				'id' => $serie->getId(),
				'vue' => $vue->getId(),
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('document', $request->query->all() + [
					'id' => $serie->getId(),
				]),
				'form' => $view
			]);
		}
	}
}
