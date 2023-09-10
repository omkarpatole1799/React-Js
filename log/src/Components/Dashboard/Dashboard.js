// dashboard css import
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

function Dashboard() {
    const navigate = useNavigate();

    const addUserButtonHandler = () => {
        navigate('/add-user');
    };

    return (
        <>
            <div className="">
                <div className="col-9 dashboardContent">
                    <h3>Hello {localStorage.getItem('user_name')}!</h3>
                    <span>
                        User Type
                        {localStorage.getItem('user_type') == 1
                            ? 'Admin'
                            : 'Local'}
                    </span>
                    <div>
                        <button
                            className="button button--small"
                            onClick={addUserButtonHandler}
                        >
                            Add-User
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
