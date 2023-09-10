import React from "react";
import "./LogList.css";

function LogList() {
    function getLogList() {
        fetch(
            "http://localhost:4000/log-list/" + localStorage.getItem("userId"),
            {
                headers: {
                    Authorization:
                        "Bearer " +
                        localStorage.getItem("tocken") +
                        " " +
                        localStorage.getItem("userId"),
                },
            }
        ).then((res) => {
            console.log(res);
        });
    }
    getLogList();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>SR No</th>
                        <th>Log Description</th>
                        <th>Log Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test log 1</td>
                        <td>2-3-23</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test log 1</td>
                        <td>2-3-23</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Test log 1</td>
                        <td>2-3-23</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default LogList;
