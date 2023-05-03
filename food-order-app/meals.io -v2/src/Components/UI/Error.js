import React from 'react'
import DOM from 'react-dom'
const ErrorUI = (props) => {
    return <div className='absolute z-[150] bg-[#F7F9FB] pt-40 w-full h-full flex flex-col items-center jusfify-center'>
        <i class="fa-regular fa-face-sad-tear text-[5rem]"></i>
        <p className='text-xl font-semibold'>Something went wrong</p>
    </div>
}
const Error = () => {
    return <>
        {DOM.createPortal(<ErrorUI />, document.getElementById('error'))}
    </>
}
export default Error