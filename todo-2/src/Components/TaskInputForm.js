import React, { useState } from 'react'
import Button from '../Components/UI/Button'
import useHttp from '../hooks/use-http'
const TaskInputForm = (props) => {

    const { isLoading, error, sendRequest: fetchTasks } = useHttp()

    const [taskName, setTaskName] = useState('')

    const inputHandler = (e) => {
        const enteredValue = e.target.value
        setTaskName(enteredValue)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (taskName.length > 0) {
            taskInputHandler(taskName)
        } else {
            console.log("please enter task name")
        }
    }

    const taskInputHandler = async (taskName) => {
        const dataTransform = (data) => {
            const generatedId = data.name
            props.onAddTask({ id: generatedId, taskName: taskName })
        }

        fetchTasks({
            url: 'https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json',
            method: 'POST',
            body: { taskName: taskName },
            headers: { 'Content-type': 'application/json' }
        },dataTransform)
    }

    return <>
        <form onSubmit={formSubmitHandler}>
            <div>
                <label htmlFor="">Task Name</label>
                <input onChange={inputHandler} className='border-2' type="text" />
            </div>
            <div>
                <Button>{isLoading ? 'Adding' : 'Add Task'}</Button>
            </div>
        </form>
    </>
}

export default TaskInputForm