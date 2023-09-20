import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const [actionButtons, setActionButtons] = useState([
    { name: 'Dashboard', function: daboardButtonHandler },
    { name: 'Add log', function: addLogHandler },
    { name: 'Add user', function: addUserButtonHandler },
    { name: 'Log list', function: logListButtonHandler },
    { name: 'Logout', function: logOutButtonHandler },
  ]);

  function logOutButtonHandler() {
    clearLocalStorage();
    navigate('/login');
  }
  function addLogHandler() {
    navigate('/addLog');
  }
  function daboardButtonHandler() {
    let userId = localStorage.getItem('userId');
    navigate('/dashboard', { state: { userId } });
  }
  function logListButtonHandler() {
    navigate('/logList');
  }
  function addUserButtonHandler() {
    navigate('/addUser');
  }
  function clearLocalStorage() {
    localStorage.removeItem('userId');
    localStorage.removeItem('tocken');
    localStorage.removeItem('user_name');
    localStorage.removeItem('user_type');
  }
  return (
    <>
      <div className="d-flex justify-content-start align-items-start flex-column sidebar">
        {actionButtons.map((el, i) => {
          return (
            <button key={i} className="actionButtons" onClick={el.function}>
              {el.name}
            </button>
          );
        })}
      </div>
    </>
  );
}

export default Navbar;
