<?php 

namespace App\Service\Excel;


class RowIterator implements \Iterator
{
	
	private $sheet;
	
	public function __construct(Sheet $sheet)
	{
		$this->sheet = $sheet;
	}
	
	public function getSheet(): Sheet
	{
		return $this->sheet;
	}
	
	public function rewind()
	{
		return $this->sheet->getRowInterator()->rewind();
	}
	
	public function current(): Row
	{
		return new Row($this->sheet->getRowInterator()->current(), $this->sheet);
	}
	
	public function key()
	{
		return $this->sheet->getRowInterator()->key();
	}
	
	public function next()
	{
		$this->sheet->getRowInterator()->next();
	}
	
	public function valid()
	{
		$mainColumn = $this->sheet->getWorkbook()->getMainColumn();
		return ($this->current()->getCell($mainColumn)->isEmpty() === false && $this->sheet->getRowInterator()->valid());
	}
}

?>