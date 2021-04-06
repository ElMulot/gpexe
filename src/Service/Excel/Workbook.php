<?php 

namespace App\Service\Excel;

use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Filesystem\Exception\IOExceptionInterface;
use Symfony\Component\String\Slugger\AsciiSlugger;
use App\Service\Code\ProgramCache;
use Spatie\Regex\Regex;
use Spatie\Regex\MatchResult;

class Workbook
{
	const PHPSPREADSHEET	= 1;
	const SPOUT				= 2;
	
	private $fileSystem;
	
	private $library;
	
	private $firstRow;
	
	private $dateFormatInput;
	
	private $dateFormatOutput;
	
	private $readOnly;
	
	private $dirName;
	
	private $fileName;
	
	private $extensionName;
	
	private $_workbook;
	
	private $reader;
	
	private $writer;
	
// 	---------------------------------------------------------------------------
// 	Method	|      Library     | Reader  | Writer
// 	---------------------------------------------------------------------------
// 	New	 	| Spout            | Defined | Defined
// 	New		| PhpSpreadsheet   | n/a     | Defined
// 	Open	| Spout            | Defined | Defined (if readOnly !== false)
// 	Open	| PhpSpreadsheet   | Defined | Defined (if readOnly !== false)
// 	---------------------------------------------------------------------------
	
	public function __construct(ProgramCache $programCache)
	{
		$this->fileSystem = new Filesystem();
		$this->setLibrary($programCache->getOption('library'));
		$this->setFirstRow($programCache->getParameter('first_row'));
		$this->setDateFormatInput($programCache->getOption('date_format_input'));
		$this->setDateFormatOutput($programCache->getOption('date_format_output'));
	}
	
