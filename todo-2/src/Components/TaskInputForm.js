import React, { useState, useEffect } from 'react'
import Button from '../Components/UI/Button'
const TaskInputForm = (props) => {

    const [taskName, setTaskName] = useState('')
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

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
        setError(null)
        setIsLoading(true)
        try {
            const response = await fetch('https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json', {
                method: 'POST',
                body: JSON.stringify({
                    taskName: taskName
                }),
                headers: {
                    'Content-type': 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('Something went wrong')
            }

            const data = await response.json();

            const generatedId = data.name;
            props.onAddTask({ id: generatedId, taskName: taskName })

        }
        catch (error) {
            setError(error.message)
        }
        setIsLoading(false)
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