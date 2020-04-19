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
		return $this->render('generic/list.html.twig', [
			'page_title' => $this->translator->trans('Codification for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $project->getId(),
			]),
			'class' => Codification::class,
			'entities' => $codificationRepository->getCodifications($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
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
				'id' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'page_title' => 'New codification',
				'route_back' =>  $this->generateUrl('codification', [
					'id' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Codification $codification): Response
	{
		$form = $this->createForm(CodificationType::class, $codification);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('codification', [
				'id' => $codification->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'page_title' => 'Edit Codification',
				'route_back' =>  $this->generateUrl('codification', [
					'id' => $codification->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Codification $codification): Response
	{
		if ($this->isCsrfTokenValid('delete' . $codification->getId(), $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($codification);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('codification', [
				'id' => $codification->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
                'page_title' => 'Delete codification',
				'route_back' =>  $this->generateUrl('codification', [
					'id' => $codification->getProject()->getId(),
						]),
                'entity' => $codification,
            ]);
        }
        
        
    }
    
}
?>