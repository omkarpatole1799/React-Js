import React from 'react'
import DOM from 'react-dom'

const LoadingBackdrop = () => {
    return <div className="fixed z-[100] w-full h-full bg-[#3432326d]"></div>
}

const LoadingUI = () => {
    return <div className='text-white absolute z-[110] h-10 w-10 flex items-center justify-center top-[15rem] left-[12rem] animate-spin'>
        <i class="fa-solid fa-spinner text-[3rem]"></i>
    </div>
}

const Loading = () => {
    return (
        <>
            {DOM.createPortal(<LoadingUI />, document.getElementById('loading'))}
            {DOM.createPortal(<LoadingBackdrop />, document.getElementById('loading-backdrop'))}
        </>
    )
}
export default Loading