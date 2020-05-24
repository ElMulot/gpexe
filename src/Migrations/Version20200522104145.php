<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200522104145 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE automation ADD last_modified_by_id INT DEFAULT NULL, ADD last_modified_on DATETIME NOT NULL, CHANGE last_modified created_on DATETIME NOT NULL');
        $this->addSql('ALTER TABLE automation ADD CONSTRAINT FK_C9739CEEF703974A FOREIGN KEY (last_modified_by_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_C9739CEEF703974A ON automation (last_modified_by_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE automation DROP FOREIGN KEY FK_C9739CEEF703974A');
        $this->addSql('DROP INDEX IDX_C9739CEEF703974A ON automation');
        $this->addSql('ALTER TABLE automation ADD last_modified DATETIME NOT NULL, DROP last_modified_by_id, DROP created_on, DROP last_modified_on');
    }
}
