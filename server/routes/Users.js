const express = require ('express');
const router = express.Router();
const {createUser, getUsers, updateUser, deleteUser} = require('../controllers/users');

//Get all users
router.get('/', getUsers);
//Create a new user
router.post('/', createUser);
//updates a user by id
router.put('/:id', updateUser);
//delete a user by id
router.delete('/:id', deleteUser);

module.exports = router;