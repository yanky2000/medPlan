import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useForm } from './useForm';
import { registerNewUser  } from '../features/userReducer';

export const RegisterForm: React.FC = () => {
  const { values, changeHandler } = useForm();
  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(registerNewUser(values));
  };
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="login">Login</label>
          <input type="text" required name="login" id="login" onChange={changeHandler} />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input type="email" required name="email" id="email" onChange={changeHandler}/>
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input type="password" required name="password" id="password" onChange={changeHandler}/>
        </li>
      </ul>
      <Button>Cancel</Button>
      <Button type="submit" variant="contained" color="primary">
        Register
      </Button>
    </form>
    //   userId: IUid;
    //   login: string;
    //   password: IPassword;
    //   userData?: any;
    //   avatar?: any;
  );
};
