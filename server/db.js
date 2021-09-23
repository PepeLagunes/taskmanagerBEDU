const {Sequelize} = require('sequelize');

//Importando modelos
const User = require('./models/User');
const Todo = require('./models/toDoList');

//DB conecction
const sequelize = new Sequelize('taskmanager', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    loggin: false
});

const models = [ User, Todo];

//Registrando models en sequelize
for (let model of models){
    model (sequelize)
}

//Configuracion de relaciones


module.exports = sequelize;