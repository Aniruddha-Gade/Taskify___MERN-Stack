import React from 'react'
import { MdDelete, MdEditDocument } from "react-icons/md";


const TaskItem = ({ taskData }) => {
    // console.log('taskData = ', taskData)
    const { title, description, date, isCompleted, id } = taskData
    return (
        <div className="flex flex-col justify-between p-5 gap-2 h-64 w-[430px] font-semibold rounded-2xl bg-[#303030] border-2 border-[#454444] transition ">
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
                    {
                        isCompleted ? <button className='bg-green-500 p-2 px-4 rounded-2xl'>Completed</button>
                            : <button className='bg-red-500 p-2 px-4 rounded-2xl'>
                                Incomplete
                            </button>
                    }
                    <div className='flex gap-4 text-3xl text-white/75'>
                        <MdDelete />
                        <MdEditDocument />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TaskItem