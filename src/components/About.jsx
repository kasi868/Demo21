import React from "react";
import img from "../assets/chip1.jpg";

export default function About() {
  return (
    <section className="relative w-full py-24 px-6 md:px-16 flex justify-center overflow-hidden">
      {/* Gradient Background */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-50"></div> */}
        

      {/* Decorative Blur Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-purple-300 opacity-30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 opacity-40 rounded-full blur-3xl"></div>
        
      <div className="relative max-w-6xl flex flex-col md:flex-row items-center gap-12">
        {/* Left Side - Illustration */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            <div className="absolute -inset-2 bg-gradient-to-tr from-purple-500 via-pink-400 to-yellow-300 rounded-2xl blur opacity-40"></div>
            <img
              src={img}
              alt="Chip Cross-Section Illustration"
              className="relative rounded-2xl shadow-2xl w-full max-w-md object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-6 leading-tight">
            About Semiconductor School
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            At <span className="font-semibold text-purple-800">Semiconductor School</span>, 
            we’re redefining engineering education for the modern era. Our 
            programs bridge the gap between advanced semiconductor theory and 
            real-world application — giving students the tools to innovate 
            across materials, devices, and intelligent systems.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            With a strong emphasis on hands-on learning, interdisciplinary 
            collaboration, and future-ready skills, we prepare the next 
            generation of engineers to lead breakthroughs in chip design and 
            manufacturing.
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-lg hover:bg-purple-800 hover:scale-105 transition-all shadow-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
}
