<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200508062522 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE document_metadata_item (document_id INT NOT NULL, metadata_item_id INT NOT NULL, INDEX IDX_E376F75CC33F7837 (document_id), INDEX IDX_E376F75C801E82A6 (metadata_item_id), PRIMARY KEY(document_id, metadata_item_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE document_metadata_value (document_id INT NOT NULL, metadata_value_id INT NOT NULL, INDEX IDX_8559155AC33F7837 (document_id), INDEX IDX_8559155A4AD4B05C (metadata_value_id), PRIMARY KEY(document_id, metadata_value_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_metadata_item (serie_id INT NOT NULL, metadata_item_id INT NOT NULL, INDEX IDX_9D980BFCD94388BD (serie_id), INDEX IDX_9D980BFC801E82A6 (metadata_item_id), PRIMARY KEY(serie_id, metadata_item_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE serie_metadata_value (serie_id INT NOT NULL, metadata_value_id INT NOT NULL, INDEX IDX_53F1584ED94388BD (serie_id), INDEX IDX_53F1584E4AD4B05C (metadata_value_id), PRIMARY KEY(serie_id, metadata_value_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE document_metadata_item ADD CONSTRAINT FK_E376F75CC33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_metadata_item ADD CONSTRAINT FK_E376F75C801E82A6 FOREIGN KEY (metadata_item_id) REFERENCES metadata_item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_metadata_value ADD CONSTRAINT FK_8559155AC33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_metadata_value ADD CONSTRAINT FK_8559155A4AD4B05C FOREIGN KEY (metadata_value_id) REFERENCES metadata_value (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_metadata_item ADD CONSTRAINT FK_9D980BFCD94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_metadata_item ADD CONSTRAINT FK_9D980BFC801E82A6 FOREIGN KEY (metadata_item_id) REFERENCES metadata_item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_metadata_value ADD CONSTRAINT FK_53F1584ED94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE serie_metadata_value ADD CONSTRAINT FK_53F1584E4AD4B05C FOREIGN KEY (metadata_value_id) REFERENCES metadata_value (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE metadata ADD parent SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE serie DROP pirs_folder_path');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE document_metadata_item');
        $this->addSql('DROP TABLE document_metadata_value');
        $this->addSql('DROP TABLE serie_metadata_item');
        $this->addSql('DROP TABLE serie_metadata_value');
        $this->addSql('ALTER TABLE metadata DROP parent');
        $this->addSql('ALTER TABLE serie ADD pirs_folder_path VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
