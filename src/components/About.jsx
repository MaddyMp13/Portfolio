import React from 'react'
import profileImage from "../assets/mandarProfile.jpg"

const About = () => {
    return (
        <section className="min-h-screen bg-white text-black flex items-center px-6 md:px-20 py-20">
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        About Me
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        I'm Mandar, a frontend developer passionate about building
                        modern, responsive and animated web applications.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        I work with React, Tailwind and animation libraries like GSAP
                        to create engaging digital experiences.
                    </p>
                </div>

                <div>
                    <img className='rounded-2xl' src={profileImage} alt="Profile Image" width={"350px"} />
                </div>

            </div>
        </section>
    )
}

export default About