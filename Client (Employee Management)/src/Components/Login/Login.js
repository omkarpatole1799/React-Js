import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// CSS IMPORT
import './Login.css'

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
    console.log(process.env)
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_IP}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userEmail: email,
          pass
        })
      }
    )
    const { message, tocken, userId, userName, userType } =
      await res.json()

    if (message === 'Not authorized') {
      console.log('Not authorized')
    }

    if (message === 'authenticated') {
      setEmailWrong(false)
      setPassWrong(false)
      localStorage.setItem('tocken', tocken)
      let expiration = new Date()
      expiration.setHours(expiration.getHours() + 10)
      localStorage.setItem(
        'tockenExpiry',
        expiration.toISOString()
      )
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
    <div className="loginBox">
      <div className="loginContainer">
        <div>
          <img
            src={require('./loginPageImage.jpg')}
            alt=" loginn"
            className="loginPageImage"
          />
        </div>
        <div className="loginFormContainer">
          <h3 className="loginHeading">Login</h3>
          <form
            className="loginForm"
            method="POST"
            encType="application/json">
            <div className="loginFormInputContainer">
              <label htmlFor="email" className="">
                Email
              </label>
              <input
                type="text"
                className=""
                id="email"
                name="email"
                onChange={emailChangeHandler}
              />
              {emailWrong && <span>Incorrect Email</span>}
            </div>
            <div className="loginFormInputContainer">
              <label htmlFor="password" className="">
                Password
              </label>
              <input
                type="text"
                className=""
                id="password"
                name="password"
                onChange={passwordChangeHandler}
              />
              {passWrong && <span>Incorret Password</span>}
            </div>
            <div className="loginFormButtonContainer">
              <button
                type="submit"
                className="loginButton"
                onClick={loginButtonHandler}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
