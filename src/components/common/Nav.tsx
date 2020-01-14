import React from "react";
import { Link } from "react-router-dom";

export const NavList: React.FC = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/newEvent">Add new Event</Link>
      </li>
    </ul>
  );
};
