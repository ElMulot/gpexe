<?php

namespace App\Service;

use Symfony\Component\Yaml\Yaml;
use Spatie\Regex\Regex;
use Symfony\Component\DependencyInjection\Attribute\Autowire;

class ParseService
{
	
	public function __construct(#[Autowire('app.ressource_directory')]
								private readonly string $ressourcesDirectory)
	{
	}
	
	public function getValidatedCode($code): string
	{
		$code = Regex::replace('/\t/', '	', $code)->result();
		$code = Regex::replace("/'([^'\n]*)'*\r\n/", "'$1'\r\n", $code)->result();
		
		$parsedCode = Yaml::parse($code ?? '') ?? [];
		
		switch ($parsedCode['type'] ?? '') {
			case 'export':
				$structure = $this->getExportScheme();
				break;
			case 'import':
				$structure = $this->getImportScheme();
				break;
			case 'task':
				$structure = $this->getTaskScheme();
				break;
			case 'progress':
				$structure = $this->getProgressScheme();
				break;
			default:
				return '';
		}
		
		$parsedCode = $this->validateStructure($structure, $parsedCode);
		
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
		if ($this->structureHasSubStructures($structure)) {
			
			foreach ($structure as $key => $value) {
				
				if (is_array($parsedCode) === false) {
					
					$parsedCode = $this->copyStructure([$key => $value]);
					
				} else {
					
					if ($key === 0) {
						
						array_walk($parsedCode, function(&$item, $key, $value) {
							$item = $this->validateStructure($value, $item);
						}, $value);
							
					} elseif (array_key_exists($key, $parsedCode)) {
						
						$parsedCode[$key] = $this->validateStructure($value, $parsedCode[$key]);
						
					} else {
						
						$parsedCode[$key] = $this->validateStructure($value);
						
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
				$parsedCode = $this->setDefaultRawValue($structure);
			} else {
				$parsedCode = $this->checkRegex($structure, $parsedCode);
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
		$result = [];
		if (is_array($structure)) {
			foreach ($structure as $key => $value) {
				if ($key === 'default') {
					$result = $value;
				} elseif ($key === 'regex' || $key === 'type') {
					$result = '';
				} else {
					$result[$key] = $this->copyStructure($value);
				}
			}
			return $result;
		}
	}
	
	private function setDefaultRawValue(array $structure)
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
		return $this->setDefaultRawValue($structure);
	}
	
}

?>