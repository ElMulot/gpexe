<?php

namespace App\Tests\Helpers;

use App\Helpers\Date;
use PHPUnit\Framework\TestCase;
use App\Exception\InternalErrorException;

class DateTest extends TestCase
{

	/**
	 * @covers Date::isValid
	 * @testWith	["", false]
	 * 				["abc", false]
	 * 				["1970-13-32", false]
	 * 				["2000-01-01", true]
	 */
	function testIsValid(string $dateString, bool $expected)
	{
		$dateObject = new Date($dateString);
		$this->assertSame($dateObject->isValid(), $expected);
	}

	/**
	 * @covers Date::format
	 * @testWith	["abc", ""]
	 * 				["2000-01-01", "2000-01-01"]
	 */
	function testFormatAsdmY(string $dateString, string $expected)
	{
		$dateObject = new Date($dateString);
		$this->assertSame($expected, $dateObject->format());
		$this->assertSame($dateObject->format('yyyy-MM-dd'), $expected);
	}

	/**
	 * @covers Date::format
	 * @testWith	["abc", ""]
	 * 				["01-01-2000", "6/52/00"]
	 */
	function testFormatAswWy(string $dateString, string $expected)
	{
		$dateObject = new Date($dateString);
		$this->assertSame($dateObject->format('e/w/yy'), $expected);
	}
	
	/**
	 * @covers Date::add
	 * @testWith	["2000-01-01", "P1Y", "2001-01-01"]
	 * 				["2000-01-01", "P5D", "2000-01-06"]
	 */
	function testDateAdd(string $dateString, string $interval, string $expected)
	{
		$expectedDate = new \DateTime($expected);
		
		$date = new Date($dateString);
		$dateInterval = new \DateInterval($interval);
		$this->assertEquals($expectedDate, $date->add($dateInterval));

		$date = new Date($dateString);
		$this->assertEquals($expectedDate, $date->add($interval));
	}

	/**
	 * @covers Date::sub
	 * @testWith	["2000-01-01", "P1Y", "1999-01-01"]
	 * 				["2000-01-01", "P5D", "1999-12-27"]
	 */
	function testDateSub(string $dateString, string $interval, string $expected)
	{
		$expectedDate = new \DateTime($expected);
		
		$date = new Date($dateString);
		$dateInterval = new \DateInterval($interval);
		$this->assertEquals($expectedDate, $date->sub($dateInterval));

		$date = new Date($dateString);
		$this->assertEquals($expectedDate, $date->sub($interval));	
	}

	/**
	 * @covers Date::fromFormat
	 * @testWith	["2000-01-01", "", "2000-01-01"]
	 * 				["2000-01-01", "yyyy-MM-dd", "2000-01-01"]
	 * 				["01/01/2000", "dd/MM/yyyy", "01/01/2000"]
	 */
	function testFromFormat(string $dateString, string $format, string $expected)
	{
		$expectedDate = new \DateTime($expected);
		
		$date = Date::fromFormat($dateString, $format);
		$this->assertEquals($expectedDate, $date);
	}

	/**
	 * @covers Date::convertToPhpDateFormat
	 * @testWith	["d-M-yy", "j-n-y"]
	 * 				["dd/MM/yyyy", "d/m/Y"]
	 * 				["EEE.EEEE.e.yy", "D.l.w.y"]
	 * 				["e.D.w.yy", "w.z.W.y"]
	 */
	function testConvertToPhpDateFormatSuccess(string $pattern, string $expected)
	{
		$flatpickrDateFormat = Date::convertToPhpDateFormat($pattern);
		$this->assertSame($expected, $flatpickrDateFormat);
	}
	
