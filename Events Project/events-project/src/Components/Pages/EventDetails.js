import React from "react";
import { useParams } from "react-router-dom";
function EventDetails() {
	const params = useParams();
	return (
		<>
			<h3>Event name: {params.eventId}</h3>
			<h3>Event title: {params.title}</h3>
		</>
	);
}

export default EventDetails;
