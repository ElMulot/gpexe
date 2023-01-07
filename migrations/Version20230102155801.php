<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230102155801 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification CHANGE type type ENUM(\'fixed\', \'text\', \'regex\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\', CHANGE `default` default_value VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification CHANGE type type ENUM(\'fixed\', \'text\', \'regex\', \'list\') DEFAULT \'list\' DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE metadata CHANGE type type ENUM(\'bool\', \'text\', \'regex\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COLLATE `utf8mb4_unicode_520_ci` COMMENT \'(DC2Type:metadata_type_enum)\', CHANGE default_value `default` VARCHAR(255) DEFAULT NULL');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
    }
}
