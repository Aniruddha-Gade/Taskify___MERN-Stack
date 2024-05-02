import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { completedTasks } from '../../../services/operations/todoApi'
import Tasks from './Tasks'

const Completed = () => {

  // get token from store
  const { user: { token } } = useSelector(state => state.profile)
  // console.log("token = ", token)
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)

  // Get All Tasks
  useEffect(() => {
    const getAllTasks = async () => {
      setLoading(true)
      const tasks = await completedTasks(token)
      // console.log('Completed tasks data = ', tasks)
      setTasks(tasks)
      setLoading(false)
    }
    getAllTasks()
  }, [token])


  return (
    <div className='flex bg-[#212121] min-h-screen min-w-full mt-[70px] rounded-2xl border-2 p-5 border-[#303030]'>
      <Tasks title="Completed Tasks 👍" tasks={tasks} loading={loading} />
    </div>
  )
}

export default Completed