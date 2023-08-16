import { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }
    function loginButtonHandler(e) {
        e.preventDefault();
        console.log(email, password);
        return;
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
