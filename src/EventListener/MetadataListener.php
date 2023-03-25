<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;

#[AsEntityListener(entity:Metadata::class, event: Events::postPersist, lazy:true)]
#[AsEntityListener(entity:Metadata::class, event: Events::postUpdate, lazy:true)]
class MetadataListener
{
	public function postPersist(Metadata $metadata, LifecycleEventArgs $event)
	{
		if (!$metadata->getDefaultValue()) {
			return;
		}
		
		if ($metadata->isList() === false) {
			return;
		}
		
		/**@var MetadataChoice $metadataChoice */
		foreach ($metadata->getMetadataChoices() as $metadataChoice) {
			if ($metadataChoice->getValue() === $metadata->getDefaultValue()) {
				return;
			}
		}
		
		$metadataChoice = new MetadataChoice();
		$metadataChoice
			->setMetadata($metadata)
			->setValue($metadata->getDefaultValue());
		$event->getObjectManager()->persist($metadataChoice);
		$event->getObjectManager()->flush();
	}
	
	public function postUpdate(Metadata $metadata, LifecycleEventArgs $event)
	{
		$this->postPersist($metadata, $event);
	}
}

?>