import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { clearLocalStorage as clearStorage } from '../../Utils/clearLocalStorage'

function Navbar() {
    const navigate = useNavigate()
    const [actionButtons, setActionButtons] = useState(null)

    let userType = localStorage.getItem('userType')
    useEffect(() => {
        userType == '1'
            ? setActionButtons([
                  { name: 'Dashboard', function: daboardButtonHandler },
                  { name: 'Add log', function: addLogHandler },
                  { name: 'Add user', function: addUserButtonHandler },
                  { name: 'Log list', function: logListButtonHandler },
                  { name: 'Logout', function: logOutButtonHandler },
              ])
            : setActionButtons([
                  { name: 'Dashboard', function: daboardButtonHandler },
                  { name: 'Add log', function: addLogHandler },
                  { name: 'Log list', function: logListButtonHandler },
                  { name: 'Logout', function: logOutButtonHandler },
              ])
    }, [userType])
    function logOutButtonHandler() {
        clearLocalStorage()
        navigate('/login')
    }
    function addLogHandler() {
        navigate('/addLog')
    }
    function daboardButtonHandler() {
        navigate('/')
    }
    function logListButtonHandler() {
        navigate('/logList/' + localStorage.getItem('userId'))
    }
    function addUserButtonHandler() {
        navigate('/addUser')
    }
    function clearLocalStorage() {
        clearStorage()
    }
    return (
        <>
            <div className="d-flex justify-content-start align-items-start flex-column sidebar">
                {actionButtons &&
                    actionButtons.map((el, i) => {
                        return (
                            <button
                                key={i}
                                className="actionButtons"
                                onClick={el.function}>
                                {el.name}
                            </button>
                        )
                    })}
            </div>
        </>
    )
}

export default Navbar
