const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => sequelize.define('users', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: DataTypes.STRING,
    age: DataTypes.STRING,
    number: DataTypes.INTEGER,
    superU: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
});