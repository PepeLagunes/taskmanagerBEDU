const express = require('express');
const router = express.Router();

router.use('/users', require('./Users'));
router.use('/toDoList', require('./TodoList'));//rutas de ToDoList

module.exports = router;