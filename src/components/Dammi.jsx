import React from "react";

const Dammi = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* ---------- Left Logo Section ---------- */}
        <div className="flex items-center gap-3">
          {/* Yellow square logo */}
          <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center rounded-md">
            <span className="text-white font-bold text-lg">$</span>
          </div>

          {/* Logo Text */}
          <div>
            <h1 className="font-bold text-gray-900 text-sm leading-tight">
              SEMICONDUCTOR
            </h1>
            <h2 className="font-bold text-gray-900 text-sm leading-tight">
              SCHOOL
            </h2>
          </div>
        </div>

        {/* ---------- Center Navigation Links ---------- */}
        <nav className="hidden md:flex gap-8 text-gray-800 font-medium">
          <a href="/About" className="hover:text-black transition">
            About
          </a>
          <a href="/ChipCards" className="hover:text-black transition">
            Students
          </a>
          <a href="/Sections" className="hover:text-black transition">
            Teachers
          </a>
          <a href="#vision" className="hover:text-black transition">
            Vision
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </nav>

        {/* ---------- Right CTA Button (Contact Us) ---------- */}
        <div className="hidden md:block">
          <a
            href="tel:+1234567890"
            className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:bg-red-700 hover:scale-105 transition-transform duration-200"
          >
            Contact Us
          </a>
        </div>

        {/* ---------- Mobile Menu Icon ---------- */}
        <button className="md:hidden text-gray-800 hover:text-black focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Dammi;
