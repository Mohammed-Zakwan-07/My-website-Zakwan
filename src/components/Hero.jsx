import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <div class="h-60 w-2 bg-[#7D8590] rounded-b-full fixed right-15 "></div>
        <div class="top-56 right-12 h-8 w-8 fixed rounded-full bg-[#cdf600]/70 backdrop-blur-3xl shadow-red-50 hover:shadow-2xl transition-all duration-75"></div>

        <div class="h-40 w-2 bg-[#7D8590] rounded-b-full fixed right-35"></div>
        <div class="top-36 right-32 h-8 w-8 fixed rounded-full bg-[#cdf600]/70 backdrop-blur-3xl shadow-red-50 hover:shadow-2xl transition-all duration-75"></div>

        <div class="h-50 w-2 bg-[#7D8590] rounded-b-full fixed right-55"></div>
        <div class="top-46 right-52 h-8 w-8 fixed rounded-full bg-[#cdf600]/70 backdrop-blur-3xl shadow-red-50 hover:shadow-2xl transition-all duration-75"></div>

        <div class="h-70 w-2 bg-[#7D8590] rounded-b-full fixed right-75"></div>
        <div class="top-66 right-72 h-8 w-8 fixed rounded-full bg-[#cdf600]/70 backdrop-blur-3xl shadow-red-50 hover:shadow-2xl transition-all duration-75"></div>

        <div class="h-35 w-2 bg-[#7D8590] rounded-b-full fixed right-95"></div>
        <div class="top-31 right-92 h-8 w-8 fixed rounded-full bg-[#cdf600]/70 backdrop-blur-3xl shadow-red-50 hover:shadow-2xl transition-all duration-75"></div>
      </motion.div>

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
                <a href="#" className="hover:text-[#658ebd] ">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#658ebd]">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#658ebd]">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#658ebd]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </motion.header>
      <section className="min-h-screen flex items-center bg-[#0D1117] px-6 md:px-20">
        <div className=" text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-9xl md:text-6xl font-light text-[#F0F6FC] leading-tight font-Monoton"
          >
            Mohammed Zakwan
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="text-xl md:text-2xl text-[#658ebd] mt-4"
          >
            CS Student • Curious Mind • Forever Learning
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            className="text-[#7D8590] mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
          >
            Computer Science student based in Bengaluru, driven by curiosity and
            a passion for building, learning, and solving meaningful problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
            className="mt-8"
          >
            <a
              href="#projects"
              className="bg-[#e9980d] text-white px-6 py-3 rounded-md  hover:bg-[#658ebd] transition-all"
            >
              Check Out My Work
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Hero;
