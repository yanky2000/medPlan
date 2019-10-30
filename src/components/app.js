import React from "react";
import { visits } from "../../fixtures";
import { VisitsListContainer } from "./VisitsListContainer";


export const App = () => {
	return (
		<>
			<VisitsListContainer visits={visits}/>
		</>
	);
};
