import React, { useState } from 'react';
import UserDetailInput from './Components/User Details Input/UserDetailInput';
import Card from './Components/UI/Card';
import Modal from './Components/UI/Modal';
import './App.css';
import UserDetailsList from './Components/User Details List/UserDetailsList';

// const DUMMY_DATA = [{ userName: 'omkar', age: 24, id: '1' }];

function App() {
    const [user, setUser] = useState('');

    const inputHandler = (userDetails) => {
        setUser((prevState) => {
            return [userDetails[0], ...prevState];
        });
    };
    return (
        <>
            <UserDetailInput onSubmit={inputHandler} />

            {/* <Modal /> */}
            <UserDetailsList data={user} />
        </>
    );
}

export default App;
