<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Common\Entity\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;

class Row
{
	
	private $row;
	
	private $sheet;
	
	public function __construct($row, Sheet $sheet)
	{
		$this->row = $row;
		$this->sheet = $sheet;
	}
	
	public function getAddress(): int
	{
		return $this->rowIterator->key() + 1;
	}
	
	public function getCell(string $colAddress)
	{
		if ($this->sheet->getWorkbook()->getLibrary() === Workbook::SPOUT) {
			return new Cell($this->row->getCellAtIndex(Coordinate::columnIndexFromString($colAddress)), $colAddress, $this);
		} else {
			return new Cell($this->row->getCellIterator($colAddress)->current(), $colAddress, $this);
		}
	}
	
	public function getSheet()
	{
		return $this->sheet;
	}
	
	public function setBackgroundColor($color): self
	{
		if ($this->sheet->getWorkbook()->getLibrary() === Workbook::SPOUT) {
			
			$style = (new StyleBuilder())
				->setBackgroundColor($color)
				->build()
			;
			
			$this->row->setStyle($style);
			
		} else {
			
			$this->getParent()
				->getParent()
				->getStyle('A' . $this->getAddress() . ':Z' . $this->getAddress())
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
			
			$this->row->setStyle($style);
			
		} else {
			
			$this->getParent()
				->getParent()
				->getStyle('A' . $this->getAddress() . ':Z' . $this->getAddress())
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