<?php 

namespace App\Service\Excel;

use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Common\Entity\Style\Border;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use PhpOffice\PhpSpreadsheet\Shared\Date;


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
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				return $this->cell->getValue();
			case Workbook::PHPSPREADSHEET:
				return $this->cell->getCalculatedValue();
			default:
				throw new Exception('Library not defined.');
		}
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
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
// 				$this->getRow()->addComment($value);
				break;
				
			case Workbook::PHPSPREADSHEET:
			
				$comment = $this->getParent()
					->getParent()
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
				
				$this->cell->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
			
				$this->getParent()
					->getParent()
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
					
				$this->cell->setStyle($style);
				break;
			
			case Workbook::PHPSPREADSHEET:
				
				$this->getParent()
					->getParent()
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
	
	public function getDateTime(): ?\DateTime
	{
		switch ($this->row->getSheet()->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				
				$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormat();
				dd($this->cell->getFormat());
// 				###
				
			case Workbook::PHPSPREADSHEET:
				if (Date::isDateTime($this->cell)) {
					return Date::excelToDateTimeObject($this->getValue());
				} else {
					$dateFormat = $this->row->getSheet()->getWorkbook()->getDateFormat();
					$date = \DateTime::createFromFormat($dateFormat, $this->getValue());
					if ($date && $date->format($dateFormat) === $this->getValue()) {
						return $date;
					}
				}
				break;
				
			default:
				throw new Exception('Library not defined.');
		}
	}
	
	public static function excelToDateTimeObject($excelTimestamp, $timeZone = null)
	{
		
	}
}

?>