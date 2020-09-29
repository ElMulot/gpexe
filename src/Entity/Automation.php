<?php

namespace App\Entity;

use App\Repository\AutomationRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Yaml\Yaml;
use Symfony\Component\Yaml\Exception\ParseException;

/**
 * @ORM\Entity(repositoryClass=AutomationRepository::class)
 * @ORM\HasLifecycleCallbacks()
 */
class Automation
{
	/**
	 * @ORM\Id()
	 * @ORM\GeneratedValue()
	 * @ORM\Column(type="integer")
	 */
	private $id;

	/**
	 * @ORM\Column(type="string", length=100)
	 */
	private $name;

	/**
	 * @ORM\Column(type="text")
	 */
	private $code;
	
	/**
	 * @ORM\Column(type="boolean")
	 */
	private $enabled;
	
	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $createdBy;
	
	/**
	 * @ORM\Column(type="datetime")
	 */
	private $createdOn;
	
	/**
	 * @ORM\ManyToOne(targetEntity=User::class)
	 */
	private $lastModifiedBy;
	
	/**
	 * @ORM\Column(type="datetime", nullable=true)
	 */
	private $lastModifiedOn;
	
	/**
	 * @ORM\ManyToOne(targetEntity=Project::class, inversedBy="automations")
	 * @ORM\JoinColumn(nullable=false)
	 */
	private $project;
	
	private $structure;
	
	private $parsedCode;
	
	private $parseError;

	public function getId(): ?int
	{
		return $this->id;
	}

	public function getName(): ?string
	{
		return $this->name;
	}

	public function setName(string $name): self
	{
		$this->name = $name;

		return $this;
	}

	public function getCode(): ?string
	{
		return $this->code;
	}

	public function setCode(string $code): self
	{
		$this->code = $code;
		
		return $this;
	}

	public function getEnabled(): ?bool
	{
		return $this->enabled;
	}

	public function setEnabled(bool $enabled): self
	{
		$this->enabled = $enabled;

		return $this;
	}
	
	public function getCreatedBy(): ?User
	{
		return $this->createdBy;
	}
	
	public function setCreatedBy(?User $createdBy): self
	{
		$this->createdBy = $createdBy;
		
		return $this;
	}
	
	public function getCreatedOn(): ?\DateTimeInterface
	{
		return $this->createdOn;
	}
	
	public function setCreatedOn(\DateTimeInterface $createdOn): self
	{
		$this->createdOn = $createdOn;
		
		return $this;
	}
	
	/**
	 * @ORM\PrePersist
	 */
	public function setCreatedOnValue()
	{
		$this->createdOn = new \DateTime();
	}
	
	public function getLastModifiedBy(): ?User
	{
		return $this->lastModifiedBy;
	}
	
	public function setLastModifiedBy(?User $lastModifiedBy): self
	{
		$this->lastModifiedBy = $lastModifiedBy;
		
		return $this;
	}
	
	public function getLastModifiedOn(): ?\DateTimeInterface
	{
		return $this->lastModifiedOn;
	}
	
	public function setLastModifiedOn(\DateTimeInterface $lastModifiedOn): self
	{
		$this->lastModifiedOn = $lastModifiedOn;
		
		return $this;
	}
	
	/**
	 * @ORM\PreUpdate
	 */
	public function setLastModifiedOnValue()
	{
		$this->lastModifiedOn = new \DateTime();
	}
	
	public function getProject(): ?Project
	{
		return $this->project;
	}
	
	public function setProject(?Project $project): self
	{
		$this->project = $project;
		
		return $this;
	}
	
	public function getParsedCode(): array
	{
		if ($this->parsedCode === null) {
			try {
				$this->parsedCode = Yaml::parse($this->code ?? '');
			} catch (ParseException $exception) {
				$this->parsedCode = [];
				$this->parseError = true;
				return $this;
			}
			
			if (($this->parsedCode['type'] ?? '') == 'import') {
				$this->structure = self::getStructureImport();
			} elseif (($this->parsedCode['type'] ?? '') == 'export') {
				$this->structure = self::getStructureExport();
			} else {
				$this->parsedCode = [];
				$this->parseError = true;
				return $this;
			}
			
			$this->parsedCode = self::validateStructure($this->structure, $this->parsedCode);
			$this->parseError = false;
		}
		
		return $this->parsedCode;
	}
	
