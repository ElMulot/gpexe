<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Vue;
use App\Entity\Project;
use App\Form\VueType;
use App\Repository\VueRepository;

class VueController extends AbstractController
{
	
	private $vueRepository;
	
	public function __construct(TranslatorInterface $translator, VueRepository $vueRepository)
	{
		$this->translator = $translator;
		$this->vueRepository = $vueRepository;
	}
	
	public function index(Project $project): Response
	{
		$vues = $this->vueRepository->getVuesByProjectAndByUserAsArray($project, $this->getUser());
		
		foreach ($vues as &$vue) {
			if ($vue['user_id'] == $this->getUser()->getId() || 
				($this->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser()) === false)) {
				$vue['edit_url'] = $this->generateUrl('vue_edit', [
					'vue' => $vue['id'],
				]);
				$vue['delete_url'] = $this->generateUrl('vue_delete', [
					'vue' => $vue['id'],
				]);
			}
		}
		
		return new JsonResponse($vues);
	}
	
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
			
			$this->addFlash('success', $this->translator->trans('New vue created'));
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
		if ($vue->getUser() != $this->getUser() &&
			($this->isGranted('ROLE_CONTROLLER') === false || $vue->getProject()->hasUser($this->getUser()))) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(VueType::class, $vue);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('Vue updated'));
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
		if ($vue->getUser() != $this->getUser() &&
			($this->isGranted('ROLE_CONTROLLER') === false || $vue->getProject()->hasUser($this->getUser()))) {
			throw $this->createAccessDeniedException();
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($vue);
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('Vue deleted'));
			return new Response();
		} else {
			return $this->render('ajax/delete.html.twig', [
				'entities' => [$vue],
			]);
		}
	}
}
