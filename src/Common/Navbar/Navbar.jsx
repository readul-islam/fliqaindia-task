import React from "react";
import Logo from "../../Assets/Logo.png";
import PrimaryButton from "../PrimaryButton";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-black   text-white px-2 md:px-10 ">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu text-black menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-32"
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
          <img src={Logo} className="md:w-48 w-24" alt="" />

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

        <div className="navbar-end gap-2 md:gap-6  text-white ">
          <PrimaryButton styles="bg-gradient-to-tr from-accent/100 to-accent/80  shadow-lg shadow-accent/40  px-2  py-1.5 md:px-6 md:py-2 rounded-full ">
            Sign UP
          </PrimaryButton>
          <PrimaryButton styles="bg-gradient-to-tr from-accent/90 to-accent/80  shadow-lg shadow-accent/40 px-2 py-1.5 md:px-6 md:py-2 rounded-full ">
            Sign In
          </PrimaryButton>
        </div>
      </div>
    </>
  );
};

export default Navbar;
