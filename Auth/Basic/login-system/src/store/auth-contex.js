import React, { useState, useEffect } from "react"

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onSubmitForm: () => {},
})

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsloggedIn] = useState(false)

  useEffect(() => {
    const checkIfAlreadyLoggedIn = localStorage.getItem("isLoggedIn")
    if (checkIfAlreadyLoggedIn === "1") {
      setIsloggedIn(true)
    }
  }, [])

  const logoutButtonHandler = () => {
    localStorage.setItem("isLoggedIn", "0")
    setIsloggedIn(false)
  }

  const formSubmitHandler = () => {
    localStorage.setItem("isLoggedIn", "1")
    setIsloggedIn(true)
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutButtonHandler,
        onSubmitForm: formSubmitHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext
