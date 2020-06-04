<?php 

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Yaml\Yaml;
use App\Entity\Automation;


class AutomationTransformer implements DataTransformerInterface
{
	
	private function getStructureImport(): array
	{
		return [
			'type' => 'import',
			'first_line' => '\d+',
			'exclude' => ['(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)'],
			'get_serie' => [
				'if' => '(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)',
			],
			'get_document' => [
				'if' => '(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)',
				'else' => 'create|skip',
			],
			'get_version' => [
				'if' => '(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)',
				'else' => 'create|skip',
			],
			'write' => [
				'condition' => '(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)',
				'to' => '\w+\.\w+',
				'value' => '\S+',
			],
		];
	}
	
	private function getStructureExport(): array
	{
		return [
			'type' => 'export',
			'first_line' => '\d+',
			'exclude' => ['(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)'],
			'write' => [
				'condition' => '(\w+\.\w+)\s*(==|!=)\s*"(\S+)"|([\w\.]+)\s*(==|!=)\s*(\/\S+\/)',
				'to' => '\w+',
				'value' => '\S+',
			],
		];
	}
	
	private function validateStructure($structure, $parsedCode):? array
	{
		foreach ($structure as $key => $value) {
			
			if ($key === 0) {
				/*
				 array_walk($parsedCode, function(&$item, $key, $value) {
				 if (is_array($item)) {
				 $item = '';
				 } elseif (preg_match('/' . $value . '/', $item) == false) {
				 $item = '';
				 }
				 }, $value);
				 */
			} elseif (is_array($parsedCode) == false) {
				$parsedCode = [$key => ''];
			} elseif (array_key_exists($key, $parsedCode)) {
				if (is_array($value)) {
					$parsedCode[$key] = $this->validateStructure($value, $parsedCode[$key]);
				} elseif (preg_match('/' . $value . '/', $parsedCode[$key]) == false) {
					$parsedCode[$key] = '';
				}
			} else {
				$parsedCode[$key] = '';
			}
		}
		
		foreach ($parsedCode as $key => $value) {
			if (array_key_exists($key, $structure) == false && $key !== 0) {
				//dump($parsedCode[$key]);
				unset($parsedCode[$key]);
			}
		}
		
		return $parsedCode;
	}
	
	public function transform($value)
	{
		
		$parsedCode = Yaml::parse($value ?? '') ?? [];
		dump('ok');
		if (($parsedCode['type'] ?? '') == 'import') {
			$structure = $this->getStructureImport();
		} elseif (($parsedCode['type'] ?? '') == 'import') {
			$structure = $this->getStructureExport();
		} else {
			return false;
		}
		
		$parsedCode = $this->validateStructure($structure, $parsedCode);
		
		return Yaml::dump($parsedCode);
	}
	
	public function reverseTransform($value) {
		
		$parsedCode = Yaml::parse($value ?? '') ?? [];
		
		if (($parsedCode['type'] ?? '') == 'import') {
			$structure = $this->getStructureImport();
		} elseif (($parsedCode['type'] ?? '') == 'export') {
			$structure = $this->getStructureExport();
		} else {
			dump('aie');
			return false;
		}
		
		dump($parsedCode);
		$parsedCode = $this->validateStructure($structure, $parsedCode);
		dump($parsedCode);
		return Yaml::dump($parsedCode);
	}
}

?>