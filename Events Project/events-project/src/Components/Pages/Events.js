import React from "react";
import { Link } from "react-router-dom";
const DUMMY_DATA = [
	{
		id: "e1",
		title: "event 1",
	},
	{
		id: "e2",
		title: "event 2",
	},
];

function Events() {
	return (
		<>
			<ul>
				{DUMMY_DATA.map((event) => {
					return (
						<Link
							to={event.id}
							key={event.id}>
							<li>{event.title}</li>
						</Link>
					);
				})}
			</ul>
		</>
	);
}

export default Events;
