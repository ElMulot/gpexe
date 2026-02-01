<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Metadata;
use App\Form\MetadataType;
use App\Repository\MetadataRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MetadataController extends AbstractController
{
	
	private $doctrine;

	private $translator;
	
	public function __construct(ManagerRegistry $doctrine, TranslatorInterface $translator)
	{
		$this->doctrine = $doctrine;
		$this->translator = $translator;
	}
	
	public function index(MetadataRepository $metadataRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Metadatas for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Metadata::class,
			'entities' => $metadataRepository->getMetadatas($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$metadata = new Metadata();
		$metadata->setProject($project);
		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->persist($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('metadata', [
				'project' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Metadata $metadata): Response
	{
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata', [
				'project' => $metadata->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $metadata->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Metadata $metadata): Response
	{
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->get('_token'))) {
			$entityManager = $this->doctrine->getManager();
			$entityManager->remove($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata', [
				'project' => $metadata->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $metadata->getProject()->getId(),
				]),
				'entities' => [$metadata],
			]);
		}
	}
	
}
?>