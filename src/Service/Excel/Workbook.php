<?php 

namespace App\Service\Excel;


use Box\Spout\Reader\XLSX\Sheet as SpoutSheet;
use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Writer\Exception\WriterException as SpoutWriterException;

use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet as PhpSpreadsheetSheet;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx as Writer;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Writer\Exception as PhpSpreadsheetWriterException;

use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;

class Workbook
{
	const PHPSPREADSHEET	= 1;
	const SPOUT				= 2;
	
	private $slugger;
	
	private $library;
	
	private $mainColumn;
	
	private $commentsColumn;
	
	private $dirName;
	
	private $fileName;
	
	private $workbook;
	
	private $reader;
	
	private $writer;
	
	public function __construct(string $library, string $mainColumn, string $commentsColumn)
	{
		
		if ($library == 'spout') {
			$this->library = self::SPOUT;
		} elseif ($library == 'phpspreadsheet') {
			$this->library = self::PHPSPREADSHEET;
		} else {
			throw new \Exception(sprintf(
				'Library "%s" is not supported.',
				$library
				));
		}
		
		$this->mainColumn = $mainColumn;
		$this->commentsColumn = $commentsColumn;
		
	}
	
	public function new(string $file)
	{
		if ($this->library == self::SPOUT) {
			
			$this->writer = WriterEntityFactory::createXLSXWriter();
			
		} elseif ($this->library == self::PHPSPREADSHEET) {
			
			$this->workook = new Spreadsheet();
			$this->workook->getProperties()
				->setCreator('GPEXE')
				->setTitle($fileName)
			;
		}
		
		$this->setfileName($file);
	}
	
	
	public function open(string $file, $readOnly = false)
	{
		
		if ($this->library == self::SPOUT) {
			$this->reader = ReaderEntityFactory::createReaderFromFile($file);
			$this->reader->setShouldPreserveEmptyRows(true);
			$this->reader->open($file);
			
			if ($readOnly === false) {
				$this->writer = WriterEntityFactory::createXLSXWriter();
			}
			
		} elseif ($this->library == self::PHPSPREADSHEET) {
		
			$this->reader = IOFactory::createReaderForFile($file);
			$this->workbook = $this->reader->load($file);
			
			if ($readOnly === false) {
				$this->writer = IOFactory::createWriter($this->workbook, "Xlsx");
			}
			
		}
		
		$this->setfileName($file);
		
	}
	
	public function save(): self
	{
		
		if ($this->filesystem->exists($this->dirName) == false) {
			try {
				$this->filesystem->mkdir($this->dirName);
			} catch (IOExceptionInterface $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
			}
		}
		
		if ($this->library == self::SPOUT) {
			try {
				$this->writer->save($this->getPath());
			} catch (SpoutWriterException $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return '';
			}
			$this->reader->close();
			$this->writer->close();
		} elseif ($this->library == self::PHPSPREADSHEET) {
			try {
				$this->writer->save($this->getPath());
			} catch (PhpSpreadsheetWriterException $e) {
				$this->flashBagInterface->add('danger', $e->getMessage());
				return '';
			}
			$this->reader->close();
			$this->writer->close();
		}
		
		return $this;
		
	}
	
	private function setPath(string $file): self
	{
		$slugger = new AsciiSlugger();
		$pathParts = pathinfo($slugger->slug($file));
		
		$this->dirName = $pathParts['dirname'];
		$this->fileName = $pathParts['filename'] . '.xlsx';
		return $this;
	}

	public function getLibrary()
	{
		return $this->library;
	}
	
	public function getMainColumn(): string
	{
		return $this->mainColumn;
	}
	
	public function getCommentsColumn(): string
	{
		return $this->commentsColumn;
	}
	
	public function getFilename(): string
	{
		return $this->fileName;
	}
	
	public function getPath(): string
	{
		return $this->dirName . '/ ' . $this->fileName;
	}
	
	public function getSheet(?int $index = null): ?Sheet
	{
		if ($this->library == self::SPOUT) {
			
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
			
		} elseif ($this->library == self::PHPSPREADSHEET) {
			
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
		}
		
		return null;
	}
	
	
}

?>