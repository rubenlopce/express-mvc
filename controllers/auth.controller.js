const auth = require('../services/auth.service.js');

//Solo un controlador

// function getUsersController (req, res, next){
//     res.send('respond with resource');
// }

// module.exports = getUsersController;

//Varios controladores

function registerUser (req, res, next){

    try{

        console.log(req.body);
        

        const users = auth.registerUser(req.body);

        console.log(users);

        res.json(users);

    }catch(error){

        console.log(error.message);
        
        res.status(500).json({message:'something went wrong'});

    }
}

function loginUser (req, res, next){
    
    try{

        console.log(req.body);

        const users = auth.loginUser(req.body);

        console.log(users);

        res.json(users);

    }catch(error){

        console.log(error.message);
        
        res.status(500).json({message:'something went wrong'});

    }

}

module.exports = {
    registerUser,
    loginUser
};