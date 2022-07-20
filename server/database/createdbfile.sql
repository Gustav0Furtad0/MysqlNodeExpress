/*
CREATE DATABASE learnexpress;

USE learnexpress;

CREATE TABLE users (
    id INT NOT NULL PRIMARY KEY,
    nome varchar(50),
    passwrod varchar(50)
);
*/

/*
INSERT INTO users(id, nome, passwrod) VALUES (1, 'Gustavo', 'VENUS');
INSERT INTO users(id, nome, passwrod) VALUES (2, 'Duda', 'v#4Dd%l');
INSERT INTO users(id, nome, passwrod) VALUES (3, 'Toninho', 'Toninho123');
*/

SELECT COUNT(id) AS iduser FROM users WHERE id > 0