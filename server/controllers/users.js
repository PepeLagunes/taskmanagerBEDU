const User = require('../models/User');
const sequelize = require('../db');
const router = require('../routes');

async function getUsers(req, res) {
    const users = await sequelize.models.User.findAndCountAll();
    return res.status(200).json({data: users});
}

async function createUser(req, res) {
    const { body } = req;
    const user = await sequelize.models.User.create({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        age: body.age,
        number: body.number,
        superU: body.superU
    });
    await product.save();
    return res.status(201).json({ data: user})
}

async function updateUser(req, res) {
    const { body , params: { id } } = req;
    const user = await sequelize.models.User.findByPk(id);
    if(!user) {
        return res.status(404).json({ code: 404, message: 'User not Found'});
    }
    const updatedUser = await user.update({
        name: body.name,
        lastname: body.lastname,
        email: body.email,
        age: body.age,
        number: body.number,
        superU: body.superU
    });
    return res.json({message: updatedUser});
}

async function deleteUser (req, res) {
    const { params: { id } } = req;
    const user = await sequelize.models.User.findByPk(id);
    if(!user) {
        return res.status(404).json({code :404, message: 'User not found'});
    }
    await user.destroy();
    return res.json();
}

module.exports = {getUsers, createUser, updateUser, deleteUser};