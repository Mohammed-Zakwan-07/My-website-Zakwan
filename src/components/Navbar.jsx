import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-5 left-0 right-0 z-50 max-w-7xl mx-10 backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-full px-4 sm:px-8 md:px-10 py-2"
    >
      <div className="flex justify-between items-center">
        <div className="text-3xl text-[#e9980d] font-Monoton font-extralight flex items-center gap-1 cursor-pointer">
          <h1 className="transform rotate-[15deg] hover:rotate-0 transition-all duration-200">
            Z
          </h1>
          <h1 className="transform -rotate-[12deg] hover:rotate-0 transition-all duration-200">
            A
          </h1>
          <h1 className="transform rotate-[5deg] hover:rotate-0 transition-all duration-200">
            K
          </h1>
        </div>

        <div className="flex items-center space-x-5 text-white text-xl sm:text-2xl">
          <a
            href="https://github.com/Mohammed-Zakwan-07"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-300"
          >
            <i className="fab fa-github" />
          </a>
          <a
            href="mailto:zakwanmd16@gmail.com"
            aria-label="Email"
            className="hover:text-gray-300"
          >
            <i className="fas fa-envelope" />
          </a>
          <a
            href="https://www.instagram.com/mohammed__zakwan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-200"
          >
            <i className="fab fa-instagram" />
          </a>
          <a
            href="https://leetcode.com/u/Zakwan177/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode"
            className="hover:text-yellow-300"
          >
            <i className="fas fa-code" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-zakwan-8a61b4329/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-400"
          >
            <i className="fab fa-linkedin" />
          </a>
        </div>

        <nav className="hidden md:flex font-medium text-[#C9D1D9] ml-6">
          <ul className="flex space-x-6 font-extrabold">
            <li>
              <Link smooth to="#hero" className="hover:text-[#658ebd]">
                Home
              </Link>
            </li>
            <li>
              <Link smooth to="#about" className="hover:text-[#658ebd]">
                About
              </Link>
            </li>
            <li>
              <Link smooth to="#projects" className="hover:text-[#658ebd]">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
