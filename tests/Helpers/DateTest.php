<?php

namespace App\Tests\Helpers;

use App\Entity\Automation;
use App\Entity\Enum\ProgramTypeEnum;
use App\Entity\Program;
use App\Entity\Project;
use App\EventListener\ProgramListener;
use PHPUnit\Framework\TestCase;
use App\EventListener\ProjectListener;
use App\Helpers\Date;
use App\Repository\AutomationRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\Persistence\ObjectManager;
use Doctrine\ORM\Event\PreUpdateEventArgs;
use PHPUnit\Framework\MockObject\MockObject;
use Symfony\Component\Filesystem\Filesystem;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

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
		$this->assertSame($dateObject->format(Date::ATOM_WITHOUT_TIME), $expected);
	}

	/**
	 * @covers Date::format
	 * @testWith	["abc", ""]
	 * 				["01-01-2000", "6/52/00"]
	 */
	function testFormatAswWy(string $dateString, string $expected)
	{
		$dateObject = new Date($dateString);
		$this->assertSame($dateObject->format('w/W/y'), $expected);
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
	 * 				["2000-01-01", "Y-m-d", "2000-01-01"]
	 * 				["01/01/2000", "d/m/Y", "01/01/2000"]
	 */
	function testFromFormat(string $dateString, string $format, string $expected)
	{
		$expectedDate = new \DateTime($expected);
		
		$date = Date::fromFormat($dateString, $format);
		$this->assertEquals($expectedDate, $date);
	}

	/**
	 * @covers Date::fromFormat
	 */
	function testFromFormatWhithoutStringDate()
	{
		$date = Date::fromFormat('');
		$this->assertFalse($date->isValid());
	}

}
?>