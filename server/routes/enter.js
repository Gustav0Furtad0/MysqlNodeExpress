'use strict';

var express = require('express');
var app = express();
var path = require('path');



module.exports = {
    
    enviar(fileName) {
        var raiz = path.dirname(process.mainModule.filename)

        app.use(express.static(raiz + 'public'));

        app.get('/', (req, res, next) => {
            var options = {
                root: path.join(raiz + '/public/')
            };

            console.log(req.url);

            res.sendFile(fileName, options, (err) => {
                if (err)
                    next(err);
                else
                    console.log(`Enviado:`, fileName);  
            });

        });

        app.get('/nome', (req, res) => {
            let  nome = req.query.nome;
            console.log(nome);
            res.send(`O nome é ${nome}`);
        });

        app.listen(3000, (err) => {
            if (err) console.log(err);
            console.log("Servidor rodando na porta", 3000);
        });
    }
    
}
