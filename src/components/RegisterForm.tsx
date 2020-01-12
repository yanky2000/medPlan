import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { useForm } from "./useForm";
import { registerNewUser } from "../features/userReducer";
import { useHistory } from "react-router-dom";

export const RegisterForm: React.FC = () => {
  const { values, changeHandler } = useForm();
  const dispatch = useDispatch();

  const history = useHistory();
  console.log(2, history);

  const handleClick = e => {
    e.preventDefault();
    // TODO: Replace dump types for prod
    // dispatch(registerNewUser(values));
    history.push("/");
  };
  return (
    <form>
      <ul>
        <li>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            required
            name="firstName"
            id="firstName"
            onChange={changeHandler}
          />
        </li>

        <li>
          <label htmlFor="login">Login</label>
          <input
            type="text"
            required
            name="login"
            id="login"
            onChange={changeHandler}
          />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            required
            name="email"
            id="email"
            onChange={changeHandler}
          />
        </li>
        <li>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            required
            name="password"
            id="password"
            onChange={changeHandler}
          />
        </li>
      </ul>
      <Button>Cancel</Button>
      <Button
        type="submit"
        onClick={handleClick}
        variant="contained"
        color="primary"
      >
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
