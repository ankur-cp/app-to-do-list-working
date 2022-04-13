import './App.css';
import { HashRouter, Routes, Route, Link, Navigate } from "react-router-dom"

// pages
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import TaskListPage from './pages/TaskListPage';
import { useState } from 'react';

function App() {
  // states
  const [username, setUsername] = useState("")

  // render
  return (
    <div className="App">
     <HashRouter>
        <Link to="/"><h1>To Do Lists App</h1></Link>
        <hr />
        <Routes>
          <Route path="/" element={ <HomePage username={ username }/> } />
          <Route path="/login" element={ <LoginPage username={ username } setUsername={ setUsername }/> } />
          <Route path="/task-list/:id" element={ <TaskListPage username={ username } /> } />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
