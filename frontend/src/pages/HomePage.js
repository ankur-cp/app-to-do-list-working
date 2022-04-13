import { useEffect, useState } from "react";
import AddTaskList from "../components/AddTaskList";
import TaskListSummary from "../components/TaskListSummary";
import ToDoAPI from "../api/ToDoAPI"
import ForceLogin from "../components/ForceLogin";


function HomePage(props) {
  // states
  const [taskLists, setTaskLists] = useState([])

  // effects
  useEffect(() => {
    loadTaskLists()
  }, [])

  const loadTaskLists = async () => {
    const data = await ToDoAPI.getTaskLists()
    setTaskLists(data ? data : [])
  }

  const removeTaskList = (taskListId) => {
    const newTaskLists = taskLists.filter((taskList) => taskList.id != taskListId)
    setTaskLists(newTaskLists)
  }

  // render
  if (props.username === "") {
    return <ForceLogin />
  }

  const renderTaskLists = () => {
    return taskLists.map((taskList, index) => {
      return <TaskListSummary key={ index } taskList={ taskList } removeTaskList={ removeTaskList } />
    })
  }

  return (
    <div>
      <h2>Home Page</h2>
      <hr />
      
      <AddTaskList />
      <hr />
      
      <h3>Task Lists:</h3>
      <div>
        { renderTaskLists() }
      </div>
    </div>
  )
}

export default HomePage;