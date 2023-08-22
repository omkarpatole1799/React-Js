// functions import
import { useState } from "react";
// import useInput from "../Hooks/use-input";

// components import
import Button from "../UI/Button";

function AddUser() {
    const [emailAlreadyExsist, setEmailAlreadyExsist] = useState(false);

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    function userNameChangeHandler(e) {
        setUserName(e.target.value);
    }
    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPass(e.target.value);
    }

    function submitFormHandler(e) {
        e.preventDefault();

        if (email !== "" && pass !== "") {
            postSignUp();
        }
    }
    const postSignUp = async () => {
        setEmailAlreadyExsist(false);
        const res = await fetch("http://localhost:4000/add-user", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_name: userName,
                user_email: email,
                pass,
            }),
        });
        const { message } = await res.json();
        if (message === "Email already exsist") {
            setEmailAlreadyExsist(true);
        }
        if (message === "User Created successfully") {
            console.log("User Created successfully");
        }
    };

    return (
        <div className="container">
            <h3 className="text-center mt-5">Add User</h3>
            <div className="d-flex justify-content-center align-items-center">
                <form
                    method="POST"
                    action="/add-user"
                    encType="application/json"
                >
                    <div className="form-group p-2">
                        <label htmlFor="userName">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            name="userName"
                            onChange={userNameChangeHandler}
                        />
                    </div>

                    <div className="form-group p-2">
                        <label htmlFor="emailId">Email ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailId"
                            name="emailId"
                            onChange={emailChangeHandler}
                        />
                        {emailAlreadyExsist && (
                            <span>Email already exsist</span>
                        )}
                    </div>
                    <div className="form-group p-2">
                        <label htmlFor="password">Password</label>
                        <input
                            type="text"
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={passwordChangeHandler}
                        />
                    </div>
                    <div className="form-group p-2 d-flex justify-content-center">
                        <Button
                            onClick={submitFormHandler}
                            type="submit"
                            className="btn btn-success"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddUser;
