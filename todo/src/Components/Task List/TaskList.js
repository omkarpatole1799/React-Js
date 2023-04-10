import React from 'react';
import TaskItem from '../Task Item/TaskItem';
import styles from './TaskList.module.css';
function TaskList(props) {
    return (
        <ul className={`${styles.task_container}`}>
            {props.task.length === 0 && (
                <p className={`${styles.task_item__container}`}>No task</p>
            )}

            {props.task.length !== 0 &&
                props.task.map((el) => {
                    return (
                        <TaskItem
                            key={el.id}
                            id={el.id}
                            title={el.task}
                            deleteTaskHandler={props.onDelete}
                        />
                    );
                })}
        </ul>
    );
}

export default TaskList;
