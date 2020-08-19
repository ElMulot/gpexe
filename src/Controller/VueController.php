<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use App\Entity\Vue;
use App\Entity\Project;
use App\Form\VueType;

class VueController extends AbstractController
{
	public function new(Request $request, Project $project): Response
	{
		$vue = new Vue();
		$request->query->remove('page');
		$request->query->remove('vue');
		$vue->setValue($request->query->all());
		$vue->setProject($project);
		$vue->setUser($this->getUser());
		$form = $this->createForm(VueType::class, $vue);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($vue);
			$entityManager->flush();
			
			$this->addFlash('success', 'New vue created');
			return new Response();
		} else {
			$view = $form->createView();
			return $this->render('ajax/form.html.twig', [
				'form' => $view
			]);
		}
	}
	
	public function edit(Request $request, Vue $vue): Response
	{
		$form = $this->createForm(VueType::class, $vue);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'Vue updated');
			return new Response();
		} else {
			$view = $form->createView();
			return $this->render('ajax/form.html.twig', [
				'form' => $view
			]);
		}
	}
	
	public function delete(Request $request, Vue $vue): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($vue);
			$entityManager->flush();
			
			$this->addFlash('success', 'Vue deleted');
			return new Response();
		} else {
			return $this->render('ajax/delete.html.twig', [
				'entities' => [$vue],
			]);
		}
	}
}
