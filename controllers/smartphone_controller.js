//Import Model
const Smartphone = require('../models/smartphone_model');

//Index Method
exports.index = function (req, res) {
    res.send('Olá! Teste ao Controller');
};


//Create method
exports.create = function (req, res, next) {
    //Define smartphone properties according to model
    let smartphone = new Smartphone ({
        name: req.body.name,
        brand: req.body.brand
    });

    //Save smartphone properties
    smartphone.save(function (err){
        //If error, return error
        if(err){
            //return next(err);
            return res.status(500).send({ error: "Ocorreu um erro ao criar o registro: "+err });
        }
        //If sucessful, return message
        //res.send('Registro de smartphone criado com sucesso.');
        res.setHeader('Content-Type', 'application/json');
        res.status(200).send({ status: res.statusCode, method: req.method, message: "Registro criado com sucesso." });
    })

};
