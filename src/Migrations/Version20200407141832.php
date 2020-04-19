<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200407141832 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE file ADD serie_id INT NOT NULL');
        $this->addSql('ALTER TABLE file ADD CONSTRAINT FK_8C9F3610D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('CREATE INDEX IDX_8C9F3610D94388BD ON file (serie_id)');
        $this->addSql('ALTER TABLE metadata_item RENAME INDEX idx_9f0a8ed1dc9ee959 TO IDX_C4D953D7DC9EE959');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_E6D6B2975E237E06 ON profil (name)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP INDEX UNIQ_4FBF094F5E237E06 ON company');
        $this->addSql('ALTER TABLE company CHANGE type type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE file DROP FOREIGN KEY FK_8C9F3610D94388BD');
        $this->addSql('DROP INDEX IDX_8C9F3610D94388BD ON file');
        $this->addSql('ALTER TABLE file DROP serie_id');
        $this->addSql('ALTER TABLE metadata_item RENAME INDEX idx_c4d953d7dc9ee959 TO IDX_9F0A8ED1DC9EE959');
        $this->addSql('DROP INDEX UNIQ_E6D6B2975E237E06 ON profil');
        $this->addSql('ALTER TABLE user CHANGE locale locale VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
    }
}
