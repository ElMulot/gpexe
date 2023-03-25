<?php 

namespace App\Form\DataMapper;

use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormInterface;

class VariousMapper implements DataMapperInterface
{
	
	public function mapDataToForms($viewData, \Traversable $forms): void
	{
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		// dump('VariousMapper->mapDataToForms', $viewData);

		if ($viewData === null) {
			return;
		}
		
		$forms['input']->setData($viewData);
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