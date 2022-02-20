<?php

namespace App\Service;

use App\Entity\Serie;
use App\Entity\Metadata;
use App\Entity\MetadataItem;
use App\Entity\MetadataValue;
use App\Repository\MetadataRepository;

class SerieService extends Serie
{
	
	public function __construct(private readonly MetadataRepository $metadataRepository)
	{
	}
	
	
}

?>