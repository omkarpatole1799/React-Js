import { NavLink } from "react-router-dom";

const Navbar = (props) => {
	return (
		<>
			<ul className="flex justify-center bg-blue-600 text-white">
				<li className="p-2">
					<NavLink to='/'>Home</NavLink>
				</li>
				<li className="p-2">
					<NavLink to='/events'>Events</NavLink>
				</li>
			</ul>
		</>
	);
};

export default Navbar;
