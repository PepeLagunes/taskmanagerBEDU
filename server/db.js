const {Sequelize} = require('sequelize');

//Importando modelos
const User = require('./models/User');

//DB conecction
const sequelize = new Sequelize('taskmanager', 'root', 'root', {
    host: 'localhost',
    dialect: 'mariadb',
    loggin: false
});

const models = [ User ];

//Registrando models en sequelize
for (let model of models){
    model (sequelize)
}

//Configuracion de relaciones


module.exports = sequelize;