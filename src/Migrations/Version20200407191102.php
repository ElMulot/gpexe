<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20200407191102 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE codification_data DROP FOREIGN KEY FK_4313840493CB796C');
        $this->addSql('ALTER TABLE file_codification_data DROP FOREIGN KEY FK_919F7C93CB796C');
        $this->addSql('ALTER TABLE file_codification_item DROP FOREIGN KEY FK_B279490193CB796C');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C393CB796C');
        $this->addSql('CREATE TABLE document (id INT AUTO_INCREMENT NOT NULL, serie_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_D8698A76D94388BD (serie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE document_codification_item (document_id INT NOT NULL, codification_item_id INT NOT NULL, INDEX IDX_994783B2C33F7837 (document_id), INDEX IDX_994783B29F83825C (codification_item_id), PRIMARY KEY(document_id, codification_item_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE document_codification_data (document_id INT NOT NULL, codification_data_id INT NOT NULL, INDEX IDX_2BAF55CFC33F7837 (document_id), INDEX IDX_2BAF55CFBA19713E (codification_data_id), PRIMARY KEY(document_id, codification_data_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE document ADD CONSTRAINT FK_D8698A76D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id)');
        $this->addSql('ALTER TABLE document_codification_item ADD CONSTRAINT FK_994783B2C33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_codification_item ADD CONSTRAINT FK_994783B29F83825C FOREIGN KEY (codification_item_id) REFERENCES codification_item (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_codification_data ADD CONSTRAINT FK_2BAF55CFC33F7837 FOREIGN KEY (document_id) REFERENCES document (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE document_codification_data ADD CONSTRAINT FK_2BAF55CFBA19713E FOREIGN KEY (codification_data_id) REFERENCES codification_data (id) ON DELETE CASCADE');
        $this->addSql('DROP TABLE file');
        $this->addSql('DROP TABLE file_codification_data');
        $this->addSql('DROP TABLE file_codification_item');
        $this->addSql('ALTER TABLE company CHANGE type type ENUM(\'1\', \'2\', \'3\', \'4\')');
        $this->addSql('ALTER TABLE user CHANGE locale locale ENUM(\'en_GB\', \'fr_FR\')');
        $this->addSql('DROP INDEX IDX_4313840493CB796C ON codification_data');
        $this->addSql('ALTER TABLE codification_data CHANGE file_id document_id INT NOT NULL');
        $this->addSql('ALTER TABLE codification_data ADD CONSTRAINT FK_43138404C33F7837 FOREIGN KEY (document_id) REFERENCES document (id)');
        $this->addSql('CREATE INDEX IDX_43138404C33F7837 ON codification_data (document_id)');
        $this->addSql('DROP INDEX IDX_BF1CD3C393CB796C ON version');
        $this->addSql('ALTER TABLE version CHANGE file_id document_id INT NOT NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C3C33F7837 FOREIGN KEY (document_id) REFERENCES document (id)');
        $this->addSql('CREATE INDEX IDX_BF1CD3C3C33F7837 ON version (document_id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE codification_data DROP FOREIGN KEY FK_43138404C33F7837');
        $this->addSql('ALTER TABLE document_codification_item DROP FOREIGN KEY FK_994783B2C33F7837');
        $this->addSql('ALTER TABLE document_codification_data DROP FOREIGN KEY FK_2BAF55CFC33F7837');
        $this->addSql('ALTER TABLE version DROP FOREIGN KEY FK_BF1CD3C3C33F7837');
        $this->addSql('CREATE TABLE file (id INT AUTO_INCREMENT NOT NULL, serie_id INT NOT NULL, name VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_8C9F3610D94388BD (serie_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE file_codification_data (file_id INT NOT NULL, codification_data_id INT NOT NULL, INDEX IDX_919F7C93CB796C (file_id), INDEX IDX_919F7CBA19713E (codification_data_id), PRIMARY KEY(file_id, codification_data_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE file_codification_item (file_id INT NOT NULL, codification_item_id INT NOT NULL, INDEX IDX_B279490193CB796C (file_id), INDEX IDX_B27949019F83825C (codification_item_id), PRIMARY KEY(file_id, codification_item_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE file ADD CONSTRAINT FK_8C9F3610D94388BD FOREIGN KEY (serie_id) REFERENCES serie (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE file_codification_data ADD CONSTRAINT FK_919F7C93CB796C FOREIGN KEY (file_id) REFERENCES file (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_codification_data ADD CONSTRAINT FK_919F7CBA19713E FOREIGN KEY (codification_data_id) REFERENCES codification_data (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_codification_item ADD CONSTRAINT FK_B279490193CB796C FOREIGN KEY (file_id) REFERENCES file (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('ALTER TABLE file_codification_item ADD CONSTRAINT FK_B27949019F83825C FOREIGN KEY (codification_item_id) REFERENCES codification_item (id) ON UPDATE NO ACTION ON DELETE CASCADE');
        $this->addSql('DROP TABLE document');
        $this->addSql('DROP TABLE document_codification_item');
        $this->addSql('DROP TABLE document_codification_data');
        $this->addSql('DROP INDEX IDX_43138404C33F7837 ON codification_data');
        $this->addSql('ALTER TABLE codification_data CHANGE document_id file_id INT NOT NULL');
        $this->addSql('ALTER TABLE codification_data ADD CONSTRAINT FK_4313840493CB796C FOREIGN KEY (file_id) REFERENCES file (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_4313840493CB796C ON codification_data (file_id)');
        $this->addSql('ALTER TABLE company CHANGE type type VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('ALTER TABLE user CHANGE locale locale VARCHAR(255) CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`');
        $this->addSql('DROP INDEX IDX_BF1CD3C3C33F7837 ON version');
        $this->addSql('ALTER TABLE version CHANGE document_id file_id INT NOT NULL');
        $this->addSql('ALTER TABLE version ADD CONSTRAINT FK_BF1CD3C393CB796C FOREIGN KEY (file_id) REFERENCES file (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_BF1CD3C393CB796C ON version (file_id)');
    }
}
