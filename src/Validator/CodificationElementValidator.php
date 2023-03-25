<?php

namespace App\Validator;

use App\Entity\Codification;
use App\Entity\CodificationElement;
use Symfony\Component\Form\Form;
use Symfony\Component\Validator\Constraints\Regex;
use Symfony\Component\Validator\Context\ExecutionContextInterface;
use Symfony\Contracts\Translation\TranslatorInterface;

#[\Attribute]
class CodificationElementValidator
{
	/**
	 * Validate a codification value
	 *
	 * @param string $string
	 * @param ExecutionContextInterface $context
	 * @return void
	 */
	public static function validate(string $value, ExecutionContextInterface $context, TranslatorInterface $translator): void
	{
		$codificationElement = $context->getObject();
		
		if ($codificationElement instanceof CodificationElement === false) {
			return;
		}

		/**@var CodificationElement $codificationElement */
		$splitter = $codificationElement->getCodification()->getProject()->getSplitter();
		
		$constraints[] = new Regex("/{$splitter}/", $translator->trans('codification.no_splitter', ['value' => $splitter]), null, false);

		if ($codificationElement->getCodification()->isRegex() === true) {
			$constraints[] = new Regex('/' . $codificationElement->getCodification()->getPattern() . '/');
		}

		$context
			->getValidator()
			->inContext($context)
			->validate($value, $constraints);
	}

	/**
	 * Validate a codification value entered in a unmapped form
	 * This is only to attach the error message to the correct field
	 *
	 * @param string $value
	 * @param ExecutionContextInterface $context
	 * @param array $payload
	 * @return void
	 */
	public static function validateAsForm(string $value, ExecutionContextInterface $context, array $payload): void
	{
		
		$splitter = $payload['splitter'] ?? null;
		$pattern = $payload['pattern'] ?? null;
		
		if ($splitter !== null) {
			$constraints[] = new Regex("/{$splitter}/", 'The {value}', null, false);
		}

		if ($pattern !== null) {
			$constraints[] = new Regex("/{$pattern}/");
		}

		$context
			->getValidator()
			->inContext($context)
			->validate($value, $constraints);
	}

}

?>