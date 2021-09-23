const {DataTypes} = require('sequelize');

module.exports = (sequelize) => sequelize.define('toDos', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userid: {
            type: DataTypes.INTEGER,
            references: {
                model:'users',
                key:'id'
            }
            },
    tableName: DataTypes.STRING,
    items: {

    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
})