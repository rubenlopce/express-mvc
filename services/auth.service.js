const fs = require('fs');
const path = require('path');
const DBPATH = path.join(__dirname, '../data/db.data.json');

class Auth{

    //Metodo privado para sacar la DB

    #getDB = () => {
        const dbjson = fs.readFileSync(DBPATH,"utf-8");       
        const db = JSON.parse(dbjson);
        return db;
    }

    registerUser(datos){

        const {username,password} = datos;

        //
        if(password.length < 4){
            return {message:"Password too short"};
        }
        //
        
        const db = this.#getDB();

        const userFound = db.users.find(
            users=>users.username === username
        );

        if(userFound){
            return {message:`User ${username} already exists.`};
        }else{

            let userNew = {
                id:Date.now(),
                username:username,
                password:password
            }
            db["users"].push(userNew);
            fs.writeFileSync(DBPATH,JSON.stringify(db));
            return {message:"User created!"};
        }
        
    }

    loginUser(datos){

        const {username,password} = datos;

        //
        if(password.length < 4){
            return {message:"Password too short"};
        }
        //
        
        const db = this.#getDB();

        const userFound = db.users.find(
            users=>users.username === username && users.password===password
        );
        if(userFound){
            return {message:"Welcome pack",user:userFound};
        }else{
            return {message:"not valid credentials"};
        }   
        
    }

}

module.exports = new Auth();