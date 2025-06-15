import React from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="max-w-7xl fixed top-5 left-0 right-0 z-50 backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-4xl mx-10"
      >
        <div className=" mx-auto px-10 py-3 flex justify-between items-center">
          <div className="text-3xl text-[#e9980d] font-Monoton font-extralight  flex justify-center items-center hover:scale-102 transition-all duration-95 hover:cursor-pointer">
            <h1 className="rotate-20 hover:rotate-0 transition-all duration-75">
              Z
            </h1>
            <h1 className="-rotate-27 hover:rotate-0 transition-all duration-75">
              A
            </h1>
            <h1 className="rotate-8 hover:rotate-0 transition-all duration-75">
              K
            </h1>
          </div>
          <div className="flex justify-center space-x-6 text-white text-2xl">
            <a
              href="https://github.com/Mohammed-Zakwan-07"
              target="_blank"
              className="hover:text-gray-300"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a
              href="mailto:zakwanmd16@gmail.com"
              className="hover:text-gray-300"
            >
              <i className="fas fa-envelope" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/mohammed__zakwan/"
              target="_blank"
              className="hover:text-pink-200"
            >
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
            <a
              href="https://leetcode.com/u/Zakwan177/"
              target="_blank"
              className="hover:text-yellow-300"
            >
              <i className="fas fa-code" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-zakwan-8a61b4329/"
              target="_blank"
              className="hover:text-purple-500"
            >
              <i className="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </div>

          <nav className="hidden md:flex font-medium text-[#C9D1D9] ">
            <ul className="flex space-x-4 font-extrabold">
              <li>
                <Link smooth to="#" className="hover:text-[#658ebd] ">
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
    </>
  );
}
