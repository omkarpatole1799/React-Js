import React from 'react'

function Card(props) {
    return <>
        <div className={`border rounded-5 ${props.className}`}>{props.children}</div>
    </>
}
export default Card