<?php

namespace App\Service\Code;

use App\Entity\Metadata;
use App\Helpers\Date;
use Spatie\Regex\Regex;
use Spatie\Regex\MatchResult;

class Expression
{
	
	private $strings = [];
	
	private $regexes = [];
	
	private $variable;
	
	private $col;
	
	private $nodes = [];
	
	public function __construct($expression, ProgramCache $programCache)
	{
		
		//security
		$expression = str_replace('$', '', $expression);
		
		//escape " inside regex
		$expression = Regex::replace('/((?:get|match)\s+\/\S*)(?<!\\\\)"(\S*\/)/', '$1\\\\"$2', $expression)->result();
		
		//extract strings inside " and replace it by a reference
		$expression = Regex::replace('/(?<!\\\\)"(.*?)(?<!\\\\)"/', function(MatchResult $result) {
			$this->strings[] = $result->group(1);
			return '[s' . (sizeof($this->strings) - 1) . ']';
		}, $expression)->result();
		
		//extract regex inside / and replace it by a reference
		$expression = Regex::replace('/\s+(get|matches)\s+"*\/(\S*)\/"*/', function(MatchResult $result) {
			switch ($result->group(1)) {
				case 'get':
					$this->regexes[] = $result->group(2);
					return '[rg' . (sizeof($this->regexes) - 1) . ']';
					
				case 'matches':
					$this->regexes[] = $result->group(2);
					return '[rm' . (sizeof($this->regexes) - 1) . ']';
			}
		}, $expression)->result();
		
		//get $col, for comment purposes
		if (($result = Regex::match('/.*\[([A-Z]{1,2})\]/', $expression))->hasMatch()) {
			$this->col = $result->group(1);
		}
		
		//if the expression is a declaration, define $variable
		if (($result = Regex::match('/^(\[.+?\])\s*=(?!=|<|>)\s*(.*)/', $expression))->hasMatch()) {
			$this->createVariable($result->group(1));
			$expression = $result->group(2);
// 			//if $variable is a date, stringify all expression that are not part of a test
// 			if ($programCache->getFieldType($this->variable->getValue()) === Metadata::DATE) {
// 				$expression = Regex::replace('/^\[.+?\]|(?<=[?:])\s*\[.+?\]/', function(MatchResult $result) {
// 					return $result->result() . '->format(\'' . $programCache->getOption('date_format_output') . '\')';
// 				}, $expression)->result();
// 			}
		}
		
		//rewrite date add/sub
		$expression = Regex::replace('/\s*([+-])\s*(\d+)([ymd]+)/i', function(MatchResult $result) {
			switch ($result->group(1)) {
				case '+':
					return "->add('P" . $result->group(2) . strtoupper($result->group(3)) . "')";
				case '-':
					return "->sub('P" . $result->group(2) . strtoupper($result->group(3)) . "')";
			}
		}, $expression)->result();
		
		//rewrite regex statements
		$expression = Regex::replace('/(\[[\w\.]+\])\[(rg|rm)(\d+)\]/', function(MatchResult $result) {
			switch ($result->group(2)) {
				case 'rg':
					return '(function($e) { if (preg_match(\'/' . $this->getRegex($result->group(3)) . '/\', $e, $m) === 1 && sizeof($m) > 1) { return $m[1]; }})(' . $result->group(1) . ')';
				case 'rm':
					return 'preg_match(\'/' . $this->getRegex($result->group(3)) . '/\', ' . $result->group(1) . ') === 1';
			}
		}, $expression)->result();
		
		//rewrite date for fields (eg [version.date])
		$expression = Regex::replace('/\[(\w+(?:\.\w+)+)\]/', function(MatchResult $result) use ($programCache) {
			if ($programCache->getFieldType($result->group(1)) === Metadata::DATE) {
				return 'Date::fromFormat(' .  $result->result() . ')';
			} else {
				return $result->result();
			}
		}, $expression)->result();
		
		//replace keywords
		$expression = str_replace('[date.now]', '(new Date(\'now\'))', $expression);
		$expression = str_replace('[user.name]', '\'' . $programCache->getParameter('current_user') . '\'', $expression);
		$expression = str_ireplace(' and ', ' && ', $expression);
		$expression = str_ireplace(' or ', ' || ', $expression);
		
		//create nodes
		$results = Regex::matchAll('/(.*?)(\[(?:(?:[A-Z]){1,2}|(?:\w+(?:\.\w+)+))\])|(.+)/', $expression)->results();
		foreach ($results as $result) {
			if ($result->hasMatch()) {
				$this->createNode($result->group(1));
				$this->createNode($result->group(2));
				$this->createNode($result->group(3));
			}
		}
		
		//clearing object
		$this->strings = null;
		$this->regexes = null;
	}
	
	private function getString(int $id): string
	{
		$string = $this->strings[$id] ?? '';
		$date = Date::fromFormat($string);
		if ($date->isValid() === true) {
			return '(new Date(\'' . $date->format('d-m-Y') . '\'))';
		} else {
			return '\'' . $string . '\'';
		}
	}
	
	private function getRegex(int $id): string
	{
		$regex = $this->regexes[$id] ?? '';
		
		//check if regex doesn't contain fields
		return Regex::replace('/\[([\w\.]+)\]/', function(MatchResult $result) {
			return "' . preg_quote(" . $result->result() . ") . '";
		}, $regex)->result();
	}
	
	private function createVariable(string $codePart)
	{
		if ($codePart) {
			if ($result = Regex::match('/\[(\w+(?:\.\w+)+)\]/', $codePart)->groupOr(1, '')) {
				$this->variable = new Variable(Node::FIELD, $result);
			} elseif ($result = Regex::match('/\[([A-Z]{1,2})\]/', $codePart)->groupOr(1, '')) {
				$this->variable = new Variable(Node::EXCEL, $result);
			}
		}
	}
	
	private function createNode(string $codePart)
	{
		if ($codePart) {
			if ($result = Regex::match('/\[(\w+(?:\.\w+)+)\]/', $codePart)->groupOr(1, '')) {
				$this->nodes[] = new Node(Node::FIELD, $result);
			} elseif ($result = Regex::match('/\[([A-Z]{1,2})\]/', $codePart)->groupOr(1, '')) {
				$this->nodes[] = new Node(Node::EXCEL, $result);
			} else {
				//rewrite string statements
				$codePart = Regex::replace('/\[s(\d+)\]/', function(MatchResult $result) {
					return $this->getString($result->group(1));
				}, $codePart)->result();
				
				$this->nodes[] = new Node(Node::CODE, $codePart);
			}
		}
	}
	
	public function eval($entity = null, $row = null)
	{
		$nodes = array_map(function ($item) use ($entity, $row) {
			return $item->getValue($entity, $row);
		}, $this->nodes);
		try {
// 			dump(join('', $nodes));
			return eval('use App\Helpers\Date; return ' . join('', $nodes) . ';');
		} catch (\ParseError $e) {
// 			$this->programCache->addToFlashBag($e->getMessage() . " :\n" . join('', $nodes));
			return false;
		}
	}
	
	public function getValue($entity = null, $row = null)
	{
		
		$nodes = array_map(function ($item) use ($entity, $row) {
			return $item->getValue($entity, $row);
		}, $this->nodes);
		
		return join('', $nodes);
	}
	
	public function hasVariable(): bool
	{
		return $this->variable !== null;
	}
	
	public function getVariable()
	{
		return $this->variable->getValue();
	}
	
	public function getCol()
	{
		return $this->col;
	}
}


?>