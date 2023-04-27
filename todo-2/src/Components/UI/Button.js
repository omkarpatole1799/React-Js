import React from 'react'

const Button = (props) => {
    return <button onClick={props.onClick} className='border-2'>{props.children}</button>
}
export default Button