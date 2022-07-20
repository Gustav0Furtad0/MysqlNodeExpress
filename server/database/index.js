'use strict';

const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'learnexpress'
});

con.connect((err) => {if (err) throw err});

const pullAllUsers = () => {
    let sql = 'SELECT * FROM users';
    con.query(sql, async (err, result) => {
        if (err) throw (err);
        await result.forEach(element => {
            console.log(`id = ${element.id}, nome = ${element.nome}, senha = ${element.passwrod}`);
        });
        console.log("Leitura de usuários feita com sucesso!");
    });
};

const insereUser = async (id, nome, senha) => {
    let sql = `INSERT INTO users (id, nome, passwrod) VALUES (${id}, '${nome}', '${senha}')`;
    con.query(sql, (err) => {
        if (err) throw err;
        console.log(`Usuário de id ${id} inserido com sucesso`);
    });
};

pullAllUsers();

insereUser(4, 'Teste', '123456');