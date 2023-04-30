import React, { useState } from 'react'
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
        }, dataTransform)
        setTaskName('')
    }

    

    return <>
        <form className='p-4 pt-10' onSubmit={formSubmitHandler}>
            <div className='relative bg-[#24344E] flex flex-col items-center w-full rounded-2xl'>
                <input value={taskName} id='username' type="text" className='text-black p-4 rounded-2xl peer w-full transition-all duration-500 ease-in' onChange={inputHandler} />
                <label htmlFor='username' className='absolute top-3 font-semibold text-xl text-black peer-focus:text-white peer-focus:top-[-30px] 
                                  cursor-text transition-all duration-500 ease-in' >Task Name</label>
                <button className='p-2'>{isLoading ? 'Adding...' : 'Add Task'}</button>
            </div>
        </form>
    </>
}

export default TaskInputForm