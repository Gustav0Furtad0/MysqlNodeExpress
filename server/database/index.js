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
    let sql = 'SELECT * FROM users ORDER BY id';
    con.query(sql, async (err, result) => {
        if (err) throw (err);
        await result.forEach(element => {
            console.log(`id = ${element.id}, nome = ${element.nome}, senha = ${element.passwrod}`);
        });
        console.log("Leitura de usuários feita com sucesso!");
    });
};

const insereUser = (id, nome, senha) => {
    let sql = `INSERT INTO users (id, nome, passwrod) VALUES (${id}, '${nome}', '${senha}')`;
    con.query(sql, (err) => {
        if (err) throw err;
        console.log(`Usuário de id ${id} INSERIDO com sucesso`);
    });
};

const deleteUser = (id) => {
    let sql = `DELETE FROM users WHERE id=${id}`;
    con.query(sql, (err) => {
        if(err) throw err;
        console.log(`Usuário de id ${id} DELETADO com sucesso`)
    });
}

const updateUser = (id, set, value) => {
    let sql;
    if (typeof set === 'string') {
        sql = `UPDATE users SET ${set}='${value}' WHERE id=${id}`;
    } else {
        sql = `UPDATE users SET ${set}=${value} WHERE id=${id}`;
    }
    con.query(sql, (err) => {
        if(err) throw err;
        console.log(`Update de ${set} feito com sucesso em id=${id}`);
    });
}

const dados = process.argv.slice();
switch (dados[2]){
    case 'mostrar':
        pullAllUsers();
        break;

    case 'insere':
        break;

    case 'update':
        break;

    case 'delete':
        break;
    
    default:
        console.log("Valor definido para opereação inválido");
}


con.end();