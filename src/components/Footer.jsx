import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* ---------- Left Section ---------- */}
        <div className="text-center md:text-left">
          <h2 className="text-white text-lg font-bold">Semiconductor School</h2>
          <p className="text-gray-400 text-sm mt-1">
            Empowering innovation through semiconductor education.
          </p>
        </div>

        {/* ---------- Center Navigation Links ---------- */}
        <div className="flex gap-6 text-sm">
          <a href="/About" className="hover:text-white transition">
            About
          </a>
          <a href="/ChipCards" className="hover:text-white transition">
            Students
          </a>
          <a href="/Sections" className="hover:text-white transition">
            Teachers
          </a>
          <a href="#vision" className="hover:text-white transition">
            Vision
          </a>
          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* ---------- Right Section - Social Icons ---------- */}
        <div className="flex gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaTwitter size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaLinkedinIn size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* ---------- Divider Line ---------- */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Semiconductor School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
