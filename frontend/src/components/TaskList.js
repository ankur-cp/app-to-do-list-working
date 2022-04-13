import TaskSummary from "./TaskSummary";

function TaskList(props) {
  
  // render
  const renderTasks = () => {
    return props.taskList && props.taskList.tasks.map((task, index) => {
      return <TaskSummary key={ index } task={ task } />
    })
  }
  
  return (
    <div>
      <h3>Tasks:</h3>
      <div>
        { renderTasks() }
      </div>
    </div>
  )
}

export default TaskList;