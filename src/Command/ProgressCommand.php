<?php

namespace App\Command;

use App\Entity\Progress;
use App\Helpers\Date;
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

class ProgressCommand extends Command
{
	protected static $defaultName = 'app:progress';
	
	public function __construct(private readonly EntityManagerInterface $entityManager, private readonly AutomationRepository $automationRepository, private readonly ProgramRepository $programRepository, private readonly ProgressRepository $progressRepository, private readonly SerieRepository $serieRepository, private readonly ProgramService $programService)
	{
		parent::__construct();
	}
	
	protected function configure()
	{
		$this
			->setDescription('Execute progress jobs')
			->addArgument('id', InputArgument::REQUIRED, 'The id of the program.')
		;
	}
	
	protected function execute(InputInterface $input, OutputInterface $output): int
	{
		
		//set_time_limit(180);
		
		$automation = $this->automationRepository->getAutomationByCommandAndByArguments('app:progress', ['id' => $input->getArgument('id')]);
		$program = $this->programRepository->getProgramById($input->getArgument('id'));
		
		if ($automation === null || $program === null) {
			return Command::FAILURE;
		}
		
		$this->progressRepository->deleteProgressByProgramAndByDate($program, new Date('today'));
		
		try {
			$project = $program->getProject();
			$this->programService->preload($program);
			$this->programService->load($program);
			
			$series = $this->serieRepository->getSeriesByProject($project);
			$values = $this->programService->progress($program);
			
			foreach ($values as $serieId => $value) {
				foreach ($series as $serie) {
					if ($serie->getId() == $serieId) {
						$progress = new Progress();
						$progress->setValue($value);
						$progress->setSerie($serie);
						$progress->setProgram($program);
						$this->entityManager->persist($progress);
						break;
					}
				}
			}
			
			$automation->setLastRun(new Date('today'));
			$nextRun = new Date($automation->getNextRun()->format('d-m-Y'));
			while ($nextRun < new Date('now')) {
				$nextRun->add('P' . $program->getParsedCode('frequency') . 'D');
			}
			$automation->setNextRun($nextRun);
			$this->entityManager->persist($automation);
			$this->entityManager->flush();
		} catch (\Exception) {
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>