<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use Box\Spout\Writer\Common\Creator\WriterEntityFactory;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Common\Entity\Style\Border;
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
		$this->sheet->getWorkbook()->addRow($this->row);
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
				if ($cell = $this->row->getCellAtIndex($colIndex)) {
					return new Cell($cell, $colAddress, $this);
				} elseif ($this->getSheet()->getWorkbook()->getReadOnly() === false) {
					$this->row->setCellAtIndex(WriterEntityFactory::createCell(''), $colIndex);
					return new Cell($this->row->getCellAtIndex($colIndex), $colAddress, $this);
				}
				break;
				
			case Workbook::PHPSPREADSHEET:
				return new Cell($this->row->getWorksheet()->getCell($colAddress . $this->rowAddress), $colAddress, $this);
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
				$this->row->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->getParent()
					->getParent()
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
					->setBorderBottom($color)
					->setBorderTop($color)
					->setBorderRight($color)
					->setBorderLeft($color)
					->build()
				;
				$style = (new StyleBuilder())
					->setBorder($border)
					->build()
				;
				$this->row->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->getParent()
					->getParent()
					->getStyle('A' . $this->getAddress() . ':Z' . $this->getAddress())
					->getBorders()
					->getAllBorders()
					->setBorderStyle(Border::BORDER_THIN)
					->getColor()
					->setARGB($color)
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
				$commentsColumn = $this->row->getSheet()->getWorkbook()->getCommentsColumn();
				$this->row->getCell($commentsColumn)->setValue($this->row->getCell($commentsColumn)->getValue() . "\r\n" . $value);
				break;
				
			case Workbook::PHPSPREADSHEET:
				$mainColumn = $this->row->getSheet()->getWorkbook()->getMainColumn();
				$comment = $this->getParent()
					->getParent()
					->getComment($mainColumn . $this->row->getAddress())
				;
				$comment->getText()->createTextRun($value . "\r\n");
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