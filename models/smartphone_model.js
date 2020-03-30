const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define model schema
let SmartphoneSchema = new Schema({
    name: {type: String, required: true, max: 100},
    brand: {type: String, required: true, max: 100},
});

//Export model
module.exports = mongoose.model('Smartphone', SmartphoneSchema);