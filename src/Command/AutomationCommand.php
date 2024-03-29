<?php

namespace App\Command;

use App\Repository\AutomationRepository;
use App\Repository\CodificationElementRepository;
use App\Repository\MetadataElementRepository;
use App\Repository\ProgramRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\HttpKernel\KernelInterface;

#[AsCommand(name: 'app:cron')]
class AutomationCommand extends Command
{
	public function __construct(private readonly EntityManagerInterface $entityManager,
								private readonly KernelInterface $kernel,
								private readonly AutomationRepository $automationRepository,
								private readonly CodificationElementRepository $codificationElementRepository,
								private readonly MetadataElementRepository $metadataElementRepository,
								private readonly ProgramRepository $programRepository)
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

		$this->codificationElementRepository->deleteCodificationElementOrphans();
		$this->metadataElementRepository->deleteMetadataElementOrphans();
		$automations = $this->automationRepository->getAutomationsToRun();

		foreach ($automations as $automation) {
			$application = $this->getApplication()->find($automation->getCommand());
			$input = new ArrayInput($automation->getArguments());
			$result = (int)$application->run($input, $output) || $result;
		}

		return (int) $result;

	}
}

?>
