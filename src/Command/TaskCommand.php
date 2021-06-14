<?php

namespace App\Command;

use App\Repository\ProgramRepository;
use App\Service\ProgramService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpFoundation\RequestStack;

class TaskCommand extends Command
{
	private $entityManager;
	
	private $programRepository;
	
	private $programService;
	
	protected static $defaultName = 'app:task';
	
	public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, ProgramRepository $programRepository, ProgramService $programService)
	{
		$this->entityManager = $entityManager;
		$this->flashBag = $requestStack->getSession()->getFlashBag();
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
			$this->flashBag->clear();
		} catch (\Exception $e) {
			$this->flashBag->clear();
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>