import { useState } from 'react'
const useInput = (validateValue) => {
    
    const [enterdValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const enteredValueValid = validateValue(enterdValue)
    const enterdValueInValid = !enteredValueValid && isTouched

    const valueChangeHandler = (e) => {
        setEnteredValue(e.target.value)
    }
    const valueBlurHandler = () => {
        setIsTouched(true)
    }
    const reset = () => {
        setEnteredValue('')
        setIsTouched(false)
    }

    return {
        value: enterdValue,
        isTouched,
        enteredValueValid,
        enterdValueInValid,
        valueChangeHandler,
        valueBlurHandler,
        reset,
    }
}
export default useInput