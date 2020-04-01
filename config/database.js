const mongoose = require('mongoose');
const config = require('./config');

const { db: { user, password } } = config;

const connectionString = 'mongodb+srv://'+user+':'+password+'@cluster0-hwom2.gcp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(connectionString,{useUnifiedTopology: true, useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao Banco de Dados'));
