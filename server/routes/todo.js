const express = require('express');
const router = express.Router();

const { createTodo } = require('../controllers/todo')

// create todo route
router.post('/create-todo', createTodo)


module.exports = router