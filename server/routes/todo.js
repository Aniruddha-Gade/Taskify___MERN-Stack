const express = require('express');
const router = express.Router();

const { createTodo, getAllTodos, updateTodo, deleteTodo } = require('../controllers/todo')

// create todo route
router.post('/create-todo', createTodo)
router.post('/all-todos', getAllTodos)
router.put('/update-todo', updateTodo)
router.delete('/delete-todo', deleteTodo)


module.exports = router