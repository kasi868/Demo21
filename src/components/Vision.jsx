import React from "react";
import skyline from "../assets/blue-neon-light-city-background-600nw-2277661799.webp"; // placeholder vector image

export default function Vision() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ======== VISION SECTION ======== */}
      <div className="relative h-[100vh] flex flex-col items-center justify-center text-center px-6">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-200 via-purple-300 to-pink-600"></div>

        {/* Glowing Overlay */}
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25)_0%,transparent_70%)]"></div>

        {/* Animated Light Trails */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse delay-2000"></div>
        </div>

        {/* Tech Skyline Illustration */}
        <img
          src={skyline}
          alt="Tech skyline with circuits"
          className="absolute bottom-0 w-full opacity-40 mix-blend-screen"
        />

        {/* Main Text Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg leading-snug mb-8 tracking-tight">
            We envision a world where every mind has access to the tools and
            knowledge needed to <span className="text-yellow-300">advance semiconductors</span> and transform
            technology.
          </h2>

          <p className="text-lg md:text-2xl text-purple-100 font-medium mb-10 max-w-3xl mx-auto">
            Empowering innovation through inclusive, tech-driven education —
            shaping the engineers and inventors who define tomorrow.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <button className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold text-lg rounded-full hover:scale-105 hover:bg-yellow-300 transition-transform shadow-md">
              Learn More
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold text-lg rounded-full hover:bg-white hover:text-gray-900 transition-all">
              Join the Vision
            </button>
          </div>
        </div>
      </div>

      {/* ======== CTA BANNER ======== */}
      <div className="relative z-20 bg-gradient-to-r from-red-600 to-red-500 py-14 flex flex-col md:flex-row items-center justify-center gap-8 px-8 text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold text-black max-w-2xl leading-snug">
          Join the movement to revolutionize semiconductor education and fuel
          the future of global innovation.
        </h3>
        <div className="flex gap-4 flex-wrap justify-center">
          <button className="bg-black text-white px-8 py-3 text-lg rounded-full hover:bg-gray-900 transition-all">
            Get Started
          </button>
          <button className="bg-white text-black px-8 py-3 text-lg rounded-full hover:bg-gray-200 transition-all">
            Contact Us
          </button>
        </div>
      </div>

      {/* ======== BACKGROUND ORBS (for depth) ======== */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-400 opacity-30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 opacity-20 rounded-full blur-2xl -z-10"></div>
    </section>
  );
}