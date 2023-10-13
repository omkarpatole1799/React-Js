import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import './dashboard.css'

function Dashboard() {
    const navigate = useNavigate()
    const [isAdmin, setIsAdmin] = useState(false)
    const addUserButtonHandler = () => {
        navigate('/addUser')
    }
    const attendanceButtonHandler = () => {
        navigate('/addAttendance')
    }
    useEffect(() => {
        localStorage.getItem('userType') === '1'
            ? setIsAdmin(true)
            : setIsAdmin(false)
    }, [])
    return (
        <>
            <div className="">
                <div className="col-9 dashboardContent">
                    <h3>Hello !</h3>
                    <div>
                        {isAdmin && (
                            <button
                                className="button button--small"
                                onClick={addUserButtonHandler}>
                                Add User
                            </button>
                        )}
                        <button onClick={attendanceButtonHandler}>
                            Attendance
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
