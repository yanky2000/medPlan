import React from "react";
import { visits } from "../../fixtures";
import { VisitsListContainer } from "./VisitsListContainer";
import { NewEventForm } from "./NewVisitForm";


export const App = () => {
	return (
		<>
			<VisitsListContainer visits={visits}/>
			<NewEventForm></NewEventForm>
		</>
	);
};
