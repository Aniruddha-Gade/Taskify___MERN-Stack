const Todo = require('../models/todo')


// ==================== create Todo ====================
exports.createTodo = async (req, res) => {
    try {
        const { title, description, date, isCompleted, isImportant, imageUrl, userId } = req.body
        // console.log({
        //     title, description, date, isCompleted, isImportant, imageUrl, userId
        // })
        if (!title || !description || !date || !imageUrl || !userId) {
            return res.status(401).json({
                success: false,
                message: 'All fields are required..!'
            });
        }

        const newTodo = await Todo.create({
            title, description, date, isCompleted, isImportant, imageUrl, userId
        })

        // return success message
        res.status(200).json({
            success: true,
            message: 'Todo Created Successfully',
            data: newTodo
        });

    } catch (error) {
        console.log(`Error while creating todo => ${error}`)
    }
}


// ==================== Get All todos ====================
exports.getAllTodos = async (req, res) => {
    try {
        const { userId } = req.body

        if (!userId) {
            return res.status(401).json({
                success: false,
                message: 'User ID required..!'
            });
        }
        const userAllTodos = await Todo.find({ userId }).sort({ createdAt: -1 })

        res.status(200).json({
            success: true,
            message: "All user's todos fetched successfully",
            data: userAllTodos
        })

    } catch (error) {
        console.log(`Error while fetching all todos => ${error}`)
    }
}


// ==================== Update todos ====================
exports.updateTodo = async (req, res) => {
    try {
        const { todoId, ...updates } = req.body;

        // Check if todoId is provided
        if (!todoId) {
            return res.status(400).json({
                success: false,
                message: 'Todo ID is required...!'
            });
        }

        // Find the todo by ID
        const todo = await Todo.findById(todoId);

        // If todo is not found, return a 404 response
        if (!todo) {
            return res.status(404).json({
                success: false,
                message: 'Todo not found.'
            });
        }

        // Update each field in the todo with the provided updates
        for (const key in updates) {
            if (updates.hasOwnProperty(key)) {
                todo[key] = updates[key];
            }
        }

        // Update the updatedAt field
        todo.updatedAt = Date.now();

        // Save the updated todo
        const updatedTodo = await todo.save();

        // Send the updated todo in the response
        res.status(200).json({
            success: true,
            message: 'Todo updated successfully.',
            todo: updatedTodo
        });
    } catch (error) {
        console.error('Error while updating todo => ', error);
        res.status(500).json({
            success: false,
            message: 'Error while updating todo',
            error: error.message,
        });
    }
};