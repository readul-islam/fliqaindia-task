import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.png";
import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black   px-2 text-white md:px-10 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn-ghost btn lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu rounded-box menu-compact mt-3 w-32 bg-base-100 p-2 text-black shadow"
            >
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>blog</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            <img src={Logo} className="w-24 md:w-48" alt="" />
          </Link>
          <div className=" ml-12 hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
              <li>
                <a>Home</a>
              </li>

              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Portfolio</a>
              </li>
              <li>
                <a>Community</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="navbar-end gap-2 text-white  md:gap-6 ">
          <Link to="/register">
            <PrimaryButton styles="bg-gradient-to-tr from-accent/100 to-accent/80  shadow-lg shadow-accent/40  px-2  py-1.5 md:px-6 md:py-2 rounded-full ">
              Sign UP
            </PrimaryButton>
          </Link>
          <Link to="/login" >
            <PrimaryButton styles="bg-gradient-to-tr from-accent/90 to-accent/80  shadow-lg shadow-accent/40 px-2 py-1.5 md:px-6 md:py-2 rounded-full ">
              Sign In
            </PrimaryButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
