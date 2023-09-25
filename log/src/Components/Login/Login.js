import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [emailWrong, setEmailWrong] = useState(false)

    const [pass, setPass] = useState('')
    const [passWrong, setPassWrong] = useState(false)

    function emailChangeHandler(e) {
        setEmail(e.target.value)
    }
    function passwordChangeHandler(e) {
        setPass(e.target.value)
    }
    function loginButtonHandler(e) {
        e.preventDefault()
        if (email !== '' && pass !== '') {
            loginRequestHandler()
        }
    }
    const loginRequestHandler = async () => {
        const res = await fetch('http://localhost:4000/auth/login', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userEmail: email,
                pass,
            }),
        })
        const { message, tocken, userId, userName, userType } = await res.json()

        if (message === 'Not authorized') {
            console.log('Not authorized')
        }

        if (message === 'authenticated') {
            setEmailWrong(false)
            setPassWrong(false)
            localStorage.setItem('tocken', tocken)
            let expiration = new Date()
            expiration.setHours(expiration.getHours() + 10)
            localStorage.setItem('tockenExpiry', expiration.toISOString())
            localStorage.setItem('userId', userId)
            localStorage.setItem('userName', userName)
            localStorage.setItem('userType', userType)
            navigate('/')
        }

        if (message === 'Incorret Password') {
            setPassWrong(true)
        }

        if (message === 'Incorrect Email') {
            setEmailWrong(true)
        }
    }
    return (
        <div className="container">
            <h3 className="mt-3 mb-3">Login</h3>
            <form method="POST" encType="application/json" action="/login">
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        onChange={emailChangeHandler}
                    />
                    {emailWrong && <span>Incorrect Email</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={passwordChangeHandler}
                    />
                    {passWrong && <span>Incorret Password</span>}
                </div>
                <div className="d-flex justify-content-center">
                    <button
                        type="submit"
                        className="btn btn-success d-flex justify-content-center"
                        onClick={loginButtonHandler}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login
