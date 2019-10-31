import { useState } from "react";
import { initialStore } from "./store/initialStore";

export const useForm = () => {
	const [values, setValues] = useState(initialStore);

	const changeHandler = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	return [values, changeHandler];
};
