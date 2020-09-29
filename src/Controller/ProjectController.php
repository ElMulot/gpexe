<?php
namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use App\Entity\Company;
use App\Entity\Project;
use App\Repository\CompanyRepository;
use App\Repository\ProjectRepository;
use App\Repository\AutomationRepository;
use App\Form\ProjectType;

class ProjectController extends AbstractController
{

	private $session;
	
	private $companyRepository;
	
	private $projectRepository;
	
	private $automationRepository;
	
	public function __construct(SessionInterface $session, CompanyRepository $companyRepository, ProjectRepository $projectRepository, AutomationRepository $automationRepository)
	{
		$this->session = $session;
		$this->companyRepository = $companyRepository;
		$this->projectRepository = $projectRepository;
		$this->automationRepository = $automationRepository;
	}

	public function index(): Response
	{
		if ($this->isGranted('ROLE_ADMIN')) {
			
			$projects = $this->projectRepository->getAllProjects();
			
		} else {
			
			$projects = $this->projectRepository->getProjects($this->getUser());
			
			if (sizeof($projects) == 1) {
				return $this->redirectToRoute('project_view', [
					'project' => $projects[0]->getId(),
				]);
			}
			
		}
		
		return $this->render('project/index.html.twig', [
			'projects' => $projects
		]);
	}

	public function view(Request $request, Project $project, CompanyRepository $companyRepository): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false && $project->hasUser($this->getUser()) === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor() ||
			$this->isGranted('ROLE_EDIT_DOCUMENTS') && $project->hasUser($this->getUser())) {
			
			$mainContractors = $companyRepository->getMainContractors($project);
			$subContractors= $companyRepository->getSubContractors($project);
			
		} else {
			
			$mainContractors = $companyRepository->getMainContractors($project, $this->getUser());
			$subContractors= $companyRepository->getSubContractors($project, $this->getUser());
			
		}
		
		$automations = [];
		if ($this->isGranted('ROLE_ADMIN') ||
			$this->isGranted('ROLE_CONTROLLER') && $this->getUser()->getCompany()->isMainContractor()) {
				$automations = $this->automationRepository->getEnabledAutomations($project);
		}
		
		if ($this->isGranted('ROLE_ADMIN') === false) {
			$projects = $this->projectRepository->getProjects($this->getUser());
			
			if (sizeof($projects) == 1) {
				return $this->render('project/view.html.twig', [
					'project' => $project,
					'main_contractors' => $mainContractors,
					'sub_contractors' => $subContractors,
					'automations' => $automations,
					'route_back' => $this->generateUrl('home'),
				]);
			}
		}
			
		return $this->render('project/view.html.twig', [
			'project' => $project,
			'main_contractors' => $mainContractors,
			'sub_contractors' => $subContractors,
			'automations' => $automations,
			'route_back' => $this->generateUrl('project'),
		]);
	}

	public function new(Request $request): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		$project = new Project();
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);

		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->persist($project);
			$entityManager->flush();

			$this->addFlash('success', 'New entry created');
			return $this->redirectToRoute('project');
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
		if ($this->isGranted('ROLE_ADMIN') === false &&
			($this->isGranted('ROLE_CONTROLLER') === false || $project->hasUser($this->getUser()) === false)) {
			return $this->redirectToRoute('project');
		}
		
		$form = $this->createForm(ProjectType::class, $project);
		$form->handleRequest($request);
		
		if ($form->isSubmitted() && $form->isValid()) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->flush();

			$this->addFlash('success', 'Datas updated');
			return $this->redirectToRoute('project');
		} else {
			$view = $form->createView();
			return $this->render('generic/form.html.twig', [
				'route_back' =>  $this->generateUrl('project'),
				'form' => $view
			]);
		}
	}

	public function delete(Request $request, Project $project): Response
	{
		if ($this->isGranted('ROLE_ADMIN') === false) {
			return $this->redirectToRoute('project');
		}
		
		if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
			$entityManager = $this->getDoctrine()->getManager();
			$entityManager->remove($project);
			$entityManager->flush();

			$this->addFlash('success', 'Entry deleted');
			return $this->redirectToRoute('project');
        } else {
            return $this->render('generic/delete.html.twig', [
            	'route_back' =>  $this->generateUrl('project'),
                'entities' => [$project],
            ]);
        }  
    }
    
}
?>