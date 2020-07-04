import React from "react";
import { Link, useHistory } from "react-router-dom";
import Cookies from 'js-cookie';

export default function Header({ title }) {
  const token = Cookies.get('token');
  const history = useHistory();

  return (
    <header className="bg-purple-800 text-white p-4 flex justify-between">
      <div className="flex">
        <p className="mx-2">
          <Link to="/">{title}</Link>
        </p>
        <p className="mx-2">
          <Link to="/users">Users</Link>
        </p>
        <p className="mx-2">
          <Link to="/about">About</Link>
        </p>
      </div>
      <div className="flex">
        <p className="mx-2">
          <Link to="/login">Login</Link>
        </p>
        <p className="mx-2">
          <Link to="/login">Logout</Link>
        </p>
      </div>

    </header>
  );
}
