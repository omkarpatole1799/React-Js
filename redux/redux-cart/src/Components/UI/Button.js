import React from 'react'
export const Button = (props) => {
    return <>
        <button onClick={props.onClick} className={`bg-black p-2 m-2 text-white font-semibold rounded-2xl ${props.className}`}>{props.children}</button>
    </>
}