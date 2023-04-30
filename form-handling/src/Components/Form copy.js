import React, { useState } from 'react'


const Form = () => {

    const [nameInput, setNameInput] = useState('')
    const [isNameValid, setIsNameValid] = useState(false)
    const [enteredNameTouched, setEnteredNameTouched] = useState(false)
    const nameInputHandler = (e) => {
        const enteredName = e.target.value
        setNameInput(enteredName)
        if (enteredName.trim() !== '') {
            setIsNameValid(true)
        }
    }

    const nameInputBlurHandler = () => {
        setEnteredNameTouched(true)
        if (nameInput.trim() === '') {
            setIsNameValid(false)
        }
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        setEnteredNameTouched(true)
        if (nameInput.trim() === "") {
            setIsNameValid(false)
            return
        }
        setIsNameValid(true)
        setNameInput('')
    }

    const nameInputIsInvalid = !isNameValid && enteredNameTouched

    return <>
        <div className='bg-[#06070B] p-2 text-white font-semibold'>
            <form className='m-10 p-3 h-40 bg-[#18182A] rounded-3xl flex flex-col items-center justify-center' onSubmit={formSubmitHandler}>
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
                    {nameInputIsInvalid && <span className='absolute top-12 left-3 text-xs font-light'>Please enter name</span>}
                </div>
                <div className="">
                    <button className='rounded-md mt-10 p-2 w-[10rem] bg-[#1D97D9]'>Submit</button>
                </div>
            </form>

            <div className="">
                <p>{nameInput }</p>
            </div>
        </div>
    </>
}

export default Form