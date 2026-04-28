import React from 'react'
import profileImage from "../assets/profile.png"
import backImg from '../assets/aboutBackground.jpg'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const sectionRef = useRef();

    useEffect(() => {
        const ctx = gsap.context(() => {

            gsap.fromTo(
                ".text-cont",
                {
                    x: -300,
                    y: -300,
                    opacity: 0
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                    }
                }
            );

            gsap.fromTo(
                ".prof-img",
                {
                    x: 300,
                    y: -300,
                    opacity: 0
                },
                {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 50%",
                    }
                }
            );

        }, sectionRef);

        return () => ctx.revert(); // 🔥 cleanup
    }, []);

    return (
        <section id="about" ref={sectionRef}
            className="min-h-screen bg-black text-white flex items-center px-6 md:px-20 py-20 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div className='text-cont' >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About Me
                    </h2>
                    <p className="text-gray-400 leading-relaxed mb-4">
                        I'm Mandar, a frontend developer passionate about building
                        modern, responsive and animated web applications.
                    </p>
                    <p className="text-gray-400 leading-relaxed">
                        I work with React, Tailwind and animation libraries like GSAP
                        to create engaging digital experiences.
                    </p>
                </div>

                <div className='prof-img'>
                    <img className='rounded-2xl' src={profileImage} alt="Profile Image" width={"350px"} />
                </div>

            </div>
        </section>
    )
}

export default About