<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200423184710 extends AbstractMigration
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
        $this->addSql('ALTER TABLE metadata_value DROP FOREIGN KEY FK_FF14E056DC9EE959');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E0564BBC2705 FOREIGN KEY (version_id) REFERENCES version (id)');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E056DC9EE959 FOREIGN KEY (metadata_id) REFERENCES metadata (id)');
        $this->addSql('ALTER TABLE user CHANGE activated activated TINYINT(1) NOT NULL');
        $this->addSql('ALTER TABLE version CHANGE initial_date initial_date DATE NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE metadata_value DROP FOREIGN KEY FK_FF14E0564BBC2705');
        $this->addSql('ALTER TABLE metadata_value DROP FOREIGN KEY FK_FF14E056DC9EE959');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E0564BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E056DC9EE959 FOREIGN KEY (metadata_id) REFERENCES metadata (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE user CHANGE activated activated TINYINT(1) DEFAULT \'0\' NOT NULL');
        $this->addSql('ALTER TABLE version CHANGE initial_date initial_date DATE DEFAULT NULL');
    }
}
