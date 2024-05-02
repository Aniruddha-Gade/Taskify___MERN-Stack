import { useState } from 'react'
import { MdDelete, MdEditDocument } from "react-icons/md";
import { deleteTask, updateTask } from '../../services/operations/todoApi';
import { useSelector } from 'react-redux';
import TodoModal from '../core/modal/TodoModal';


const TaskItem = ({ taskData }) => {
    // console.log('taskData = ', taskData)
    const { title, description, date, isCompleted, _id: todoId } = taskData
    const { user: { token } } = useSelector(state => state.profile)
    const [showModal, setShowModal] = useState(false);

    const handleDeleteTask = async () => {
        await deleteTask(token, todoId)
    }

    // update isCompleted state
    const updateIsCompleted = async () => {
        let updatedData;
        if (isCompleted) {
            updatedData = { isCompleted: false }
        }
        else {
            updatedData = { isCompleted: true }
        }
        await updateTask(token, todoId, updatedData)
    }

    return (
        <div className="flex flex-col justify-between p-5 gap-2 h-64 w-[400px] font-semibold rounded-2xl bg-[#303030] border-2 border-[#454444] transition ">
            <div className='flex flex-col gap-2'>
                <h4>
                    {title}
                </h4>
                <p className="text-white/55">
                    {description.split(' ').slice(0, 15).join(' ')}...
                </p>
            </div>

            <div>
                <p>{date}</p>
                <div className='flex items-center justify-between mt-2'>
                    <button
                        onClick={updateIsCompleted}
                        className={`p-2 px-4 rounded-2xl ${isCompleted ? 'bg-green-500' : 'bg-red-500'} `}
                    >
                        {isCompleted ? 'Completed' : 'Incomplete'}
                    </button>

                    <div className='flex gap-4 text-3xl text-white/75'>
                        <MdDelete onClick={() => handleDeleteTask()} className='cursor-pointer hover:text-red-500 duration-200' />
                        <MdEditDocument onClick={() => setShowModal(true)} className='cursor-pointer hover:text-green-500 duration-200' />
                    </div>
                </div>
            </div>
            <TodoModal showModal={showModal} setShowModal={setShowModal} type={'update'} selectedTodo={taskData} />

        </div>
    )
}

export default TaskItem