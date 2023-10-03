import React, { useEffect, useState } from 'react'
import './LogList.css'
import { useNavigate } from 'react-router-dom'
function LogList() {
    const navigate = useNavigate()
    const [logList, setLogList] = useState([])
    useEffect(() => {
        getLogList()
    }, [])
    async function getLogList() {
        let res = await fetch('http://localhost:4000/user/logList/', {
            headers: {
                Authorization:
                    'Bearer ' +
                    localStorage.getItem('tocken') +
                    ' ' +
                    localStorage.getItem('userId'),
            },
        })
        let { data } = await res.json()
        console.log(data)
        setLogList(data)
    }

    const addLogButtonHandler = () => {
        navigate('/addLog')
    }
    return (
        <div>
            <button onClick={addLogButtonHandler}>Add log</button>
            {logList.length > 0 && (
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
                                <tr key={i}>
                                    <td> {i + 1} </td>
                                    <td> {el.logInfo} </td>
                                    <td> {el.createdAt.split('T')[0]}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            )}
            {logList.length == 0 && <p>No Logs Found</p>}
        </div>
    )
}

export default LogList
