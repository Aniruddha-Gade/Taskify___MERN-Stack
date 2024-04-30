import React from 'react'
import Tasks from './Tasks';

const AllTasks = () => {
  return (
    <div className='flex bg-[#212121] h-[calc(100%-70px) h-full min-w-full mt-[70px] rounded-2xl border-2 p-5 border-[#303030]'>
      <Tasks />
    </div >
  )
}

export default AllTasks