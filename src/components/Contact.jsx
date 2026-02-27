import React from 'react'
import workspaceBg from "../assets/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg";

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen bg-white text-black flex items-center px-6 md:px-20 py-20 bg-center bg-cover"
            style={{ backgroundImage: `url(${workspaceBg})`, }}>
            <div className="text-white max-w-3xl mx-auto w-full bg-gradient-to-br  backdrop-blur-sm border border-white/30 p-8 rounded-2xl shadow-2xl hover:-translate-y-2 hover:shadow-white/20 transition-all duration-500" >
                <h2 className=" text-4xl md:text-5xl font-bold mb-12 text-center">
                    Contact Me
                </h2>

                <form action="https://formspree.io/f/xbdawbwv" method='POST' className="grid gap-6" >
                    <input
                        type="text" name='name' required
                        placeholder="Your Name"
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <input
                        type="email" name='email' required
                        placeholder="Your Email"
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <textarea
                        rows="5" name='message'
                        placeholder="Your Message"
                        className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                    />

                    <button
                        type="submit"
                        className="bg-white/20 text-white py-3 rounded-lg hover:scale-105 transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div >
        </section >)
}

export default Contact