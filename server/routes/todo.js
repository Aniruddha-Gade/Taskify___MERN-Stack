const express = require('express');
const router = express.Router();

const { createTodo, getAllTodos, updateTodo, deleteTodo, getImportantTodos, getCompletedTodos } = require('../controllers/todo');
const { auth } = require('../middleware/auth');

// create todo route
router.post('/create-todo', auth, createTodo)
router.post('/all-todos', auth, getAllTodos)
router.get('/important-todos', auth, getImportantTodos)
router.get('/completed-todos', auth, getCompletedTodos)
router.put('/update-todo', auth, updateTodo)
router.delete('/delete-todo', auth, deleteTodo)


module.exports = router