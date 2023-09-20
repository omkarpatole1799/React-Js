// dashboard css import
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';

import './dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user);
  console.log(userName);
  const addUserButtonHandler = () => {
    navigate('/addUser');
  };

  return (
    <>
      <div className="">
        <div className="col-9 dashboardContent">
          <h3>Hello {userName}!</h3>
          <span>
            User Type
            {localStorage.getItem('user_type') == 1 ? 'Admin' : 'Local'}
          </span>
          <div>
            <button
              className="button button--small"
              onClick={addUserButtonHandler}
            >
              Add User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
