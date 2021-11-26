<?php

namespace App\Controller;

use App\Repository\LogRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Contracts\Translation\TranslatorInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class LogController extends AbstractController
{
	
	private $translator;
	
	private $logRepository;
	
	public function __construct(TranslatorInterface $translator, LogRepository $logRepository)
	{
		$this->translator = $translator;
		$this->logRepository = $logRepository;
	}
	
	/**
	 * @Route("/log", name="log")
	 */
	public function index(): Response
	{
		
		$log = $this->logRepository->getLog();
		
		return $this->renderForm('log/index.html.twig', [
			'log' => $log,
		]);
	}
	
	/**
	 * @Route("/log/clear", name="log_clear")
	 */
	public function clear(): Response
	{
		$this->logRepository->clearLog();
		$this->addFlash('success', 'Log cleared');
		
		return $this->redirectToRoute('log');
	}
}
