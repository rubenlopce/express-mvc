const fs = require('fs');
const path = require('path');
const DBPATH = path.join(__dirname, '../data/db.data.json');

class Db{

    //Metodo privado para sacar la DB

    #getDB = () => {
        const dbjson = fs.readFileSync(DBPATH,"utf-8");       
        const db = JSON.parse(dbjson);
        return db;
    }

    //Metodos normales

    getUsers(){

        const db = this.#getDB();    
        const users = db.users;

        return users;

    }

    getUsersUno(id){
        
        const db = this.#getDB();
        const userFound = db.users.find(
            users=>users.id === id
        );

        return userFound;
    }
}

module.exports = new Db();