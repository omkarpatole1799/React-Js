import React, { useState } from 'react'
import './App.css'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const formSubmitHandler = (inputValue) => {
        setIsLoggedIn(true)
    }
    const logoutButtonHandler = () => {
        setIsLoggedIn(false)
    }
    return (
        <>
            <Header isLoggedIn={isLoggedIn} onLogout={logoutButtonHandler} />
            {isLoggedIn && <Home />}
            {!isLoggedIn && <Login onSubmitForm={formSubmitHandler} />}
        </>
    )
}

export default App
