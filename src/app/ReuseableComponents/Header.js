import Link from "next/link";
import React from "react";

const Header = () => {
    const Menubar = <>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/blog">Blog</Link></li>
    <li><Link href="/about">About us</Link></li>
    <li><Link href="/contact">Contact us</Link></li>
    </>
  return (
    <div className="border-b">
      <div className="navbar bg-base-100 w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
             {Menubar}
            </ul>
          </div>
          <Link className="text-2xl font-bold" href="/">Blog<span className="text-yellow-500">Platform</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {Menubar}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
