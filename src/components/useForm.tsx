import { useState } from 'react';

export const initialStore = {
  title: '',
  login: '',
  date: new Date(),
  location: '',
  doctor: '',
  // TODO: Should i put initial values here?
};

export const useForm = () => {
  const [values, setValues] = useState(initialStore);

  const changeHandler = (e, value?: string) => {
    let name = e.target.name || getName(e.currentTarget.id);
    function getName(string: string) {
      if (string.includes('location')) return 'location';
      else if (string.includes('doctor')) return 'doctor';
      else return '';
    }
    setValues({
      ...values,
      [name]: e.target.value || value,
    });
  };

  return { values, changeHandler };
};

