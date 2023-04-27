import React from 'react'
import Button from './UI/Button'
const TaskList = () => {
    const fetchTask = async () => {
        try {
            const response = await fetch(
                'https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
            );

            if (!response.ok) {
                throw new Error('Error')
            }

            const data = await response.json();
            console.log(data)

            const loadedTasks = [];

            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, text: data[taskKey].text });
            }

            console.log(loadedTasks)

            console.log("end")
        } catch (error) {
            const errorMessage = error.message
            console.log(errorMessage)
        }

    }

    return <>
        <p>Task List</p>
        <Button onClick={fetchTask}>Get tasks</Button>
    </>
}
export default TaskList