<?php

namespace App\Helpers;

use Symfony\Component\Cache\Adapter\FilesystemAdapter;

class Cache {
	
	public static function get(string $key)
	{
		$cache = new FilesystemAdapter();
		$item = $cache->getItem($key);
		if ($item->isHit()) {
			return $item->get();
		} else {
			return null;
		}
	}
	
	public static function set(string $key, $value)
	{
		$cache = new FilesystemAdapter();
		$item = $cache->getItem($key);
		$item->set($value);
		$cache->save($item);
	}
	
	public static function delete(string $key)
	{
		$cache = new FilesystemAdapter();
		$cache->deleteItem($key);
	}
		
}

?>