	public function new(string $fileName, string $dirName, string $extensionName = '.xlsx')
	{
		$slugger = new AsciiSlugger();
		
		$this->dirName = $dirName;
		$this->fileName = $slugger->slug($fileName);
		$this->extensionName = $extensionName;
		
		$this->readOnly = false;
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				switch ($this->extensionName) {
					case '.xlsx':
						$this->writer = WriterEntityFactory::createXLSXWriter();
						break;
					default:
						throw new Exception('Extension non supportée.');
				}
				$this->writer->openToFile($this->getPath());
				$this->writer->close();
				
				$this->open($this->getPath());
				break;
			
			case self::PHPSPREADSHEET:			
				$this->_workbook = new Spreadsheet();
				$this->_workbook->getProperties()
					->setCreator('GPEXE')
					->setTitle($fileName)
				;
				
				switch ($this->extensionName) {
					case '.xlsx':
						$this->writer = IOFactory::createWriter($this->_workbook, "Xlsx");
						break;
					default:
						throw new Exception('Extension non supportée.');
				}
				
				break;
				
			default:
				throw new Exception('Librarie non définie.');
		}
	}
	
	
	public function open(string $file, $readOnly = false)
	{
		$this->readOnly = $readOnly;
		$this->setPath($file);
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				switch ($this->extensionName) {
					case '.xlsx':
						$this->reader = ReaderEntityFactory::createXLSXReader();
						break;
					case '.csv':
						$this->reader = ReaderEntityFactory::createCSVReader();
						$this->reader->setFieldDelimiter(";");
						break;
					default:
						throw new Exception('Extension non supportée.');
				}
				
				$this->reader->setShouldPreserveEmptyRows(true);
				$this->reader->setShouldFormatDates(false);
				$this->reader->open($file);
				
				if ($readOnly === false) {
					$this->writer = WriterEntityFactory::createXLSXWriter();
					$this->writer->openToFile($file . '.tmp');
					foreach ($this->reader->getSheetIterator() as $sheetIndex => $sheet) {
						if ($sheetIndex !== 1) {
							$this->writer->addNewSheetAndMakeItCurrent();
						}
// 						This feature not work with dates in cell due to a dysfunction of box/spout
// 						foreach ($sheet->getRowIterator() as $row) {
// 							$this->writer->addRow($row);
// 						}
					}
				}
				break;
			
			case self::PHPSPREADSHEET:
				$this->reader = IOFactory::createReaderForFile($file);
				$this->_workbook = $this->reader->load($file);
				
				if ($readOnly == false) {
					switch ($this->extensionName) {
						case '.xlsx':
							$this->writer = IOFactory::createWriter($this->_workbook, "Xlsx");
							break;
						case '.csv':
							$this->writer = IOFactory::createWriter($this->_workbook, "Csv");
							break;
						default:
							throw new Exception('Extension non supportée.');
					}
					
				}
				break;
				
			default:
				throw new Exception('Librarie non définie.');
			
		}
		
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
				throw new Exception('Librarie non définie.');
		}
		return $this;
		
	}
	
	private function setPath(string $file): self
	{
		$pathParts = pathinfo($file);
		
		$this->dirName = $pathParts['dirname'] . '/';
		$this->fileName = $pathParts['filename'];
		$this->extensionName = '.' . $pathParts['extension'];
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
	
	public function getDateFormatInput(): string
	{
		return $this->dateFormatInput;
	}
	
	public function getDateFormatOutput(): string
	{
		return $this->dateFormatOutput;
	}
	
	public function getFilename(): string
	{
		return $this->fileName;
	}
	
	public function getExtension(): string
	{
		return $this->extensionName;
	}
	
	public function getPath(): string
	{
		return $this->dirName . $this->fileName . $this->extensionName;
	}
	
	public function getSheet(?int $index = null): ?Sheet
	{
		switch ($this->getLibrary()) {
			case self::SPOUT:
			
				if ($this->reader) {
					if ($index === null) {
						foreach ($this->reader->getSheetIterator() as $_sheet) {
							if ($_sheet->isActive()) {
								return new Sheet($_sheet, $this);
							}
						}
					} else {
						foreach ($this->reader->getSheetIterator() as $_sheet) {
							if ($_sheet->getIndex() == $index) {
								if ($this->writer) {
									$this->writer->setCurrentSheet($_sheet);
								}
								return new Sheet($_sheet, $this);
							}
						}
					}
				}
				break;
			
			case self::PHPSPREADSHEET:
			
				if ($this->_workbook) {
					
					if ($index === null) {
						return new Sheet($this->_workbook->getActiveSheet(), $this);
					} else {
						$_sheet = $this->_workbook->getSheet($index);
						if ($_sheet) {
							return new Sheet($_sheet, $this);
						}
					}
				}
				break;
				
			default:
				throw new Exception('Librarie non définie.');
		}
		
		return null;
	}
	
	public function addRow($_row): self
	{
		switch ($this->getLibrary()) {
			case self::SPOUT:
				if ($this->writer) {
					$this->writer->addRow($_row);
				}
				break;
			case self::PHPSPREADSHEET:
				break;
			default:
				throw new Exception('Librarie non définie.');
		}
		return $this;
	}
	
	public function getReadOnly(): bool
	{
		return $this->readOnly;
	}
	
	private function setLibrary($library)
	{
		switch ($library) {
			case 'spout':
				$this->library = self::SPOUT;
				break;
				
			case 'phpspreadsheet':
				$this->library = self::PHPSPREADSHEET;
				break;
			
			default:
				throw new Exception(sprintf('La librarie "%s" n\'est pas supportée.', $library));
		}
	}
					
	private function setFirstRow($firstRow)
	{
		if (is_int($firstRow)) {
			$this->firstRow = (int)$firstRow;
		} else {
			$this->firstRow = 1;
		}
	}
					
	private function setDateFormatInput(string $format)
	{
		if (Regex::match('/^[djDlSzFMmnYyaAhgGHisvu\s#;:\/\.,\-\(\)]+$/', $format)->hasMatch()) {
				$this->dateFormatInput = $format;
		} else {
			$this->dateFormatInput = 'd-m-Y';
		}
	}

	private function setDateFormatOutput(string $format)
	{
		switch ($this->getLibrary()) {
			case self::SPOUT:
				if (Regex::match('/^[djDYyFMmn\s#;:\/\.,\-\(\)]+$/', $format)->hasMatch()) {
					$this->dateFormatOutput = $format;
				} else {
					$this->dateFormatOutput = 'd-m-Y';
				}
				break;
			case self::PHPSPREADSHEET:
				if (Regex::match('/^[djDYyFMmn\s#;:\/\.,\-\(\)]+$/', $format)->hasMatch()) {
					$this->dateFormatOutput = DateHelper::getExcelDateFormat($format);
				} else {
					$this->dateFormatOutput = 'dd-mm-yyyy';
				}
				break;
		}
	}
	
}

?>