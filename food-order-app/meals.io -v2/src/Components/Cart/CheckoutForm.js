import React from 'react'
import useValidation from '../../store2/Hooks/use-validation'
const CheckoutForm = (props) => {

    // first name validation
    const {
        inputValueHandler: firstInputHandler,
        inputBlurHandler: firstBlurHandler,
        reset: firstResetHandler,
        inputValid: firstValid,
        inputInvalid: firstInvalid,
        inputValue: firstValue,
    } = useValidation(value => value.trim() !== '')

    // last name validation
    const {
        inputValueHandler: lastInputHandler,
        inputBlurHandler: lastBlurHandler,
        reset: lastResetHandler,
        inputValid: lastValid,
        inputInvalid: lastInvalid,
        inputValue: lastValue
    } = useValidation(value => value.trim() !== '')

    // street input validation
    const {
        inputValueHandler: streetInputHandler,
        inputBlurHandler: streetBlurHandler,
        reset: streetResetHandler,
        inputInvalid: streetInvalid,
        inputValid: streetValid,
        inputValue: streetValue,
    } = useValidation(value => value.trim() !== '')

    // pincode input validation
    const {
        inputValueHandler: pinInputHandler,
        inputBlurHandler: pinBlurHandler,
        reset: pinResetHandler,
        inputInvalid: pinInvalid,
        inputValid: pinValid,
        inputValue: pinValue
    } = useValidation(value => (value.trim().length === 6))

    // checkout form submit handler
    const checkoutFormSubmitHandler = (e) => {
        e.preventDefault()

        // check form validity
        const formValid = firstValue && lastValue && streetValue && pinValue
        if (!formValid) {
            return
        }

        // reset the values
        firstResetHandler()
        lastResetHandler()
        streetResetHandler()
        pinResetHandler()

        // on user confirm submit the checkout form with user data to cart
        props.onConfirm({
            firstName: firstValue,
            lastName: lastValue,
            street: streetValue,
            pinCode: pinValue
        })
    }
    const checkoutFormClasses = `absolute bg-[#F8FAFC] z-[30] left-0 right-0 top-0 h-full w-full ${props.showCart ? "translate-x-full" : "translate-x-0"} transition-all duration-400 ease-in`

    return <>
        <div className={checkoutFormClasses}>
            <div>
                <div className="pt-3 ps-4 flex justify-between items-center">
                    <button onClick={props.onCancel} className="ms-3">
                        <i className="fa-solid fa-chevron-left"></i>
                    </button>
                    <div>
                        <h2 className="font-semibold text-xl">Shopping Bag</h2>
                    </div>
                    <div className="me-3 ">
                        <p className="absolute right-4 z-10 top-3 bg-[#111827] text-[#D1D7DC] rounded-2xl ps-1 pe-1 text-xs">
                            4
                        </p>
                        <button className=" p-2 rounded-2xl bg-[#F8FAFC] drop-shadow-xl">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>
                </div>
            </div>

            <form className='flex flex-col rounded-xl h-40  drop-shadow-xl' onSubmit={checkoutFormSubmitHandler}>
                <div>
                    <input
                        className='border'
                        value={firstValue}
                        onChange={firstInputHandler}
                        onBlur={firstBlurHandler}
                        type="text" id='name'
                    />
                    {firstInvalid && <span>First Name invalid</span>}
                    <label htmlFor="name">First Name</label>
                </div>
                <div>
                    <input
                        className='border'
                        value={lastValue}
                        onChange={lastInputHandler}
                        onBlur={lastBlurHandler}
                        type="text" id='last'
                    />
                    {lastInvalid && <span>Last name invalid</span>}
                    <label htmlFor="last">Last Name</label>
                </div>
                <div>
                    <input
                        className='border'
                        value={streetValue}
                        onChange={streetInputHandler}
                        onBlur={streetBlurHandler}
                        type="text" id='street'
                    />
                    {streetInvalid && <span>Street input invalid</span>}
                    <label htmlFor="street">Street</label>
                </div>
                <div>
                    <input
                        className='border'
                        value={pinValue}
                        onChange={pinInputHandler}
                        onBlur={pinBlurHandler}
                        type="number" id='pincode'
                    />
                    {pinInvalid && <span>Pincode 6 digit only</span>}
                    <label htmlFor="pincode">Pincode</label>
                </div>
                <button onClick={props.onCancel} className='border bg-blue-200 mr-2' type='button'>Cancel</button>
                <button className='border bg-blue-200' >Order</button>
            </form>
        </div>

    </>
}

export default CheckoutForm 