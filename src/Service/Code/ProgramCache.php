<?php

namespace App\Service\Code;

use App\Entity\Program;
use App\Service\FieldService;
use Spatie\Regex\Regex;
use Spatie\Regex\MatchResult;
use Symfony\Component\Security\Core\Security;
use App\Helpers\Cache;


class ProgramCache
{

	const PRELOAD	= 0;
	const LOAD		= 1;
	const NEW_BATCH	= 2;
	const COMPLETED	= 3;
			
	private $fieldService;
		
	private $type;
	
	private $fields;
	
	private $status;
	
	private $parameters; //currentRow, filePath, documents_created, versions_created, count_processed
	
	private $options; //library, dateFormat, move_from_mdr, move_from_sdr, rows_per_batch
	
	private $cache = [];
	
	public function __construct(FieldService $fieldService)
	{
		$this->fieldService = $fieldService;
		$this->status = Cache::get('program.status') ?? self::PRELOAD;
		$this->parameters = Cache::get('program.parameters') ?? [];
		$this->cache = Cache::get('program.cache') ?? [];
		$this->options = Cache::get('program.options') ?? [
			'date_format_input' => 'd-m-Y',
			'date_format_output' => 'd-m-Y',
		];
// 		$this->type = Cache::get('program.type') ?? null;
// 		$this->fields = Cache::get('program.fields') ?? null;
	}
	
	public function __destruct()
	{
		//save cache
		Cache::set('program.status', $this->status);
		Cache::set('program.parameters', $this->parameters);
		Cache::set('program.cache', $this->cache);
		Cache::set('program.options', $this->options);
// 		Cache::set('program.type');
// 		Cache::set('program.fields');
	}
	
	public function setProgram(Program $program)
	{
		$this->type = $program->getType();
		$this->fields = $this->fieldService->getFields($program->getProject());
		
		//parameters
		switch ($this->type) {
			case Program::EXPORT:
				$this->setParameter('first_row', $program->getParsedCode('first_row'));
				break;
			case Program::IMPORT:
				$this->setParameter('first_row', $program->getParsedCode('first_row'));
				$this->setParameter('main_column', $program->getParsedCode('main_column'));
				$this->setParameter('comments_column', $program->getParsedCode('comments_column'));
				break;
			case Program::TASK:
			case Program::PROGRESS:
				$this->setParameter('frequency', $program->getParsedCode('frequency'));
				break;
		}
		
		//options
		foreach ($program->getParsedCode('option') as $name => $value) {
			$value = ($value == 'true')?1:$value;
			$value = ($value == 'false')?0:$value;
			
			$this->setOption($name, $value);
			if ($name === 'date_format') {
				switch ($this->type) {
					case Program::EXPORT:
						$this->setOption('date_format_output', $value);
						break;
					case Program::IMPORT:
						$this->setOption('date_format_input', $value);
						break;
				}
			}
		}
		
		//cache
		switch ($this->type) {
			case Program::EXPORT:
				$this->cache['exclude'] = $this->walk($program->getParsedCode('exclude'), false);
				foreach ($program->getParsedCode('write') as $write) {
					$this->cache['write'][] = [
						'condition'	=> $this->walk($write['condition'], true),
						'to'		=> $this->walk($write['to']),
						'value'		=> $this->walk($write['value']),
						'title'		=> $this->walk($write['title']),
					];
				}
				
				break;
				
			case Program::IMPORT:
				$this->cache['exclude'] = $this->walk($program->getParsedCode('exclude'), false);
				$this->cache['get_serie'] = $this->walk($program->getParsedCode('get_serie'), true);
				$this->cache['get_document'] = [
					'condition'	=> $this->walk($program->getParsedCode('get_document', 'condition'), true),
					'then'		=> $this->walk($program->getParsedCode('get_document', 'then')),
					'else'		=> $this->walk($program->getParsedCode('get_document', 'else')),
				];
				$this->cache['get_version'] = [
					'condition'	=> $this->walk($program->getParsedCode('get_version', 'condition'), true),
					'then'		=> $this->walk($program->getParsedCode('get_version', 'then')),
					'else'		=> $this->walk($program->getParsedCode('get_version', 'else')),
				];
				
				//remove lines which doesn't have variable
				$this->removeLinesWithErrors($this->cache['get_document']['then']);
				$this->removeLinesWithErrors($this->cache['get_document']['else']);
				$this->removeLinesWithErrors($this->cache['get_version']['then']);
				$this->removeLinesWithErrors($this->cache['get_version']['else']);
				
				break;
				
			case Program::TASK:
				$this->cache['exclude'] = $this->walk($program->getParsedCode('exclude'), false);
				$this->cache['update'] = [
					'condition'	=> $this->walk($program->getParsedCode('update', 'condition'), true),
					'then'		=> $this->walk($program->getParsedCode('update', 'then')),
					'else'		=> $this->walk($program->getParsedCode('update', 'else')),
				];
				
				//remove lines which doesn't have variable
				$this->removeLinesWithErrors($this->cache['update']['then']);
				$this->removeLinesWithErrors($this->cache['update']['else']);
				
				break;
				
			case Program::PROGRESS:
				$this->cache['exclude'] = $this->walk($program->getParsedCode('exclude'), false);
				$this->cache['rules'] = $this->walk($program->getParsedCode('rules'), true);
				
				break;
				
		}
	}
	
	public function getType(): int
	{
		return $this->type;
	}
	
	public function getFieldType(string $codename): int
	{
		return $this->fields[$codename]['type'] ?? 0;
	}
	
	public function getParameter(string $name)
	{
		return $this->parameters[$name] ?? null;
	}
	
	public function setParameter(string $name, $value)
	{
		$this->parameters[$name] = $value;
	}
	
	public function setNode(string $key, $codeParts)
	{
		$this->node[$key] = $this->walk($codeParts);
	}
	
	public function getCode(string $key) //à tester si pas de pertes de performances : multiples arguments pour parcourir l'aborescence de code
	{
		return $this->code[$key];
	}
	
	public function getOption(string $name)
	{
		return $this->options[$name] ?? null;
	}
	
	public function setOption(string $name, $value)
	{
		$this->options[$name] = $value;
	}
	
	public function getStatus(): int
	{
		return $this->status;
	}
	
	public function setStatus($status)
	{
		$this->status = $status;
	}
	
	public function isStatusLoad(): bool
	{
		return $this->status === self::LOAD;
	}
	
	public function isStatusNewBatch(): bool
	{
		return $this->status === self::NEW_BATCH;
	}
	
	public function isStatusCompleted(): bool
	{
		return $this->status === self::COMPLETED;
	}
	
	private function walk($code, $valueIfEmpty = '')
	{
		if (is_array($code)) {
			$cache = [];
			foreach ($code as $key => $item) {
				$cache[$key] = $this->walk($item, $valueIfEmpty);
			}
		} elseif ($code) {
			$cache = new Expression($code, $this);
		} else {
			$cache = new Expression($valueIfEmpty, $this);
		}
		return $cache;
	}
	
	private function removeLinesWithErrors(&$array)
	{
		foreach ($array as $key => $item) {
			if ($item->hasVariable() === false) {
				unset($array[$key]);
			}
		}
	}
	
	public function getCache()
	{
		return $this->cache;
	}
	
	public static function clear()
	{
		Cache::delete('program.status');
		Cache::delete('program.parameters');
		Cache::delete('program.cache');
		Cache::delete('program.tree');
		Cache::delete('program.options');
	}
}

?>