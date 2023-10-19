// functions import
import { useState } from 'react'

// HELPER FUNCTIONS IMPORT
import { postUserData } from './helpers'

// components import
import Button from '../UI/Button/Button'

function AddEmployee() {
  const [emailAlreadyExsist, setEmailAlreadyExsist] =
    useState(false)

  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')

  const [createSuccess, setCreateSuccess] = useState(false)

  const [adminCheckbox, setAdminCheckbox] = useState(false)
  const [employeeCheckBox, setemployeeCheckBox] =
    useState(false)
  const [userType, setUserType] = useState(null)

  function resetInputs() {
    setUserName('')
    setEmail('')
    setPass('')
  }

  function user_nameChangeHandler(e) {
    setUserName(e.target.value)
  }
  function emailChangeHandler(e) {
    setEmail(e.target.value)
  }
  function passwordChangeHandler(e) {
    setPass(e.target.value)
  }
  function adminCheckboxHandler(e) {
    setUserType(1)
    setemployeeCheckBox(false)
    setAdminCheckbox(true)
  }
  function employeeCheckBoxHandler(e) {
    setUserType(2)
    setAdminCheckbox(false)
    setemployeeCheckBox(true)
  }
  function submitFormHandler(e) {
    e.preventDefault()

    if (email !== '' && pass !== '') {
      postSignUp()
    }
  }
  const postSignUp = async () => {
    setEmailAlreadyExsist(false)
    try {
      let sendData = {
        userName,
        email,
        pass,
        userType
      }
      const res = await postUserData(sendData)

      let data = await res.json()
      if (data.message === 'Email already exsist') {
        setEmailAlreadyExsist(true)
      }
      if (data.message === 'User Created successfully') {
        resetInputs()
        setCreateSuccess(true)
        setTimeout(() => {
          setCreateSuccess(false)
        }, 1500)
      }
    } catch (error) {
      alert('error occured')
    }
  }

  return (
    <div className=''>
      <h3 className=''>Add User</h3>
      <div className=''>
        <form method='POST' encType='application/json'>
          <div className=''>
            <label htmlFor='user_name'>User Name</label>
            <input
              type='text'
              className=''
              id='user_name'
              name='user_name'
              onChange={user_nameChangeHandler}
            />
          </div>

          <div className=''>
            <label htmlFor='emailId'>Email ID</label>
            <input
              type='text'
              className=''
              id='emailId'
              name='emailId'
              onChange={emailChangeHandler}
            />
            {emailAlreadyExsist && (
              <span>Email already exsist</span>
            )}
          </div>
          <div className=''>
            <label htmlFor='password'>Password</label>
            <input
              type='text'
              className=''
              id='password'
              name='password'
              onChange={passwordChangeHandler}
            />
          </div>
          <div className=''>
            <div className=' '>
              <label htmlFor='adminCheckbox' className=''>
                Admin
              </label>
              <input
                type='checkbox'
                id='adminCheckbox'
                value={adminCheckbox}
                checked={adminCheckbox}
                onChange={adminCheckboxHandler}
              />
            </div>
            <div className=''>
              <label htmlFor='employeeCheckBox' className=''>
                Employee
              </label>
              <input
                type='checkbox'
                id='employeeCheckBox'
                value={employeeCheckBox}
                checked={employeeCheckBox}
                onChange={employeeCheckBoxHandler}
              />
            </div>
          </div>
          <div className=''>
            <Button
              onClick={submitFormHandler}
              className='button button--primary'>
              Submit
            </Button>
          </div>
          {createSuccess && (
            <div className=''>User Created Succesfully</div>
          )}
        </form>
      </div>
    </div>
  )
}
export default AddEmployee
