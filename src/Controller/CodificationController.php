<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Codification;
use App\Form\CodificationType;
use App\Repository\CodificationRepository;
use App\Entity\Project;

class CodificationController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(CodificationRepository $codificationRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Codification for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Codification::class,
			'entities' => $codificationRepository->getCodifications($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$codification = new Codification();
		$codification->setProject($project);
		
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($codification);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('codification', [
				'project' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('codification', [
				'project' => $codification->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $codification->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Codification $codification): Response
	{
		$project = $codification->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($codification);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('codification', [
				'project' => $codification->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('codification', [
					'project' => $codification->getProject()->getId(),
				]),
			    'entities' => [$codification],
            ]);
        }
 
    }
    
}
?>