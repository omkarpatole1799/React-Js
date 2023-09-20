import React, { useEffect, useState } from 'react';
import './LogList.css';

function LogList() {
  const [logList, setLogList] = useState([]);
  async function getLogList() {
    let res = await fetch(
      'http://localhost:4000/user/logList/' + localStorage.getItem('userId'),
      {
        headers: {
          Authorization:
            'Bearer ' +
            localStorage.getItem('tocken') +
            ' ' +
            localStorage.getItem('userId'),
        },
      }
    );
    let { data } = await res.json();
    console.log(data);
    setLogList(data);
  }
  useEffect(() => {
    getLogList();
  });

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
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default LogList;
