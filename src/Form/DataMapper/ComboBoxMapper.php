<?php 

namespace App\Form\DataMapper;

use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormInterface;

class ComboBoxMapper implements DataMapperInterface
{
	
	public function mapDataToForms($viewData, \Traversable $forms): void
	{
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		if ($viewData === null) {
			return;
		}
		
		$forms['choice']->setData($viewData);
	}

	public function mapFormsToData(\Traversable $forms, &$viewData): void
	{		
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);

		if ($forms['input']->getData() !== null) {
			$viewData = $forms['input']->getData();
		} else {
			$viewData = $forms['choice']->getData();
		}
	}
}

?>