function AddTask(props) {

  const handleSubmitTask = () => {

  }

  // render
  return (
    <div>
      <form onSubmit={ handleSubmitTask } method="POST">
        <label>New Task: </label>
        <input type="text" name="task" placeholder="enter task" />
        <button type="submit">Add Task</button>
      </form>
    </div>
  )
}

export default AddTask;