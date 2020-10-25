<?php 

namespace App\Service\Excel;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\Filesystem\Filesystem;
use Box\Spout\Reader\XLSX\Sheet as SpoutSheet;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet as PhpSpreadsheetSheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Symfony\Component\String\Slugger\AsciiSlugger;

class Workbook
{
	const PHPSPREADSHEET	= 1;
	const SPOUT				= 2;
	
	private $fileSystem;
	
	private $library;
	
	private $firstRow;
	
	private $mainColumn;
	
	private $commentsColumn;
	
	private $dateFormat;
	
	private $readOnly;
	
	private $dirName;
	
	private $fileName;
	
	private $workbook;
	
	private $reader;
	
	private $writer;
	
	//---------------------------------------------------------------------------
	// Method	|      Library     | Reader  | Writer
	//---------------------------------------------------------------------------
	// New	 	| Spout            | Defined | Defined
	// New		| PhpSpreadsheet   | n/a     | Defined
	// Open		| Spout            | Defined | Defined (if readOnly !== false)
	// Open		| PhpSpreadsheet   | Defined | Defined (if readOnly !== false)
	//---------------------------------------------------------------------------
	
	public function __construct(string $library, int $firstRow, $mainColumn = 'A', $commentsColumn = 'Z', string $dateFormat = 'd/m/Y')
	{
		$this->fileSystem = new Filesystem();
		
		if ($mainColumn === null) $mainColumn = 'A';
		if ($commentsColumn === null) $commentsColumn = 'Z';
		if ($dateFormat === null) $dateFormat = 'd/m/Y';
		
		switch ($library) {
			case 'spout':
				$this->library = self::SPOUT;
				$this->commentsColumn = $commentsColumn;
				break;
		
			case 'phpspreadsheet':
				$this->library = self::PHPSPREADSHEET;
				break;
		
			default:
				throw new Exception(sprintf('Library "%s" is not supported.', $library));
		}
		
		$this->firstRow = $firstRow;
		if ($mainColumn != false) {
			$this->mainColumn = $mainColumn;
		}
		$this->dateFormat = $dateFormat;
		
	}
	
	public function new(string $fileName, string $dirName)
	{
		$slugger = new AsciiSlugger();
		$this->fileName = $slugger->slug($fileName) . '.xlsx';
		$this->dirName = $dirName;
		$this->readOnly = false;
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				$this->writer = WriterEntityFactory::createXLSXWriter();
				$this->writer->openToFile($this->getPath());
				$this->writer->close();
				
				$this->open($this->getPath());
				break;
			
			case self::PHPSPREADSHEET:			
				$this->workbook = new Spreadsheet();
				$this->workbook->getProperties()
					->setCreator('GPEXE')
					->setTitle($fileName)
				;
				
				$this->writer = IOFactory::createWriter($this->workbook, "Xlsx");
				break;
				
			default:
				throw new Exception('Library not defined.');
		}
	}
	
	
	public function open(string $file, $readOnly = false)
	{
		$this->readOnly = $readOnly;
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				$this->reader = ReaderEntityFactory::createReaderFromFile($file);
				$this->reader->setShouldPreserveEmptyRows(true);
				$this->reader->open($file);
				
				if ($readOnly === false) {
					$this->writer = WriterEntityFactory::createXLSXWriter();
					$this->writer->openToFile($file . '.tmp');
					foreach ($this->reader->getSheetIterator() as $sheetIndex => $sheet) {
						if ($sheetIndex !== 1) {
							$this->writer->addNewSheetAndMakeItCurrent();
						}
						foreach ($sheet->getRowIterator() as $row) {
							$this->writer->addRow($row);
						}
					}
				}
				break;
			
			case self::PHPSPREADSHEET:
				$this->reader = IOFactory::createReaderForFile($file);
				$this->workbook = $this->reader->load($file);
				
				if ($readOnly === false) {
					$this->writer = IOFactory::createWriter($this->workbook, "Xlsx");
				}
				break;
				
			default:
				throw new Exception('Library not defined.');
			
		}
		
		$this->setPath($file);
		
	}
	
	public function save(): self
	{
		
		if ($this->fileSystem->exists($this->dirName) == false) {
			try {
				$this->fileSystem->mkdir($this->dirName);
			} catch (IOExceptionInterface $e) {
				throw $e;
			}
		}
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				if ($this->reader) {
					$this->reader->close();
				}
				if ($this->writer) {
					$this->writer->close();
					$this->fileSystem->remove($this->getPath());
					$this->fileSystem->rename($this->getPath() . '.tmp', $this->getPath());
				}
				break;
				
			case self::PHPSPREADSHEET:
				if ($this->writer) {
					$this->writer->save($this->getPath());
				}
				break;
				
			default:
				throw new Exception('Library not defined.');
		}
		return $this;
		
	}
	
	private function setPath(string $file): self
	{
		$pathParts = pathinfo($file);
		
		$this->dirName = $pathParts['dirname'] . '/';
		$this->fileName = $pathParts['filename'] . '.xlsx';
		return $this;
	}

	public function getLibrary()
	{
		return $this->library;
	}
	
	public function getFirstRow(): string
	{
		return $this->firstRow;
	}
	
	public function getMainColumn(): string
	{
		return $this->mainColumn;
	}
	
	public function getCommentsColumn(): string
	{
		return $this->commentsColumn;
	}
	
	public function getDateFormat(): string
	{
		return $this->dateFormat;
	}
	
	public function getFilename(): string
	{
		return $this->fileName;
	}
	
	public function getPath(): string
	{
		return $this->dirName . $this->fileName;
	}
	
	public function getSheet(?int $index = null): ?Sheet
	{
		switch ($this->getLibrary()) {
			case self::SPOUT:
			
				if ($this->reader) {
					if ($index === null) {
						foreach ($this->reader->getSheetIterator() as $sheet) {
							if ($sheet->isActive()) {
								return new Sheet($sheet, $this);
							}
						}
					} else {
						foreach ($this->reader->getSheetIterator() as $sheet) {
							if ($sheet->getIndex() == $index) {
								if ($this->writer) {
									$this->writer->setCurrentSheet($sheet);
								}
								return new Sheet($sheet, $this);
							}
						}
					}
				}
				break;
			
			case self::PHPSPREADSHEET:
			
				if ($this->workbook) {
					
					if ($index === null) {
						return new Sheet($this->workbook->getActiveSheet(), $this);
					} else {
						$sheet = $this->workbook->getSheet($index);
						if ($sheet) {
							return new Sheet($sheet, $this);
						}
					}
				}
				break;
				
			default:
				throw new Exception('Library not defined.');
		}
		
		return null;
	}
	
	public function addRow($rowItem): self
	{
		switch ($this->getLibrary()) {
			case self::SPOUT:
				if ($this->writer) {
					$this->writer->addRow($rowItem);
				}
				break;
			case self::PHPSPREADSHEET:
				break;
			default:
				throw new Exception('Library not defined.');
		}
		return $this;
	}
	
	public function getReadOnly(): bool
	{
		return $this->readOnly;
	}
	
}

?>