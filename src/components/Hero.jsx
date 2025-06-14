import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
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
