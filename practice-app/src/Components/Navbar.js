import React, { useState } from 'react'

function Navbar() {
    const [cartOpen, setCartOpen] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    return (
        <>
            <header aria-label="Site Header" className="border-b border-gray-100 bg-blue-50">
                <div className="flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
                    <div className="flex items-center gap-4">
                        <button type="button" className="md:hidden p-2" onClick={() => setNavOpen(!navOpen)}>
                            <svg className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor" >
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                        <h4 className='text-2xl md:text-lg md:p-3 font-semibold'>air bnb</h4>
                    </div>

                    <nav className={`absolute md:static md:translate-y-0 left-0 ${!navOpen ? 'translate-y-[9rem]' : '-translate-y-full'} 
                                    flex md:flex-row flex-col w-full p-3 bg-blue-100 md:bg-blue-50 md:transition-none transition-all duration-500 ease-in`}>
                        <a className='p-2'>
                            Hébergements
                        </a>

                        <a className='p-2'>
                            Postez votre annonce
                        </a>

                        <a className='p-2'>
                            Qui sommes-nous ?
                        </a>

                        <a className='p-2'>
                            Panel admin
                        </a>

                        <a className='p-2'>
                            Panel Hébergeur
                        </a>
                    </nav>

                    <div className="flex items-center">
                        <div className="flex items-center border-x border-gray-100">
                            {/* <Cart open={cartOpen} setOpen={setCartOpen} /> */}
                            <span className="border-e border-e-gray-100">
                                <button
                                    onClick={() => setCartOpen(!cartOpen)}
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>

                                    <span className="sr-only">Cart</span>
                                </button>
                            </span>

                            <span className="border-e border-e-gray-100">
                                <a
                                    to="/user/panel"
                                    className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                                >
                                    <svg
                                        className="h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                        />
                                    </svg>

                                    <span className="sr-only"> Account </span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar