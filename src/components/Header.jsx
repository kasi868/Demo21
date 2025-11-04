import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-50 to-white flex flex-col items-center px-6 md:px-16">
      {/* Navbar */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-purple-700">S</div>
          <span className="font-semibold text-gray-700">Semiconductor School</span>
        </div>
        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#" className="hover:text-purple-700">About</a>
          <a href="#" className="hover:text-purple-700">Explore</a>
          <a href="#" className="hover:text-purple-700">Process</a>
          <a href="#" className="hover:text-purple-700">Expertise</a>
          <a href="#" className="hover:text-purple-700">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl py-12">
        {/* Left Side */}
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight">
            Empowering the <br />
            Next Generation of <br />
            <span className="text-purple-800">CHIP ENGINEERS</span>
          </h1>
          <p className="text-gray-600 mt-4 text-lg">
            Empowering minds to engineer breakthroughs across materials,
            devices, and intelligent design.
          </p>

          <div className="flex gap-4 mt-8">
            <Button className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg text-lg">
              Get Started
            </Button>
            <Button className="bg-yellow-400 text-gray-800 hover:bg-yellow-500 px-6 py-3 rounded-lg text-lg">
              Learn More
            </Button>
          </div>

          <div className="flex gap-8 mt-10 text-gray-700">
            <div>
              <p className="text-2xl font-bold text-purple-900">10k+</p>
              <p className="text-sm">Students and professionals</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-purple-900">5+</p>
              <p className="text-sm">Years in chip education excellence</p>
            </div>
          </div>
        </div>

        {/* Right Side (Chip Image) */}
        <div className="relative mt-10 md:mt-0">
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-gradient-to-tr from-purple-400 to-yellow-200 rounded-full blur-3xl opacity-40"></div>
          <img
            src="/chip-wafer.png"
            alt="Semiconductor wafer"
            className="relative z-10 w-80 md:w-[420px] rounded-full shadow-lg"
          />
        </div>
      </section>
    </main>
  );
}
