import React, { useEffect, useState } from 'react'
import './LogList.css'
<<<<<<< HEAD
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
=======
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
>>>>>>> 8a8ba3c7edadec46a2c10f5c6768160109e67a48
        </div>
    )
}

export default LogList
