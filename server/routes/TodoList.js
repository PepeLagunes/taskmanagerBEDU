const express = require ('express');
const router = express.Router();
const {createTodo, getTodo, updateTodo, deleteTodo} = require('../controllers/toDo');//controladores de todo

//Get all users
router.get('/', getTodo);
//Create a new user
router.post('/', createTodo);
//updates a user by id
router.put('/:id', updateTodo);
//delete a user by id
router.delete('/:id', deleteTodo);

module.exports = router;