'use strict';

var express = require('express');
var app = express();
var path = require('path');
var PORT = 3000;
 
app.use(express.static('public'))

// Without middleware
app.get('/', function(req, res, next){
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'public/html/home.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
});


 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});