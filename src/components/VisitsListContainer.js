import React from "react";


export const VisitsListContainer = ({visits}) => {
    
    
    return(
		<div>
            {visits.map( visit => <div key={visit.title}>{visit.title}</div>)}
		</div>
	);
};
