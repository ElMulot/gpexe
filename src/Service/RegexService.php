<?php

namespace App\Service;

class RegexService
{
	
	private $regex;
	
	public function __construct(string $pattern)
	{
		$this->pattern = $pattern;
	}
	
	public function match(string $subject)
	{
		$matches = [];
		if (preg_match_all($this->pattern, $subject, $matches) === false) {
			return null;
		} else {
			return $matches;
		}
	}
	
	public function replace(string $subject, $replacement)
	{
		if (is_string($replacement)) {
			return preg_replace($this->pattern, $replacement, $subject);
		} elseif (is_callable($replacement)) {
			return preg_replace_callback($this->pattern, function (array $matches) use ($replacement) {
				return $replacement($matches);
			},
			$subject);
		}
	}
	
}

?>