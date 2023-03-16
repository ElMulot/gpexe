<?php

namespace App\DQL;

use Doctrine\ORM\Configuration;
use Doctrine\ORM\Query\AST\Functions\FunctionNode;
use Doctrine\ORM\Query\Lexer;
use Doctrine\ORM\Query\Parser;
use Doctrine\ORM\Query\SqlWalker;

class DateDiffWD extends FunctionNode
{
	
	public $firstDateExpression = null;
	public $secondDateExpression = null;
	
	public function parse(Parser $parser): void
	{
		$parser->match(Lexer::T_IDENTIFIER);
		$parser->match(Lexer::T_OPEN_PARENTHESIS);
		$this->firstDateExpression = $parser->ArithmeticPrimary();
		$parser->match(Lexer::T_COMMA);
		$this->secondDateExpression = $parser->ArithmeticPrimary();
		$parser->match(Lexer::T_CLOSE_PARENTHESIS);
	}
	
	public function getSql(SqlWalker $sqlWalker)
	{		
		return '5 * (DATEDIFF(' .
			$this->firstDateExpression->dispatch($sqlWalker) . ', ' .
			$this->secondDateExpression->dispatch($sqlWalker) .
			') DIV 7) + MID(\'0123455501234445012333450122234501101234000123450\', 7 * WEEKDAY(' .
			$this->secondDateExpression->dispatch($sqlWalker) . ') + WEEKDAY(' .
			$this->firstDateExpression->dispatch($sqlWalker) . ') + 1, 1)'
		;
	}
}