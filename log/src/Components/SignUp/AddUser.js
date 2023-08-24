// functions import
import { useState } from "react";
// import useInput from "../Hooks/use-input";

// components import
import Button from "../UI/Button/Button";

function AddUser() {
    const [emailAlreadyExsist, setEmailAlreadyExsist] = useState(false);

    const [user_name, setuser_name] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [createSuccess, setCreateSuccess] = useState(false);

    function resetInputs() {
        setuser_name("");
        setEmail("");
        setPass("");
    }

    function user_nameChangeHandler(e) {
        setuser_name(e.target.value);
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
                user_name,
                user_email: email,
                pass,
            }),
        });
        const { message } = await res.json();
        if (message === "Email already exsist") {
            setEmailAlreadyExsist(true);
        }
        if (message === "User Created successfully") {
            resetInputs();
            setCreateSuccess(true);
            setTimeout(() => {
                setCreateSuccess(false);
            }, 1500);
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
                        <label htmlFor="user_name">User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="user_name"
                            name="user_name"
                            onChange={user_nameChangeHandler}
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
                    {createSuccess && (
                        <div className="alert alert-primary">
                            User Created Succesfully
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
export default AddUser;
