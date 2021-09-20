const {Datatypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: Datatypes.STRING,
    lastname: Datatypes.STRING,
    email: Datatypes.STRING,
    age: Datatypes.STRING,
    number: Datatypes.INTEGER,
    superU: Datatypes.BOOLEAN,
    
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
    quantity: DataTypes.INTEGER,
})