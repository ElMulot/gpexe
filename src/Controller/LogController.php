<?php

namespace App\Controller;

use App\Repository\LogRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LogController extends AbstractTurboController
{
	
	public function __construct(private readonly LogRepository $logRepository)
	{
	}
	
	#[Route(path: '/log', name: 'log')]
	public function index() : Response
	{
		$log = $this->logRepository->getLog();
		return $this->render('log/index.html.twig', [
			'log' => $log,
		]);
	}
	
	#[Route(path: '/log/clear', name: 'logClear')]
	public function clear() : Response
	{
		$this->logRepository->clearLog();
		$this->addFlash('success', 'Log cleared');
		return $this->redirectToRoute('log');
	}
}
