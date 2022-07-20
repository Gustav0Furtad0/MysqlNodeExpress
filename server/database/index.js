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

const verifica = async (id) => {
    let sql = `SELECT COUNT(id) AS iduser FROM users WHERE id=${id}`; 
    var ix = 0;
    con.query(sql, async (err, result) => {
        if (err) throw (err);
        return await result[0].iduser
    });
}

const dados = process.argv.slice();

async function trySwitch(dados) {
    switch (dados[2]){
        case 'mostrar':
            pullAllUsers();
            break;
    
        case 'insere':
            insereUser(dados[3]);
            break;
    
        case 'update':
            break;
    
        case 'delete':
            break;
        
        case 'verificaid':
            verifica(2).then(a => console.log(a));
            break;

        default:
            console.log("Valor definido para opereação inválido");
    }
}

trySwitch(dados);

con.end();