<?php

namespace App\Form\EventSubscriber;

use Symfony\Component\Form\FormEvent;
use Symfony\Component\Form\FormEvents;
use App\Exception\InternalErrorException;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;


/**
 * Add a switch on form controls prefixed by 'various' when the data array contains more that one different value. 
 */
class VariousFieldSubscriber implements EventSubscriberInterface
{
	public static function getSubscribedEvents(): array
	{
		return [FormEvents::PRE_SET_DATA => 'preSetData'];
	}

	public function preSetData(FormEvent $event): void
	{
		// dump('VariousFieldSubscriber->preSetData');
		
		$data = $event->getData();
		$form = $event->getForm();
		
		if (is_array($data) === true) {
			if ($this->isVarious($data) === true) {
				$form->add('switch', CheckboxType::class, [
					'label' => 'Various',
					'label_attr' => [
						'class' => 'checkbox-switch',
					],
					'required' => false,
					'data' => true,
				]);
			}
		}
	}

	/**
	 * Checks if an array contains at most 1 distinct value.
	 *
	 * @param array $array
	 * @return boolean
	 */
	private function isVarious(array $array): bool
	{
		array_walk($array, function (&$item) {
			if ($item === null || is_scalar($item) === true) {
				return $item;
			}
			if (is_array($item)) {
				throw new InternalErrorException('Array values are not supported in Various type.');
			}
			if (is_object($item) && method_exists($item, '__toString')) {
				return $item->__toString();
			}
			if ($item instanceof \DateTimeInterface) {
				return $item;
			}
		});
		
		if (count($array) > 1) {
			$firstValue = reset($array);
			foreach ($array as $value) {
				if ($firstValue != $value) {
					return true;
				}
			}
		}

		return false;
	}
}

