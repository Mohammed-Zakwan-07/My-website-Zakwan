import React from "react";
import About from "./About";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

export default function Navbar() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-5 left-0 right-0 z-50 backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-4xl mx-10"
      >
        <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
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
              <li>
                <Link smooth to="#contact" className="hover:text-[#658ebd]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>
    </>
  );
}
