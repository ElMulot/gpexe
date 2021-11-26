<?php
namespace App\Controller;

use App\Entity\Project;
use App\Entity\Metadata;
use App\Form\MetadataType;
use App\Repository\MetadataRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class MetadataController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	/**
	 * @Route("/project/{project}/metadata", name="metadata", requirements={"project"="\d+"})
	 */
	public function index(MetadataRepository $metadataRepository, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		return $this->renderForm('generic/list.html.twig', [
			'header' => $this->translator->trans('Metadatas for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'project' => $project->getId(),
			]),
			'class' => Metadata::class,
			'entities' => $metadataRepository->getMetadatas($project),
		]);
	}

	/**
	 * @Route("/project/{project}/metadata/new", name="metadata_new", requirements={"project"="\d+"})
	 */
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
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('metadata', [
				'project' => $project->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $project->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/metadata/{metadata}/edit", name="metadata_edit", requirements={"metadata"="\d+"})
	 */
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
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata', [
				'project' => $metadata->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $metadata->getProject()->getId(),
				]),
				'form' => $form
			]);
		}
	}

	/**
	 * @Route("/project/metadata/{metadata}/delete", name="metadata_delete", methods={"GET", "DELETE"}, requirements={"metadata"="\d+"})
	 */
	public function delete(Request $request, Metadata $metadata): Response
	{
		$project = $metadata->getProject();
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata', [
				'project' => $metadata->getProject()->getId()
			]);
		} else {
			return $this->renderForm('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'project' => $metadata->getProject()->getId(),
				]),
				'entities' => [$metadata],
			]);
		}
	}
	
}
?>