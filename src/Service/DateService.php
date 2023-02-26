<?php

namespace App\Service;

use App\Exception\InternalErrorException;
use Symfony\Component\DependencyInjection\Attribute\Autowire;
use Symfony\Component\HttpFoundation\Exception\SessionNotFoundException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Contracts\Translation\TranslatorInterface;


/**
 * A service for managing date object and string
 * 
 * Notation :
 * 	- ICU_DEFAULT_DATE_PATTERN : default date pattern (used for database storage) in ICU format
 * 	- PHP_DEFAULT_DATE_FORMAT : default date pattern in php date format
 * 	- $this->ICUDatePattern : app date pattern defined service.yaml in ICU format
 * 	- $this->getPhpDateFormat() : app date pattern defined service.yaml in php date format
 * 	- $this->getFlatpickrDateFormat() : app date pattern defined service.yaml in flatpickr date format
 */
class DateService
{
	public const ICU_INTERNAL_DATE_PATTERN = 'yyyy-MM-dd';
	public const PHP_INTERNAL_DATE_FORMAT = 'Y-m-d';

	public function __construct(private readonly RequestStack $requestStack,
								#[Autowire('%app.config.default_locale%')]
								private readonly string $defaultLocale,
								#[Autowire('%app.config.default_timezone%')]
								private readonly string $defaultTimezone,
								#[Autowire('%app.config.icu_date_pattern%')]
								private readonly string $ICUDatePattern)
	{
	}

	public function getPhpDateFormat(): string
	{
		return $this->convertToPhpDateFormat($this->ICUDatePattern);
	}

	public function getFlatpickrDateFormat(): string
	{
		return $this->convertToFlatpickrDateFormat($this->ICUDatePattern);
	}

	public function format(?\DateTimeInterface $datetime, ?string $pattern = null, ?string $locale = null, ?string $timezone = null): string
	{
		if ($datetime === null) {
			return '';
		}
		
		if (($request = $this->requestStack->getCurrentRequest()) !== null && $request->hasSession() === true) {
			$session = $request->getSession();
			$locale ??= $session->get('_locale');
			$timezone ??= $session->get('_timezone');
		}
		
		$locale ??= $this->defaultLocale;
		$timezone ??= $this->defaultTimezone;
		$pattern ??= $this->ICUDatePattern;

		$formatter = new \IntlDateFormatter(locale:$locale, timezone: $timezone, pattern: $pattern);
		return $formatter->format($datetime);
	}
	
	public static function formatAsInternal(?\DateTimeInterface $datetime): string
	{
		
		if ($datetime === null) {
			return '';
		}
		
		return $datetime->format(self::PHP_INTERNAL_DATE_FORMAT);
	}

	public function fromPattern(string $string, ?string $pattern = null, ?string $locale = null, ?string $timezone = null): ?\DateTimeInterface
	{
		if (($request = $this->requestStack->getCurrentRequest()) !== null && $request->hasSession() === true) {
			$session = $request->getSession();
			$locale ??= $session->get('_locale');
			$timezone ??= $session->get('_timezone');
		}
		
		$locale ??= $this->defaultLocale;
		$timezone ??= $this->defaultTimezone;
		$pattern ??= $this->ICUDatePattern;
		
		$formatter = new \IntlDateFormatter(locale:$locale, timezone: $timezone, pattern: $pattern);
		$timestamp = $formatter->parse($string);

		if ($timestamp === false) {
			return null;
		} else {
			return new \DateTime('@' . $timestamp);
		}
	}

	public static function fromInternalPattern(string $string): ?\DateTimeInterface
	{
		return new \DateTime($string);
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
			$pattern = self::ICU_INTERNAL_DATE_PATTERN;
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
	public static function convertToFlatpickrDateFormat(?string $pattern = null): string
	{
		if (!$pattern) {
			$pattern = self::ICU_INTERNAL_DATE_PATTERN;
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
}

?>