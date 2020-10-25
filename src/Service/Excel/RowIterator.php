<?php 

namespace App\Service\Excel;

use PhpOffice\PhpSpreadsheet\Worksheet\Row as PhpSpreadsheetRow;

class RowIterator
{
	
	private $sheetItem;
	
	private $sheet;
	
	private $key;
	
	public function __construct($sheetItem, $sheet)
	{
		$this->sheetItem = $sheetItem;
		$this->rowIterator = $sheetItem->getRowIterator();
		$this->sheet = $sheet;
	}
	
	public function getSheet(): Sheet
	{
		return $this->sheet;
	}
	
	public function rewind()
	{
		$this->rowIterator->rewind();
	}
	
	public function jumpToFirstRow()
	{
		$rowIndex = $this->sheet->getWorkbook()->getFirstRow() - 1;
		
		$this->rewind();
		while ($this->key() < $rowIndex - 1)
		{
			$this->next();
		}
	}
	
	public function jumpToLastRow()
	{
		$this->jumpToFirstRow();
		while ($this->isValid())
		{
			$this->next();
		}
	}
	
	public function jumpTo(int $rowAddress)
	{
		$rowIndex = $rowAddress - 1;
		
		$this->rewind();
		while ($this->key() < $rowIndex - 1)
		{
			dd($this->key());
			$this->next();
		}
	}
	
	public function current(): Row
	{
		return new Row($this->rowIterator->current(), $this->rowIterator->key(), $this->sheet);
	}
	
	public function key()
	{
		return $this->rowIterator->key();
	}
	
	public function next()
	{
		$this->rowIterator->next();
	}
	
	public function valid()
	{
		$mainColumn = $this->sheet->getWorkbook()->getMainColumn();
		switch ($this->sheet->getWorkbook()->getLibrary()) {
			case Workbook::SPOUT:
				return $this->current()->getCell($mainColumn)->isEmpty() === false && $this->rowIterator->valid();
			case Workbook::PHPSPREADSHEET:
				return $this->sheetItem->getCell($mainColumn . ($this->key + 1))->getCalculatedValue() != '';
		}}
}

?>