<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;

#[AsEntityListener(entity:MetadataItem::class, event: Events::postRemove, lazy:true)]
class MetadataItemListener
{
	
	public function postRemove(MetadataItem $metadataItem, LifecycleEventArgs $event)
	{
		$metadata = $metadataItem->getMetadata();
		
		if ($metadata->getDefaultValue() === $metadataItem->getValue()) {
			$metadata->setDefaultValue(null);
			$event->getObjectManager()->persist($metadata);
			$event->getObjectManager()->flush();
		}
	}
}

?>