<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet as PhpSpreadsheetSheet;
use Box\Spout\Reader\XLSX\Sheet as SpoutSheet;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;

class Sheet
{
	private $sheet;
	
	private $worbook;
	
	public function __construct($sheet, Workbook $workbook)
	{
		$this->sheet = $sheet;
		$this->workbook = $workbook;
	}
	
	public function getWorkbook(): Workbook
	{
		return $this->worbook;
	}
	
	public function getRowInterator()
	{
		return new RowIterator($this);
	}
	
	public function setCellValue(string $coordinate, $value): self
	{
		
		$index = Coordinate::coordinateFromString($coordinate);
		$rowAddress = $index[0];
		$colAddress = $index[1];
		
		foreach ($this->getRowInterator() as $id => $row) {
			if ($id == $rowAddress - 1) {
				$row->getCell($colAddress)->setValue($value);
				return $this;
			}
		}
		
		return $this;
	}
	
	public function getCellValue(string $coordinate)
	{
		
		$index = Coordinate::coordinateFromString($coordinate);
		$rowAddress = $index[0];
		$colAddress = $index[1];
		
		foreach ($this->getRowInterator() as $id => $row) {
			if ($id == $rowAddress - 1) {
				return $row->getCell($colAddress)->getValue();
			}
		}
		
		return null;
	}
}

?>