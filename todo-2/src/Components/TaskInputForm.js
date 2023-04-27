import React,{ useEffect } from 'react'
import Button from '../Components/UI/Button'
const TaskInputForm = () => {

    

    return <>
        <form>
            <div>
                <label htmlFor="">Task Name</label>
                <input className='border-2' type="text" />
            </div>
            <div>
                <Button onClick={taskInputHandler}>Add Task</Button>
            </div>
        </form>
    </>
}

export default TaskInputForm