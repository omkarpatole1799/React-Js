import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    let AuthHeader = {
        Authorization:
            'Bearer ' +
            localStorage.getItem('tocken') +
            '  ' +
            localStorage.getItem('userId'),
    };
    const actionButtons = [
        { name: 'Add Log', function: addLogHandler },
        { name: 'Dashboard', function: daboardButtonHandler },
        { name: 'Logout', function: logOutButtonHandler },
        { name: 'Login', function: loginButtonHandler },
        { name: 'Add-user', function: addUserButtonHandler },
        { name: 'Log List', function: logListButtonHandler },
    ];

    function loginButtonHandler() {
        getLogin();
    }
    function logOutButtonHandler() {
        clearLocalStorage();
        navigate('/login');
    }
    function addLogHandler() {
        navigate('/add-log');
    }
    function daboardButtonHandler() {
        let userId = localStorage.getItem('userId');
        navigate('/dashboard', { state: { userId } });
    }
    function logListButtonHandler() {
        navigate('/log-list');
    }
    function clearLocalStorage() {
        localStorage.removeItem('userId');
        localStorage.removeItem('tocken');
        localStorage.removeItem('user_name');
        localStorage.removeItem('user_type');
    }

    async function getLogin() {
        const res = await fetch('http://localhost:4000/login', {
            headers: AuthHeader,
        });
        const { call } = await res.json();
        console.log(call);
        if (call === 1) {
            navigate('/dashboard');
        }
        if (call === 0) {
            clearLocalStorage();
            navigate('/login');
        }
    }
    return (
        <>
            <div className="d-flex justify-content-start align-items-start flex-column sidebar">
                {actionButtons.map((el, i) => {
                    return (
                        <button
                            key={i}
                            className="actionButtons"
                            onClick={el.function}
                        >
                            {el.name}
                        </button>
                    );
                })}
            </div>
        </>
    );
}

export default Navbar;
