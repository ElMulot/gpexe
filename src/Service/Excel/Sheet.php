<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Worksheet\Worksheet as PhpSpreadsheetSheet;
use Box\Spout\Reader\XLSX\Sheet as SpoutSheet;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use Symfony\Component\BrowserKit\Request;

class Sheet
{
	private $_sheet;
	
	private $workbook;
	
	private $_rowIterator;
	
	private $row;
	
	public function __construct($_sheet, Workbook $workbook)
	{
		$this->_sheet = $_sheet;
		$this->_rowIterator = $this->_sheet->getRowIterator();
		$this->_rowIterator->rewind();
		$this->workbook = $workbook;
	}
	
	public function getWorkbook(): Workbook
	{
		return $this->workbook;
	}
	
	private function getRowIteratorKey(): int
	{
		switch ($this->workbook->getLibrary()) {
			case Workbook::SPOUT:
				return $this->_rowIterator->key()-1;
			case Workbook::PHPSPREADSHEET:
				return $this->_rowIterator->key();
			default:
				throw new Exception('Library not defined.');
		}
	}
	
	public function getRow(int $rowAddress): Row
	{
		if ($this->row === null) {
			$this->row = new Row($this->_rowIterator->current(), 1, $this);
		}
		
		if ($this->row->getAddress() == $rowAddress) {
			return $this->row;
		}
		
		if ($this->getRowIteratorKey() > $rowAddress - 1) {
			$this->_rowIterator->rewind();
		}
		
		while ($this->getRowIteratorKey() != $rowAddress - 1) {
			$this->_rowIterator->next();
		}
		return $this->row = new Row($this->_rowIterator->current(), $rowAddress, $this);
	}

}

?>