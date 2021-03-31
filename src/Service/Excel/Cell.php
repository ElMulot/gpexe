<?php 

namespace App\Service\Excel;

use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Shared\Date as DateManager;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use App\Helpers\Date;


class Cell
{
	
	private $_cell;
	
	private $row;
	
	public function __construct($_cell, string $colAddress, Row $row)
	{
		$this->_cell = $_cell;
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
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				if ($this->_cell->getValue() instanceof \DateTimeInterface) {
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormat();
					return $this->_cell->getValue()->format($dateFormat);
				} else {
					return $this->_cell->getValue();
				}
			case Workbook::PHPSPREADSHEET:
				return $this->_cell->getCalculatedValue();
			default:
				throw new Exception('Library not defined.');
		}
	}
	
	public function setValue($value): self
	{
		$this->_cell->setValue($value);
		return $this;
	}
	
	public function isEmpty(): bool
	{
		return ($this->_cell->getValue() == false);
	}
	
	public function getRow(): Row
	{
		return $this->row;
	}
	
	public function addComment(string $value): self
	{
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
// 				$this->row->addComment($value);
				break;
				
			case Workbook::PHPSPREADSHEET:
			
				$comment = $this->_cell
					->getWorksheet()
					->getComment($this->getAddress())
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
	
	public function setBackgroundColor($color): self
	{
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
			
				$style = (new StyleBuilder())
					->setBackgroundColor($color)
					->build()
				;
				
				$this->_cell->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->_cell
					->getWorksheet()
					->getStyle($this->getAddress())
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
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
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
					
				$this->_cell->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
				
				$this->_cell
					->getWorksheet()
					->getStyle($this->getAddress())
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
	
	public function getDateTime(): ?\DateTimeInterface
	{
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				if ($this->_cell->getValue() instanceof \DateTimeInterface) {
					return $this->_cell->getValue();
				} else {
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormat();
					if ($date = Date::fromFormat($this->_cell->getValue(), $dateFormat)) {
						return $date;
					}
				}
				break;
				
			case Workbook::PHPSPREADSHEET:
				if (DateManager::isDateTime($this->_cell)) {
					return DateManager::excelToDateTimeObject($this->getValue());
				} else {
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormat();
					if ($date = Date::fromFormat($this->getValue(), $dateFormat)) {
						return $date;
					}
				}
				break;
				
			default:
				throw new Exception('Library not defined.');
		}
		return null;
	}
}

?>