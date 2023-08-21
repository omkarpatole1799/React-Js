import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPass(e.target.value);
    }
    function loginButtonHandler(e) {
        e.preventDefault();
        if (email !== "" && pass !== "") {
            loginRequestHandler();
        }
    }
    const loginRequestHandler = async () => {
        const res = await fetch("http://localhost:4000/login", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                pass,
            }),
        });
        const data = await res.json();
        console.log(data);
    };
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h3 className="mt-3 mb-3">Login</h3>
                <form method="POST" encType="application/json" action="/login">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="email"
                            name="email"
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="d-flex justify-content-center">
                        <button
                            type="submit"
                            className="btn btn-success d-flex justify-content-center"
                            onClick={loginButtonHandler}
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Login;
