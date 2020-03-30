//Import dependencies
const express = require('express');
const router = express.Router();

// Define controller
const smartphone_controller = require('../controllers/smartphone_controller');

// Index Router
router.get('/index', smartphone_controller.index);
//Create Router
router.post('/create', smartphone_controller.create);

//Exports router
module.exports = router;