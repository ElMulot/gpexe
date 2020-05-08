<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200508060931 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE metadata_value DROP FOREIGN KEY FK_FF14E0564BBC2705');
        $this->addSql('DROP INDEX IDX_FF14E0564BBC2705 ON metadata_value');
        $this->addSql('ALTER TABLE metadata_value DROP version_id');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE metadata_value ADD version_id INT NOT NULL');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E0564BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_FF14E0564BBC2705 ON metadata_value (version_id)');
    }
}
