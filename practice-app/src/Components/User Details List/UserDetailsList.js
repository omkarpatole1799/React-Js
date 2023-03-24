import React from 'react';
import UserDetailsItem from './UserDetailsItem';
import styles from './UserDetailsList.module.css';
function UserDetailsList(props) {
    return (
        <>
            <ul className={`${styles.user_list__container}`}>
                {props.data.length === 0 && <p>Empty</p>}
                {props.data.length > 0 &&
                    props.data.map((el) => {
                        return (
                            <UserDetailsItem
                                key={el.id}
                                userName={el.userName}
                                age={el.age}
                            />
                        );
                    })}
            </ul>
        </>
    );
}

export default UserDetailsList;
