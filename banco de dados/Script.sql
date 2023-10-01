/* Lógico_2: */

CREATE TABLE Relatorios (
    rel_id int AUTO_INCREMENT PRIMARY KEY,
    rel_sigla VARCHAR(5) NOT NULL UNIQUE,
    rel_ano VARCHAR(4),
    rel_titulo VARCHAR(255)
);

CREATE TABLE Metricas (
    met_id int AUTO_INCREMENT PRIMARY KEY,
    met_sigla VARCHAR(3) NOT NULL,
    met_descricao VARCHAR(255),
    met_breve_descricao VARCHAR(100)
);

CREATE TABLE Respostas (
    fk_Relatorios_rel_id int,
    fk_Submetricas_sub_id int,
    res_valor int NOT NULL,
    res_id int AUTO_INCREMENT PRIMARY KEY
);

CREATE TABLE Submetricas (
    sub_id int AUTO_INCREMENT PRIMARY KEY,
    sub_descricao VARCHAR(255) NOT NULL,
    fk_Metricas_met_id int
);
 
ALTER TABLE Respostas ADD CONSTRAINT FK_Respostas_2
    FOREIGN KEY (fk_Submetricas_sub_id)
    REFERENCES Submetricas (sub_id);
 
ALTER TABLE Respostas ADD CONSTRAINT FK_Respostas_3
    FOREIGN KEY (fk_Relatorios_rel_id)
    REFERENCES Relatorios (rel_id);
 
ALTER TABLE Submetricas ADD CONSTRAINT FK_Submetricas_2
    FOREIGN KEY (fk_Metricas_met_id)
    REFERENCES Metricas (met_id)
    ON DELETE RESTRICT;