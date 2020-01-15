import { useState } from "react";
import { getName } from "../../utils/utils";

export const formState = {
  title: "",
  login: "",
  clinic: "",
  date: "",
  doctor: "",
  specialization: "",
  comments: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  street: "",
  zipCode: 0
  // TODO: Should i put initial values here?
};

export const useForm = () => {
  const [values, setValues] = useState(formState);

  // console.log('values', values)
  const changeHandler = (e, value?: string) => {
    let name = e.target.name || getName(e.currentTarget.id);
    setValues({
      ...values,
      [name]: e.target.value || value
    });
  };

  return { values, changeHandler };
};
