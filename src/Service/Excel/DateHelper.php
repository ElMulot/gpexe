<?php

namespace App\Service\Excel;

use Box\Spout\Writer\Common\Creator\Style\BorderBuilder;
use Box\Spout\Writer\Common\Creator\Style\StyleBuilder;
use PhpOffice\PhpSpreadsheet\Cell\Coordinate;
use PhpOffice\PhpSpreadsheet\Shared\Date as DateManager;
use PhpOffice\PhpSpreadsheet\Style\Border;
use PhpOffice\PhpSpreadsheet\Style\Fill;
use App\Helpers\Date;


class DateHelper
{
	private static $dateFormatReplacements = [
		//	4-digit year
		'Y' => 'yyyy',
		//	2-digit year
		'y' => 'yy',
		//	full month name
		'F' => 'mmmm',
		//	short month name
		'M' => 'mmm',
		//	month leading zero
		'm' => 'mm',
		//	month no leading zero
		'n' => 'm',
		//	full day of week name
		'l' => 'dddd',
		//	short day of week name
		'D' => 'ddd',
		//	days leading zero
		'd' => 'dd',
		//	days no leading zero
		'j' => 'd',
		//	reset character
		'!' => '',
	];
	
	public static function getExcelDateFormat($format)
	{
		return strtr($format, self::$dateFormatReplacements);
	}

}
?>