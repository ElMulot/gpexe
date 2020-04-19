<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200408143457 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE document_codification_data DROP FOREIGN KEY FK_2BAF55CFBA19713E');
        $this->addSql('CREATE TABLE document_codification_value (document_id INT NOT NULL, codification_value_id INT NOT NULL, INDEX IDX_C291EB51C33F7837 (document_id), INDEX IDX_C291EB5117A3365E (codification_value_id), PRIMARY KEY(document_id, codification_value_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE codification_value (id INT AUTO_INCREMENT NOT NULL, document_id INT NOT NULL, codification_id INT NOT NULL, value VARCHAR(10) NOT NULL, INDEX IDX_CE4F4CB8C33F7837 (document_id), INDEX IDX_CE4F4CB8A7134952 (codification_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE metadata_value (id INT AUTO_INCREMENT NOT NULL, version_id INT NOT NULL, metadata_id INT NOT NULL, value VARCHAR(255) NOT NULL, INDEX IDX_FF14E0564BBC2705 (version_id), INDEX IDX_FF14E056DC9EE959 (metadata_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE version_metadata_item (version_id INT NOT NULL, metadata_item_id INT NOT NULL, INDEX IDX_4697AA14BBC2705 (version_id), INDEX IDX_4697AA1801E82A6 (metadata_item_id), PRIMARY KEY(version_id, metadata_item_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE version_metadata_value (version_id INT NOT NULL, metadata_value_id INT NOT NULL, INDEX IDX_46B284764BBC2705 (version_id), INDEX IDX_46B284764AD4B05C (metadata_value_id), PRIMARY KEY(version_id, metadata_value_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE document_codification_value ADD CONSTRAINT FK_C291EB51C33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_codification_value ADD CONSTRAINT FK_C291EB5117A3365E FOREIGN KEY (codification_value_id) REFERENCES codification_value (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE codification_value ADD CONSTRAINT FK_CE4F4CB8C33F7837 FOREIGN KEY (document_id) REFERENCES document (id)');
        $this->addSql('ALTER TABLE codification_value ADD CONSTRAINT FK_CE4F4CB8A7134952 FOREIGN KEY (codification_id) REFERENCES codification (id)');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E0564BBC2705 FOREIGN KEY (version_id) REFERENCES version (id)');
        $this->addSql('ALTER TABLE metadata_value ADD CONSTRAINT FK_FF14E056DC9EE959 FOREIGN KEY (metadata_id) REFERENCES metadata (id)');
        $this->addSql('ALTER TABLE version_metadata_item ADD CONSTRAINT FK_4697AA14BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE version_metadata_item ADD CONSTRAINT FK_4697AA1801E82A6 FOREIGN KEY (metadata_item_id) REFERENCES metadata_item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE version_metadata_value ADD CONSTRAINT FK_46B284764BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE version_metadata_value ADD CONSTRAINT FK_46B284764AD4B05C FOREIGN KEY (metadata_value_id) REFERENCES metadata_value (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE codification_data');
        $this->addSql('DROP TABLE document_codification_data');
        $this->addSql('DROP TABLE version_metadata');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE document_codification_value DROP FOREIGN KEY FK_C291EB5117A3365E');
        $this->addSql('ALTER TABLE version_metadata_value DROP FOREIGN KEY FK_46B284764AD4B05C');
        $this->addSql('CREATE TABLE codification_data (id INT AUTO_INCREMENT NOT NULL, document_id INT NOT NULL, codification_id INT NOT NULL, value VARCHAR(10) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_43138404A7134952 (codification_id), INDEX IDX_43138404C33F7837 (document_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE document_codification_data (document_id INT NOT NULL, codification_data_id INT NOT NULL, INDEX IDX_2BAF55CFBA19713E (codification_data_id), INDEX IDX_2BAF55CFC33F7837 (document_id), PRIMARY KEY(document_id, codification_data_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE version_metadata (version_id INT NOT NULL, metadata_id INT NOT NULL, INDEX IDX_23EE681C4BBC2705 (version_id), INDEX IDX_23EE681CDC9EE959 (metadata_id), PRIMARY KEY(version_id, metadata_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE codification_data ADD CONSTRAINT FK_43138404A7134952 FOREIGN KEY (codification_id) REFERENCES codification (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE codification_data ADD CONSTRAINT FK_43138404C33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE document_codification_data ADD CONSTRAINT FK_2BAF55CFBA19713E FOREIGN KEY (codification_data_id) REFERENCES codification_data (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_codification_data ADD CONSTRAINT FK_2BAF55CFC33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE version_metadata ADD CONSTRAINT FK_23EE681C4BBC2705 FOREIGN KEY (version_id) REFERENCES version (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE version_metadata ADD CONSTRAINT FK_23EE681CDC9EE959 FOREIGN KEY (metadata_id) REFERENCES metadata (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('DROP TABLE document_codification_value');
        $this->addSql('DROP TABLE codification_value');
        $this->addSql('DROP TABLE metadata_value');
        $this->addSql('DROP TABLE version_metadata_item');
        $this->addSql('DROP TABLE version_metadata_value');
    }
}
