<?php
namespace App\Controller;

use App\Entity\Status;
use App\Entity\Project;
use App\Form\StatusType;
use App\Repository\StatusRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StatusController extends AbstractController
{
	
	private $doctrine;

	private $translator;
	
	public function __construct(ManagerRegistry $doctrine, TranslatorInterface $translator)
	{
		$this->doctrine = $doctrine;
		$this->translator = $translator;
	}
	
	public function index(StatusRepository $statusRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Statuses for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Status::class,
			'entities' => $statusRepository->getStatuses($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$status = new Status();
		$status->setProject($project);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('status', [
				'project' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Status $status): Response
	{
		$project = $status->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(StatusType::class, $status);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			
			return $this->redirectToRoute('status', [
				'project' => $status->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $status->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Status $status): Response
	{
		$project = $status->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($status);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('status', [
				'project' => $status->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'project' => $status->getProject()->getId(),
				]),
				'entities' => [$status],
			]);
		}
		
		
	}
	
}
?>