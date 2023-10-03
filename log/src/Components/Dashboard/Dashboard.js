import { useNavigate } from 'react-router-dom'

import './dashboard.css'

function Dashboard() {
    const navigate = useNavigate()

    const addUserButtonHandler = () => {
        navigate('/addUser')
    }
    return (
        <>
            <div className="">
                <div className="col-9 dashboardContent">
                    <h3>Hello !</h3>
                    <div>
                        <button
                            className="button button--small"
                            onClick={addUserButtonHandler}>
                            Add User
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
