import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../store/reducers";
import { fetchUserData } from "../store/reducers/userReducer";

export const Profile = () => {
  const user = useSelector((state: IRootState) => state.user);
  const dispatch = useDispatch();

  if (!user) {
    dispatch(fetchUserData("user1"));
    return <h1>No data</h1>;
  }

  return (
    <div>
      <ul>
        <li>First Name: {user.firstName}</li>
        <li>Last Name: {user.lastName}</li>
      </ul>
    </div>
  );
};
