import React from "react";
import useValidation from "../../store2/Hooks/use-validation";
import { Link } from "react-router-dom";
const CheckoutForm = (props) => {
  // first name validation
  const {
    inputValueHandler: firstInputHandler,
    inputBlurHandler: firstBlurHandler,
    reset: firstResetHandler,
    inputValid: firstValid,
    inputInvalid: firstInvalid,
    inputValue: firstValue,
  } = useValidation((value) => value.trim() !== "");

  // last name validation
  const {
    inputValueHandler: lastInputHandler,
    inputBlurHandler: lastBlurHandler,
    reset: lastResetHandler,
    inputValid: lastValid,
    inputInvalid: lastInvalid,
    inputValue: lastValue,
  } = useValidation((value) => value.trim() !== "");

  // street input validation
  const {
    inputValueHandler: streetInputHandler,
    inputBlurHandler: streetBlurHandler,
    reset: streetResetHandler,
    inputInvalid: streetInvalid,
    inputValid: streetValid,
    inputValue: streetValue,
  } = useValidation((value) => value.trim() !== "");

  // pincode input validation
  const {
    inputValueHandler: pinInputHandler,
    inputBlurHandler: pinBlurHandler,
    reset: pinResetHandler,
    inputInvalid: pinInvalid,
    inputValid: pinValid,
    inputValue: pinValue,
  } = useValidation((value) => value.trim().length === 6);

  return (
    <>
      <div className="">
        <div className="text-center">
          <h3 className="font-bold">Checkout</h3>
        </div>
        <form className="flex flex-col rounded-xl h-40 drop-shadow-xl font-semibold">
          <div className="relative flex items-center justify-center">
            <input
              className="border p-2 m-7"
              value={firstValue}
              onChange={firstInputHandler}
              onBlur={firstBlurHandler}
              type="text"
              id="name"
            />
            {firstInvalid && (
              <span className="absolute left-[6rem] top-[4.5rem] text-xs">
                First Name invalid
              </span>
            )}
            <label
              className="absolute top-3 left-[6rem] text-xs"
              htmlFor="name"
            >
              First
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="border border p-2 m-7"
              value={lastValue}
              onChange={lastInputHandler}
              onBlur={lastBlurHandler}
              type="text"
              id="last"
            />
            {lastInvalid && (
              <span className="absolute left-[6rem] top-[10.6rem] text-xs">
                Last name invalid
              </span>
            )}
            <label
              className="absolute top-[6.8rem] left-[6rem] text-xs"
              htmlFor="last"
            >
              Last
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="border border p-2 m-7"
              value={streetValue}
              onChange={streetInputHandler}
              onBlur={streetBlurHandler}
              type="text"
              id="street"
            />
            {streetInvalid && (
              <span className="absolute left-[6rem] top-[16.8rem] text-xs">
                Street input invalid
              </span>
            )}
            <label
              className="absolute top-[12.8rem] left-[6rem] text-xs"
              htmlFor="street"
            >
              Street
            </label>
          </div>
          <div className="flex items-center justify-center">
            <input
              className="border border p-2 m-7"
              value={pinValue}
              onChange={pinInputHandler}
              onBlur={pinBlurHandler}
              type="number"
              id="pincode"
            />
            {pinInvalid && (
              <span className="absolute left-[6rem] top-[23rem] text-xs">
                Pincode 6 digit only
              </span>
            )}
            <label
              className="absolute top-[18.9rem] left-[6rem] text-xs"
              htmlFor="pincode"
            >
              Pincode
            </label>
          </div>

          <div className="flex justify-center items-center">
            <Link to="/cart">
              <button
                onClick={props.onCancel}
                className="bg-[#111827] text-[#D1D7DC] p-3  m-2 rounded-3xl"
                type="button"
              >
                Cancel
              </button>
            </Link>
            <Link to="/order-placed">
              <button className="bg-[#F8FAFC] text-[#111827] p-3  m-2 rounded-3xl">
                Order
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default CheckoutForm;
