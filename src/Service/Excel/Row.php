<?php 

namespace App\Service\Excel;

use Box\Spout\Common\Entity\Style\Color;
use Box\Spout\Common\Entity\Cell as SpoutCell;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class Row
{
	
	private $_row;
	
	private $rowAddress;
	
	private $sheet;
	
	public function __construct($_row, int $rowAddress, Sheet $sheet)
	{
		$this->_row = $_row;
		$this->sheet = $sheet;
		$this->rowAddress = $rowAddress;
	}
	
	public function add(): self
	{
		$this->sheet->getWorkbook()->addRow($this->_row);
		return $this;
	}
	
	public function getAddress(): int
	{
		return $this->rowAddress;
	}
	
	public function getCell(string $colAddress)
	{
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				$colIndex = Coordinate::columnIndexFromString($colAddress) - 1;
				if ($_cell = $this->_row->getCellAtIndex($colIndex)) {
					return new Cell($_cell, $colAddress, $this);
				} elseif ($this->getSheet()->getWorkbook()->getReadOnly() === false) {
					$this->_row->setCellAtIndex(WriterEntityFactory::createCell(''), $colIndex);
					return new Cell($this->_row->getCellAtIndex($colIndex), $colAddress, $this);
				} else {
					return new Cell(new SpoutCell(''), $colAddress, $this);
				}
				break;
				
			case Workbook::PHPSPREADSHEET:
				return new Cell($this->_row->getWorksheet()->getCell($colAddress . $this->getAddress()), $colAddress, $this);
			default:
				throw new Exception('Library not defined.');
		}
	}
	
	public function getSheet()
	{
		return $this->sheet;
	}
	
	public function setBackgroundColor($color): self
	{
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
			
				$style = (new StyleBuilder())
					->setBackgroundColor($color)
					->build()
				;
				$this->_row->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->_row
					->getWorksheet()
					->getStyle('A' . $this->getAddress() . ':Z' . $this->getAddress())
					->getFill()
					->setFillType(Fill::FILL_SOLID)
					->getStartColor()
					->setARGB($color)
				;
				break;
				
			default:
				throw new Exception('Library not defined.');
			
		}
		
		return $this;
		
	}
	
	public function setBorder($color): self
	{
		
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
			
				$border = (new BorderBuilder())
					->setBorderBottom($color, \Box\Spout\Common\Entity\Style\Border::WIDTH_THIN)
					->setBorderTop($color, \Box\Spout\Common\Entity\Style\Border::WIDTH_THIN)
					->setBorderRight($color, \Box\Spout\Common\Entity\Style\Border::WIDTH_THIN)
					->setBorderLeft($color, \Box\Spout\Common\Entity\Style\Border::WIDTH_THIN)
					->build()
				;
				$style = (new StyleBuilder())
					->setBorder($border)
					->build()
				;
				$this->_row->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->_row
					->getWorksheet()
					->getStyle('A' . $this->getAddress() . ':Z' . $this->getAddress())
					->getBorders()
					->getAllBorders()
					->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN)
					->getColor()
					->setARGB($color)
				;
				break;
				
			default:
				throw new Exception('Library not defined.');
			
		}
		
		return $this;
		
	}
	
	public function setFormatHeader(): self
	{
		
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				
				$border = (new BorderBuilder())
					->setBorderBottom(Color::BLACK, \Box\Spout\Common\Entity\Style\Border::WIDTH_THIN)
					->build()
				;
				$style = (new StyleBuilder())
					->setFontBold()
					->setBorder($border)
					->build()
				;
				$this->_row->setStyle($style);
				break;
				
			case Workbook::PHPSPREADSHEET:
				
				$this->_row
					->getWorksheet()
					->getStyle('A' . $this->getAddress() . ':' . $this->_row->getWorksheet()->getHighestColumn() . $this->getAddress())
					->getBorders()
					->getBottom()
					->setBorderStyle(\PhpOffice\PhpSpreadsheet\Style\Border::BORDER_THIN)
					->getColor()
					->setARGB(Color::BLACK)
				;
				$this->_row
					->getWorksheet()
					->getStyle('A' . $this->getAddress() . ':' . $this->_row->getWorksheet()->getHighestColumn() . $this->getAddress())
					->getFont()->setBold(true)
				;
				break;
				
			default:
				throw new Exception('Library not defined.');
				
		}
		
		return $this;
	}
	
	public function addComment(string $value): self
	{
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
//				$this->getCell('A')->setValue($this->getCell('A')->getValue() . "\r\n" . $value);
				break;
				
			case Workbook::PHPSPREADSHEET:
				$comment = $this->_row
					->getWorksheet()
					->getComment('A' . $this->getAddress())
				;
				$comment->getText()->createTextRun($value);
				$numberOfLines = max(1, substr_count($comment->getText(), "\r\n"));
				$comment
					->setWidth("500px")
					->setHeight(20*$numberOfLines . "px")
				;
				break;
				
			default:
				throw new Exception('Library not defined.');
				
		}
		
		return $this;
		
	}
	
}

?>