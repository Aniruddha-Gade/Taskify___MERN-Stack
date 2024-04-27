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
        console.log(`Error while fetching use todos => ${error}`)
    }
}