<?php

namespace App\Command;

use App\Repository\AutomationRepository;
use App\Repository\ProgramRepository;
use App\Repository\ProgressRepository;
use App\Repository\SerieRepository;
use App\Service\ProgramService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class TaskCommand extends Command
{
	private $entityManager;
	
	private $programRepository;
	
	private $programService;
	
	protected static $defaultName = 'app:task';
	
	public function __construct(EntityManagerInterface $entityManager, SessionInterface $session, ProgramRepository $programRepository, ProgramService $programService)
	{
		$this->entityManager = $entityManager;
		$this->session = $session;
		$this->programRepository = $programRepository;
		$this->programService = $programService;
		
		parent::__construct();
	}
	
	protected function configure()
	{
		$this
			->setDescription('Execute task jobs')
			->addArgument('id', InputArgument::REQUIRED, 'The id of the program.')
		;
	}
	
	protected function execute(InputInterface $input, OutputInterface $output): int
	{
		$program = $this->programRepository->getProgramById($input->getArgument('id'));
		
		if ($program === null) {
			return Command::FAILURE;
		}
		
		try {
			$this->programService->preload($program);
			$this->programService->load($program);
			$this->programService->task($program);
			$this->entityManager->flush();
			$this->session->getFlashBag()->clear();
		} catch (\Exception $e) {
			$this->session->getFlashBag()->clear();
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>