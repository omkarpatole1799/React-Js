import React, { useState } from "react"

const Navbar = (props) => {
	let [open, setOpen] = useState(false)

	const navOpenHandler = () => {
		if (props.showCart) {
			setOpen(!open)
		}
		setOpen(!open)
	}
	return (
		<>
			<nav className="bg-[#FFFFF] shadow-inner h-auto p-3">
				<div className="md:flex justify-between ms-5 me-5 items-center">
					<div>
						<h4 className="font-bold text-2xl">meals.io</h4>
					</div>
					<button onClick={navOpenHandler} className="text-2xl absolute right-8 top-3 cursor-pointer md:hidden click">
						<i className={`${!open ? "fa-solid fa-bars" : "fa-solid fa-xmark"}`}></i>
					</button>

					<ul className={`absolute md:static right-0 top-14 ${!open ? "translate-x-full" : "translate-x-0"} flex flex-col bg-white z-20 md:z-auto md:bg-inherit w-full h-auto p-3 md:flex-row transition-all duration-400 ease-in-out`}>
						<li className="md:ps-2 ms-5 mb-2 w-full">
							<a>Home</a>
						</li>
						<li className="md:ps-2 ms-5 mb-2">
							<a>About</a>
						</li>
						<li className="md:ps-2 ms-5 mb-2">
							<a>Order</a>
						</li>
						<li className="md:ps-2 ms-5 mb-2">
							<a>Contact</a>
						</li>
						<button onClick={props.onClick} className="bg-[#111827] text-[#D1D7DC] ps-3 pe-3 pt-2 pb-2 rounded-3xl">
							Open Cart
						</button>
					</ul>
				</div>
			</nav>
		</>
	)
}

export default Navbar
