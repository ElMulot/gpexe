<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220220224402 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification CHANGE type type ENUM(\'fixed\', \'list\', \'regex\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:codification_type_enum)\'');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE log CHANGE type type ENUM(\'insert\', \'update\', \'delete\') NOT NULL COMMENT \'(DC2Type:log_type_enum)\'');
        $this->addSql('ALTER TABLE metadata CHANGE type type ENUM(\'boolean\', \'text\', \'date\', \'link\', \'list\') DEFAULT \'list\' NOT NULL COMMENT \'(DC2Type:metadata_type_enum)\', CHANGE parent parent ENUM(\'serie\', \'document\', \'version\') NOT NULL COMMENT \'(DC2Type:metadata_parent_enum)\'');
        $this->addSql('ALTER TABLE program CHANGE type type ENUM(\'export\', \'import\', \'task\', \'progress\') NOT NULL COMMENT \'(DC2Type:program_type_enum)\'');
        $this->addSql('ALTER TABLE status CHANGE type type ENUM(\'information\', \'review\', \'cancel\', \'as_build\') DEFAULT \'review\' NOT NULL COMMENT \'(DC2Type:status_type_enum)\'');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE codification ADD type_sav INT NOT NULL, CHANGE type type SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'main_contractor\', \'sub_contractor\', \'supplier\', \'checker\') DEFAULT \'supplier\' DEFAULT \'supplier\' NOT NULL COMMENT \'(DC2Type:company_type_enum)\'');
        $this->addSql('ALTER TABLE log CHANGE type type SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE metadata CHANGE type type SMALLINT NOT NULL, CHANGE parent parent SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE program CHANGE type type SMALLINT DEFAULT NULL');
        $this->addSql('ALTER TABLE status CHANGE type type SMALLINT NOT NULL');
    }
}
