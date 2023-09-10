import React from "react"

function Input(props) {
  return (
    <div
      className={`${"input_container"} ${
        props.isValid === false ? "invalid" : ""
      }`}
    >
      <label>{props.label}</label>
      <input
        value={props.value}
        type={props.type}
        onChange={props.onChange}
        onBlur={props.OnBlur}
      />
    </div>
  )
}

export default Input
