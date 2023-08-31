// dashboard css import
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    let AuthHeader = {
        Authorization:
            "Bearer " +
            localStorage.getItem("tocken") +
            "  " +
            localStorage.getItem("userId"),
    };
    const [actionButtons, setActionButtons] = useState([
        { name: "Login", function: loginButtonHandler },
    ]);

    const [alert, setAlert] = useState(false);

    useEffect(() => {
        if (localStorage.getItem("tocken")) {
            setActionButtons([
                { name: "Add Log", function: addLogHandler },
                { name: "Dashboard", function: daboardButtonHandler },
                { name: "Logout", function: logOutButtonHandler },
            ]);
        }
    }, []);

    function loginButtonHandler() {
        getLogin();
    }
    function logOutButtonHandler() {
        clearLocalStorage();
        navigate("/login");
    }
    function addLogHandler() {
        navigate("/add-log");
    }
    function daboardButtonHandler() {
        navigate("/dashboard");
    }
    function clearLocalStorage() {
        localStorage.removeItem("userId");
        localStorage.removeItem("tocken");
    }

    async function getLogin() {
        const res = await fetch("http://localhost:4000/login", {
            headers: AuthHeader,
        });
        const { call } = await res.json();
        console.log(call);
        if (call === 1) {
            navigate("/dashboard");
        }
        if (call === 0) {
            clearLocalStorage();
            navigate("/login");
        }
    }
    return (
        <>
            <div className="col-2 d-flex justify-content-start align-items-start flex-column sidebar">
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

            {alert && (
                <div className="alert alert-warning" role="alert">
                    <p>You'r not authorized please login</p>
                </div>
            )}
        </>
    );
}

export default Navbar;
