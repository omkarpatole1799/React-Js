import React from "react"

function Input(props) {
  return (
    <div>
      <label htmlFor="props.input.id"> {props.label}</label>
      <input {...props.input} />
    </div>
  )
}

export default Input
