// dashboard css import
import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const [actionButtons, setActionButtons] = useState([
        { name: "Add Log", function: addLogHandler },
        { name: "Dashboard", function: daboardButtonHandler },
        { name: "Attendance", function: attendanceButtonHandler },
        { name: "Logout", function: logOutButtonHandler },
        { name: "Login", function: loginButtonHandler },
    ]);

    useEffect(() => {
        if (localStorage.getItem("tocken")) {
            setActionButtons([
                { name: "Add Log", function: addLogHandler },
                { name: "Dashboard", function: daboardButtonHandler },
                { name: "Attendance", function: attendanceButtonHandler },
                { name: "Logout", function: logOutButtonHandler },
            ]);
        }
    }, []);

    function loginButtonHandler() {
        getLogin();
    }
    function logOutButtonHandler() {
        localStorage.removeItem("tocken");
        localStorage.removeItem("userId");
        navigate("/login");
    }
    function addLogHandler() {
        getAddLog();
    }
    function daboardButtonHandler() {
        navigate("/dashboard");
    }
    function attendanceButtonHandler() {
        navigate("/dashboard");
    }

    async function getAddLog() {
        const res = await fetch("http://localhost:4000/add-log", {
            headers: {
                Authorization:
                    "Bearer " +
                    localStorage.getItem("tocken") +
                    " " +
                    localStorage.getItem("userId"),
            },
        });
        const { call } = await res.json();
        if (call === "authorized") {
            localStorage.clear("tocken");
            navigate("/add-log");
        }
        if (call === "not authorized") {
            navigate("/login");
        }
    }

    async function getLogin() {
        const res = await fetch("http://localhost:4000/login", {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("tocken"),
            },
        });
        const { call } = await res.json();
        if (call === "not authorized") {
            localStorage.clear("tocken");
            navigate("/login");
        }
        if (call === "authorized") {
            navigate("/dashboard");
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
        </>
    );
}

export default Navbar;
