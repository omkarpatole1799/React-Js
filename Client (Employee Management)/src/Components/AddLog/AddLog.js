import { useState } from 'react'
import Button from '../UI/Button/Button'

// CSS IMPORT
import './add-log.css'

function AddLog() {
  const [log, setLog] = useState()
  const [logError, setLogError] = useState(false)
  const [projectTitle, setProjectTitle] = useState()
  const [projectTitleError, setProjectTitleError] =
    useState(false)

  const [logStatus, setLogStatus] = useState(false)

  const logChangeHandler = (e) => {
    setLog(e.target.value)
  }

  const dropDownChangeHandler = (e) => {
    setProjectTitle(e.target.value)
  }

  function submitLogHandler(e) {
    e.preventDefault()
    console.log(projectTitle, log)

    if (log === undefined && projectTitle === undefined) {
      setLogError(true)
      setProjectTitleError(true)
      return
    }
    setLogError(false)
    setProjectTitleError(false)
    let sendData = {
      log,
      projectTitle
    }
    fetchData(sendData)
  }

  async function fetchData(sendData) {
    console.log(localStorage.getItem('userId'))
    const res = await fetch(
      'http://192.168.1.5:4000/user/addLog',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer ' +
            localStorage.getItem('tocken') +
            ' ' +
            localStorage.getItem('userId')
        },
        mode: 'cors',
        body: JSON.stringify(sendData)
      }
    )
    const { message } = await res.json()
    if (message === 'successfully added log') {
      setLog(' ')
      setProjectTitle(' ')
      setLogStatus(true)
      setTimeout(() => {
        setLogStatus(false)
      }, 1500)
    }
  }

  const projectListItems = [
    'R & D',
    'Project 1',
    'Project 2',
    'Project 3'
  ]

  return (
    <div className="">
      <h3 className="">Add Log</h3>
      <div className="">
        <form
          method="POST"
          action="/addLog"
          encType="application/json">
          <div className="">
            <select
              value={projectTitle}
              id="projectListItems"
              className=""
              onChange={dropDownChangeHandler}>
              <option>Select Project</option>
              {projectListItems.map((el, i) => {
                return (
                  <option key={i} value={el}>
                    {el}
                  </option>
                )
              })}
            </select>
            {projectTitleError && (
              <span>Please select project title</span>
            )}
          </div>
          <div className="">
            <label htmlFor="logDescription">
              Log Description
            </label>
            <textarea
              value={log}
              type="text"
              className=""
              id="logDescription"
              name="logDescription"
              rows="6"
              cols="50"
              onChange={logChangeHandler}
            />
            {logError && <span>Please enter log</span>}
          </div>

          <div className="">
            <Button
              onClick={submitLogHandler}
              type="button"
              className="">
              Submit
            </Button>
          </div>
          {logStatus && (
            <div className="">Log Added Successfully</div>
          )}
        </form>
      </div>
    </div>
  )
}
export default AddLog
