import axios from "axios"
import Cookie from "js-cookie"

const getConfig = (useCsrfToken = true) => {
  let config = { }
  if (useCsrfToken) {
    let csrftoken = Cookie.get("csrftoken")
    console.log("///// csrf:", csrftoken)
    config = {
      withCredentials: true, 
      headers: {
        'X-CSRFToken': csrftoken
      }
    }
  }
  return config
}

const tryCatchFetch = async (axiosCall) => {
  try {
    const response = await axiosCall()
    return response.data || { message: "success" }
  }
  catch (e) {
    console.error("-- ERROR: ", e)
    return null
  }
}


const ToDoAPI = { }

const BASE_URL = "http://localhost:8000/todo_api/"

ToDoAPI.login = async (loginData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}login/`, loginData, getConfig()))
}

ToDoAPI.logout = async () => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}logout/`))
}

ToDoAPI.getTaskLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/`, getConfig()))
}

ToDoAPI.createTaskList = async (newTaskList) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}task-lists/`, newTaskList, getConfig()))
}

ToDoAPI.getTaskListById = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/${id}/`, getConfig()))
}

ToDoAPI.deleteTaskListById = async (id) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}task-lists/${id}/`, getConfig()))
}

export default ToDoAPI