const toDo = require('../models/toDoList');
const sequelize = require('../db');

async function getTodo(req, res) {
    const todoItem = await sequelize.models.toDoList.findAndCountAll();
    return res.status(200).json({data: todoItem});
}


async function createTodo(req, res) {
    const { body } = req;
    const todoItem = await sequelize.models.toDoList.create({
        userid: {},
        tableName: body.tableName,
        items: {},
    });
    await product.save();
    return res.status(201).json({ data: todoItem})
}

async function updateTodo(req, res) {
    const { body , params: { id } } = req;
    const todoItem = await sequelize.models.toDoList.findByPk(id);
    if(!user) {
        return res.status(404).json({ code: 404, message: 'Table not Found'});
    }
    const updatedTodo = await todoItem.update({
        userid: {},
        tableName: body.tableName,
        items: {},
    });
    return res.json({message: updatedTodo});
}

async function deleteTodo (req, res) {
    const { params: { id } } = req;
    const todoItem = await sequelize.models.toDoList.findByPk(id);
    if(!user) {
        return res.status(404).json({code :404, message: 'Table not found'});
    }
    await todoItem.destroy();
    return res.json();
}

module.exports = {getTodo, createTodo, updateTodo, deleteTodo};