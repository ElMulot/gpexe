<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
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
		
		/**@var MetadataItem $metadataItem */
		foreach ($metadata->getMetadataItems() as $metadataItem) {
			if ($metadataItem->getValue() === $metadata->getDefaultValue()) {
				return;
			}
		}
		
		$metadataItem = new MetadataItem();
		$metadataItem
			->setMetadata($metadata)
			->setValue($metadata->getDefaultValue());
		$event->getObjectManager()->persist($metadataItem);
		$event->getObjectManager()->flush();
	}
	
	public function postUpdate(Metadata $metadata, LifecycleEventArgs $event)
	{
		$this->postPersist($metadata, $event);
	}
}

?>