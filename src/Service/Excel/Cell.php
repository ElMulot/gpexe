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
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormatInput();
					return $this->_cell->getNumberFormat()->setFormatCode($dateFormat);
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
		
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				if ($value instanceof Date) {
					if ($value->isValid() === true) {
						$this->_cell->setValue($value->format($this->row->getSheet()->getWorkbook()->getDateFormatOutput()));
						return $this;
					}
				} elseif ($value instanceof \DateTimeInterface) {
					$this->_cell->setValue($value->format($this->row->getSheet()->getWorkbook()->getDateFormatOutput()));
					return $this;
				}
				
				$this->_cell->setValue($value);
				break;
				
			case Workbook::PHPSPREADSHEET:
				if ($value instanceof Date) {
					if ($value->isValid() === true) {
						$this->_cell->setValue(DateManager::PHPToExcel($value));
						$this->_cell->getStyle()->getNumberFormat()->setFormatCode($this->row->getSheet()->getWorkbook()->getDateFormatOutput());
						return $this;
					}
				} elseif ($value instanceof \DateTimeInterface) {
					$this->_cell->setValue(DateManager::PHPToExcel($value));
					$this->_cell->getStyle()->getNumberFormat()->setFormatCode($this->row->getSheet()->getWorkbook()->getDateFormatOutput());
					return $this;
				}
				
				$this->_cell->setValue($value);
				break;
		}
		
		return $this;
		
	}
	
	public function isEmpty(): bool
	{
		return ($this->_cell->getValue() == false);
	}
	
	public function setWidth(int $value): self
	{
		
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				break;
				
			case Workbook::PHPSPREADSHEET:
				$this->_cell->getParent()->getParent()->getColumnDimension($this->colAddress)->setWidth($value);
				break;
		}
		
		return $this;
		
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
					->setBorderStyle(Border::WIDTH_THIN)
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
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormatInput();
					$date = Date::fromFormat($this->_cell->getValue(), $dateFormat);
					if ($date->isValid() === true) {
						return $date;
					}
				}
				break;
				
			case Workbook::PHPSPREADSHEET:
				if (DateManager::isDateTime($this->_cell)) {
					return DateManager::excelToDateTimeObject($this->getValue());
				} else {
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormatInput();
					$date = Date::fromFormat($this->getValue(), $dateFormat);
					if ($date->isValid() === true) {
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