<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Contracts\Translation\TranslatorInterface;
use App\Repository\LogRepository;

class LogController extends AbstractController
{
    
	private $translator;
	
	private $logRepository;
	
	public function __construct(TranslatorInterface $translator, LogRepository $logRepository)
	{
		$this->translator = $translator;
		$this->logRepository = $logRepository;
	}
	
	public function index(): Response
    {
        
    	$log = $this->logRepository->getLog();
    	
    	return $this->render('log/index.html.twig', [
    		'log' => $log,
        ]);
    }
    
    public function clear(): Response
    {
    	$entityManager = $this->getDoctrine()->getManager();
    	$log = $this->logRepository->getLog();
    	
    	foreach ($log as $item) {
    		$entityManager->remove($item);
    	}
    	
    	$entityManager->flush();
    	$this->addFlash('success', 'Log cleared');
    	
    	return $this->redirectToRoute('log');
    }
}