	public function getValidatedCode($code): string
	{
		$code = preg_replace('/\t/', '    ', $code);
		try {
			$parsedCode = Yaml::parse($code ?? '') ?? [];
		} catch (ParseException $exception) {
			return '';
		}
		
		if (($parsedCode['type'] ?? '') == 'import') {
			$structure = self::getStructureImport();
		} elseif (($parsedCode['type'] ?? '') == 'export') {
			$structure = self::getStructureExport();
		} else {
			return '';
		}
		
		$parsedCode = self::validateStructure($structure, $parsedCode);
		
		return Yaml::dump($parsedCode, 3);
	}
	
	public function isValid(): bool
	{
		if ($this->parseError === null) {
			$this->getParsedCode();
		}
		return $this->parseError === false;
	}
	
	public function isTypeImport(): ?bool
	{
		if ($this->isValid()) {
			return ($this->parsedCode['type'] ?? '') == 'import';
		} else {
			return null;
		}
	}
	
	public function isTypeExport(): ?bool
	{
		if ($this->isValid()) {
			return ($this->parsedCode['type'] ?? '') == 'export';
		} else {
			return null;
		}
	}
	
	public function __toString(): string
	{
		return (string)$this->getName();
	}
	
	private function getStructureImport(): array
	{
		return [
			'type' => 'import',
			'first_row' => '\d+',
			'first_column' => '[A-Z]{1,2}',
			'date_format' => '[djDlSzFMmnYyaAhgGHisvu\s#;:\/\.,\-\(\)]+',
			'exclude' => ['.+'],
			'get_serie' => [
				'condition' => '.+',
			],
			'get_document' => [
				'condition' => '.+',
				'then' => ['(\([^()]+\)\?)*\[\w+.\w+\]\s*\=\s*.+'],
				'else' => ['(\([^()]+\)\?)*\[\w+.\w+\]\s*\=\s*.+'],
			],
			'get_version' => [
				'condition' => '.+',
				'then' => ['(\([^()]+\)\?)*\[\w+.\w+\]\s*\=\s*.+'],
				'else' => ['(\([^()]+\)\?)*\[\w+.\w+\]\s*\=\s*.+'],
			],
			'option' => [
				'move_from_mdr' => 'true|false|choose',
				'move_from_sdr' => 'true|false|choose',
				'update_only' => 'true|false|choose',
			],
		];
	}
	
	private function getStructureExport(): array
	{
		return [
			'type' => 'export',
			'first_row' => '\d+',
			'exclude' => ['.+'],
			'write' => [
				[
					'condition' => '.+',
					'to' => '[A-Z]{1,2}',
					'value' => '.+',
					'title' => '.+',
				],
			],
		];
	}
	
	private function validateStructure($structure, $parsedCode)
	{
		
		if (is_array($structure)) {
			
			foreach ($structure as $key => $value) {
				
				if (is_array($parsedCode) === false) {
					
					$parsedCode = [$key => $value];
					array_walk_recursive($parsedCode, function(&$item) {
						$item = self::setDefaultValue($item);
					});
					
				} else {
					
					if ($key === 0) {
						
						array_walk($parsedCode, function(&$item, $key, $value) {
							$item = self::validateStructure($value, $item);
						}, $value);
						
					} elseif (array_key_exists($key, $parsedCode)) {
						
						$parsedCode[$key] = self::validateStructure($value, $parsedCode[$key]);
						
					} else {
						
						$parsedCode[$key] = '';
						$parsedCode[$key] = self::validateStructure($value, $parsedCode[$key]);
						
					}
				}
			}
			
			
			foreach ($parsedCode as $key => $value) {
				if (array_key_exists($key, $structure) == false && gettype($key) == 'string') {
					unset($parsedCode[$key]);
				}
			}
			
		} else {
			
			if (is_array($parsedCode)) {
				$parsedCode = '';
			} else {
				if (preg_match('/' . $structure . '/', $parsedCode, $matches)) {
					$parsedCode = (is_numeric($matches[0]))?+$matches[0]:$matches[0];
				} else {
					$parsedCode = self::setDefaultValue($structure);
				}
			}
		}
		return $parsedCode;
	}
	
	private function setDefaultValue(string $structure)
	{	
		switch ($structure) {
			case '\d+':
				$value = 1;
				break;
			case '[A-Z]{1,2}':
				$value = 'A';
				break;
			case '[djDlSzFMmnYyaAhgGHisvu\s#;:\/\.,\-\(\)]+':
				$value = 'd/m/Y';
				break;
			case 'true|false|choose':
				$value = 'choose';
				break;
			default:
				$value = '';
		}
		return $value;
	}
	
}
