import axios from "axios"
import Cookie from "js-cookie"

const getConfig = (useCsrfToken = true) => {
  let config = { }
  if (useCsrfToken) {
    let csrftoken = Cookie.get("csrftoken")
    console.log("///// csrf:", csrftoken)
    config = { // added for authentication
      withCredentials: true, 
      headers: {
        'X-CSRFToken': Cookie.get("csrftoken")
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
    console.error("-- ERROR: ", e.response ? e.response : e)
    return null
  }
}



const ToDoAPI = { }

const BASE_URL = "http://localhost:8000/todo_api/"

ToDoAPI.login = async (loginData) => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}login/`, loginData, getConfig()))
}

ToDoAPI.logout = async () => {
  return await tryCatchFetch(() => axios.post(`${BASE_URL}logout/`, null, getConfig()))
}

ToDoAPI.getTaskLists = async () => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/`, getConfig()))
}

ToDoAPI.createTaskList = async (newTaskList) => {
  
  
  // let response = await fetch(`${BASE_URL}task-lists/`, {
  //   credentials: 'include',
  //   method: 'POST',
  //   //mode: 'same-origin',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'application/json',
  //     'X-CSRFToken': Cookie.get("csrftoken")
  //   },
  //   body: JSON.stringify(newTaskList)
  //  })
  // return await response.json()

  return await tryCatchFetch(() => axios.post(`${BASE_URL}task-lists/`, newTaskList, getConfig()))
}

ToDoAPI.getTaskListById = async (id) => {
  return await tryCatchFetch(() => axios.get(`${BASE_URL}task-lists/${id}/`, getConfig()))
}

ToDoAPI.deleteTaskListById = async (id) => {
  return await tryCatchFetch(() => axios.delete(`${BASE_URL}task-lists/${id}/`, getConfig()))
}

export default ToDoAPI