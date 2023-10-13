// functions import
import { useState } from 'react';

// components import
import Button from '../UI/Button/Button';

function AddUser() {
    const [emailAlreadyExsist, setEmailAlreadyExsist] = useState(false);

    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const [createSuccess, setCreateSuccess] = useState(false);

    const [adminCheckbox, setAdminCheckbox] = useState(false);
    const [userCheckbox, setUserCheckbox] = useState(false);
    const [userType, setUserType] = useState(null);
    function resetInputs() {
        setUserName('');
        setEmail('');
        setPass('');
    }

    function user_nameChangeHandler(e) {
        setUserName(e.target.value);
    }
    function emailChangeHandler(e) {
        setEmail(e.target.value);
    }
    function passwordChangeHandler(e) {
        setPass(e.target.value);
    }
    function adminCheckboxHandler(e) {
        setUserType(1);
        setUserCheckbox(false);
        setAdminCheckbox(true);
    }
    function userCheckboxHandler(e) {
        setUserType(2);
        setAdminCheckbox(false);
        setUserCheckbox(true);
    }
    function submitFormHandler(e) {
        e.preventDefault();

        if (email !== '' && pass !== '') {
            postSignUp();
        }
    }
    const postSignUp = async () => {
        setEmailAlreadyExsist(false);
        const res = await fetch('http://localhost:4000/admin/addUser', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName,
                userEmail: email,
                pass,
                userType: userType,
            }),
        });
        const { message } = await res.json();
        if (message === 'Email already exsist') {
            setEmailAlreadyExsist(true);
        }
        if (message === 'User Created successfully') {
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
                    action="/addUser"
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
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="form-group p-2 d-flex justify-content-center align-items-center">
                            <label className="mx-2">Admin</label>
                            <input
                                type="checkbox"
                                id="adminCheckbox"
                                value={adminCheckbox}
                                checked={adminCheckbox}
                                onChange={adminCheckboxHandler}
                            />
                        </div>
                        <div className="form-group p-2 d-flex justify-content-center">
                            <label className="mx-2">User</label>
                            <input
                                type="checkbox"
                                id="userCheckbox"
                                value={userCheckbox}
                                checked={userCheckbox}
                                onChange={userCheckboxHandler}
                            />
                        </div>
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
