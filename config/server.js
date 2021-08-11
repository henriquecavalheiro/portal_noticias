var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views');

//incluindo arquivos staticos usando midleware do express, como se estivesse na raiz do projeto
app.use(express.static('./app/public'));
//adicionando body parser 
app.use(bodyParser.urlencoded({extended: true}));
//ativando ferramenta expressValidator, do ejs
app.use(expressValidator());

//consign = rotas automatizadas/framework node
consign()
	.include('app/routes')
	.then('config/dbConnection.js')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;