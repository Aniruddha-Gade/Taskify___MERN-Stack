import React, { useEffect, useState } from 'react'
import Tasks from './Tasks';
import { useSelector, useDispatch } from 'react-redux';
import { allTasks } from '../../../services/operations/todoApi';

const AllTasks = () => {

  // get token from store
  const { user: { token } } = useSelector(state => state.profile)
  // console.log("token = ", token)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  // Get All Tasks
  useEffect(() => {
    const getAllTasks = async () => {
      setLoading(true)
      const tasks = await allTasks(token)
      console.log('data = ', tasks)
      setTasks(tasks)
      setLoading(false)
    }
    getAllTasks()
  }, [dispatch, token])

  return (
    <div className='flex bg-[#212121] min-h-screen min-w-full mt-[70px] rounded-2xl border-2 p-5 border-[#303030]'>
      <Tasks title="All Tasks 📜" tasks={tasks} loading={loading} />
    </div >
  )
}

export default AllTasks