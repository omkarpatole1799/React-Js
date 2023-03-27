import React, { useState } from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import './Login.css'
function Login(props) {
    const [emailInput, setEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')

    const [isValidEmail, setIsValidEmail] = useState()
    const [isValidPass, setIsValidPass] = useState()

    const [isValidForm, setIsValidForm] = useState(false)

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value)

        setIsValidForm(emailInput.includes('@') && passInput.trim().length > 6)
    }
    const passInputHandler = (event) => {
        setPassInput(event.target.value)

        setIsValidForm(passInput.trim().length > 6 && emailInput.includes('@'))
    }

    const validEmailHandler = () => {
        setIsValidEmail(emailInput.includes('@'))
    }

    const validPasswordHandler = () => {
        setIsValidPass(passInput.trim().length > 6)
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        props.onSubmitForm([emailInput, passInput])
    }
    return (
        <>
            <Card className="form__container">
                <form className="form" onSubmit={formSubmitHandler}>
                    <div
                        className={`${'input_container'} ${
                            !isValidEmail ? 'invalid' : ''
                        }`}>
                        <label>Email</label>
                        <input
                            type="email"
                            onChange={emailInputHandler}
                            onBlur={validEmailHandler}
                        />
                    </div>
                    <div
                        className={`${'input_container'} ${
                            !isValidPass ? 'invalid' : ''
                        }`}>
                        <label>Password</label>
                        <input
                            type="text"
                            onChange={passInputHandler}
                            onBlur={validPasswordHandler}
                        />
                    </div>

                    <Button type="submit" disabled={!isValidForm}>Login</Button>
                </form>
            </Card>
        </>
    )
}

export default Login
