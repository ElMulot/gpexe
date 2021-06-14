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
use Symfony\Component\HttpFoundation\RequestStack;
class ProgressCommand extends Command
{
	private $entityManager;
	
	private $flashBag;
	
	private $automationRepository;
	
	private $programRepository;
	
	private $progressRepository;
	
	private $serieRepository;
	
	private $programService;
	
	protected static $defaultName = 'app:progress';
	
	public function __construct(EntityManagerInterface $entityManager, RequestStack $requestStack, AutomationRepository $automationRepository, ProgramRepository $programRepository, ProgressRepository $progressRepository, SerieRepository $serieRepository, ProgramService $programService)
	{
		$this->entityManager = $entityManager;
		$this->flashBag = $requestStack->getSession()->getFlashBag();
		$this->automationRepository = $automationRepository;
		$this->programRepository = $programRepository;
		$this->progressRepository = $progressRepository;
		$this->serieRepository = $serieRepository;
		$this->programService = $programService;
		
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
        
		set_time_limit(180);
        
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
			$this->flashBag->clear();
		} catch (\Exception $e) {
			$this->flashBag->clear();
			return Command::FAILURE;
		}
		
		return Command::SUCCESS;
	}
}

?>