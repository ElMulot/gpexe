<?php 

namespace App\Service\PhpSpreadsheetFilters;

use PhpOffice\PhpSpreadsheet\Reader\iReadFilter;


class ChunkFilter implements IReadFilter
{
	
	private $startRow;
	
	private $endRow;
	
	public function __construct($startRow, $endRow)
	{
		$this->startRow = $startRow;
		$this->endRow = $endRow;
	}
	
	public function readCell($column, $row, $worksheetName = '')
	{
		return ($row >= $this->startRow && $row <= $this->endRow);
	}
	
}


?>