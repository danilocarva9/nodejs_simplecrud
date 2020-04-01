//Import Model
const Smartphone = require('../models/smartphone_model');

//Index Method
exports.index = function (req, res) {
    res.send('Olá! Teste ao Controller');
};

//All
exports.all = function (req, res){
    Smartphone.find(function(err, data){
        if(err){
            return res.status(404).send({ error: "Ocorreu um erro ao resgatar os registros: "+err });
        }else{
            res.send(data);
        }
    })
}
//Read
exports.read = function(req, res){
    Smartphone.findById(req.params.id, function (err, data) {
         if(err) {
            return res.status(404).send({ error: "Ocorreu um erro ao criar o registro: "+err });
         }else{
            res.send(data);
         }
    })
};
//Create
exports.create = function(req, res) {
    //Define smartphone properties according to model
    let smartphone = new Smartphone ({
        name: req.body.name,
        brand: req.body.brand
    });

    smartphone.save(function (err){
        if(err){
            return res.status(500).send({ error: "Ocorreu um erro ao criar o registro: "+err });
        }else{
            res.setHeader('Content-Type', 'application/json');
            res.status(200).send({ status: res.statusCode, method: req.method, message: "Registro criado com sucesso." });
        }
    })
};
//Update
exports.update = function(req, res){
    Smartphone.findByIdAndUpdate(req.params.id, {$set: req.body},
       function (err, smartphone){
           if(err){
               return res.status(500).send({ error: "Ocorreu um erro ao alterar o registro: "+err });
           }else{
               res.send('Alterado com sucesso.')
           }
       } 
    )
}
//Delete
exports.delete = function(req, res){
    Smartphone.findByIdAndRemove(req.params.id, function (err){
        if(err){
            return res.status(500).send({ error: "Ocorreu um erro ao excluir o registro: "+err });
        }else{
            res.send('Excluído com sucesso.')
        }
    })
}