import React, { useState } from "react";

function AddUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userType, setUserType] = useState("");
    const [profileImage, setProfileImage] = useState();

    const [alreadyExsist, setAlreadyExsist] = useState(false);

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPassword(e.target.value);
    }
    function userTypeChangeHandler(e) {
        setUserType(e.target.value);
    }
    function profileImageChangeHandler(e) {
        setProfileImage(e.target.files[0]);
    }
    function submitFormHandler(e) {
        e.preventDefault();

        let formDataObj = new FormData();
        formDataObj.append("email", email);
        formDataObj.append("password", password);
        formDataObj.append("userType", userType);
        formDataObj.append("profileImage", profileImage);

        postDataHandler(formDataObj);
    }

    async function postDataHandler(formDataObj) {
        let response = await fetch("http://localhost:4000/admin/add-user", {
            method: "POST",
            mode: "cors",
            body: formDataObj,
        });
        let data = await response.json();
        console.log(data.message);
        if (data.message === "User already exsist") {
            setAlreadyExsist(true);
        }
    }

    return (
        <div>
            <form
                method="POST"
                action="/admin/add-user"
                encType="multipart/form-data"
            >
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="emailId"
                        name="emailId"
                        onChange={emailChangeHandler}
                    />
                    {alreadyExsist && (
                        <span>
                            <p>User Already Exsist</p>
                        </span>
                    )}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        onChange={passwordChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="profileImage">Profile</label>
                    <input
                        type="file"
                        className="form-control"
                        id="profileImage"
                        name="profileImage"
                        onChange={profileImageChangeHandler}
                    ></input>
                </div>
                <div>
                    <label>Select Type</label>
                    <select
                        className="form-select"
                        onChange={userTypeChangeHandler}
                    >
                        <option value="">---Select type---</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                </div>
                <button
                    onClick={submitFormHandler}
                    type="submit"
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default AddUser;
