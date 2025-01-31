import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="text-white px-[100px] py-4 flex justify-between items-center ">
      <div className="font-sora text-2xl font-bold">Josi<span className="text-t-color">Alex</span></div>
      <div className="flex xs:hidden sm:flex font-inter space-x-10 text-lg text-nav-inactive">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white text-[16px] transition"
              : "hover:text-gray-400 transition text-[16px]"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white text-[16px] transition"
              : "hover:text-gray-400 text-[16px] transition"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            isActive
              ? "text-white text-[16px] transition"
              : "hover:text-gray-400 text-[16px] transition"
          }
        >
          Works
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white text-[16px] transition"
              : "hover:text-gray-400 text-[16px] transition"
          }
        >
          Contact
        </NavLink>
      </div>
      <button className="bg-second w-[128px] font-inter hover:bg-second text-white py-2 px-4 rounded-xl transition">
        Let’s talk
      </button>
    </nav>
  );
}
