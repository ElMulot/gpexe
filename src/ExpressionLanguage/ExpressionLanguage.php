<?php
namespace App\ExpressionLanguage;

use Symfony\Component\ExpressionLanguage\ExpressionLanguage as BaseExpressionLanguage;
use Psr\Cache\CacheItemPoolInterface;

class ExpressionLanguage extends BaseExpressionLanguage
{
	public function __construct(CacheItemPoolInterface $cache = null, array $providers = [])
	{
		// prepends the default provider to let users override it
		array_unshift($providers, new StringExpressionLanguageProvider());
		
		parent::__construct($cache, $providers);
	}
}

?>