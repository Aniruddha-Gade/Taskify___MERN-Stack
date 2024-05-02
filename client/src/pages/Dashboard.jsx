import React from 'react'
import Sidebar from './../components/core/dashboard/Sidebar';
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen bg-blackBg wrapper flex w-screen'>
      <Sidebar />

      <div className='w-ful overflow-auto '>
        <div className='mx-auto w-[96%]  '>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard