// import React from "react";
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
import bgImage from "../assets/27230.jpg";

const Hero = () => {
  const heroRef = useRef(null);
  const [opacity, setOpacity] = useState(0.6);
  const [startFlicker, setStartFlicker] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartFlicker(true);
          observer.disconnect(); // run only once
        }
      },
      { threshold: 0.6 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startFlicker) return;

    const flickerInterval = setInterval(() => {
      // Horror style unstable flicker
      const randomOpacity = 0.2 + Math.random() * 0.6;
      setOpacity(randomOpacity);
    }, 70);

    const stopTimeout = setTimeout(() => {
      clearInterval(flickerInterval);
      setOpacity(0.3); // stable darkness after flicker
    }, 6000);

    return () => {
      clearInterval(flickerInterval);
      clearTimeout(stopTimeout);
    };
  }, [startFlicker]);

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "top center",
      }}
    >
      {/* Dark Flicker Overlay */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-75"
        style={{ opacity }}
      />

      {/* Subtle top spotlight glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[40%] 
                      bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.2),transparent_70%)]
                      pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center">
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
      </div>
    </section>
  );
};

export default Hero;