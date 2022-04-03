<?php
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class CodificationWithoutSplitter extends Constraint
{
	public $message = 'The codification use the splitter "{{ splitter }}" as a character.';
	
	public function getTargets(): string|array
	{
		return self::CLASS_CONSTRAINT;
	}
}

?>