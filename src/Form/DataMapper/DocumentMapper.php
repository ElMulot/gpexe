<?php 

namespace App\Form\DataMapper;

use App\Entity\Codification;
use App\Entity\Document;
use App\Entity\Metadata;
use App\Entity\Project;
use App\Exception\InternalErrorException;
use App\Repository\CodificationRepository;
use PhpParser\Lexer\TokenEmulator\ReadonlyFunctionTokenEmulator;
use Symfony\Component\Form\DataMapperInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\Exception\UnexpectedTypeException;


class DocumentMapper implements DataMapperInterface
{

	public function __construct(private readonly Project $project,
								private readonly Document $document,
								private readonly bool $isNew,
								private readonly array $codifications,
								private readonly array $metadatas)
	{
		
	}
	
	public function mapDataToForms($viewData, \Traversable $forms): void
	{
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);
		
		if ($viewData === null) {
			return;
		}

		if (is_array($viewData) === false || count($viewData) === 0) {
			throw new InternalErrorException();
		}

		/**@var Document $document */
		$document = reset($viewData);

		if ($document instanceof Document === false) {
			throw new UnexpectedTypeException($viewData, Document::class);
		}
		
		if (count($viewData) === 1) {
			$forms['name']->setData(reset($viewData)->getName());
		}
		
		/**@var Codification $codification */
		foreach ($this->codifications as $codification) {
			if ($codification->isFixed() === false) {
				if ($this->isNew === true) {
					$forms[$codification->getFullId()]->setData([$codification->getDefaultValue()]);
				} else {
					$values = array_map(fn(Document $document) => $document->getCodificationValue($codification), $viewData);
					$forms[$codification->getFullId()]->setData($values);
				}
			}
		}

		/**@var Metadata $metadata */
		// foreach ($this->metadatas as $metadata) {
		// 	if ($this->isNew === true) {
		// 		$forms[$metadata->getFullId()]->setData([$metadata->getDefaultValue()]);
		// 	} else {
		// 		$values = array_map(fn(Document $document) => $document->getMetadataValue($metadata), $viewData);
		// 		$forms[$metadata->getFullId()]->setData($values);
		// 	}
		// }
		
	}

	public function mapFormsToData(\Traversable $forms, &$viewData): void
	{		
		
		/** @var FormInterface[] $forms */
		$forms = array(...$forms);

		if (is_array($viewData) === false || count($viewData) === 0) {
			throw new InternalErrorException();
		}

		/**@var Document $document */
		foreach ($viewData as &$document) {
			
			$data = $forms['name']->getData();
			if (is_scalar($data) === true) {
				$document->setName($data);
			}

			/**@var Codification $codification */
			foreach ($this->codifications as $codification) {
				if ($codification->isFixed() === false) {
					$data  = $forms[$codification->getFullId()]->getData();
					if (is_scalar($data) === true) {
						$document->setCodificationValue($codification, $data);
					}
				}
			}
		}



		
	}
}

?>