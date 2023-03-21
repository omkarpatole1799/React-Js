import React, { useState } from 'react';
import './TaskInput.css';
function TaskInput(props) {
    const [todo, setTodo] = useState('');
    const [isValidInput, setIsValidInput] = useState(false);
    const inputHandler = (e) => {
        const inuptValue = e.target.value;
        if (inuptValue.trim().length !== 0) {
            setIsValidInput(false);
        }
        setTodo(inuptValue);
    };
    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (todo.trim().length === 0) {
            setIsValidInput(true);
            return;
        }
        props.onSubmit([
            {
                id: Math.random().toString(),
                task: todo,
            },
        ]);
        setTodo('');
    };

    return (
        <form
            className={`form-control ${isValidInput ? 'invalid' : ''}`}
            onSubmit={formSubmitHandler}
        >
            <label>Todo</label>
            <input
                value={todo}
                type="text"
                onChange={inputHandler}
            /> 
            {isValidInput ? <span className='invalid'>Please enter value</span> : ''} <br></br>
            <button className="button"> Add Todo ! </button>
        </form>
    );
}

export default TaskInput;
