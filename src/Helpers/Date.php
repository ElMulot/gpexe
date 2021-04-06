<?php

namespace App\Helpers;


class Date extends \DateTime {
	
	private $isValid;
	
	public function __construct (string $time = null, \DateTimeZone $timezone = null)
	{
		if ($time == false) {
			$this->isValid = false;
			parent::__construct("1970-01-01", null);
		} else {
			$this->isValid = true;
			parent::__construct($time, $timezone);
		}
	}
	
	public function isValid(): bool
	{
		return $this->isValid;
	}
	
	public function format($format = 'd-m-Y'): string
	{
		if ($this->isValid) {
			return parent::format($format);
		} else {
			return '';
		}
	}
	
	public function add($interval): Date
	{
		if ($this->isValid) {
			$dateInterval = new \DateInterval($interval);
			parent::add($dateInterval);
		}
		return $this;
	}
	
	public function sub($interval): Date
	{
		if ($this->isValid) {
			$dateInterval = new \DateInterval($interval);
			parent::sub($dateInterval);
		}
		return $this;
	}
	
	public static function fromFormat($expression, $format = 'd-m-Y'): ?\DateTime
	{
		$date = \DateTime::createFromFormat('!' . $format, $expression);
		if ($date && $date->format($format) === $expression) {
			return new static($date->format(\DateTime::ATOM));
		} else {
			return new static();
		}
	}
	
	public static function getWorkingDays(\DateTime $date1, \DateTime $date2): ?int
	{
		$interval = $date1->diff($date2);
		
		if ($interval == false) {
			return null;
		}
		
		$nbDays = $interval->format('%a');
		
		$nbFullWeeks = floor($nbDays / 7);
		$nbRemainingDays = fmod($nbDays, 7);
		
		//It will return 1 if it's Monday,.. ,7 for Sunday
		$firstDayOfWeek = min($date1, $date2)->format("N");
		$lastDayOfWeek = max($date1, $date2)->format("N");
		
		//---->The two can be equal in leap years when february has 29 days, the equal sign is added here
		//In the first case the whole interval is within a week, in the second case the interval falls in two weeks.
		if ($firstDayOfWeek <= $lastDayOfWeek) {
			if ($firstDayOfWeek <= 6 && 6 <= $lastDayOfWeek) $nbRemainingDays--;
			if ($firstDayOfWeek <= 7 && 7 <= $lastDayOfWeek) $nbRemainingDays--;
		} else {
			// the day of the week for start is later than the day of the week for end
			if ($firstDayOfWeek == 7) {
				// if the start date is a Sunday, then we definitely subtract 1 day
				$nbRemainingDays--;
				
				if ($lastDayOfWeek == 6) {
					// if the end date is a Saturday, then we subtract another day
					$nbRemainingDays--;
				}
			}
			else {
				// the start date was a Saturday (or earlier), and the end date was (Mon..Fri)
				// so we skip an entire weekend and subtract 2 days
				$nbRemainingDays -= 2;
			}
		}
		
		//The no. of business days is: (number of weeks between the two dates) * (5 working days) + the remainder
		//---->february in none leap years gave a remainder of 0 but still calculated weekends between first and last day, this is one way to fix it
		return $nbFullWeeks * 5 + max($nbRemainingDays, 0);
	}
	
	public function diff($date2, $absolute = null): ?\DateInterval
	{
		if ($this->isValid === false)
			return null;
		elseif (($date2 instanceof Date) === false) {
			return null;
		} elseif ($date2->isValid === false) {
			return null;
		} else {
			return parent::diff($date2, $absolute);
		}
	}
	
	public function __toString(): string
	{
		return $this->format();
	}
}

?>