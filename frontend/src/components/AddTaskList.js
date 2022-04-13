import { useNavigate } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI"

function AddTaskList(props) {

  const navigate = useNavigate()

  const handleSubmitTaskList = async (evt) => {
    evt.preventDefault()

    const newTaskList = {
      name: evt.target.elements["name"].value,
      description: evt.target.elements["description"].value
    }

    const data = await ToDoAPI.createTaskList(newTaskList)
    if (data) {
      navigate(`/task-list/${data.id}`)
    }
  }

  // render
  return (
    <div>
      <form onSubmit={ handleSubmitTaskList } method="POST">
        <label>New Task List: </label>
        <input type="text" name="name" placeholder="enter name" />
        <input type="text" name="description" placeholder="enter description" />
        <button type="submit">Add Task List</button>
      </form>
    </div>
  )
}

export default AddTaskList;