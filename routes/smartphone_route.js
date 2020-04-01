//Import dependencies
const express = require('express');
const router = express.Router();

// Define controller
const smartphone_controller = require('../controllers/smartphone_controller');

// Index Router
router.get('/index', smartphone_controller.index);

//All Router
router.get('/all', smartphone_controller.all);
//Read Router
router.get('/:id', smartphone_controller.read);
//Create Router
router.post('/create', smartphone_controller.create);
//Update Router
router.put('/:id/update', smartphone_controller.update);
//Delete Router
router.delete('/:id/delete', smartphone_controller.delete);

//Exports router
module.exports = router;