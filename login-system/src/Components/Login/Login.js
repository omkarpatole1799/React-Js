import React, { useState, useEffect, useReducer } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import "./Login.css";

const emailReducer = (state, action) => {
  if (action.type === "EMAIL_NEW") {
    return { value: action.val, isValid: action.val.includes("@") };
  }

  console.log(state.value);
  if (action.type === "EMAIL_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "PASSWORD_NEW") {
    return { value: action.val, isValid: action.val.trim().length >= 3 };
  }
  if (action.type === "PASSWORD_BLUR") {
    return { value: state.value, isValid: state.value.trim().length >= 3 };
  }
  return { value: "", isValid: false };
};

function Login(props) {
  const [isValidForm, setIsValidForm] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const emailInputHandler = (event) => {
    dispatchEmail({ type: "EMAIL_NEW", val: event.target.value });

    setIsValidForm(emailState.isValid && passwordState.isValid);
  };

  const validEmailHandler = () => {
    dispatchEmail({ type: "EMAIL_BLUR" });
  };

  const passInputHandler = (event) => {
    dispatchPassword({ type: "PASSWORD_NEW", val: event.target.value });

    setIsValidForm(emailState.isValid && passwordState.isValid);
  };
  const validPasswordHandler = () => {
    dispatchPassword({ type: "PASSWORD_BLUR" });
  };

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     setIsValidForm(emailState.isValid && passwordState.isValid);
  //   }, 1000);
  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [emailState.value, passwordState.value]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmitForm([emailState.value, passwordState.value]);
  };

  return (
    <>
      <Card className="form__container">
        <form className="form" onSubmit={formSubmitHandler}>
          <div
            className={`${"input_container"} ${
              emailState.isValid === false ? "invalid" : ""
            }`}
          >
            <label>Email</label>
            <input
              value={emailState.value}
              type="email"
              onChange={emailInputHandler}
              onBlur={validEmailHandler}
            />
          </div>
          <div
            className={`${"input_container"} ${
              passwordState.isValid === false ? "invalid" : ""
            }`}
          >
            <label>Password</label>
            <input
              type="text"
              value={passwordState.value}
              onChange={passInputHandler}
              onBlur={validPasswordHandler}
            />
          </div>

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
  );
}

export default Login;
