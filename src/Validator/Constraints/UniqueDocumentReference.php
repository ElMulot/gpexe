<?php 
namespace App\Validator\Constraints;

use Symfony\Component\Validator\Constraint;

class UniqueDocumentReference extends Constraint
{
	public $message = 'The reference {{ reference }} already exist.';
	
	public function getTargets()
	{
		return self::CLASS_CONSTRAINT;
	}
}

?>