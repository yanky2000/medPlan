import React from "react";

export const VisitsListContainer = ({ visits }) => {
	// TODO: split by current date
	const upComingVisits = () => {
		return visits.map(visit => {
			if (!visit.requirements) {
				return <div key={visit.id}>{visit.title}</div>;
			}
		});
	};

	const lastVisits = () => {
		return visits.map(visit => {
			if (visit.requirements) {
				return <div key={visit.id}>{visit.title}</div>;
			}
		});
	};

	return <div> 
		<h1> Upcoming Visits</h1>
		{upComingVisits()}
		<h2>
			Last Visits
		</h2>
		{lastVisits() ? lastVisits() : 'no visits so far'}
		</div>;
};
