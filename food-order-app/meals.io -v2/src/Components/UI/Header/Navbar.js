import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = (props) => {
	const [open, setOpen] = useState(false);

	const navOpenHandler = () => {
		setOpen(!open);
	};

	const navBarItems = [
		{ title: "Home", link: "/" },
		{ title: "About", link: "/about" },
		{ title: "Meals", link: "/meals" },
		{ title: "Open Cart", link: "/cart" },
	];

	const navCloseHandler = () => {
		setOpen(false);
	};

	document.addEventListener("mousedown", navCloseHandler);
	
	return (
		<>
			<nav className="bg-[#FFFFF] shadow-inner h-auto p-3">
				<div className="md:flex justify-between ms-5 me-5 items-center">
					<div className="flex justify-between ">
						<div>
							<h4 className="font-bold text-2xl">meals.io</h4>
						</div>

						<div>
							<NavLink to="/cart">
								<button
									onClick={props.onClick}
									className="bg-[#111827] text-[#D1D7DC] ps-3 pe-3 pt-2 pb-2 rounded-3xl"
								>
									<i className="fa-solid fa-cart-shopping"></i>
								</button>
							</NavLink>
						</div>

						<div>
							<button
								onClick={navOpenHandler}
								className="text-2xl absolute right-8 top-3 cursor-pointer md:hidden click"
							>
								<i
									className={`${!open ? "fa-solid fa-bars" : "fa-solid fa-xmark"
										}`}
								></i>
							</button>
						</div>
					</div>

					<ul
						className={`absolute md:static right-0 top-14 ${!open ? "translate-x-full" : "translate-x-0"
							} flex flex-col bg-white z-20 md:z-auto md:bg-inherit w-full h-auto p-3 md:flex-row transition-all duration-400 ease-in-out`}
					>
						{navBarItems.map((el) => {
							return (
								<>
									<li className="md:ps-2 ms-5 mb-2">
										<NavLink to={el.link}>{el.title}</NavLink>
									</li>
								</>
							);
						})}
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
