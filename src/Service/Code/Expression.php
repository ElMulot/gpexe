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
	
	private $nodes = [];
	
	public function __construct($expression, ProgramCache $programCache)
	{
		
		//security
		$expression = str_replace('$', '', $expression);
		
		//escape " inside regex
		$expression = Regex::replace('/((?:get|match)\s+\/\S*)(?<!\\\\)"(\S*\/)/', '$1\\\\"$2', $expression)->result();
		
		//extract strings inside " and replace it by a reference
		$expression = Regex::replace('/(?<!\\\\)"(.+?)(?<!\\\\)"/', function(MatchResult $result) {
			$this->strings[] = $result->group(1);
			return '[s' . (sizeof($this->strings) - 1) . ']';
		}, $expression)->result();
		
		//extract regex inside / and replace it by a reference
		$expression = Regex::replace('/\s+(get|match)\s+"*\/(\S*)\/"*/', function(MatchResult $result) {
			switch ($result->group(1)) {
				case 'get':
					$this->regexes[] = $result->group(2);
					return '[rg' . (sizeof($this->regexes) - 1) . ']';
					
				case 'match':
					$this->regexes[] = $result->group(2);
					return '[rm' . (sizeof($this->regexes) - 1) . ']';
			}
		}, $expression)->result();
		
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
		
		//rewrite regex statements
		$expression = Regex::replace('/(\[[\w\.]+\])\[(rg|rm)(\d+)\]/', function(MatchResult $result) {
			switch ($result->group(2)) {
				case 'rg':
					return '(function($e) { if (preg_match(\'/' . $this->getRegex($result->group(3)) . '/\', $e, $m) === 1 && sizeof($m) > 1) { return $m[1]; })(' . $result->group(1) . ')';
				case 'rm':
					return 'preg_match(\'/' . $this->getRegex($result->group(3)) . '/\', ' . $result->group(1) . ') === 1';
			}
		}, $expression)->result();
		
		//rewrite date for fields (eg [version.date])
		$expression = Regex::replace('/\[([A-Za-z]+(?:\.[A-Za-z]+)+)\]/', function(MatchResult $result) use ($programCache) {
			if ($programCache->getFieldType($result->group(1)) === Metadata::DATE) {
				return '(new Date(' .  $result->result() . ')';
			} else {
				return $result->result();
			}
		}, $expression)->result();
		
		//rewrite date add/sub
		$expression = Regex::replace('/\[.+?\]\s*([+-])\s*(\d+)([ymd]?)/i', function(MatchResult $result) {
			switch ($result->group(1)) {
				case '+':
					return "->add('P" . $result->group(2) . strtoupper($result->group(3)) . "')";
				case '-':
					return "->sub('P" . $result->group(2) . strtoupper($result->group(3)) . "')";
			}
		}, $expression)->result();
		
		//replace keywords
		$expression = str_replace('[date.now]', '(new Date())', $expression);
		$expression = str_replace('[user.name]', '\'' . $programCache->getParameter('current_user') . '\'', $expression);
		$expression = str_ireplace(' and ', ' && ', $expression);
		$expression = str_ireplace(' or ', ' || ', $expression);
		
		//create nodes
		$results = Regex::matchAll('/(.*?)(\[(?:(?:[A-Z]){1,2}|(?:[A-Za-z]+(?:\.[A-Za-z]+)+))\])|(.+)/', $expression)->results();
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
		if ($date = Date::fromFormat($string, 'd-m-Y')) {
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
			if ($result = Regex::match('/\[([A-Za-z]+(?:\.[A-Za-z]+)+)\]/', $codePart)->groupOr(1, '')) {
				$this->variable = new Variable(Node::FIELD, $result);
			} elseif ($result = Regex::match('/\[([A-Z]{1,2})\]/', $codePart)->groupOr(1, '')) {
				$this->variable = new Variable(Node::EXCEL, $result);
			}
		}
	}
	
	private function createNode(string $codePart)
	{
		if ($codePart) {
			if ($result = Regex::match('/\[([A-Za-z]+(?:\.[A-Za-z]+)+)\]/', $codePart)->groupOr(1, '')) {
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
	
	public function getNode($entity = null)
	{
		$node = array_map(function ($item) use ($entity) {
			$item->getValue($entity);
		}, $this->nodes);
		
		return join('', $node);
	}
	
	public function getVariable()
	{
		return $this->variable->getValue();
	}
}


?>