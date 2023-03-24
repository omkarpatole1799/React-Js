import React from 'react';
import styles from './UserDetailsItem.module.css';
function UserDetailsItem(props) {
    return (
        <>
            <li className={`${styles.user_list__container}`}>
                <p className={`${styles.user_list__item}`}>{props.userName}</p>
                <p className={`${styles.user_list__item}`}>
                    ({props.age} year old)
                </p>
            </li>
        </>
    );
}

export default UserDetailsItem;
