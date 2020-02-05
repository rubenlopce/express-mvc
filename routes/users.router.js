var express = require('express');
var router = express.Router();
// Importar un controlador
// const getUsersController = require('../controllers/users.js');

//Importar varios
const {getAllUsersController, getOneUsersController} = require('../controllers/users.controller.js');
//Renombrar funciones
// const {getAllUsersController:cogerTodos, getOneUsersController:cogerUno} = require('../controllers/users.js');

/* GET users listing. */
router.get('/', getAllUsersController);
router.get('/:id', getOneUsersController);

module.exports = router;
