const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    date: {
        type: Date,
        required: true,
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    createddAt: {
        type: Date,
        default: Date.now()
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    isImportant: {
        type: Boolean,
        required: true,
    },
    imageUrl: {
        type: String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }

});


const Task = mongoose.models?.Task || mongoose.model('Task', TaskSchema)

module.exports = Task;