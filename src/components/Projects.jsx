import React from "react";
import bgImage from "../assets/cool-motorcycle-presentation-indoors.jpg";

const Projects = () => {
    const projectData = [
        {
            title: "Lead Management Dashboard",
            description:
                "A React-based dashboard with authentication and dynamic lead filtering.",
            tech: ["React", "Tailwind", "API"],
        },
        {
            title: "Animated Portfolio",
            description:
                "A modern portfolio website with smooth animations using GSAP.",
            tech: ["React", "GSAP", "Vite"],
        },
        {
            title: "Industrial Marketing POC",
            description:
                "Proof of concept showcasing content partnership and campaign tracking.",
            tech: ["HTML", "CSS", "JavaScript"],
        },

    ];

    return (
        <section
            id="projects"
            className="relative min-h-screen text-white px-6 md:px-20 py-20 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute  inset-0  ">
                <img className="w-full h-full object-cover" src={bgImage} alt="Background" style={{ backgroundSize: "cover", backgroundPosition: "center" }} />
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            <div className="max-w-6xl  mx-auto">
                <h2 className="text-4xl md:text-5xl  font-bold mb-16 text-center">
                    My Projects
                </h2>

                <div className="grid lg:grid-cols-3 md:grid-cols-1 gap-10">
                    {projectData.map((project, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-white/0 to-white/4 backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-2xl hover:-translate-y-2 hover:shadow-white/20 transition-all duration-500"
                        >
                            <h3 className="text-2xl font-semibold mb-4">
                                {project.title}
                            </h3>

                            <p className="text-gray-200 text-sm mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((item, i) => (
                                    <span
                                        key={i}
                                        className="text-xs bg-white/25 px-3 py-1 rounded-full backdrop-blur-md border border-white/20"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 