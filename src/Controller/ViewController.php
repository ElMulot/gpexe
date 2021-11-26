<?php

namespace App\Controller;

use App\Entity\View;
use App\Form\ViewType;
use App\Entity\Project;
use App\Repository\ViewRepository;
use App\Service\AjaxRedirectService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class ViewController extends AbstractController
{
	
	private $viewRepository;
	
	private $ajaxRedirectService;
	
	public function __construct(TranslatorInterface $translator, ViewRepository $viewRepository, AjaxRedirectService $ajaxRedirectService)
	{
		$this->translator = $translator;
		$this->viewRepository = $viewRepository;
		$this->ajaxRedirectService = $ajaxRedirectService;
	}
	
	/**
	 * @Route("/project/{project}/view", name="view", requirements={"project"="\d+"})
	 */
	public function index(Project $project): Response
	{
		$views = $this->viewRepository->getViewsByProjectAndByUserAsArray($project, $this->getUser());
		
		foreach ($views as &$view) {
			if ($view['user_id'] == $this->getUser()->getId() || 
				($this->isGranted('ROLE_CONTROLLER') && $project->hasUser($this->getUser()) === false)) {
				$view['edit_url'] = $this->generateUrl('view_edit', [
					'view' => $view['id'],
				]);
				$view['delete_url'] = $this->generateUrl('view_delete', [
					'view' => $view['id'],
				]);
			}
		}
		
		return new JsonResponse($views);
	}
	
	/**
	 * @Route("/project/{project}/view/new", name="view_new", requirements={"project"="\d+"})
	 */
	public function new(Request $request, Project $project): Response
	{
		$view = new View();
		$request->query->remove('page');
		$request->query->remove('view');
		$view->setValue($request->query->all());
		$view->setProject($project);
		$view->setUser($this->getUser());
		$form = $this->createForm(ViewType::class, $view);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($view);
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('New view created'));
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $project->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	/**
	 * @Route("/project/view/{view}/edit", name="view_edit", requirements={"view"="\d+"})
	 */
	public function edit(Request $request, View $view): Response
	{
		if ($view->getUser() != $this->getUser() &&
			($this->isGranted('ROLE_CONTROLLER') === false || $view->getProject()->hasUser($this->getUser()))) {
			throw $this->createAccessDeniedException();
		}
		
		$form = $this->createForm(ViewType::class, $view);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('View updated'));
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $view->getProject()->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	

	/**
	 * @Route("/project/view/{view}/delete", name="view_delete", methods={"GET", "DELETE"}, requirements={"view"="\d+"})
	 */
	public function delete(Request $request, View $view): Response
	{
		if ($view->getUser() != $this->getUser() &&
			($this->isGranted('ROLE_CONTROLLER') === false || $view->getProject()->hasUser($this->getUser()))) {
			throw $this->createAccessDeniedException();
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($view);
			$entityManager->flush();
			
			$this->addFlash('success', $this->translator->trans('View deleted'));
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $view->getProject()->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/delete.html.twig', [
				'entities' => [$view],
			]);
		}
	}
}
