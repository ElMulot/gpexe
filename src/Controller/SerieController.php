<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Entity\Serie;
use App\Entity\Project;
use App\Entity\Company;
use App\Form\SerieType;
use App\Repository\SerieRepository;

class SerieController extends AbstractController
{
	private $translator;
	
	private $serieRepository;
	
	public function __construct(TranslatorInterface $translator, SerieRepository $serieRepository)
	{
		$this->translator = $translator;
		$this->serieRepository = $serieRepository;
	}
	
	public function index(Project $project, Company $company): Response
    {
    	return $this->render('generic/list.html.twig', [
    		'header' => $this->translator->trans('Series for') . ' : ' . $project->getName(),
    		'route_back' =>  $this->generateUrl('serie_route', [
    			'project' => $project->getId(),
    			'company' => $company->getId(),
    		]),
    		'class' => Serie::class,
    		'entities' => $this->serieRepository->getSeries($project, $company),
    	]);
    }
    
    public function route(Project $project, Company $company): Response
    {
    	$series = $this->serieRepository->getSeries($project, $company);
    	if (empty($series)) {
    		return $this->redirectToRoute('serie_new', [
    			'project' => $project->getId(),
    			'company' => $company->getId(),
    		]);
    	} else {
    		return $this->redirectToRoute('document', [
    			'id' => $series[0]->getId(),
    		]);
    	}
    }
    
    public function new(Request $request, Project $project, Company $company): Response
    {
    	$serie = new Serie();
    	$serie->setProject($project);
    	$serie->setCompany($company);
    	$form = $this->createForm(SerieType::class, $serie);
    	$form->handleRequest($request);
    	
    	if ($form->isSubmitted() && $form->isValid()) {
    		$entityManager = $this->getDoctrine()->getManager();
    		$entityManager->persist($serie);
    		$entityManager->flush();
    		
    		$this->addFlash('success', 'New serie created');
    		return $this->redirectToRoute('serie', [
    			'id' => $serie->getId()
    		]);
    	} else {
    		$view = $form->createView();
    		return $this->render('generic/form.html.twig', [
    			'route_back' =>  $this->generateUrl('serie', [
    				'project' => $project->getId(),
    				'company' => $company->getId(),
    			]),
    			'form' => $view,
    		]);
    	}
    }
    
    public function edit(Request $request, Serie $serie): Response
    {
    	$form = $this->createForm(SerieType::class, $serie);
    	$form->handleRequest($request);
    	
    	if ($form->isSubmitted() && $form->isValid()) {
    		$entityManager = $this->getDoctrine()->getManager();
    		$entityManager->persist($serie);
    		$entityManager->flush();
    		$this->addFlash('success', 'Serie updated');
    		return $this->redirectToRoute('serie', [
    			'project' => $serie->getProject()->getId(),
    			'company' => $serie->getCompany()->getId(),
    		]);
    	} else {
    		$view = $form->createView();
    		return $this->render('generic/form.html.twig', [
    			'route_back' =>  $this->generateUrl('serie', [
    				'project' => $serie->getProject()->getId(),
    				'company' => $serie->getCompany()->getId(),
    			]),
    			'form' => $view,
    		]);
    	}
    }
    
    public function delete(Request $request, Serie $serie): Response
    {
        if ($this->isCsrfTokenValid('delete', $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($serie);
            $entityManager->flush();
            
            $this->addFlash('success', 'Serie deleted');
            return $this->redirectToRoute('serie', [
                'project' => $serie->getProject()->getId()
            ]);
        } else {
            return $this->render('generic/delete.html.twig', [
                'route_back' =>  $this->generateUrl('serie', [
                    'project' => $serie->getProject()->getId(),
                    'company' => $serie->getCompany()->getId(),
                ]),
                'entities' => [$serie],
            ]);
        }
    }
    
}
?>