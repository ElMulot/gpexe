<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221127140758 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification ADD pattern VARCHAR(10) DEFAULT NULL, DROP is_mandatory, CHANGE type type ENUM(\'fixed\', \'list\', \'regex\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata ADD pattern VARCHAR(255) DEFAULT NULL, ADD `default` VARCHAR(255) DEFAULT NULL, CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\'');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification ADD is_mandatory TINYINT(1) NOT NULL, DROP pattern, CHANGE type type ENUM(\'fixed\', \'list\', \'regex\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata DROP pattern, DROP `default`, CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\'');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
    }
}
