<?php

namespace App\Controller;

use App\Entity\User;
use App\Entity\View;
use App\Form\ViewType;
use App\Entity\Project;
use App\Repository\ViewRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;


class ViewController extends AbstractTurboController
{
	
	public function __construct(private readonly ManagerRegistry $doctrine,
								private readonly TranslatorInterface $translator,
								private readonly ViewRepository $viewRepository)
	{
	}

	/**
	 * Query parameters :
	 * 	+ int		selected		view id to display
	 */
	#[Route(path: '/project/{project}/view', name: 'view', requirements: ['project' => '\d+'])]
	public function index(Request $request, Project $project) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_SHOW', $project);
		
		$views = $this->viewRepository->getViewsByProjectAndByUser($project, $this->getUser());
		
		$selectedViewId = $request->get('selected');

		if ($selectedViewId === null) {
			$selectedView = $this->viewRepository->getDefaultViewByProjectAndByUser($project, $this->getUser());
		} else {
			$selectedView = match(count($views)) {
				0		=>  null,
				1		=> current($views),
				default	=> current(array_filter($views, fn($item) => $item->getId() == $selectedViewId)),
			};
		}
		
		// $request->setRequestFormat(TurboBundle::STREAM_FORMAT);
		return $this->render('pages/engineering/index/nav/_view.html.twig', [
			'views' => $views,
			'selected_view' => $selectedView,
			'project' => $project,
		]);
	}
	
	/**
	 * Query parameters :
	 * 	+ int		page		page to display
	 * 	+ int		view		view to display
	 */
	#[Route(path: '/project/{project}/view/new', name: 'viewNew', requirements: ['project' => '\d+'])]
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

			return $this->renderSuccess($request, 'view', [
				'project' => $view->getProject()->getId(),
				'selected' => $view->getId()
			]);
		} else {
			return $this->render('generic/new.html.twig', [
				'form' => $form
			]);
		}
	}
	
	#[Route(path: '/project/view/{view}/edit', name: 'viewEdit', requirements: ['view' => '\d+'])]
	public function edit(Request $request, View $view) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_EDIT', $view);

		$form = $this->createForm(ViewType::class, $view);
		$form->handleRequest($request);
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			
			$this->addFlash('success', 'View updated');
			
			return $this->renderSuccess($request, 'view', [
				'project' => $view->getProject()->getId()
			]);
		} else {
			return $this->render('generic/edit.html.twig', [
				'form' => $form
			]);
		}
	}
	

	#[Route(path: '/project/view/{view}/delete', name: 'viewDelete', methods: ['GET', 'DELETE'], requirements: ['view' => '\d+'])]
	public function delete(Request $request, View $view) : Response
	{
		$this->denyAccessUnlessGranted('VIEW_DELETE', $view);

		$selectedView = $this->viewRepository->getDefaultViewByProjectAndByUser($view->getProject(), $this->getUser());

		$form = $this->createDeleteForm($view);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($view);
			$entityManager->flush();

			$this->addFlash('success', 'View deleted');
			
			if ($selectedView === null) {
				return $this->renderSuccess($request, 'view', [
					'project' => $view->getProject()->getId()
				]);
			} else {
				return $this->renderSuccess($request, 'view', [
					'project' => $view->getProject()->getId(),
					'selected' => $selectedView->getId(),
				]);
			}
		} else {
			return $this->render('generic/delete.html.twig', [
				'entities' => [$view],
				'form' => $form,
			]);
		}
	}
}
