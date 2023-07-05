import React, { useState, useEffect, useReducer, useContext } from "react"
import Button from "../UI/Button/Button"
import Card from "../UI/Card/Card"
import "./Login.css"
import AuthContext from "../../store/auth-contex"
import Input from "../UI/Input/Input"

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_NEW") {
    return { value: action.val, isValid: action.val.includes("@") }
  }
  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") }
  }
  return { value: "", isValid: false }
}

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_NEW") {
    return { value: action.val, isValid: action.val.trim().length >= 3 }
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 3 }
  }
  return { value: "", isValid: false }
}

function Login() {
  const ctx = useContext(AuthContext)
  const [isValidForm, setIsValidForm] = useState(false)

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  })

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  })

  const emailInputHandler = (event) => {
    dispatchEmail({ type: "EMAIL_NEW", val: event.target.value })

    setIsValidForm(emailState.isValid && passwordState.isValid)
  }

  const validEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" })
  }

  const passInputHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_NEW", val: event.target.value })

    setIsValidForm(emailState.isValid && passwordState.isValid)
  }
  const validPasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" })
  }

  const { isValid: emailIsValid } = emailState
  const { isValid: passwordIsValid } = passwordState

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsValidForm(emailIsValid && passwordIsValid)
    }, 1000)
    return () => {
      clearTimeout(timeout)
    }
  }, [emailIsValid, passwordIsValid])

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     console.log("INSIDE USE EFFECT");
  //     setIsValidForm(emailState.isValid && passwordState.isValid);
  //   }, 1000);
  //   return () => {
  //     console.log("inside cleanup function");
  //     clearTimeout(timeout);
  //   };
  // }, [emailState.isValid, passwordState.isValid]);

  const formSubmitHandler = (event) => {
    event.preventDefault()
    ctx.onSubmitForm([emailState.value, passwordState.value])
  }

  return (
    <>
      <Card className="form__container">
        <form className="form" onSubmit={formSubmitHandler}>
          <Input
            label="Email"
            value={emailState.value}
            type="email"
            onChange={emailInputHandler}
            onBlur={validEmailHandler}
            isValid={emailIsValid}
          />

          <Input
            label="Password"
            value={passwordState.value}
            type="text"
            onChange={passInputHandler}
            onBlur={validPasswordHandler}
            isValid={passwordIsValid}
          />

          <Button
            className="login_button"
            type="submit"
            disabled={!isValidForm}
          >
            Login
          </Button>
        </form>
      </Card>
    </>
  )
}

export default Login
