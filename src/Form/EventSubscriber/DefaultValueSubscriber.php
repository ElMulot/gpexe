<?php

namespace App\Form\EventSubscriber;

use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;


/**
 * Add a switch on form controls prefixed by 'various' when the data array contains more that one different value. 
 */
class DefaultValueSubscriber implements EventSubscriberInterface
{
	public static function getSubscribedEvents(): array
	{
		return [FormEvents::PRE_SET_DATA => 'preSetData'];
	}

	public function preSetData(FormEvent $event): void
	{
		$data = $event->getData();
		$form = $event->getForm();
		
		//data is already defined (edit mode)
		if ($data !== null) {
			return;
		}
		
		//rootData is not defined (sould never happen)
		if (($rootData = $form->getRoot()->getData()) === null) {
			return;
		}
		
		//check if edit mode
		if (is_array($rootData) === true) { //rootData is an array (various form type)
			if (array_search(null, $rootData) !== false) {
				return;
			}
		} else {
			if ($rootData === null) {
				return;
			}
		}

		dump($form->getConfig());


	}
}

