<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Status;
use App\Form\StatusType;
use App\Repository\StatusRepository;
use App\Entity\Project;

class StatusController extends AbstractController
{

	private $translator;
	
	public function __construct(TranslatorInterface $translator)
	{
		$this->translator = $translator;
	}
	
	public function index(StatusRepository $statusRepository, Project $project): Response
	{
		return $this->render('generic/list.html.twig', [
			'header' => $this->translator->trans('Statuses for') . ' : ' . $project->getName(),
			'route_back' =>  $this->generateUrl('project_view', [
				'id' => $project->getId(),
			]),
			'class' => Status::class,
			'entities' => $statusRepository->getStatuses($project),
		]);
	}

	public function new(Request $request, Project $project): Response
	{
		$status = new Status();
		$status->setProject($project);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			
			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('status', [
				'id' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'id' => $project->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Status $status): Response
	{
		$form = $this->createForm(StatusType::class, $status);
		$form = $this->createForm(StatusType::class, $status);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($status);
			$entityManager->flush();
			$this->addFlash('success', 'Datas updated');
			
			return $this->redirectToRoute('status', [
				'id' => $status->getProject()->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'id' => $status->getProject()->getId(),
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Status $status): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($status);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('status', [
				'id' => $status->getProject()->getId()
			]);
		} else {
			return $this->render('generic/delete.html.twig', [
				'route_back' =>  $this->generateUrl('status', [
					'id' => $status->getProject()->getId(),
				]),
                'entities' => [$status],
            ]);
        }
        
        
    }
    
}
?>