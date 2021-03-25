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
	
	private $options; //library, dateFormat
	
	private $tree = [];
	
	public function __construct(FieldService $fieldService)
	{
		$this->fieldService = $fieldService;
		$this->status = Cache::get('program.status') ?? self::PRELOAD;
		$this->parameters = Cache::get('program.parameters') ?? [];
		$this->tree = Cache::get('program.tree') ?? [];
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
		Cache::set('program.tree', $this->tree);
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
		
		//tree
		switch ($this->type) {
			case Program::EXPORT:
				$this->tree['exclude'] = $this->walk($program->getParsedCode('exclude'));
				$this->tree['write'] = $this->walk($program->getParsedCode('write'));
				break;
			case Program::IMPORT:
				$this->tree['exclude'] = $this->walk($program->getParsedCode('exclude'));
				$this->tree['get_serie'] = $this->walk($program->getParsedCode('get_serie'));
				$this->tree['get_document'] = $this->walk($program->getParsedCode('get_document'));
				$this->tree['get_version'] = $this->walk($program->getParsedCode('get_version'));
				break;
			case Program::TASK:
// 				$this->tree['exclude'] = $this->walk($program->getParsedCode('exclude'));
				$this->tree['update'] = $this->walk($program->getParsedCode('update'));
				break;
			case Program::PROGRESS:
				$this->tree['exclude'] = $this->walk($program->getParsedCode('exclude'));
				$this->tree['rules'] = $this->walk($program->getParsedCode('rules'));
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
		if ($value) {
			$this->options[$name] = $value;
		}
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
	
	private function walk($codeArray): array
	{
		$tree = [];
		foreach ($codeArray as $key => $code) {
			if (is_array($code)) {
				$tree[$key] = $this->walk($code);
			} else {
				$tree[$key] = new Expression($code, $this);
			}
		}
		return $tree;
	}
	
	public function getNode($entity, ...$keys)
	{
		$tree = $this->tree;
		foreach ($keys as $key) {
			$tree = $tree[$key];
		}
		dd($tree);
		dd($tree->getNode($entity));
		
	}
	
	public function getVariable(...$keys)
	{
		$tree = $this->tree;
		foreach ($key as $keys) {
			$tree = $tree[$key];
		}
		
		return $tree->getVariable();
			
	}
	
	public static function clear()
	{
		Cache::delete('program.status');
		Cache::delete('program.parameters');
		Cache::delete('program.tree');
		Cache::delete('program.options');
	}
}

?>