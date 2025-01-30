import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-white px-10 py-4 flex justify-between items-center ">
      <div className="text-2xl font-bold">GridX</div>
      <div className="flex xs:hidden sm:flex font-inter space-x-10 text-lg text-nav-inactive">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-gray-400 transition"
              : "hover:text-gray-400 transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-gray-400 transition"
              : "hover:text-gray-400 transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-gray-400 transition"
              : "hover:text-gray-400 transition"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-gray-400 transition"
              : "hover:text-gray-400 transition"
          }
        >
          Contact
        </NavLink>
      </div>
      <button className="bg-second w-[128px] hover:bg-second text-white py-2 px-4 rounded-xl transition">
        Let’s talk
      </button>
    </nav>
  );
}
