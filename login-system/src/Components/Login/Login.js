import React, { useState, useEffect } from 'react'
import Button from '../UI/Button/Button'
import Card from '../UI/Card/Card'
import './Login.css'
function Login(props) {
    const [emailInput, setEmailInput] = useState('')
    const [passInput, setPassInput] = useState('')

    const [isValidEmail, setIsValidEmail] = useState()
    const [isValidPass, setIsValidPass] = useState()

    const [isValidForm, setIsValidForm] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            console.log('Use effect run')
            setIsValidForm(
                emailInput.includes('@') && passInput.trim().length > 6,
            )
        }, 1000)

        // clean up function
        return () => {
            console.log('Cleanup')
            clearTimeout(timeout)
        }
    }, [emailInput, passInput])

    const emailInputHandler = (event) => {
        setEmailInput(event.target.value)
    }
    const passInputHandler = (event) => {
        setPassInput(event.target.value)
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
                            isValidEmail === false ? 'invalid' : ''
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
                            isValidPass === false ? 'invalid' : ''
                        }`}>
                        <label>Password</label>
                        <input
                            type="text"
                            onChange={passInputHandler}
                            onBlur={validPasswordHandler}
                        />
                    </div>

                    <Button
                        className="login_button"
                        type="submit"
                        disabled={!isValidForm}>
                        Login
                    </Button>
                </form>
            </Card>
        </>
    )
}

export default Login
