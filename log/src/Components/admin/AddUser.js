import React, { useState } from "react";

function AddUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        isValid: {
            value: false,
            message: "",
        },
        passwordValue: "",
    });
    const [userType, setUserType] = useState("");
    const [profileImage, setProfileImage] = useState({
        isValid: {
            value: false,
            message: "",
        },
        profileImageValue: "",
    });

    const [alreadyExsist, setAlreadyExsist] = useState(false);

    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        let password = e.target.value;
        if (password.length < 8) {
            setTimeout(() => {
                setPassword({
                    isValid: {
                        value: false,
                        message: "Password Not valid (min 8 charactors)",
                    },
                    passwordValue: "",
                });
            }, 1500);
        }
        setPassword({
            isValid: {
                value: true,
                message: "",
            },
            passwordValue: e.target.value,
        });
    }
    function userTypeChangeHandler(e) {
        setUserType(e.target.value);
    }
    function profileImageChangeHandler(e) {
        let profileSize;
        let profileSizeLimit;
        let profile = e.target.files[0];
        if (profile !== undefined) {
            profileSize = (profile.size / 1000 / 1000).toFixed(2); // convert to MB
            profileSizeLimit = 0.8; // MB
        }
        if (profile === undefined) {
            setProfileImage({
                isValid: {
                    value: false,
                    message: "Please select profile image",
                },
                profileImageValue: "",
            });
        }
        if (profileSize > profileSizeLimit) {
            setProfileImage({
                isValid: {
                    value: false,
                    message: `Profile image size should be in limit ${profileSizeLimit} MB`,
                },
                profileImageValue: "",
            });
        }
        if (!(profileSize > profileSizeLimit)) {
            setProfileImage({
                isValid: {
                    value: true,
                    message: "",
                },
                profileImageValue: e.target.files[0],
            });
        }
    }
    function submitFormHandler(e) {
        e.preventDefault();

        let formDataObj = new FormData();
        formDataObj.append("email", email);
        formDataObj.append("password", password.passwordValue);
        formDataObj.append("userType", userType);
        formDataObj.append("profileImage", profileImage.profileImageValue);

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
                    {!password.isValid.value && `${password.isValid.message}`}
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
                    {!profileImage.isValid.value &&
                        `${profileImage.isValid.message}`}
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
