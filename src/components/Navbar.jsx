import React from "react";

const Navbar = () => {
  return (
    <nav
      className="flex z-50 w-full px-8 py-5 text-white bg-black fixed top-0 justify-between items-center "
    >
      <h1 className="  text-2xl font-bold tracking-normal " >
        Mandar Patil
      </h1>
      <ul
        className=" hidden text-sm tracking-wider gap-8 uppercase md:flex "
      >
        <li >
          <a className="cursor-pointer hover:text-purple-400 transition" href="#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition">
          <a className="cursor-pointer hover:text-purple-400 transition" href="#about">About</a>
        </li>
        <li
          className="cursor-pointer hover:text-purple-400 transition">
          <a className="cursor-pointer hover:text-purple-400 transition" href="#projects">Project</a>
        </li>
        <li
          className="cursor-pointer hover:text-purple-400 transition ">
          <a className="cursor-pointer hover:text-purple-400 transition" href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
