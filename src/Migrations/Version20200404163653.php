<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200404163653 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'mainContractor\', \'subContractor\', \'supplier\', \'checker\')');
        $this->addSql('ALTER TABLE profil ADD edit_progress_rules TINYINT(1) NOT NULL, ADD edit_references TINYINT(1) NOT NULL, ADD edit_metadatas TINYINT(1) NOT NULL, ADD edit_visas TINYINT(1) NOT NULL, DROP edit_progress_rule, DROP edit_ref, DROP edit_metadata, DROP edit_visa');
        $this->addSql('ALTER TABLE user CHANGE locale locale ENUM(\'en_GB\', \'fr_FR\')');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE company CHANGE type type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE profil ADD edit_progress_rule TINYINT(1) NOT NULL, ADD edit_ref TINYINT(1) NOT NULL, ADD edit_metadata TINYINT(1) NOT NULL, ADD edit_visa TINYINT(1) NOT NULL, DROP edit_progress_rules, DROP edit_references, DROP edit_metadatas, DROP edit_visas');
        $this->addSql('ALTER TABLE user CHANGE locale locale VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
