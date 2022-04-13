import { useNavigate } from "react-router-dom"
import ToDoAPI from "../api/ToDoAPI"

function LoginPage(props) {

  const navigate = useNavigate()

  // event handlers
  const handleLogin = async (evt) => {
    evt.preventDefault()

    const loginData = {
      username: evt.target.elements["username"].value,
      password: evt.target.elements["password"].value
    }

    console.log("login info", loginData)

    const data = await ToDoAPI.login(loginData)
    if (data) {
      console.log("login response data", data)
      props.setUsername(data.username)
      navigate("/")
    }
  }

  // render
  return (
    <div>
      <h2>Login Page</h2>
      <hr />

      <form onSubmit={ handleLogin } method="POST">
        <label>Username: </label>
        <input type="text" name="username" placeholder="username" />
        <br />
        <label>Password: </label>
        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginPage;