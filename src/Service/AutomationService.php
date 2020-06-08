<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\UploadedFile;
use PhpOffice\PhpSpreadsheet\Writer\Exception as WriterException;
use Symfony\Component\HttpFoundation\Session\Flash\FlashBagInterface;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;
use Symfony\Component\ExpressionLanguage\SyntaxError;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Entity\Automation;
use App\Entity\Version;
use App\Repository\VersionRepository;
use App\Service\FieldService;

class AutomationService
{
	
	private $targetDirectory;
	
	private $slugger;
	
	private $versionRespository;
	
	private $fieldService;
	
	private $expressionLanguage;
	
	private $flashBagInterface;
	
	public function __construct(string $targetDirectory, FlashBagInterface $flashBagInterface, SluggerInterface $slugger, VersionRepository $versionRespository, FieldService $fieldService)
	{
		$this->targetDirectory = $targetDirectory;
		$this->slugger = $slugger;
		$this->flashBagInterface = $flashBagInterface;
		$this->versionRespository = $versionRespository;
		$this->fieldService = $fieldService;
		$this->expressionLanguage = new ExpressionLanguage();
	}
	
	public function export($automation):? string
	{
		$this->flashBagInterface->add('info', 'Starting export...');
		$project = $automation->getProject();
		$parsedCode = $automation->getParsedCode();
		$fields = $this->fieldService->getFields($project);
		
		$firstLine = $parsedCode['first_line'];
		
		$spreadsheet = new Spreadsheet();
		
		//set document properties
		$spreadsheet->getProperties()
			->setCreator('GPEXE')
			->setTitle('GPEXE Export')
		;
		
		$versions = $this->versionRespository->getVersionsByProject($project);
		$sheet = $spreadsheet->getActiveSheet();
		
		//headers
		foreach ($parsedCode['write'] as $write) {
			if (array_key_exists($write['value'], $fields)) {
				$sheet->setCellValue($write['to'] . $firstLine, $fields[$write['value']]['title']);
			} else {
				$sheet->setCellValue($write['to'] . $firstLine, $write['value']);
			}
		}
		
		//content
		$row = $firstLine + 1;
		foreach ($versions as $version) {
			foreach ($parsedCode['exclude'] as $exclude) {
				if ($this->evaluate($exclude, $version) && $exclude != '') continue 2;
			}
			
			foreach ($parsedCode['write'] as $write) {
				if ($this->evaluate($write['condition'], $version)) {
					$sheet->setCellValue($write['to'] . $row, $this->evaluate($write['value'], $version));
				}
			}
			$row++;
		}
		
		$this->flashBagInterface->add('success', 'Export successful. ' . ($row - $firstLine - 1) . ' lines written');
		
		//save
		return $this->save($spreadsheet);

	}
	
	public function import($file): bool
	{
		$spreadsheet = IOFactory::load($file);
		$sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
	}
	
	private function evaluate(string $expression, Version $version)
	{
		if ($expression == '') {
			return true;
		} else {
			
			$expression = preg_replace_callback('/"*\/[^\/]*\/"*/', function($matches) {
					return '"' . preg_replace('/^"*([^"]*)"*$/', '$1', $matches[0]) . '"';
				},
				$expression
			);
			
			$expression = preg_replace('/(\\\\)/', '\\\\\\\\', $expression);
			
			$expression = preg_replace_callback('/(\w+\.\w+)/', function($matches) use ($version) {
				return '"' . $version->getPropertyValueToString($matches[1]) . '"';
			}, $expression);
			
			try {
				return $this->expressionLanguage->evaluate($expression);
			} catch (SyntaxError $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return true;
			}
		}
	}
	
	private function save(Spreadsheet $spreadsheet): string
	{
		$safeFilename = $this->slugger->slug($spreadsheet->getProperties()->getTitle()) . '.xlsx'; 
		
		$writer = new Xlsx($spreadsheet);
		
		
		try {
			$writer->save($this->targetDirectory . '/'. $safeFilename);
		} catch (WriterException $e) {
			$this->flashBagInterface->add('danger', $e->getMessage());
			return '';
		}
		
		return $safeFilename;
	}
}

?>