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
        <li className="cursor-pointer hover:text-purple-400 transition">
          Home
        </li>
        <li className="cursor-pointer hover:text-purple-400 transition">
          About
        </li>
        <li
          className="cursor-pointer hover:text-purple-400 transition">
          Project
        </li>
        <li
          className="cursor-pointer hover:text-purple-400 transition ">
          Contats
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
