import React, { useEffect, useState } from 'react'
import './LogList.css'
import { AuthHeader } from '../../Utils/authHeaders'
function LogList() {
    const [logList, setLogList] = useState([])

    useEffect(() => {
        getLogList()
    })

    const getLogList = async () => {
        let res = await fetch(
            'http://localhost:4000/user/logList/' +
                localStorage.getItem('userId'),
            {
                headers: AuthHeader,
            }
        )
        let data = await res.json()
        console.log(data, '--------')
    }
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
                    {logList.map((el, i) => {
                        return (
                            <tr>
                                <td> {i + 1} </td>
                                <td> {el.logInfo} </td>
                                <td> </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default LogList
