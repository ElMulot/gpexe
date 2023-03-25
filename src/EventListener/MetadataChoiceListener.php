<?php

namespace App\EventListener;

use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Metadata;
use App\Entity\MetadataChoice;
use Doctrine\Bundle\DoctrineBundle\Attribute\AsEntityListener;
use Doctrine\ORM\Events;

#[AsEntityListener(entity:MetadataChoice::class, event: Events::postRemove, lazy:true)]
class MetadataChoiceListener
{
	
	public function postRemove(MetadataChoice $metadataChoice, LifecycleEventArgs $event)
	{
		$metadata = $metadataChoice->getMetadata();
		
		if ($metadata->getDefaultValue() === $metadataChoice->getValue()) {
			$metadata->setDefaultRawValue(null);
			$event->getObjectManager()->persist($metadata);
			$event->getObjectManager()->flush();
		}
	}
}

?>