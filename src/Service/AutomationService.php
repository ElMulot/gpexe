<?php

namespace App\Service;

use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\String\Slugger\SluggerInterface;

use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;
use PhpOffice\PhpSpreadsheet\IOFactory;
use App\Entity\Automation;
use App\Repository\VersionRepository;

class AutomationService
{
	
	private $targetDirectory;
	
	private $slugger;
	
	private $versionRespository;
	
	public function __construct(string $targetDirectory, SluggerInterface $slugger, VersionRepository $versionRespository)
	{
		$this->targetDirectory = $targetDirectory;
		$this->slugger = $slugger;
		$this->versionRespository = $versionRespository;
	}
	
	public function export($automation):? string
	{
		$project = $automation->getProject();
		$parsedCode = $automation->getParsedCode();
		$firstLine = $parsedCode['first_line'];
		
		
		$spreadsheet = new Spreadsheet();
		
		//set document properties
		$spreadsheet->getProperties()
			->setCreator('GPEXE')
			->setTitle('GPEXE Export - ' . date('d-m-Y'))
		;
		
		$versions = $this->versionRespository->getVersionsByProject($project);
		$sheet = $spreadsheet->getActiveSheet();
		
		//headers
		foreach ($parsedCode['fill'] as $fill) {
			$sheet->setCellValue($fill['to'] . $firstLine, $fill['field']);
		}
		
		//content
		$row = $firstLine + 1;
		foreach ($versions as $version) {
			
			foreach ($parsedCode['exclude'] as $exclude) {
				
			}
			
			
			foreach ($parsedCode['fill'] as $fill) {
				$sheet->setCellValue($fill['to'] . $row, $version->getPropertyValueToString($fill['field']));
			}
			$row++;
		}
		
		
		//save
		return $this->save($spreadsheet);

	}
	
	public function import($file): bool
	{
		$spreadsheet = IOFactory::load($file);
		$sheetData = $spreadsheet->getActiveSheet()->toArray(null, true, true, true);
	}
	
	private function save(Spreadsheet $spreadsheet): string
	{
		$safeFilename = $this->slugger->slug($spreadsheet->getProperties()->getTitle()) . '.xlsx'; 
		
		$writer = new Xlsx($spreadsheet);
		
		try {
			$writer->save($this->targetDirectory . '/'. $safeFilename);
		} catch (FileException $e) {
			// ... handle exception if something happens during file upload
		}
		
		return $safeFilename;
	}
}

?>