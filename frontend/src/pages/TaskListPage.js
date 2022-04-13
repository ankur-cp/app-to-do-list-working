import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ToDoAPI from "../api/ToDoAPI";
import AddTask from "../components/AddTask";
import TaskList from "../components/TaskList";
import ForceLogin from "../components/ForceLogin";

function TaskListPage(props) {
  // states
  const [taskList, setTaskList] = useState(null)

  // params
  const params = useParams()

  // effects
  useEffect(() => {
    loadTaskList()
  }, [params.id])

  const loadTaskList = async () => {
    const data = await ToDoAPI.getTaskListById(params.id)
    setTaskList(data)
  }

  // render
  if (props.username === "") {
    return <ForceLogin />
  }


  return (
    <div>
      <h2>Task List Page</h2>
      <hr />

      <AddTask />
      <hr />

      <TaskList taskList={ taskList }/>
    </div>
  )
}

export default TaskListPage;