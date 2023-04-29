import React, { useState, useEffect } from 'react'
import './App.css';
import TaskInputForm from './Components/TaskInputForm';
import TaskList from './Components/TaskList';
function App() {
  
  const [tasks, setTasks] = useState([])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <>
      <TaskInputForm onAddTask={taskAddHandler} />
      <TaskList task={tasks} />
    </>
  );
}

export default App;
