import React, { useState } from 'react';
import styles from './TaskInput.module.css';

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
            // className={`form-control ${isValidInput ? 'invalid' : ''}`}
            className={`${styles['form-control']} ${isValidInput && styles.invalid}`}
            onSubmit={formSubmitHandler}
        >
            <label>Todo</label>
            <input
                value={todo}
                type="text"
                onChange={inputHandler}
            />
            {isValidInput ? (
                <span className={`${styles.invalid}`}>Please enter value</span>
            ) : (
                ''
            )}{' '}
            <br></br>
            <button className={`${styles.button}`}> Add Todo ! </button>
        </form>
    );
}

export default TaskInput;
