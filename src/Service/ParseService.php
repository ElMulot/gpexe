<?php

namespace App\Service;

use Symfony\Component\Yaml\Yaml;
use Spatie\Regex\Regex;

class ParseService
{
	
	private $ressourcesDirectory;

	public function __construct(string $ressourcesDirectory)
	{
		$this->ressourcesDirectory = $ressourcesDirectory;
	}
	
	public function getValidatedCode($code): string
	{
		$code = Regex::replace('/\t/', '	', $code)->result();
		$code = Regex::replace("/'([^'\n]*)'*\r\n/", "'$1'\r\n", $code)->result();
		
		$parsedCode = Yaml::parse($code ?? '') ?? [];
		
		switch ($parsedCode['type'] ?? '') {
			case 'export':
				$structure = self::getExportScheme();
				break;
			case 'import':
				$structure = self::getImportScheme();
				break;
			case 'task':
				$structure = self::getTaskScheme();
				break;
			case 'progress':
				$structure = self::getProgressScheme();
				break;
			default:
				return '';
		}
		
		$parsedCode = self::validateStructure($structure, $parsedCode);
		
		return Yaml::dump($parsedCode, 10, 4);
	}
	
	public function getExportScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'exportScheme.yaml');
	}
	
	public function getImportScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'importScheme.yaml');
	}
	
	public function getTaskScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'taskScheme.yaml');
	}

	public function getProgressScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'progressScheme.yaml');
	}
	
	private function validateStructure($structure, $parsedCode = '')
	{
		if (self::structureHasSubStructures($structure)) {
			
			foreach ($structure as $key => $value) {
				
				if (is_array($parsedCode) === false) {
					
					$parsedCode = self::copyStructure([$key => $value]);
					
				} else {
					
					if ($key === 0) {
						
						array_walk($parsedCode, function(&$item, $key, $value) {
							$item = self::validateStructure($value, $item);
						}, $value);
							
					} elseif (array_key_exists($key, $parsedCode)) {
						
						$parsedCode[$key] = self::validateStructure($value, $parsedCode[$key]);
						
					} else {
						
						$parsedCode[$key] = self::validateStructure($value);
						
					}
				}
			}
			
			foreach ($parsedCode as $key => $value) {
				if (array_key_exists($key, $structure) == false && gettype($key) == 'string') {
					unset($parsedCode[$key]);
				}
			}
			
		} else {
			
			if (is_array($parsedCode)) {
				$parsedCode = self::setDefaultValue($structure);
			} else {
				$parsedCode = self::checkRegex($structure, $parsedCode);
			}
		}
		return $parsedCode;
	}
	
	private function structureHasSubStructures($structure): bool
	{
		if (is_array($structure)) {
			return array_key_exists('regex', $structure) === false && array_key_exists('default', $structure) === false;
		}
		return false;
	}
	
	private function copyStructure($structure)
	{
		if (is_array($structure)) {
			foreach ($structure as $key => $value) {
				if ($key === 'default') {
					$result = $value;
				} elseif ($key === 'regex' || $key === 'type') {
					$result = '';
				} else {
					$result[$key] = self::copyStructure($value);
				}
			}
			return $result;
		}
	}
	
	private function setDefaultValue(array $structure)
	{
		if (array_key_exists('default', $structure)) {
			return $structure['default'];
		}
		return '';
	}
	
	private function checkRegex(array $structure, $parsedCode = '')
	{
		if ($parsedCode === true) {
			$parsedCode = 'true';
		}
		if ($parsedCode === false) {
			$parsedCode = 'false';
		}
		
		if (array_key_exists('regex', $structure)) {
			if (($result = Regex::match('/' . $structure['regex'] . '/', $parsedCode))->hasMatch()) {
				return (is_numeric($result->group(0)))?+$result->group(0):$result->group(0);
			}
		}
		return self::setDefaultValue($structure);
	}
	
}

?>