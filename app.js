const express = require('express');
const config = require('./config/config');
const database = require('./config/database');

const bodyParser = require('body-parser');

 //Inicializar app express
const app = express();

//Adicionando rota
const smartphones = require('./routes/smartphone_route'); // Importa Rota

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphones);

//use
app.use('/smartphones', smartphones);

app.listen(config.app.port, () =>{
    console.log('Servidor em execução na porta '+config.app.port);
});
