<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Yaml\Yaml;

class HomeController extends AbstractController
{
    
    public function index(): Response
    {
        return $this->redirectToRoute('project');
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