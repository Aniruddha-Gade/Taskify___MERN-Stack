import toast from 'react-hot-toast';
import { apiConnector } from '../apiConnector';
import { endpoints } from '../apis';


const {
    USER_ALL_TASKS,
    DELETE_TASK
} = endpoints


// ================ users all tasks ================
export async function allTasks(token) {
    try {
        const response = await apiConnector("POST", USER_ALL_TASKS, null,
            {
                Authorization: `Bearer ${token}`,
            }
        )

        // console.log(`USER'S ALL TASKS ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        return response.data.data

    } catch (error) {
        console.log("USER'S ALL TASKS API ERROR --> ", error);
    }
}


// ================ Delete Task ================
export async function deleteTask(token, todoId) {
    const toastId = toast.loading('Deleting Todo...')
    try {
        const response = await apiConnector("DELETE", DELETE_TASK, { todoId },
            {
                Authorization: `Bearer ${token}`,
            }
        )

        console.log(`DELETE TASK ---> `, response.data)

        if (!response.data.success) {
            toast.error(response.data.success);
            throw new Error(response.data.message)
        }

        toast.dismiss(toastId)
        toast.success('Todo Deleted')
        return response.data.data

    } catch (error) {
        console.log("DELETE TASK API ERROR --> ", error);
        toast.dismiss(toastId)
    }
}