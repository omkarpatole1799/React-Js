import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }
    async function loginButtonHandler(e) {
        e.preventDefault();
        let res = await fetch("http://localhost:4000/login", {
            method: "POST",
            headers: {
                accept: "application.json",
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });
        let { message } = await res.json();
        
        if (message === "Please check your email") {
            setEmailError(true);
        }
        if (message === "Please check your password") {
            setPasswordError(true);
        }
        if (message === "authenticated") {
            navigate("/dashboard");
        }
    }
    return (
        <>
            <div className="container d-flex flex-column justify-content-center align-items-center">
                <h3 className="mt-3 mb-3">Login</h3>
                <form>
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
                        {emailError && <span>Please check your email</span>}
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
                        {passwordError && (
                            <span>Please check your password</span>
                        )}
                    </div>
                    {/* <div className="form-group mb-3">
                        <label>Select Type</label>
                        <select
                            className="form-select"
                            
                        >
                            <option value="">--- Select user type ---</option>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                        </select>
                    </div> */}
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
