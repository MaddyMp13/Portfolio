import React from "react";
import { useState } from "react";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <nav
      className="z-50 w-full px-8 py-5 text-white fixed top-0 justify-between items-center 
      backdrop-blur-sm p-8 shadow-2xl "
    >
      <div className="flex justify-between items-center">

        <h1 className="  text-2xl font-bold tracking-normal " >
          Mandar Patil
        </h1>

        {/* Desktop Menu */}

        <ul className=" hidden text-sm tracking-wider gap-8 uppercase md:flex "      >
          <li >          <a className="cursor-pointer hover:text-purple-400 transition" href="#hero">Home</a>        </li>
          <li className="cursor-pointer hover:text-purple-400 transition">          <a className="cursor-pointer hover:text-purple-400 transition" href="#about">About</a>        </li>
          <li className="cursor-pointer hover:text-purple-400 transition">          <a className="cursor-pointer hover:text-purple-400 transition" href="#projects">Project</a>        </li>
          <li className="cursor-pointer hover:text-purple-400 transition ">          <a className="cursor-pointer hover:text-purple-400 transition" href="#contact">Contact</a>        </li>
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
      </div>


      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden mt-6 flex flex-col gap-6 text-center text-lg ">
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
