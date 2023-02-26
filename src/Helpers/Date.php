<?php

namespace App\Helpers;

use App\Exception\InternalErrorException;

/**
 * An helper class for DateTime
 */
class Date extends \DateTime implements \DateTimeInterface, \Stringable
{

	public const ICU_DEFAULT_PATTERN = 'yyyy-MM-dd';

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
	 * Return if Date object is valid or not
	 *
	 * @return boolean
	 */
	public function isValid(): bool
	{
		return $this->valid;
	}
	
	/**
	 * Sets the date based on an Unix timestamp
	 *
	 * @param integer $timestamp
	 * @return self
	 */
	public function setTimestamp(int $timestamp): self
	{
		parent::setTimestamp($timestamp);
		$this->valid = true;
		return $this;
	}

	/**
	 * Return Date object formatted according to given format
	 * If date or format is not valid, return empty string
	 *
	 * @param string $pattern ICU date pattern
	 * @return string
	 */
	public function format(?string $pattern = null): string
	{
		if (!$pattern) {
			$pattern = self::ICU_DEFAULT_PATTERN;
		}
		$formatter = new \IntlDateFormatter(locale:null, pattern: $pattern);
		
		if ($this->valid === false) {
			return '';
		}
		
		try {
			return $formatter->format($this);
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
	 * @param string $pattern ICU date pattern
	 * @return Date
	 */
	public static function fromFormat(string $expression, ?string $pattern = null): Date
	{
		if (!$pattern) {
			$pattern = self::ICU_DEFAULT_PATTERN;
		}
		$formatter = new \IntlDateFormatter(locale:null, pattern: $pattern);
		
		$timestamp = $formatter->parse($expression);
		
		if ($timestamp === false) {
			return new static();
		} else {
			/**@var Date $date */
			$date = (new static())->setTimestamp($timestamp);
			$date->valid = true;
			return $date;
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
	 * Convert a ICU pattern in php date format
	 *
	 * @param string $pattern ICU date pattern
	 * @return string converted php date format
	 */
	public static function convertToPhpDateFormat(?string $pattern = null): string
	{
		if (!$pattern) {
			$pattern = self::ICU_DEFAULT_PATTERN;
		}

		if (preg_match('/[aAhHkKmOsSvVxXzZ]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" doesn\'t respect ICU pattern. Its current value is "%s".', $pattern));
		}

		if (preg_match('/[bfijlnoptBCIJNPRT]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should not contain time pattern. Its current value is "%s".', $pattern));
		}

		if (preg_match('/[cgqruFGLQUWY]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should not contain the letters "c", "g", "q", "r", "u", "F", "G", "L", "Q", "U", "W" or "Y". Its current value is "%s".', $pattern));
		}

		$pattern = str_replace('d', 'j', $pattern);
		$pattern = str_replace('jj', 'd', $pattern);

		$pattern = str_replace('D', 'z', $pattern);
		$pattern = str_replace('EEEE', 'l', $pattern);
		$pattern = str_replace('EEE', 'D', $pattern);
		$pattern = str_replace('w', 'W', $pattern);
		$pattern = str_replace('e', 'w', $pattern);
		
		$pattern = str_replace('M', 'n', $pattern);
		$pattern = str_replace('nnnn', 'F', $pattern);
		$pattern = str_replace('nnn', 'M', $pattern);
		$pattern = str_replace('nn', 'm', $pattern);
		
		$pattern = str_replace('yyyy', 'Y', $pattern);
		$pattern = str_replace('yy', 'y', $pattern);

		return $pattern;
	}

	/**
	 * Convert a ICU pattern in flatpickr date format
	 *
	 * @param string $pattern ICU date pattern
	 * @return string converted flatpickr date format
	 */
	public static function convertToFlatpickDateFormat(?string $pattern = null): string
	{
		if (!$pattern) {
			$pattern = self::ICU_DEFAULT_PATTERN;
		}

		if (preg_match('/[aAhHkKmOsSvVxXzZ]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" doesn\'t respect ICU pattern. Its current value is "%s".', $pattern));
		}

		if (preg_match('/[bfijlnoptBCIJNPRT]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should not contain time pattern. Its current value is "%s".', $pattern));
		}

		if (preg_match('/[cgqruFGLQUWY]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should not contain the letters "c", "g", "q", "r", "u", "F", "G", "L", "Q", "U", "W" or "Y". Its current value is "%s".', $pattern));
		}

		if (preg_match('/[D]/', $pattern) !== 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should not contain the letter "D". Its current value is "%s".', $pattern));
		}

		if (preg_match('/[dMy]/', $pattern) === 0) {
			throw new InternalErrorException(sprintf('The "app.config.date_format" should contain the letters "y", "M" or "d". Its current value is "%s".', $pattern));
		}

		$pattern = str_replace('d', 'j', $pattern);
		$pattern = str_replace('jj', 'd', $pattern);

		$pattern = str_replace('EEEE', 'l', $pattern);
		$pattern = str_replace('EEE', 'D', $pattern);
		$pattern = str_replace('w', 'W', $pattern);
		$pattern = str_replace('e', 'w', $pattern);
		
		$pattern = str_replace('M', 'n', $pattern);
		$pattern = str_replace('nnnn', 'F', $pattern);
		$pattern = str_replace('nnn', 'M', $pattern);
		$pattern = str_replace('nn', 'm', $pattern);
		
		$pattern = str_replace('yyyy', 'Y', $pattern);
		$pattern = str_replace('yy', 'y', $pattern);

		return $pattern;
	}

	/**
	 * Return Date object as object or null if not valid 
	 *
	 * @return string
	 */
	public function __toObject(): ?self
	{
		if ($this->isValid() === true) {
			return $this;
		} else {
			return null;
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