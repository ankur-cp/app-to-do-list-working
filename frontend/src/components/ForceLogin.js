import { Link } from "react-router-dom"

function ForceLogin(props) {
  return (
    <div>
      <p>You are not currently logged in. Please <Link to="/login">login</Link> or signup.</p>
    </div>
  )
}

export default ForceLogin;