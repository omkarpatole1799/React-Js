import React from 'react'
import DOM from 'react-dom'

function NavbarUI(props) {
    return <>
        <div className='flex justify-between items-center ps-7 pe-7 pt-2 pb-2 absolute fixed bottom-0 z-10 
                        bg-[#071427] w-full h-[5rem] text-white rounded-t-2xl text-3xl'>
            <i className="fa-solid fa-house"></i>
            <i className="fa-solid fa-list-check"></i>
            <button><i className="fa-solid fa-plus bg-[#C5EAA7] p-1 rounded-3xl text-[#121D17]"></i></button>
            <i className="fa-solid fa-user"></i>
        </div>
    </>
}

function Navbar() {
  return (
    DOM.createPortal(<NavbarUI />,document.getElementById('navbar'))
  )
}

export default Navbar