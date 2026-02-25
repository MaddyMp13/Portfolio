import React from 'react'

const Projects = () => {
    return (
        <section className="min-h-screen bg-black text-white px-6 md:px-20 py-20">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    My Projects
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-gray-900 py-6 px-6 rounded-2xl hover:scale-105 transition duration-300 shadow-md shadow-cyan-400/80">
                        <h3 className="text-xl font-semibold mb-4">Project One</h3>
                        <p className="text-gray-400 text-sm">
                            A modern web application built using React and Tailwind.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-md shadow-cyan-400/80">
                        <h3 className="text-xl font-semibold mb-4">Project Two</h3>
                        <p className="text-gray-400 text-sm">
                            An animated UI experiment powered by GSAP.
                        </p>
                    </div>

                    <div className="bg-gray-900 p-6 rounded-2xl hover:scale-105 transition duration-300 shadow-md shadow-cyan-400/80">
                        <h3 className="text-xl font-semibold mb-4">Project Three</h3>
                        <p className="text-gray-400 text-sm">
                            A responsive dashboard with interactive charts.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Projects