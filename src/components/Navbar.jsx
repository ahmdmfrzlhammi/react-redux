import { useContext } from "react";
import { Link } from "react-router-dom";
import LoginContext from "../context/LoginContext";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  const { user, isLoggedIn, logout } = useContext(LoginContext);

  return (
    <div className="navbar bg-red-700 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pokemon">Pokemon</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-yellow-400">POKÈMON.UI</Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Homepage</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokèmon</Link>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </div>

      <div className="navbar-end">
        {isLoggedIn ? (
          <div>
            <span>{user.name} </span>
            <span>({user.NIM})</span>
            <button onClick={logout} className="btn btn-warning ml-6">Logout</button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-warning">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
