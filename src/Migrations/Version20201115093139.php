<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201115093139 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
    	$this->addSql('ALTER TABLE program DROP FOREIGN KEY FK_C9739CEE166D1F9C');
    	$this->addSql('ALTER TABLE program ADD CONSTRAINT FK_92ED7784166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
    	$this->addSql('CREATE TABLE automation (id INT AUTO_INCREMENT NOT NULL, project_id INT NOT NULL, date DATE NOT NULL, enabled TINYINT(1) NOT NULL, route VARCHAR(255) NOT NULL, parameters JSON NOT NULL, INDEX IDX_C9739CEE166D1F9C (project_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE automation ADD CONSTRAINT FK_C9739CEE166D1F9C FOREIGN KEY (project_id) REFERENCES project (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE automation');
    }
}
