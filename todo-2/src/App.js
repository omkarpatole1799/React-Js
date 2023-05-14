import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'
import TaskInputForm from './Components/TaskInputForm'
import TaskList from './Components/TaskList'
import useHttp from './hooks/use-http'

function App() {

  // const [tasks, setTasks] = useState([])

  const [tasks, setTasks] = useState([])
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    const dataTransform = (data) => {
      const loadedTasks = []
      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, taskName: data[taskKey].taskName })
      }
      setTasks(loadedTasks)
    }

    fetchTasks({ url: 'https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json' }, dataTransform)
  }, [fetchTasks])

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  }
  

  return (
    <div className='bg-[#182843] h-screen text-white'>
      <Navbar />
        <TaskInputForm onAddTask={taskAddHandler} />
        <TaskList task={tasks} />
      </div>
  );
}

export default App;
