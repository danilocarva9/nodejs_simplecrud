const express = require('express');
const bodyParser = require('body-parser');


//Adicionando rota
const smartphones = require('./routes/smartphone_route'); // Importa Rota

//Inicializar app express
const app = express();



//Acesso à BD
const mongoose = require('mongoose');
let url = 'mongodb+srv://root:smartroot2020@cluster0-hwom2.gcp.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || url;
mongoose.connect(mongoDB,{useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', smartphones);

//use
app.use('/smartphones', smartphones);

let porta = 8000;
app.listen(porta, () =>{
    console.log('Servidor em execução na porta '+porta);
});