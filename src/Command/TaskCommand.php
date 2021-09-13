<?php

namespace App\Command;

use App\Helpers\Date;
use App\Repository\AutomationRepository;
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
	
	public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, AutomationRepository $automationRepository, ProgramRepository $programRepository, ProgramService $programService)
	{
		$this->entityManager = $entityManager;
		$this->flashBag = $requestStack->getSession()->getFlashBag();
		$this->automationRepository = $automationRepository;
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
		
		//set_time_limit(180);
		
		$automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:task', ['id' => $input->getArgument('id')]);
		$program = $this->programRepository->getProgramById($input->getArgument('id'));
		
		if ($automation === null || $program === null) {
			return Command::FAILURE;
		}
		
		try {
			$this->programService->preload($program);
			$this->programService->load($program);
			$this->programService->task($program);
			$this->flashBag->clear();
			
			$automation->setLastRun(new Date('today'));
			$nextRun = new Date($automation->getNextRun()->format('d-m-Y'));
			while ($nextRun < new Date('now')) {
				$nextRun->add('P' . $program->getParsedCode('frequency') . 'D');
			}
			$automation->setNextRun($nextRun);
			$this->entityManager->persist($automation);
			$this->entityManager->flush();
		} catch (\Exception $e) {
			$this->flashBag->clear();
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>