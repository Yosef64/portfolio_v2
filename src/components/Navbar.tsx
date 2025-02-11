import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  console.log("Navbar component rendered");
  console.log("isOpen state:", isOpen);

  return (
    <nav className="text-white px-6 md:px-[60px]  lg:px-[100px] py-4 flex justify-between items-center">
      <div className="font-sora text-2xl font-bold">
        Josi<span className="text-t-color">Alex</span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex font-inter space-x-10 text-lg text-nav-inactive">
        {["Home", "About", "Works", "Contact"].map((item) => (
          <NavLink
            key={item}
            to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
            className={({ isActive }) => {
              return isActive
                ? "text-white text-[16px] transition"
                : "hover:text-gray-400 text-[16px] transition";
            }}
          >
            {item}
          </NavLink>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div
        className="cursor-pointer md:hidden flex flex-col  justify-between h-[18px] w-[25px] text-white text-2xl"
        onClick={() => {
          console.log("Menu button clicked, toggling state");
          setIsOpen(!isOpen);
        }}
      >
        <span
          className={`block h-[1px] w-full bg-white transition-transform ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block h-[1px] w-full bg-white transition-opacity ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[1px] w-full bg-white transition-transform ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black z-40 text-inter flex flex-col items-center space-y-6 py-6 md:hidden">
          {["Home", "About", "Works", "Contact"].map((item) => (
            <NavLink
              key={item}
              to={item == "Home" ? "/" : `/${item.toLowerCase()}`}
              className={({ isActive }) => {
                return isActive
                  ? "text-white text-lg transition"
                  : "hover:text-gray-400 text-lg opacity-50 transition";
              }}
              onClick={() => {
                console.log(`${item} link clicked, closing menu`);
                setIsOpen(false);
              }}
            >
              {item}
            </NavLink>
          ))}
        </div>
      )}

      <button className="hidden md:block bg-second w-[128px] font-inter hover:bg-second text-white py-2 px-4 rounded-xl transition">
        Let’s talk
      </button>
    </nav>
  );
}
