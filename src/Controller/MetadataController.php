<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Metadata;
use App\Form\MetadataType;
use App\Repository\MetadataRepository;
use App\Entity\Project;

class MetadataController extends AbstractController
{
	
	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(MetadataRepository $metadataRepository, Project $project): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Metadata for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $project->getId(),
			]),
			'class' => Metadata::class,
			'entities' => $metadataRepository->getMetadatas($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
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
				'id' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'id' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Metadata $metadata): Response
	{
		$form = $this->createForm(MetadataType::class, $metadata);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('metadata', [
				'id' => $metadata->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'id' => $metadata->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Metadata $metadata): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($metadata);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('metadata', [
				'id' => $metadata->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('metadata', [
					'id' => $metadata->getProject()->getId(),
				]),
				'entities' => [$metadata],
			]);
		}
	}
	
}
?>