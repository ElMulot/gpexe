<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20201114131546 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
    	$this->addSql('RENAME TABLE automation TO program');
        $this->addSql('CREATE TABLE progress (id INT AUTO_INCREMENT NOT NULL, serie_id INT NOT NULL, program_id INT NOT NULL, date DATE NOT NULL, value DOUBLE PRECISION NOT NULL, INDEX IDX_2201F246D94388BD (serie_id), INDEX IDX_2201F2463EB8070A (program_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE progress ADD CONSTRAINT FK_2201F246D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE progress ADD CONSTRAINT FK_2201F2463EB8070A FOREIGN KEY (program_id) REFERENCES program (id)');
        $this->addSql('ALTER TABLE program ADD type SMALLINT NOT NULL');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_c9739ceeb03a8386 TO IDX_92ED7784B03A8386');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_c9739ceef703974a TO IDX_92ED7784F703974A');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_c9739cee166d1f9c TO IDX_92ED7784166D1F9C');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE progress');
        $this->addSql('ALTER TABLE program DROP type');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_92ed7784166d1f9c TO IDX_C9739CEE166D1F9C');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_92ed7784b03a8386 TO IDX_C9739CEEB03A8386');
        $this->addSql('ALTER TABLE program RENAME INDEX idx_92ed7784f703974a TO IDX_C9739CEEF703974A');
    }
}
