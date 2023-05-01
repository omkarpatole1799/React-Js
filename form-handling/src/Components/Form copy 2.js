import React, { useEffect, useState } from 'react'

const Form = () => {
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

    // const [formIsValid, setFormIsValid] = useState(false)

    const nameIsValid = nameInput.trim() !== ''
    const emailIsValid = emailInput.trim().includes('@')
    const nameIsInvalid = !nameIsValid && enteredNameTouched
    const emailIsInValid = !emailIsValid && enteredEmailTouched

    // useEffect(() => {
    //     if (nameIsValid) {
    //         setFormIsValid(true)
    //     } else {
    //         setFormIsValid(false)
    //     }
    // },[nameIsValid])

    let formIsValid = false
    if (nameIsValid && emailIsValid) {
        formIsValid = true
    }

    // for name input
    const nameInputHandler = (e) => {
        setNameInput(e.target.value)
    }
    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
    }

// for email input
    const emailInputHandler = (e) => {
        setEmailInput(e.target.value)
    }
    const emailInputBlurHandler = () => {
        setEnteredEmailTouched(true)
    }
    
    const formSubmitHandler = (e) => {
        e.preventDefault()
        setEnteredNameTouched(true)
        setEnteredEmailTouched(true)
        if (!nameIsValid) {
            return
        }
        setNameInput('')
        setEmailInput('')
        setEnteredNameTouched(false)
        setEnteredEmailTouched(false)
    }
    return <>
        <div className='bg-[#06070B] p-2 text-white font-semibold'>
            <form className='m-10 p-3 h-56 bg-[#18182A] rounded-3xl flex flex-col items-center justify-center' onSubmit={formSubmitHandler}>
                <div className="relative flex">
                    <input value={nameInput} 
                        className='bg-[#10101E] p-[0.5rem] rounded-2xl w-full peer'
                        onChange={nameInputHandler}
                        onBlur={nameInputBlurHandler}
                        type="text"
                        id="nameInput" />
                    <label htmlFor="nameInput"
                        className='absolute left-3 top-2 peer-focus:top-[-1.2rem] peer-focus:text-xs 
                                    transition-all duration-400 ease-in'>Name</label>
                    {nameIsInvalid && <span className='absolute top-12 left-3 text-xs font-light'>Please enter name</span>}
                </div>

                <div className="relative flex">
                    <input value={emailInput}
                        className='bg-[#10101E] mt-10 p-[0.5rem] rounded-2xl w-full peer'
                        onChange={emailInputHandler}
                        onBlur={emailInputBlurHandler}
                        type="text"
                        id="emailInput" />
                    <label htmlFor="emailInput"
                        className='absolute left-3 top-[3rem] peer-focus:top-8 peer-focus:text-xs peer-focus:font-light 
                                   peer-focus:bg-black transition-all duration-400 ease-in'>Email</label>
                    {nameIsInvalid && <span className='absolute top-[5.5rem] left-3 text-xs font-light'>Please Enter Email</span>}
                </div>

                <div className="">
                    <button className='rounded-md mt-10 p-2 w-[10rem] bg-[#1D97D9]' disabled={!formIsValid}>Submit</button>
                </div>
            </form>

            <div className="">
                <p>{nameInput}</p>
                <p>{emailInput}</p>
            </div>
        </div>
    </>
}

export default Form