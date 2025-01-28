import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">
      <div className="text-2xl font-bold">GridX</div>
      <div className="flex space-x-10 text-lg text-nav-inactive">
        <a href="#home" className="hover:text-gray-400 transition">
          Home
        </a>
        <a href="#about" className="hover:text-gray-400 transition">
          About
        </a>
        <a href="#works" className="hover:text-gray-400 transition">
          Works
        </a>
        <a href="#contact" className="hover:text-gray-400 transition ">
          Contact
        </a>
      </div>
      <button className="bg-second w-[128px] hover:bg-second text-white py-2 px-4 rounded-xl transition">
        Let’s talk
      </button>
    </nav>
  );
}
