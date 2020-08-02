<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Project;
use App\Repository\ProjectRepository;
use App\Repository\VersionRepository;

class HomeController extends AbstractController
{
    
	private $translator;
	
	private $projectRepository;
	
	private $versionRepository;
	
	public function __construct(TranslatorInterface $translator, ProjectRepository $projectRepository, VersionRepository $versionRepository)
	{
		$this->translator = $translator;
		$this->projectRepository = $projectRepository;
		$this->versionRepository = $versionRepository;
	}
	
    public function index(): Response
    {
    	$projects = $this->projectRepository->getProjects($this->getUser());
    	
    	return $this->render('home/index.html.twig', [
    		'projects' => $this->projectRepository->getProjects($this->getUser()),
    	]);

    }
    
    public function alert(Project $project): Response
    {
    	return $this->render('home/alert.html.twig', [
    		'project' => $project,
    		'prod_alerts' => $this->versionRepository->getProdAlerts($project, $this->getUser()),
    		'check_alerts' => $this->versionRepository->getCheckAlerts($project, $this->getUser()),
    	]);
    	
    }
    
    public function about(): Response
    {
    	return $this->render('home/about.html.twig', [
    		'items' => Yaml::parseFile($this->getParameter('kernel.project_dir') . '/config/ressources/about.yaml'),
    	]);
    }
    
    public function requests(): Response
    {
        return $this->redirectToRoute('project');
    }
}
?>