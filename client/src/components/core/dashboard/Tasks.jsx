import React from 'react'
import TaskItem from '../../common/TaskItem'

const Tasks = () => {

  const tasksTempData = [
    {
      title: 'Do shortlisted frontend assignment ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis?',
      date: '12-05-2024',
      isCompleted: false,
      imageUrl: '',
      id: 'abcd1234'
    },
    {
      title: 'Start Docker learning',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis?',
      date: '12-05-2024',
      isCompleted: false,
      imageUrl: '',
      id: 'abcd1234'
    },
    {
      title: 'Write DSA assignment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, perferendis?',
      date: '12-05-2024',
      isCompleted: true,
      imageUrl: '',
      id: 'abcd1234'
    },
  ]

  return (
    <div className='w-screen'>
      <div className='flex justify-between w-full'>
        <h3 className='text-2xl font-bold'>
          All Tasks
        </h3>
        <button className='text-3xl w-12 h-12 flex-center rounded-full border-2 border-[#303030]'>
          +
        </button>
      </div>

      {/* tasks list */}
      <div className='grid grid-cols-2 w-full gap-4 mt-5'>
        {
          tasksTempData.map((task) => (
            <TaskItem key={task.id} taskData={{ ...task }} />
          ))
        }

        <button className="flex items-center justify-center gap-2 h-64 w-[400px] text-green-500 font-semibold rounded-2xl border-2 border-[#303030] transition " >
          +
          Add New Task
        </button>

      </div>



    </div>
  )
}

export default Tasks