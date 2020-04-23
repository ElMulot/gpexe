<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Project;
use App\Form\ProjectType;
use App\Repository\ProjectRepository;
use App\Repository\CompanyRepository;
use App\Entity\Company;

class ProjectController extends AbstractController
{

	private $session;

	public function __construct(SessionInterface $session)
	{
		$this->session = $session;
	}

	public function index(ProjectRepository $projectRepository): Response
	{
		if ($this->isGranted('ROLE_ADMIN')) {
			$projects = $projectRepository->getAllProjects();
		} else {
			$projects = $projectRepository->getProjects($this->getUser());
		}
		return $this->render('project/index.html.twig', [
			'projects' => $projects
		]);
	}

	public function view(Request $request, Project $project, CompanyRepository $companyRepository): Response
	{
		if ($this->getUser()->getCompany()->getType() == Company::SUPPLIER) {
			return $this->redirectToRoute('project');
		} else {
			$mainContractors = $companyRepository->getMainContractors($project);
			$subContractors= $companyRepository->getSubContractors($project);
		}

		return $this->render('project/view.html.twig', [
			'main_contractors' => $mainContractors,
			'sub_contractors' => $subContractors,
			'route_back' => $this->generateUrl('project'),
		]);
	}

	public function new(Request $request): Response
	{
		$project = new Project();
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('project_view', [
				'id' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $view
			]);
		}
	}

	public function edit(Request $request, Project $project): Response
	{
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('project_view', [
				'id' => $project->getId()
			]);
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('project_view', [
					'id' => $project->getId()
				]),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Project $project, ProjectRepository $projectRepository): Response
	{
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('project_view', [
				'id' => $project->getId()
			]);
        } else {
            return $this->render('generic/delete.html.twig', [
            	'route_back' =>  $this->generateUrl('project_view', [
            		'id' => $project->getId()
            	]),
                'entities' => [$project],
            ]);
        }
        
        
    }
    
}
?>