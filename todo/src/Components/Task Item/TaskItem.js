import React from 'react';
import styles  from  './TaskItem.module.css';

function TaskItem(props) {
    const deleteTaskHandler = () => {
        props.deleteTaskHandler(props.id);
    };
    return (
        <li
            className={`${styles.task_item__container}`}
            onClick={deleteTaskHandler}
        >
            <h3>{props.title}</h3>
        </li>
    );
}

export default TaskItem;
