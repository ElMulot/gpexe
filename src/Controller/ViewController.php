<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\View;
use App\Form\ViewType;
use App\Entity\Project;
use Symfony\UX\Turbo\TurboBundle;
use App\Repository\ViewRepository;
use App\Service\AjaxRedirectService;
use App\Service\FieldService;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\ParamConverter;


class ViewController extends AbstractController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine, private readonly ViewRepository $viewRepository, private readonly AjaxRedirectService $ajaxRedirectService, private readonly FieldService $fieldService)
	{
	}
	
	#[Route(path: '/project/{project}/view', name: 'view', requirements: ['project' => '\d+'])]
	public function index(Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);
		
		$views = $this->viewRepository->getViewsByProjectAndByUserAsArray($project, $this->getUser());
		foreach ($views as &$view) {
			if ($view['user_id'] == $this->getUser()->getId() || $this->isGranted('USER', $project)) {
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

	#[Route(path: '/project/{project}/view/pannel/{selected_view?}', name: 'view_pannel', requirements: ['project' => '\d+', 'selected_view' => '\d+'])]
	#[ParamConverter('selectedView', options: ['strip_null' => true, 'mapping' => ['selected_view' => 'id']])]
	public function pannel(Request $request, Project $project, ?int $selectedView) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);
		
		$views = $this->viewRepository->getViewsByProjectAndByUser($project, $this->getUser());
		if ($selectedView === null) {
			$selectedView = $this->viewRepository->getDefaultViewByProjectAndByUser($project, $this->getUser());
		}
		
		// $request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->renderForm('pages/engineering/index/_view.html.twig', [
			'views' => $views,
			'selected_view' => $selectedView,
			'project' => $project,
		]);
	}
	
	#[Route(path: '/project/{project}/view/new', name: 'view_new', requirements: ['project' => '\d+'])]
	public function new(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_NEW', $project);
		
		$view = new View();
		$request->query->remove('page');
		$request->query->remove('view');
		$view->setValue($request->query->all());
		$view->setProject($project);
		$view->setUser($this->getUser());
		$form = $this->createForm(ViewType::class, $view);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($view);
			$entityManager->flush();
			
			$this->addFlash('success', 'New view created');
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $project->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/view/{view}/edit', name: 'view_edit', requirements: ['view' => '\d+'])]
	public function edit(Request $request, View $view) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_EDIT', $view);

		$form = $this->createForm(ViewType::class, $view);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'View updated');
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $view->getProject()->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/form.html.twig', [
				'form' => $form
			]);
		}
	}
	

	#[Route(path: '/project/view/{view}/delete', name: 'view_delete', methods: ['GET', 'DELETE'], requirements: ['view' => '\d+'])]
	public function delete(Request $request, View $view) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_DELETE', $view);

		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($view);
			$entityManager->flush();
			
			$this->addFlash('success', 'View deleted');
			return $this->ajaxRedirectService->get($this->generateUrl('view', ['project' => $view->getProject()->getId()]), '#views');
		} else {
			return $this->renderForm('ajax/delete.html.twig', [
				'entities' => [$view],
			]);
		}
	}

	public function getUser(): User
	{
		return parent::getUser();
	}
}
