import React, { useState } from 'react';
import Button from '../UI/Button';
import Card from '../UI/Card';
import Modal from '../UI/Modal';

import styles from './UserDetailInput.module.css';
function UserDetailInput(props) {
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState();

    const userNameInputHandler = (e) => {
        setUserName(e.target.value);
    };
    const userAgeInputHandler = (e) => {
        setUserAge(e.target.value);
    };
    const formSubmitHandler = (e) => {
        e.preventDefault();

        if (userName.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Name and age should not be empty',
            });
            return;
        }
        if (+userAge.trim() < 0) {
            setError({
                title: 'Invalid age',
                message: 'Age should be greater than 0',
            });
            return;
        }
        props.onSubmit([
            {
                userName: userName,
                age: userAge,
                id: Math.random().toString(),
            },
        ]);

        setUserName('');
        setUserAge('');
    };

    const closeModalHandler = () => {
        setError(null);
    };

    return (
        <>
            <Card>
                {error && (
                    <Modal
                        title={error.title}
                        message={error.message}
                        onCloseModal={closeModalHandler}
                    />
                )}
                <form
                    className={styles.form__container}
                    onSubmit={formSubmitHandler}
                >
                    <div className={`${styles.input__container}`}>
                        <label>User Name</label>
                        <input
                            type="text"
                            onChange={userNameInputHandler}
                            value={userName}
                        />
                    </div>
                    <div className={`${styles.input__container}`}>
                        <label>User Age</label>
                        <input
                            type="number"
                            onChange={userAgeInputHandler}
                            value={userAge}
                        />
                    </div>
                    <Button>Submit</Button>
                </form>
            </Card>
        </>
    );
}

export default UserDetailInput;
