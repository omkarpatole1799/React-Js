import React, { useState, useEffect } from 'react'
import useHttp from '../hooks/use-http'
const TaskList = (props) => {
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
    },[fetchTasks])

    return <>
        <div>
            <ul>
                {tasks.map((item) => {
                    return <li key={item.id}>{item.taskName}</li>
                })}
            </ul>
        </div >
    </>
}
export default TaskList
