<?php 

namespace App\Service\Excel;

use Box\Spout\Reader\Common\Creator\ReaderEntityFactory;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
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
	final const PHPSPREADSHEET	= 1;
	final const SPOUT				= 2;
	
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
// 	Method	|	  Library	   | Reader  | Writer
// 	---------------------------------------------------------------------------
// 	New	 	| Spout			   | Defined | Defined
// 	New		| PhpSpreadsheet   | n/a	 | Defined
// 	Open	| Spout			   | Defined | Defined (if readOnly !== false)
// 	Open	| PhpSpreadsheet   | Defined | Defined (if readOnly !== false)
// 	---------------------------------------------------------------------------
	
	public function __construct(ProgramCache $programCache)
	{
		$this->fileSystem = new Filesystem();
		$this->setLibrary($programCache->getOption('library'));
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
				$this->writer = match ($this->extensionName) {
					'.xlsx' => WriterEntityFactory::createXLSXWriter(),
					default => throw new Exception('Erreur : extension non supportée'),
				};
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
				$this->setDefaultStyle();
					
				$this->writer = match ($this->extensionName) {
					'.xlsx' => IOFactory::createWriter($this->_workbook, "Xlsx"),
					default => throw new Exception('Erreur : extension non supportée'),
				};
				
				break;
				
			default:
				throw new Exception('Erreur : librarie non définie');
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
						throw new Exception('Erreur : extension non supportée');
				}
				
				$this->reader->setShouldPreserveEmptyRows(true);
				$this->reader->setShouldFormatDates(false);
				$this->reader->open($file);
				
				if ($readOnly === false) {
					$this->setDefaultStyle();
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
				$this->setDefaultStyle();
				
				if ($readOnly == false) {
					$this->writer = match ($this->extensionName) {
						'.xlsx' => IOFactory::createWriter($this->_workbook, "Xlsx"),
						'.csv' => IOFactory::createWriter($this->_workbook, "Csv"),
						default => throw new Exception('Erreur : extension non supportée'),
					};
					
				}
				break;
				
			default:
				throw new Exception('Erreur : librarie non définie');
			
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
					try {
						$this->writer->save($this->getPath());
					} catch (Exception) {
						throw new Exception('Erreur : impossible d\'écrire sur le serveur');
					}
				}
				break;
				
			default:
				throw new Exception('Erreur : librarie non définie');
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
				throw new Exception('Erreur : librarie non définie');
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
				throw new Exception('Erreur : librarie non définie');
		}
		return $this;
	}
	
	public function getReadOnly(): bool
	{
		return $this->readOnly;
	}
	
	private function setLibrary($library)
	{
		$this->library = match ($library) {
			'spout' => self::SPOUT,
			'phpspreadsheet' => self::PHPSPREADSHEET,
			default => throw new Exception(sprintf('La librarie "%s" n\'est pas supportée.', $library)),
		};
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
	
	private function setDefaultStyle()
	{
		if ($this->readOnly === true) {
			return;
		}
		
		switch ($this->getLibrary()) {
			case self::SPOUT:
				$defaultStyle = (new StyleBuilder())
					->setFontName('Calibri')
					->setFontSize(11)
					->build()
				;
				$this->writer->setDefaultRowStyle($defaultStyle);
				break;
				
			case self::PHPSPREADSHEET:
				$this->_workbook->getDefaultStyle()->getFont()
					->setName('Calibri')
					->setSize(11)
				;
				break;
				
			default:
				throw new Exception('Erreur : librarie non définie');
				
		}
		
	}
	
}

?>