<?php 

namespace App\Service\Excel;

use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Common\Entity\Style\Border;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Style\Fill;


class Cell
{
	
	private $cell;
	
	private $row;
	
	public function __construct($cell, string $colAddress, Row $row)
	{
		$this->cell = $cell;
		$this->row = $row;
		$this->colAddress = $colAddress;
	}
	
	public function getColIndex(): string
	{
		return Coordinate::columnIndexFromString($this->colAddress);
	}
	
	public function getColAddress(): string
	{
		return $this->colAddress;
	}
	
	public function getAddress(): string
	{
		return $this->colAddress . $this->row->getAddress();
	}
	
	public function getValue()
	{
		return $this->cell->getValue();
	}
	
	public function setValue($value): self
	{
		$this->cell->setValue($value);
		return $this;
	}
	
	public function isEmpty(): bool
	{
		return ($this->cell->getValue() === '');
	}
	
	public function getRow(): Row
	{
		return $this->row;
	}
	
	public function addComment(string $value): self
	{
		if ($this->sheet->getWorkbook()->getLibrary() === Workbook::SPOUT) {
			
			$commentsColumn = $this->row->getSheet()->getWorkbook()->getCommentsColumn();
			
			$this->row->getCell($commentsColumn)->setValue($this->row->getCell($commentsColumn)->getValue() . "\r\n" . $value);
			
		} else {
			
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

		}
		
		return $this;
	
	}
	
	public function setBackgroundColor($color): self
	{
		if ($this->sheet->getWorkbook()->getLibrary() === Workbook::SPOUT) {
			
			$style = (new StyleBuilder())
				->setBackgroundColor($color)
				->build()
			;
			
			$this->cell->setStyle($style);
			
		} else {
			
			$this->getParent()
				->getParent()
				->getStyle($this->getAddress())
				->getFill()
				->setFillType(Fill::FILL_SOLID)
				->getStartColor()
				->setRGB($color)
			;
			
		}
		
		return $this;
		
	}
	
	public function setBorder($color): self
	{
		if ($this->sheet->getWorkbook()->getLibrary() === Workbook::SPOUT) {
			
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
				
			$this->cell->setStyle($style);
			
		} else {
			
			$this->getParent()
				->getParent()
				->getStyle($this->getAddress())
				->getBorders()
				->getAllBorders()
				->setBorderStyle(Border::BORDER_THIN)
				->getColor()
				->setRGB($color)
			;
			
		}
		
		return $this;
		
	}
}

?>