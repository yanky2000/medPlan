import { useState } from 'react';

export const initialStore = {
  // title: '',
  // TODO: Should i put initial values here?
};

export const useForm = () => {
  const [values, setValues] = useState(initialStore);

  const changeHandler = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, changeHandler };
};


const visits = [];

const doctors = [];

const procedures = [];
