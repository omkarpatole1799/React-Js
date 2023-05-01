import React from 'react'
import useInput from '../Hooks/use-input'
const Form = () => {

    const {
        value: nameInputValue,
        enteredValueValid: nameIsValid,
        enterdValueInValid: nameIsInValid,
        valueChangeHandler: nameInputHandler,
        valueBlurHandler: nameInputBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const {
        value: emailInputValue,
        enteredValueValid: emailIsValid,
        enterdValueInValid: emailIsInValid,
        valueChangeHandler: emailChangeHandler,
        valueBlurHandler: emailBlurHandler,
        reset: resetEmailInput
    } = useInput(value => value.trim().includes('@'))

    let formIsValid = false
    if (nameIsValid && emailIsValid) {
        formIsValid = true
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        if (!nameIsValid && !emailIsValid) {
            return
        }
        resetNameInput()
        resetEmailInput()
    }
    return <>
        <div className='bg-[#06070B] p-2 text-white font-semibold'>
            <form className='m-10 p-3 h-56 bg-[#18182A] rounded-3xl flex flex-col items-center justify-center' onSubmit={formSubmitHandler}>
                <div className="relative flex">
                    <input value={nameInputValue}
                        className='bg-[#10101E] p-[0.5rem] rounded-2xl w-full peer'
                        onChange={nameInputHandler}
                        onBlur={nameInputBlurHandler}
                        type="text"
                        id="nameInput" />
                    <label htmlFor="nameInput"
                        className='absolute left-3 top-2 peer-focus:top-[-1.2rem] peer-focus:text-xs 
                                    transition-all duration-400 ease-in'>Name</label>
                    {nameIsInValid && <span className='absolute top-12 left-3 text-xs font-light'>Please enter name</span>}
                </div>

                <div className="relative flex">
                    <input value={emailInputValue}
                        className='bg-[#10101E] mt-10 p-[0.5rem] rounded-2xl w-full peer'
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                        type="text"
                        id="emailInput" />
                    <label htmlFor="emailInput"
                        className='absolute left-3 top-[3rem] peer-focus:top-8 peer-focus:text-xs peer-focus:font-light 
                                   peer-focus:bg-black transition-all duration-400 ease-in'>Email</label>
                    {emailIsInValid && <span className='absolute top-[5.5rem] left-3 text-xs font-light'>Please Enter Email</span>}
                </div>

                <div className="">
                    <button className='rounded-md mt-10 p-2 w-[10rem] bg-[#1D97D9]' type='submit' disabled={!formIsValid}>Submit</button>
                </div>
            </form>

            <div className="">
                <p>{nameInputValue}</p>
                <p>{emailInputValue}</p>
            </div>
        </div>
    </>
}

export default Form