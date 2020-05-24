<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200522103702 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE automation ADD created_by_id INT NOT NULL, ADD last_modified DATETIME NOT NULL');
        $this->addSql('ALTER TABLE automation ADD CONSTRAINT FK_C9739CEEB03A8386 FOREIGN KEY (created_by_id) REFERENCES user (id)');
        $this->addSql('CREATE INDEX IDX_C9739CEEB03A8386 ON automation (created_by_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE automation DROP FOREIGN KEY FK_C9739CEEB03A8386');
        $this->addSql('DROP INDEX IDX_C9739CEEB03A8386 ON automation');
        $this->addSql('ALTER TABLE automation DROP created_by_id, DROP last_modified');
    }
}
