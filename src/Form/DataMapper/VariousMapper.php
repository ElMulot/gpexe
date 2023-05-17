<?php 

namespace App\Form\DataMapper;

use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;

class VariousMapper implements DataMapperInterface
{
	
	public function mapDataToForms($viewData, \Traversable $forms): void
	{
		// dump('VariousMapper->mapDataToForms', $viewData);
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);

		if ($viewData === '') {
			return;
		}
		
		if (is_array($viewData) === false) {
			throw new UnexpectedTypeException($viewData, 'array');
		}
		
		$forms['input']->setData(reset($viewData)?:null);
	}

	public function mapFormsToData(\Traversable $forms, &$viewData): void
	{		
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		// dump('VariousMapper->mapFormsToData', $viewData);

		if (array_key_exists('switch', $forms) === true) {
			// dump($forms['switch']->getData());
			if ($forms['switch']->getData() === true) {
				return;
			}
		}

		$viewData = $forms['input']->getData();
	}
}

?>