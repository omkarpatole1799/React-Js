import { useState } from "react";
import Button from "../UI/Button";

function AddLog() {
    const [log, setLog] = useState();
    const [logError, setLogError] = useState(false);

    const logChangeHandler = (e) => {
        setLog(e.target.value);
    };

    function submitLogHandler(e) {
        console.log("submitting log");
        e.preventDefault();
        if (log !== "") {
            async function fetchData() {
                const res = await fetch("http://localhost:4000/add-log", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "cors",
                    body: JSON.stringify(log),
                });
                const data = await res.json();
                console.log(data);
            }
            fetchData();
        } else {
            setLogError(true);
        }
    }

    return (
        <div className="container">
            <h3 className="text-center mt-5">Add Log</h3>
            <div className="d-flex justify-content-center align-items-center">
                <form
                    method="POST"
                    action="/add-log"
                    encType="application/json"
                >
                    <div className="form-group p-2">
                        <label htmlFor="logDescription">Log Description</label>
                        <textarea
                            type="text"
                            className="form-control"
                            id="logDescription"
                            name="logDescription"
                            rows="6"
                            cols="50"
                            onChange={logChangeHandler}
                        />
                        {logError && <span>Please enter log</span>}
                    </div>
                    <div className="form-group p-2 d-flex justify-content-center">
                        <Button
                            onClick={submitLogHandler}
                            type="submit"
                            className="btn btn-primary"
                        >
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default AddLog;
