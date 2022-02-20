<?php

namespace App\Command;

use App\Repository\AutomationRepository;
use App\Repository\CodificationValueRepository;
use App\Repository\MetadataValueRepository;
use App\Repository\ProgramRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpKernel\KernelInterface;

class AutomationCommand extends Command
{
		protected static $defaultName = 'app:cron';

	public function __construct(private readonly EntityManagerInterface $entityManager, private readonly KernelInterface $kernel, private readonly AutomationRepository $automationRepository, private readonly CodificationValueRepository $codificationValueRepository, private readonly MetadataValueRepository $metadataValueRepository, private readonly ProgramRepository $programRepository)
	{
		parent::__construct();
	}

	protected function configure()
	{
		$this->setDescription('Execute cron jobs');
	}

	protected function execute(InputInterface $input, OutputInterface $output): int
	{
		$result = Command::FAILURE;

		$this->codificationValueRepository->deleteCodificationValueOrphans();
		$this->metadataValueRepository->deleteMetadataValueOrphans();
		$automations = $this->automationRepository->getAutomationsToRun();

		foreach ($automations as $automation) {
			$application = $this->getApplication()->find($automation->getCommand());
			$input = new ArrayInput($automation->getArguments());
			$result = (int)$application->run($input, $output) || $result;
		}

		return $result;

	}
}

?>
