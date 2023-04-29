import React,{useState, useEffect} from 'react'
const TaskList = (props) => {


    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async (taskText) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                'https://meals-io-2bdf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json'
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();
            const loadedTasks = [];

            for (const taskKey in data) {
                loadedTasks.push({ id: taskKey, taskName: data[taskKey].taskName });
            }

            setTasks(loadedTasks);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchTasks();
    }, [props.task]);

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
