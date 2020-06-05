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
		$this->parseCode($code);
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
	
	/**
	 * @ORM\PostLoad
	 */
	public function parseCode(): self
	{
		
		try {
			$this->parsedCode = Yaml::parse($this->code ?? '');
		} catch (ParseException $exception) {
			$this->parsedCode = [];
			$this->parseError = true;
			return $this;
		} finally {
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
		
		return $this;
	}
	
	public function getParsedCode(): array
	{
		return $this->parsedCode;
	}
	
	public function getValidatedCode($code)
	{
		
		$parsedCode = Yaml::parse($code ?? '') ?? [];
		
		if (($parsedCode['type'] ?? '') == 'import') {
			$structure = self::getStructureImport();
		} elseif (($parsedCode['type'] ?? '') == 'export') {
			$structure = self::getStructureExport();
		} else {
			return '';
		}
		
		$parsedCode = self::validateStructure($structure, $parsedCode);
		
		return Yaml::dump($parsedCode);
	}
	
	public function isValid(): bool
	{
		return $this->parseError === false;
	}
	
	public function isTypeImport(): ?bool
	{
		if ($this->parseError === false) {
			return ($this->parsedCode['type'] ?? '') == 'import';
		} else {
			return null;
		}
	}
	
	public function isTypeExport(): ?bool
	{
		if ($this->parseError === false) {
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
		$regexCondition = '(\w+\.\w+)\s*(==|!=)\s*(\d+|".+"|\w+\.\w+|\/\S+\/)';
		return [
			'type' => 'import',
			'first_line' => '\d+',
			'exclude' => [$regexCondition],
			'get_serie' => [
				'if' => $regexCondition,
			],
			'get_document' => [
				'if' => $regexCondition,
				'else' => '(create|skip)',
			],
			'get_version' => [
				'if' => $regexCondition,
				'else' => '(create|skip)',
			],
			'write' => [
				'condition' => $regexCondition,
				'to' => '(\w+\.\w+)',
				'value' => '(\S+)',
			],
			'option' => [
				'move_from_mdr' => '(true|false|choose)',
				'move_from_sdr' => '(true|false|choose)',
				'only_update' => '(true|false|choose)',
			],
		];
	}
	
	private function getStructureExport(): array
	{
		$regexCondition = '(\w+\.\w+)\s*(==|!=)\s*(\d+|".+"|\w+\.\w+|\/\S+\/)';
		return [
			'type' => 'export',
			'first_line' => '\d+',
			'exclude' => [$regexCondition],
			'write' => [
				'condition' => $regexCondition,
				'to' => '(\w+)',
				'value' => '(\S+)',
			],
		];
	}
	
	private function validateStructure($structure, $parsedCode):? array
	{
		foreach ($structure as $key => $value) {
			
			if (is_array($parsedCode) == false) {
				$parsedCode = [$key => ''];
			} else {
				if ($key === 0) {
					
					array_walk($parsedCode, function(&$item, $key, $value) {
						if (is_array($item)) {
							$item = '';
						} elseif (preg_match('/' . $value . '/', $item) == false) {
							$item = '';
						}
					}, $value);
						
				} elseif (array_key_exists($key, $parsedCode)) {
					if (is_array($value)) {
						$parsedCode[$key] = self::validateStructure($value, $parsedCode[$key]);
					} elseif (preg_match('/' . $value . '/', $parsedCode[$key]) == false) {
						$parsedCode[$key] = '';
					}
				} else {
					$parsedCode[$key] = '';
					if (is_array($value)) {
						$parsedCode[$key] = self::validateStructure($value, $parsedCode[$key]);
					}
				}
			}
		}
		
		foreach ($parsedCode as $key => $value) {
			if (array_key_exists($key, $structure) == false && $key !== 0) {
				unset($parsedCode[$key]);
			}
		}
		
		return $parsedCode;
	}
	
}
