<?php 

namespace App\Service\PhpSpreadsheetFilters;

use PhpOffice\PhpSpreadsheet\Reader\iReadFilter;

class MainColumnFilter implements IReadFilter
{
	
	private $mainColumn;
		
	public function __construct($mainColumn)
	{
		$this->mainColumn = $mainColumn;
	}
	
	public function readCell($column, $row, $worksheetName = ''): bool
	{
		return ($column == $this->mainColumn);
	}
	
}


?>