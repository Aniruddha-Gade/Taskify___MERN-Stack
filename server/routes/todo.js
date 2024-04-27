const express = require('express');
const router = express.Router();

const { createTodo, getAllTodos } = require('../controllers/todo')

// create todo route
router.post('/create-todo', createTodo)
router.post('/all-todos', getAllTodos)


module.exports = router