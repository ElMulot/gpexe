<?php

namespace App\Service;


class DateService {
	
	public static function fromFormat($expression, $format = 'd-m-Y'): ?\DateTime
	{
		$date = \DateTime::createFromFormat($format, $expression);
		if ($date && $date->format($format) === $expression) {
			return $date;
		}
		return null;
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
}

?>