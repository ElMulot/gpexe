<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use App\Entity\Program;
use App\Entity\Progress;
use App\Repository\AutomationRepository;
use App\Repository\MetadataValueRepository;
use App\Repository\CodificationValueRepository;
use App\Service\ProgramService;
use App\Helpers\Date;
use Doctrine\ORM\EntityManagerInterface;

class AutomationCommand extends Command
{
	private $entityManager;
	
	private $automationRepository;
	
	private $codificationValueRepository;
	
	private $metadataValueRepository;
	
	protected static $defaultName = 'app:cron';
	
	public function __construct(EntityManagerInterface $entityManager, AutomationRepository $automationRepository, CodificationValueRepository $codificationValueRepository, MetadataValueRepository $metadataValueRepository)
	{
		$this->entityManager = $entityManager;
		$this->automationRepository = $automationRepository;
		$this->codificationValueRepository = $codificationValueRepository;
		$this->metadataValueRepository = $metadataValueRepository;
		
		parent::__construct();
	}
	
	protected function configure()
	{
		$this->setName('app:cron');
		$this->setDescription('Execute cron jobs');
	}
	
	protected function execute(InputInterface $input, OutputInterface $output): int
	{

		$output->writeln('TEST');
		return 0;
		
		$this->codificationValueRepository->deleteCodificationValueOrphans();
		$this->metadataValueRepository->deleteMetadataValueOrphans();
		$automations = $this->automationRepository->getAutomationsToRun();
		
		foreach ($automations as $automation) {
			switch ($automation->getRoute()) {
				case ProgramService::class . '::automation':
					
					$program = $this->getDoctrine()->getRepository(Program::class)->find($automation->getParameters()['program'] ?? 0);
					if ($program === null) {
						break;
					}
					
					$this->getDoctrine()->getRepository(Progress::class)->deleteProgressByProgramAndByDate($program, $automation->getNextRun());
					
					if (call_user_func_array(array($this->programService, 'automation'), [$program])) {
						
						$automation->setLastRun(new Date('now'));
						$nextRun = clone $automation->getNextRun();
						while ($nextRun < (new Date('now'))->add('P' . $program->getParsedCode('frequency') . 'D')) {
							$automation->setNextRun($nextRun->add('P' . $program->getParsedCode('frequency') . 'D'));
						}
						$this->entityManager->persist($automation);
					}
					break;
			}
		}
		
		$this->entityManager->flush();
		
	}
}

?>