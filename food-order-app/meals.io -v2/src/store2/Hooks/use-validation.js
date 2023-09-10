import React, {useState} from 'react'

const useValidation = (validateInput) => {
    const [inputValue, setInputValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const inputValid = validateInput(inputValue)
    const inputInvalid = !inputValid && isTouched

    const inputValueHandler = (e) => {
        setInputValue(e.target.value)
        setIsTouched(true)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setInputValue('')
        setIsTouched(false)
    }

    return {
        inputValueHandler,
        inputBlurHandler,
        reset, 
        inputValue,
        inputInvalid,
        inputValid,
    }

}
export default useValidation 