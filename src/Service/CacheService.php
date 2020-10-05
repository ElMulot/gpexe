<?php

namespace App\Service;

use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class CacheService {

	public function __construct()
	{
		$this->cache = new FilesystemAdapter;
	}
	
	public function get(string $key)
	{
		$item = $this->cache->getItem($key);
		if ($item->isHit()) {
			return $item->get();
		} else {
			return null;
		}
	}
	
	public function set(string $key, $value): self
	{
		$item = $this->cache->getItem($key);
		$item->set($value);
		$this->cache->save($item);
		
		return $this;
	}
	
	public function delete(string $key): self
	{
		$this->cache->deleteItem($key);
		return $this;
	}
		
}

?>