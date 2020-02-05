const db = require('../services/db.service.js');

//Solo un controlador

// function getUsersController (req, res, next){
//     res.send('respond with resource');
// }

// module.exports = getUsersController;

//Varios controladores

function getAllUsersController (req, res, next){

    try{

        const users = db.getUsers();

        console.log(users);

        res.json(users);

    }catch(error){

        console.log(error.message);
        
        res.status(500).json({message:'something went wrong'});

    }
}

function getOneUsersController (req, res, next){
    
    try{

        const users = db.getUsersUno();

        console.log(users);

        res.json(users);

    }catch(error){

        console.log(error.message);
        
        res.status(500).json({message:'something went wrong'});

    }

}

module.exports = {
    getAllUsersController,
    getOneUsersController
};