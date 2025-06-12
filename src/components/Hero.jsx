import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
    <header className="fixed top-5 left-0 right-0 z-50 backdrop-blur-md bg-[#0D1117]/60 border border-[#0b6df8] shadow-2xl rounded-4xl mx-10">
      <div className="max-w-7xl mx-auto px-10 py-3 flex justify-between items-center">
        <h1 className="text-3xl text-[#e9980d] font-Monoton font-extralight">Zakwan</h1>
        <nav className="hidden md:flex font-medium text-[#C9D1D9] ">
          <ul className="flex space-x-4 font-extrabold">
            <li><a href="#" className="hover:text-blue-400 ">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <section className="min-h-screen flex items-center bg-[#0D1117] px-6 md:px-20">      
      <div className=" text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          CS Student • Web Dev Enthusiast • Forever Learning
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="text-[#7D8590] mt-6 text-base md:text-lg leading-relaxed max-w-2xl"
        >
          I'm a BCA student based in Bengaluru, building a strong foundation in web development with React and Tailwind. Currently focused on clean UI, solid code, and real-world learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
          className="mt-8"
        >
          <a
            href="#projects"
            className="bg-[#658ebd] text-white px-6 py-3 rounded-md font-medium hover:bg-[#31445a] transition"
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
