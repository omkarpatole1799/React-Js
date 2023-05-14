import { useState } from 'react';
import TaskInput from './Components/Task Input/TaskInput';
import TaskList from './Components/Task List/TaskList';

function App() {
    const [task, setTask] = useState('');

    const taskInputHandler = (task) => {
        setTask((prevState) => {
            return [task[0], ...prevState];
        });
    };
    const onDeleteHandler = (id) => {
        setTask((prevState) => {
            return prevState.filter((el) => el.id !== id);
        });
    };

    return (
        <>
            <TaskInput onSubmit={taskInputHandler} />
            <TaskList
                task={task}
                onDelete={onDeleteHandler}
            />
        </>
    );
}

export default App;
