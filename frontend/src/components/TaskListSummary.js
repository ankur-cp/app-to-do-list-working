import { Link } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI"

function TaskListSummary(props) {

  // event handlers
  const handleDeleteTaskList = async () => {
    const data = await ToDoAPI.deleteTaskListById(props.taskList.id)
    if (data) {
      props.removeTaskList(props.taskList.id)
    }
  } 

  // render
  if (!props.taskList)
    return null

  return (
    <div>
      <Link to={ `/task-list/${props.taskList.id}` }>
        <label>{ props.taskList.name }</label>
      </Link>
      &nbsp;
      <button className="btn-delete" onClick={handleDeleteTaskList}>x</button>
    </div>
  )
}

export default TaskListSummary;