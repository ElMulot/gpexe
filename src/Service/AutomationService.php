<?php

namespace App\Service;

use Symfony\Component\Yaml\Yaml;

class AutomationService
{
	
	private $ressourcesDirectory;

	public function __construct(string $ressourcesDirectory)
	{
		$this->ressourcesDirectory = $ressourcesDirectory;
	}
	
	public function getValidatedCode($code): string
	{
		$code = preg_replace('/\t/', '    ', $code);
		$code = preg_replace("/'([^'\n]*)'*\r\n/", "'$1'\r\n", $code);
		
		$parsedCode = Yaml::parse($code ?? '') ?? [];
		
		if (($parsedCode['type'] ?? '') == 'import') {
			$structure = self::getImportScheme();
		} elseif (($parsedCode['type'] ?? '') == 'export') {
			$structure = self::getExportScheme();
		} else {
			return '';
		}
		
		$parsedCode = self::validateStructure($structure, $parsedCode);
		
		return Yaml::dump($parsedCode, 3);
	}
	
	public function getImportScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'importScheme.yaml');
	}

	public function getExportScheme(): array
	{
		return Yaml::parseFile($this->ressourcesDirectory . 'exportScheme.yaml');
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
			$matches = [];
			if (preg_match('/' . $structure['regex'] . '/', $parsedCode, $matches)) {
				return (is_numeric($matches[0]))?+$matches[0]:$matches[0];
			}
		}
		return self::setDefaultValue($structure);
	}
	
}

?>