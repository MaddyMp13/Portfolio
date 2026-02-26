import React from "react";
import heroImage from "../assets/27230.jpg"

const Hero = () => {
  return (
    <section id="home" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "top " }}
      className="flex flex-col h-screen px-6 text-white text-center bg-black justify-center items-center "
    >
      <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-7xl">
        Crafting Modern <br /> Web Experiences
      </h1>

      <p className="max-w-xl mb-8 text-gray-400 text-lg"      >
        I'm Mandar, a frontend developer building interactive and animated
        digital products using React.
      </p>

      <button className="px-8 py-3 text-black font-medium bg-white rounded-full outline-0 transition duration-500 hover:bg-purple-500 hover:scale-110 hover:text-yellow-50">
        View My Work
      </button>
    </section>
  );
};

export default Hero;
