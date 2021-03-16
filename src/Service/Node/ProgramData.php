<?php

namespace App\Service\Node;

use App\Entity\Program;
use App\Service\CacheService;
use Spatie\Regex\Regex;
use Spatie\Regex\MatchResult;
use Symfony\Component\Security\Core\Security;
use App\Service\DateService;


class ProgramData
{

	const PRELOAD	= 0;
	const LOAD		= 1;
	const NEW_BATCH	= 2;
	const COMPLETED	= 3;
	
	private $cacheService;
	
	private $dateService;
	
	private $security;
	
	private $type;
	
	private $status;
	
	private $parameters; //currentRow, filePath, documents_created, versions_created, count_processed
	
	private $nodes;
	
	private $options; //library, dateFormat
	
	public function __construct(CacheService $cacheService, DateService $dateService, Security $security)
	{
		$this->cacheService = $cacheService;
		$this->dateService = $dateService;
		$this->security = $security;
		$this->status = self::PRELOAD;
		$this->parameters = [];
		$this->nodes = [];
		$this->options = [
			'date_format_input' => 'd-m-Y',
			'date_format_output' => 'd-m-Y',
		];
	}
	
	public function setProgram(Program $program)
	{
		$this->type = $program->getType();
		
		//parameters
		switch ($this->type) {
			case Program::EXPORT:
				self::setParameter('first_row', $program->getParsedCode('first_row'));
				break;
			case Program::IMPORT:
				self::setParameter('first_row', $program->getParsedCode('first_row'));
				self::setParameter('main_column', $program->getParsedCode('main_column'));
				self::setParameter('comments_column', $program->getParsedCode('comments_column'));
				break;
			case Program::TASK:
			case Program::PROGRESS:
				self::setParameter('frequency', $program->getParsedCode('frequency'));
				break;
		}
		
		//options
		foreach ($program->getParsedCode('options') as $name => $value) {
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
		
		//code
		switch ($this->type) {
			case Program::EXPORT:
				$this->walk('exclude', $program->getParsedCode('exclude'));
				$this->walk('write', $program->getParsedCode('write'));
				break;
			case Program::IMPORT:
				$this->walk('exclude', $program->getParsedCode('exclude'));
				$this->walk('get_serie', $program->getParsedCode('get_serie'));
				$this->walk('get_document', $program->getParsedCode('get_document'));
				$this->walk('get_version', $program->getParsedCode('get_version'));
				break;
			case Program::TASK:
				$this->walk('exclude', $program->getParsedCode('exclude'));
				$this->walk('update', $program->getParsedCode('update'));
				break;
			case Program::PROGRESS:
				$this->walk('exclude', $program->getParsedCode('exclude'));
				$this->walk('rules', $program->getParsedCode('rules'));
				break;
		}
	}
	
	public function getType(): int
	{
		return $this->type;
	}
	
	public function getParameter(string $name)
	{
		return $this->parameters[$key] ?? null;
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
		return $this->options[$key] ?? null;
	}
	
	public function setOption(string $name, $value)
	{
		if ($value) {
			$this->options[$key] = $value;
		}
	}
	
	public function getStatus(): int
	{
		return $this->status;
	}
	
	public function setStatus($status)
	{
		$this->status = $status;
		$this->cacheService->set('program.status', $status);
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
	
	private function walk($codeParts)
	{
		$nodes = [];
		
		foreach ($codeParts as $key => $expression) {
			if (is_array($expression)) {
				$nodes[$key] = self::walk($expression);
			} else {
				if ($results = Regex::matchAll('/(.*?)(\[\S]+?)\s+(get|match)\s+"*\/(\S*)\/"*|(.+)/', $expression)->results()) {
					foreach ($results as $result) {
						
						$nodes[$key] += $this->createNodesArray($result->groupOr(1, ''), false);
						switch ($result->groupOr(3, '')) {
							case 'get':
								$nodes[$key] += $this->createNodesArray("(function($e) { if (preg_match('/", false);
								$nodes[$key] += $this->createNodesArray($result->groupOr(4, ''), true);
								$nodes[$key] += $this->createNodesArray("/', $e, $m) === 1 && sizeof($m) > 1) { return $m[1]; })(" . $result->groupOr(2, '') . ")", false);
								break;
								
							case 'match':
								$nodes[$key] += $this->createNodesArray("preg_match('/", false);
								$nodes[$key] += $this->createNodesArray($result->groupOr(4, ''), true);
								$nodes[$key] += $this->createNodesArray("/', " . $result->groupOr(2, '') . ") === 1", false);
								break;
								
							default:
								$nodes[$key] += $this->createNodesArray($result->groupOr(5, ''), true);
						}
						
					}
				} else {
					$nodes[$key] += $this->createNodesArray($expression, false);
				}
			}
		}
		
		return $nodes;
	}
	
	private function createNodesArray(string $expression, bool $isRegex = false)
	{		
		$nodes = [];
		
		if ($results = Regex::matchAll('/(.*?)(\[[A-Z]{1,2}\]|\[\w+[.\w+]+\])|(.+)/', $expression)->results()) {
			foreach ($results as $result) {
				$nodes[] = $this->createNode($result->groupOr(1, ''), $isRegex);
				$nodes[] = $this->createNode($result->groupOr(2, ''), $isRegex);
				$nodes[] = $this->createNode($result->groupOr(3, ''), $isRegex);
			}
		} else {
			$nodes[] = $this->createNode($expression, $isRegex);
		}
		
		return $nodes;
	}
	
	private function createNode(string $expression, bool $isRegex)
	{
		if ($expression == '[user.name]') {
			return new Node(Node::CODE, '"' . $this->security->getUser() . "'", $isRegex);
		} elseif ($expression == '[date.now]') {
			return new Node(Node::CODE, '(new \DateTime())', $isRegex);
		} elseif ($result = Regex::match('/\[(\w+[.\w+]+\)]/', $expression)->group(1)) {
			return new Node(Node::FIELD, $result, $isRegex);
		} elseif ($result = Regex::match('/\[([A-Z]{1,2})\]/', $expression)->group(1)) {
			return new Node(Node::EXCEL, $result, $isRegex);
		} elseif ($expression) {
			
			if ($date = $this->getDateFromFormat($expression, $this->getOption('date_format'))) {
				
				$expression = "new \DateTime('" . $date->format('d-m-Y') . "')";
				
			} elseif (Regex::match('/^\s*[+-]\s*\d+[ymd]?/i', $expression)->hasMatch()) {
				
				$expression = Regex::replace('/^\s*([+-])\s*(\d+)([ymd])?/i', function(MatchResult $result) {
					switch ($result->group(1)) {
						case '+':
							return "->add(new \DateInterval('P" . $result->group(2) . strtoupper($result->group(3)) . "'))";
						case '-':
							return "->sub(new \DateInterval('P" . $result->group(2) . strtoupper($result->group(3)) . "'))";
					}
				}, $expression)->result();
				
			}
			
			$expression = str_replace('$', '', $expression);
			$expression = str_ireplace(' and ', ' && ', $expression);
			$expression = str_ireplace(' or ', ' || ', $expression);
			
			return new Node(Node::CODE, $expression, $isRegex);
		}
	}
	
	private function prepare(string $expression, bool $îsRegex = false)
	{
		
		if ($îsRegex) {
			//autoescape character "
			$expression = Regex::replace('/((?<!\\\\)")/', '\\\\"', $expression)->result();
		} else {		
			//regex (syntax: "/regex/" or /regex/)
			$expression = Regex::replace('/(?:get|match)\s+"*\/(\S*)\/"*/', function (MatchResult $result) {
				return ' "/' . $this->prepare($result->result(), true) . '/"';
			}, $expression)->result();
			
			//split by "
			$codeParts = Regex::matchAll('/(.*?)(?<!\\\\)"|(.+)/', $expression)->results();
			foreach ($codeParts as $key => $codePart) {
				if ($key % 2) {
					$codePart = new Node();
				}
			}
		}
		
	}
}

?>