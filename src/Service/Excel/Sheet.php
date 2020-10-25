<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet as PhpSpreadsheetSheet;
use Box\Spout\Reader\XLSX\Sheet as SpoutSheet;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use Symfony\Component\BrowserKit\Request;

class Sheet
{
	private $sheet;
	
	private $workbook;
	
	private $rowIterator;
	
	public function __construct($sheet, Workbook $workbook)
	{
		$this->sheet = $sheet;
		$this->workbook = $workbook;
	}
	
	public function getWorkbook(): Workbook
	{
		return $this->workbook;
	}
	
	public function getRowInterator()
	{
		if ($this->rowIterator === null) {
			$this->rowIterator = new RowIterator($this->sheet, $this);
		}
		
		return $this->rowIterator;
	}
	
	public function getRow(int $rowAddress): Row
	{
		$rowIterator = $this->getRowInterator();
		$rowIterator->jumpTo($rowAddress);
		return $rowIterator->current();
	}
	
// 	public function getCell(string $coordinate): ?Cell
// 	{
// 		$index = Coordinate::coordinateFromString($coordinate);
// 		$colAddress = $index[0];
// 		$rowAddress = $index[1];
// 		if ($row = $this->getRow($rowAddress)) {
// 			return $row->getCell($colAddress);	
// 		}
// 	}

}

?>