	/**
	 * @covers Date::convertToPhpDateFormat
	 * @testWith	["a"]
	 * 				["A"]
	 * 				["b"]
	 * 				["B"]
	 * 				["c"]
	 * 				["C"]
	 * 				["f"]
	 * 				["F"]
	 * 				["g"]
	 * 				["G"]
	 * 				["h"]
	 * 				["H"]
	 * 				["i"]
	 * 				["I"]
	 * 				["j"]
	 * 				["J"]
	 * 				["k"]
	 * 				["K"]
	 * 				["l"]
	 * 				["L"]
	 * 				["m"]
	 * 				["n"]
	 * 				["N"]
	 * 				["o"]
	 * 				["O"]
	 * 				["p"]
	 * 				["P"]
	 * 				["q"]
	 * 				["Q"]
	 * 				["r"]
	 * 				["R"]
	 * 				["s"]
	 * 				["S"]
	 * 				["t"]
	 * 				["T"]
	 * 				["u"]
	 * 				["U"]
	 * 				["v"]
	 * 				["V"]
	 * 				["W"]
	 * 				["x"]
	 * 				["X"]
	 * 				["Y"]
	 * 				["z"]
	 * 				["Z"]
	 */
	function testConvertToPhpDateFormatFail(string $pattern)
	{
		$this->expectException(InternalErrorException::class);
		Date::convertToPhpDateFormat($pattern);
	}

	/**
	 * @covers Date::convertToFlatpickDateFormat
	 * @testWith	["d-M-yy", "j-n-y"]
	 * 				["dd/MM/yyyy", "d/m/Y"]
	 * 				["EEE.EEEE.e.yy", "D.l.w.y"]
	 * 				["e.w.yy", "w.W.y"]
	 */
	function testConvertToFlatpickDateFormatSuccess(string $pattern, string $expected)
	{
		$flatpickrDateFormat = Date::convertToFlatpickDateFormat($pattern);
		$this->assertSame($expected, $flatpickrDateFormat);
	}

	/**
	 * @covers Date::convertToFlatpickDateFormat
	 * @testWith	["a"]
	 * 				["A"]
	 * 				["b"]
	 * 				["B"]
	 * 				["c"]
	 * 				["C"]
	 * 				["D"]
	 * 				["f"]
	 * 				["F"]
	 * 				["g"]
	 * 				["G"]
	 * 				["h"]
	 * 				["H"]
	 * 				["i"]
	 * 				["I"]
	 * 				["j"]
	 * 				["J"]
	 * 				["k"]
	 * 				["K"]
	 * 				["l"]
	 * 				["L"]
	 * 				["m"]
	 * 				["n"]
	 * 				["N"]
	 * 				["o"]
	 * 				["O"]
	 * 				["p"]
	 * 				["P"]
	 * 				["q"]
	 * 				["Q"]
	 * 				["r"]
	 * 				["R"]
	 * 				["s"]
	 * 				["S"]
	 * 				["t"]
	 * 				["T"]
	 * 				["u"]
	 * 				["U"]
	 * 				["v"]
	 * 				["V"]
	 * 				["W"]
	 * 				["x"]
	 * 				["X"]
	 * 				["Y"]
	 * 				["z"]
	 * 				["Z"]
	 */
	function testConvertToFlatpickDateFormatFail(string $pattern)
	{
		$this->expectException(InternalErrorException::class);
		Date::convertToFlatpickDateFormat($pattern);
	}

	/**
	 * @covers Date::fromFormat
	 */
	function testFromFormatWhithoutStringDate()
	{
		$date = Date::fromFormat('');
		$this->assertFalse($date->isValid());
	}


	/**
	 * @covers Date::__toObject
	 */
	function test__toObject()
	{
		$date = new Date('2000-01-01');
		$expectedDate = new \DateTime('2000-01-01');
		$this->assertEquals($date->__toObject(), $expectedDate);
	}

	/**
	 * @covers Date::__toObject
	 */
	function test__toObjectWhithInvalidDate()
	{
		$date = new Date('');
		$this->assertEquals($date->__toObject(), null);
	}

}
?>