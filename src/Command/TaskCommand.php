<?php

namespace App\Command;

use App\Helpers\Date;
use App\Service\ProgramService;
use App\Repository\ProgramRepository;
use App\Repository\AutomationRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;

class TaskCommand extends Command
{
	protected static $defaultName = 'app:task';
	
	public function __construct(private readonly EntityManagerInterface $entityManager, private readonly FlashBagInterface $flashBag, private readonly AutomationRepository $automationRepository, private readonly ProgramRepository $programRepository, private readonly ProgramService $programService)
	{
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
		} catch (\Exception) {
			$this->flashBag->clear();
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>