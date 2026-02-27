import React from "react";
// import heroImage from "../assets/27230.jpg"

// const Hero = () => {
//   return (
//     <section id="home" style={{ backgroundImage: `url(${heroImage})`, backgroundSize: "cover", backgroundPosition: "top " }}
//       className="flex flex-col h-screen px-6 text-white text-center bg-black justify-center items-center "
//     >
//       <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-7xl">
//         Crafting Modern <br /> Web Experiences
//       </h1>

//       <p className="max-w-xl mb-8 text-gray-400 text-lg"      >
//         I'm Mandar, a frontend developer building interactive and animated
//         digital products using React.
//       </p>

//       <button className="px-8 py-3 text-black font-medium bg-white rounded-full outline-0 transition duration-500 hover:bg-purple-500 hover:scale-110 hover:text-yellow-50">
//         View My Work
//       </button>
//     </section>
//   );
// };

// export default Hero;



import { useEffect, useRef, useState } from "react";
import bgImage from "../assets/Airbrush-image-extender.jpeg";
import torch from "../assets/torch.png";

const Hero = () => {
  const heroRef = useRef(null);
  const [opacity, setOpacity] = useState(0.6);
  const [startFlicker, setStartFlicker] = useState(false);

  // 👁️ Intersection Observer (runs once)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartFlicker(true);
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // 🔥 Flicker Effect
  useEffect(() => {
    if (!startFlicker) return;

    const flickerInterval = setInterval(() => {
      const randomOpacity = 0.3 + Math.random() * 0.6;
      setOpacity(randomOpacity);
    }, 70);

    const stopTimeout = setTimeout(() => {
      clearInterval(flickerInterval);
      setOpacity(0.6);
    }, 3000);

    return () => {
      clearInterval(flickerInterval);
      clearTimeout(stopTimeout);
    };
  }, [startFlicker]);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // objectFit: "cover",
        backgroundPosition: " center",
      }}
    >
      {/* 🌑 Dark Flicker Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-75"
        style={{ opacity }}
      />

      {/* ✨ Subtle Top Spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full 
                      bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_90%)]
                      pointer-events-none" />

      {/* 🎭 Content */}
      <div className="relative z-10 text-center px-4">
        {/* 🔥 Torch Image */}
        {/* <img className="absolute -left-60 bottom-0 -rotate-20" src={torch} alt="Torch" /> */}

        <h1 className="mb-6 text-4xl font-extrabold leading-tight md:text-7xl">
          Crafting Modern <br /> Web Experiences
        </h1>


        <p className="max-w-xl mx-auto mb-8 text-gray-400 text-lg">
          I'm Mandar, a frontend developer building interactive and animated
          digital products using React.
        </p>

        <button className="px-8 py-3 text-black font-medium bg-white rounded-full transition duration-500 hover:bg-purple-500 hover:scale-110 hover:text-yellow-50">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;