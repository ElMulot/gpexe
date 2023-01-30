<?php

namespace App\Helpers;

use DateTimeInterface;

/**
 * An helper class for DateTime
 */
class Date extends \DateTime implements \DateTimeInterface, \Stringable
{

	public const ATOM_WITHOUT_TIME = 'Y-m-d';

	protected bool $valid = false;
	
	public function __construct (?string $datetime = null, ?\DateTimeZone $timezone = null)
	{
		try {
			parent::__construct($datetime, $timezone);
			$this->valid = true;
		} catch (\Exception $e) {
			parent::__construct('today', $timezone);
		}
		if (!$datetime) {
			
			$this->valid = false;
		}
	}
	
	/**
	 * Set valid property to true
	 *
	 * @param boolean $valid
	 * @return self
	 */
	protected function setValid(bool $valid): self
	{
		$this->valid = $valid;
		return $this;
	}

	/**
	 * Return if Date object is valid or not
	 *
	 * @return boolean
	 */
	public function isValid(): bool
	{
		return $this->valid;
	}
	
	/**
	 * Return Date object formatted according to given format
	 * If date or format is not valid, return empty string
	 *
	 * @param string $format
	 * @return string
	 */
	public function format(?string $format = null): string
	{
		if (!$format) {
			$format = self::ATOM_WITHOUT_TIME;
		}

		if ($this->valid === false) {
			return '';
		}
		
		try {
			return parent::format($format);
		} catch (\Error $e) {
			return '';
		}
	}
	
	/**
	 * Adds an amount of days, months, years, hours, minutes, seconds to Date object
	 *
	 * @param \DateInterval|string $interval
	 * @return Date
	 */
	public function add(\DateInterval|string $interval): Date
	{
		if ($this->valid) {
			if (is_string($interval) === true) {
				try {
					$dateInterval = new \DateInterval($interval);
				} catch (\Exception $e) {
					return $this;
				}
			} else {
				$dateInterval = $interval;
			}
			parent::add($dateInterval);
		}
		return $this;
	}
	
	/**
	 * Substracts an amount of days, months, years, hours, minutes, seconds to Date object
	 *
	 * @param \DateInterval|string $interval
	 * @return Date
	 */
	public function sub(\DateInterval|string $interval): Date
	{
		if ($this->valid) {
			if (is_string($interval) === true) {
				try {
					$dateInterval = new \DateInterval($interval);
				} catch (\Exception $e) {
					return $this;
				}
			} else {
				$dateInterval = $interval;
			}
			parent::sub($dateInterval);
		}
		return $this;
	}
	
	/**
	 * Parse a string into a new Date object according to the specified format
	 *
	 * @param string $expression
	 * @param string $format
	 * @return Date
	 */
	public static function fromFormat(string $expression, ?string $format = null): Date
	{
		if (!$format) {
			$format = self::ATOM_WITHOUT_TIME;
		}
		
		/**@var Date $date */
		$date = parent::createFromFormat('!' . $format, $expression);
		
		if ($date === false) {
			return new static();
		}

		$date->valid = true;
		if ($date->format($format) === $expression) {
			return $date;
		} else {
			return new static();
		}
	}
	
	/**
	 * Get the working days between two Date objects
	 *
	 * @param \DateTimeInterface|null $targetDate
	 * @return integer
	 */
	public function getWorkingDays(?\DateTimeInterface $targetDate = null): int
	{
		$interval = $this->diff($targetDate);
		
		$nbDays = $interval->format('%a');
		
		$nbFullWeeks = floor($nbDays / 7);
		$nbRemainingDays = fmod($nbDays, 7);
		
		//It will return 1 if it's Monday,.. ,7 for Sunday
		$firstDayOfWeek = min($this, $targetDate)->format("N");
		$lastDayOfWeek = max($this, $targetDate)->format("N");
		
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
	
	/**
	 * Returns the difference between two Date objects represented as DateInterval
	 * If one of the two Date objects is not valid, return a DateInterval equal to 0.
	 * If targetDate is not a DateTimeInterface object, compare with the current day.
	 *
	 * @param \DateTimeInterface|null $targetDate The date to compare to
	 * @param boolean $absolute [optional] Whether to return absolute difference
	 * @return \DateInterval The DateInterval object representing the difference between the two dates
	 */
	public function diff(?\DateTimeInterface $targetDate = null, ?bool $absolute = false): \DateInterval
	{
		if ($this->valid === false)
			return new \DateInterval("P0D");
		elseif (($targetDate instanceof Date) === false) {
			return parent::diff(new \DateTime('today'), $absolute);
		} elseif ($targetDate->valid === false) {
			return new \DateInterval("P0D");
		} else {
			return parent::diff($targetDate, $absolute);
		}
	}
	
	/**
	 * Return Date object formatted according to 'd-m-Y' format
	 *
	 * @return string
	 */
	public function __toString(): string
	{
		return $this->format();
	}
}

?>